import {
// 3D
MxCAD3DObject,
Mx3dShapeWire,
Mx3dGeColor,
Mx3dSymbolText,
Mx3dShapeEdge,
Mx3dGePoint,
Mx3dGeomCircle,
Mx3dShapeDownCast,
Mx3dWireTool,
MdGe,
Mx3dGeCSYSR,
Mx3dGeDir,
Mx3dUtils,
Mx3dMkFace,
Mx3dMkPrism,
Mx3dGeVec,
Mx3dAlgoFillet,
Mx3dShapeObject,

} from "mxcad3d"

import {   
  // 2D
  McObject,
  McDb,
  McDbArc,
  McDbLine,
  McDbPolyline,
  McDbText,
  McGePoint3d,
  MxCADSelectionSet
} from "mxcad";
// 3D
// 创建三维mxcad3d对象
const mxcad3d = new MxCAD3DObject()
// 初始化三维mxcad3d对象
mxcad3d.create({
  // canvas元素的css选择器字符串（示例中是id选择器），或canvas元素对象
  canvas: "#myCanvas3d",
  // 获取加载wasm相关文件(wasm/js/worker.js)路径位置
  locateFile: (fileName) => new URL(`/node_modules/mxcad3d/dist/wasm/3d/${fileName}`, import.meta.url).href,
})
// 三维mxcad3d对象初始化完成事件
mxcad3d.on("init", () => {
  console.log("三维初始化完成");
});

// 2D
// 创建二维mxcad2d对象
const mxcad2d = new McObject()
mxcad2d.create({
  // canvas元素的css选择器字符串（示例中是id选择器），或canvas元素对象
  canvas: "#myCanvas2d",
  // 获取加载wasm相关文件(wasm/js/worker.js)路径位置
  locateFile: (fileName) => new URL(`/node_modules/mxcad/dist/wasm/2d/${fileName}`, import.meta.url).href,
  // 需要初始化打开的文件url路径，（mxweb是dwg文件转换后能够在网页进行读写的文件格式，编辑完毕后也可以保存回dwg格式）
  fileUrl: new URL("../src/assets/map.dwg.mxweb", import.meta.url).href,
  // 提供加载字体的目录路径
  fontspath: new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
})
// 二维mxcad2d对象初始化完成事件
mxcad2d.on("init", () => {
  console.log("二维初始化完成");
});
// 二维mxcad2d对象打开文件完成事件
mxcad2d.on("openFileComplete", () => {
  console.log("二维图纸打开完成");
});

// 用于将三维形状添加到三维文档中
function addShapeToDoc(theShape: Mx3dShapeObject, color = new Mx3dGeColor(MdGe.MxNameOfColor.Color_NOC_WHITE), texture = "") {
  const doc = mxcad3d.getDocument();
  const label = doc.addShapeLabel();
  label.setName("Mx3dShape");
  label.setShape(theShape);
  label.setColor(color);
  if (texture) {
    label.setTexture(texture);
  }
  mxcad3d.fitAllObjects(true);
}

// 获取二维圆弧的起点、中点、终点
function get2DArc3Points(arc: McDbArc): { starPt: McGePoint3d, midPt: McGePoint3d, endPt: McGePoint3d } {
  const retPtStart = arc.getStartPoint();
  const retPtEnd = arc.getEndPoint();
  const starPt = retPtStart.val;
  const endPt = retPtEnd.val;
  const endParamRet = arc.getEndParam();
  const startParamRet = arc.getStartParam();
  const midParam = startParamRet.val + (endParamRet.val - startParamRet.val) / 2;
  const midPtRet = arc.getPointAtParam(midParam);
  const midPt = midPtRet.val;
  return { starPt, midPt, endPt }
}

// 用于保存地基基础信息的数据结构
type BaseData = { wires: Mx3dShapeWire[], outerWireIndex: number };
// 用于保存建筑物、公共设施等信息的数据结构
type MetaData = { wire: Mx3dShapeWire, color: Mx3dGeColor }[];
// 用于保存文字信息的数据结构
type TextData = Mx3dSymbolText[];

// 用于保存图中所有图元信息的数据结构
type MapData = {
  base: BaseData,
  building: MetaData,
  atm: MetaData,
  elevator: MetaData,
  icon: MetaData,
  exit: MetaData,
  wc: MetaData,
  text: TextData
}

// 获取图中所有数据
function getMapData(ss: MxCADSelectionSet): MapData {

  // baseData
  const base: BaseData = { wires: [], outerWireIndex: 0 };
  // buildingData
  const building: MetaData = [];
  // atmData
  const atm: MetaData = [];
  // elevatorData
  const elevator: MetaData = [];
  // iconData
  const icon: MetaData = [];
  // exitData
  const exit: MetaData = [];
  // wcData
  const wc: MetaData = [];
  // textData
  const text: TextData = [];

  ss.forEach((id) => {
    const ent: any = id.getMcDbEntity();

    if (ent instanceof McDbPolyline) {
      const pl = ent as McDbPolyline;
      const resBuffer = pl.explode();
      const edges: Mx3dShapeEdge[] = [];
      for (let i = 0; i < resBuffer.GetCount(); i++) {
        const resObj = resBuffer.AtObject(i);
        if (resObj.ret) {
          const subEnt = resObj.val;
          // 判断类型
          if (subEnt instanceof McDbLine) {
            const line = subEnt as McDbLine;
            const ptStart = line.startPoint;
            const ptEnd = line.endPoint;
            const ptStart3d = new Mx3dGePoint(ptStart.x, ptStart.y, 0);
            const ptEnd3d = new Mx3dGePoint(ptEnd.x, ptEnd.y, 0);
            // 通过二维直线段的数据构造三维直线段
            const edge = new Mx3dShapeEdge(ptStart3d, ptEnd3d);
            edges.push(edge);
          } else if (subEnt instanceof McDbArc) {
            const arc = subEnt as McDbArc;
            const arcPts = get2DArc3Points(arc);
            const starPt = arcPts.starPt;
            const endPt = arcPts.endPt;
            const midPt = arcPts.midPt;
            const starPt3d = new Mx3dGePoint(starPt.x, starPt.y, 0);
            const midPt3d = new Mx3dGePoint(midPt.x, midPt.y, 0);
            const endPt3d = new Mx3dGePoint(endPt.x, endPt.y, 0);
            // 通过二维圆弧的数据构造三维圆弧
            const edge = Mx3dGeomCircle.MakeArcOfCircle(starPt3d, midPt3d, endPt3d);
            edges.push(edge);
          }
        }
      }
      // 二维多段线转换为了三维的Wire
      const wire = Mx3dShapeDownCast.Wire(Mx3dWireTool.ConnectEdgesToWires(edges, 1e-6, false)[0]);
      const trueColor = ent.trueColor;
      // 通过二维的颜色数据构造三维颜色
      const color = new Mx3dGeColor(trueColor.red / 255., trueColor.green / 255., trueColor.blue / 255., MdGe.MxTypeOfColor.Color_TOC_sRGB);
      // 根据二维图纸中的图层，判断各个Wire属于哪个部分，并添加至相应的数据结构中
      if (ent.layer === "10" || ent.layer === "20" || ent.layer === "30") {
        if (ent.layer === "10") {
          base.outerWireIndex = base.wires.length;
        }
        base.wires.push(wire);
      }
      else if (ent.layer === "0") {
        building.push({ wire, color });
      }
      else if (ent.layer === "atm") {
        atm.push({ wire, color });
      }
      else if (ent.layer === "elevator") {
        elevator.push({ wire, color });
      }
      else if (ent.layer === "icon") {
        icon.push({ wire, color });
      }
      else if (ent.layer === "exit") {
        exit.push({ wire, color });
      }
      else if (ent.layer === "wc") {
        wc.push({ wire, color });
      }
    }
    else if (ent instanceof McDbText) {
      const mcdbTxt = ent as McDbText;
      const content = mcdbTxt.textString;
      const height = mcdbTxt.height * 5;
      const vJust = mcdbTxt.verticalMode;
      const hJust = mcdbTxt.horizontalMode;
      const pt = mcdbTxt.position;
      // 通过二维的文字信息构造三维文字
      const symbolText = new Mx3dSymbolText(content, height, new Mx3dGePoint(pt.x, pt.y, pt.z + 5));
      // 匹配文字的垂直对齐方式
      let vJust3d;
      switch (vJust) {
        case McDb.TextVertMode.kTextBase:
          vJust3d = MdGe.MxVerticalTextAlignment.CVTA_TOPFIRSTLINE;
          break;
        case McDb.TextVertMode.kTextBottom:
          vJust3d = MdGe.MxVerticalTextAlignment.CVTA_BOTTOM;
          break;
        case McDb.TextVertMode.kTextVertMid:
          vJust3d = MdGe.MxVerticalTextAlignment.CVTA_CENTER;
          break;
        case McDb.TextVertMode.kTextTop:
          vJust3d = MdGe.MxVerticalTextAlignment.CVTA_TOP;
          break;
      }
      // 匹配文字的水平对齐方式
      let hJust3d;
      switch (hJust) {
        case McDb.TextHorzMode.kTextAlign:
          hJust3d = MdGe.MxHorizontalTextAlignment.HTA_LEFT;
          break;
        case McDb.TextHorzMode.kTextCenter:
          hJust3d = MdGe.MxHorizontalTextAlignment.HTA_CENTER;
          break;
        case McDb.TextHorzMode.kTextFit:
          hJust3d = MdGe.MxHorizontalTextAlignment.HTA_LEFT;
          break;
        case McDb.TextHorzMode.kTextLeft:
          hJust3d = MdGe.MxHorizontalTextAlignment.HTA_LEFT;
          break;
        case McDb.TextHorzMode.kTextMid:
          hJust3d = MdGe.MxHorizontalTextAlignment.HTA_CENTER;
          break;
        case McDb.TextHorzMode.kTextRight:
          hJust3d = MdGe.MxHorizontalTextAlignment.HTA_RIGHT;
          break;
      }

      symbolText.SetVJustification(vJust3d);
      symbolText.SetHJustification(hJust3d);
      symbolText.SetFontAspect(MdGe.MxFontAspect.FA_BoldItalic);
      symbolText.SetOrientation3D(new Mx3dGeCSYSR(symbolText.Position(), new Mx3dGeDir(0, 0, 1)));
      symbolText.SetZoomable(true);
      text.push(symbolText);
    }

  });

  // 返回所有的数据
  return { base, building, atm, elevator, icon, exit, wc, text };

}

// 读取二维图纸中所有图元的数据，处理为三维数据后，进行高度的拉伸，并贴图等
async function create3DFrom2D() {

  // 加载贴图资源
  const cloth_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/1.jpg", import.meta.url).href, "1.jpg");
  const digital_products_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/2.jpg", import.meta.url).href, "2.jpg");
  const food_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/3.jpg", import.meta.url).href, "3.jpg");
  const atm_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/atm.jpg", import.meta.url).href, "atm.jpg");
  const elevator_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/elevator.jpg", import.meta.url).href, "elevator.jpg");
  const exit_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/exit.jpg", import.meta.url).href, "exit.jpg");
  const wc_pic = await Mx3dUtils.LoadFileFromUrl(new URL("./assets/wc.jpg", import.meta.url).href, "wc.jpg");

  // 创建当前二维mxcad2d对象的选择集
  const ss = new MxCADSelectionSet();
  // 全选当前二维mxcad2d对象中的图元
  ss.allSelect();

  // 获取所有图元信息
  const mapData = getMapData(ss);

  // offset
  const offset = 0.1;

  // 拉伸base
  const baseWiresObj = mapData.base;
  const baseWires = baseWiresObj.wires;
  const baseWiresOuterWireIndex = baseWiresObj.outerWireIndex;
  const baseOuterFaceMaker = new Mx3dMkFace(baseWires[baseWiresOuterWireIndex]);
  let baseFace = baseOuterFaceMaker.Face();
  for (let i = 0; i < baseWires.length; i++) {
    if (i === baseWiresOuterWireIndex) {
      continue;
    }
    baseFace = baseFace.cut(new Mx3dMkFace(baseWires[i]).Face());
  }
  const basePrismMaker = new Mx3dMkPrism(baseFace, new Mx3dGeVec(0, 0, -1));
  const baseShape = basePrismMaker.Shape();
  addShapeToDoc(baseShape);

  // 拉伸Building
  const buildingWires = mapData.building;
  buildingWires.forEach(building => {
    const buildingFace = new Mx3dMkFace(building.wire).Face();
    const buildingShape = new Mx3dMkPrism(buildingFace, new Mx3dGeVec(0, 0, 4)).Shape();
    addShapeToDoc(buildingShape, building.color);
  });

  // 拉伸atm
  const atmDatas = mapData.atm;
  atmDatas.forEach(atm => {
    const atmFace = new Mx3dMkFace(atm.wire).Face();
    const atmShape = new Mx3dMkPrism(atmFace, new Mx3dGeVec(0, 0, 4)).Shape();
    atmFace.TranslateByVec(0, 0, 4 + offset);
    addShapeToDoc(atmFace, void 0, atm_pic);
    addShapeToDoc(atmShape, atm.color);
  });

  // 拉伸elevator
  const elevatorDatas = mapData.elevator;
  elevatorDatas.forEach(elevator => {
    const elevatorFace = new Mx3dMkFace(elevator.wire).Face();
    const elevatorShape = new Mx3dMkPrism(elevatorFace, new Mx3dGeVec(0, 0, 4)).Shape();
    elevatorFace.TranslateByVec(0, 0, 4 + offset);
    addShapeToDoc(elevatorFace, void 0, elevator_pic);
    addShapeToDoc(elevatorShape, elevator.color);
  });

  // 拉伸exit
  const exitDatas = mapData.exit;
  exitDatas.forEach(exit => {
    const exitFace = new Mx3dMkFace(exit.wire).Face();
    const exitShape = new Mx3dMkPrism(exitFace, new Mx3dGeVec(0, 0, 4)).Shape();
    exitFace.TranslateByVec(0, 0, 4 + offset);
    addShapeToDoc(exitFace, void 0, exit_pic);
    addShapeToDoc(exitShape, exit.color);
  });

  // 拉伸wc
  const wcDatas = mapData.wc;
  wcDatas.forEach(wc => {
    const wcFace = new Mx3dMkFace(wc.wire).Face();
    const wcShape = new Mx3dMkPrism(wcFace, new Mx3dGeVec(0, 0, 4)).Shape();
    wcFace.TranslateByVec(0, 0, 4 + offset);
    addShapeToDoc(wcFace, void 0, wc_pic);
    addShapeToDoc(wcShape, wc.color);
  });

  // 创建icon
  const iconDatas = mapData.icon;
  iconDatas.forEach(icon => {
    const iconFace = new Mx3dMkFace(icon.wire).Face();
    iconFace.TranslateByVec(0, 0, 4 + offset);
    if (icon.color.Name() === MdGe.MxNameOfColor.Color_NOC_RED) {
      addShapeToDoc(iconFace, void 0, cloth_pic);
    }
    else if (icon.color.Name() === MdGe.MxNameOfColor.Color_NOC_YELLOW) {
      addShapeToDoc(iconFace, void 0, digital_products_pic);
    }
    else if (icon.color.Name() === MdGe.MxNameOfColor.Color_NOC_GREEN) {
      addShapeToDoc(iconFace, void 0, food_pic);
    }
  });
  // 更新显示（将三维文档中的图形显示出来）
  mxcad3d.update();
  // 绘制文字
  const texts = mapData.text;
  texts.forEach(text => {
    mxcad3d.displaySymbolText(text);
  });
}

// 给button添加点击事件，点击后调用create3DFrom2D函数，进行2D到3D的转换
(function addEventToButton() {
  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", () => {
      create3DFrom2D();
    });
  }
})()