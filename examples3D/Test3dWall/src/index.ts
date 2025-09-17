import { MxCAD3DObject, Mx3dGePoint, Mx3dMkPolygon, Mx3dMkFace, Mx3dMkPrism, Mx3dGeVec, Mx3dGeColor, MdGe } from "mxcad3d"

// 创建mxcad3d对象
const mxcad3d = new MxCAD3DObject()

// 初始化mxcad3d对象
mxcad3d.create({
    // canvas元素的css选择器字符串（示例中是id选择器），或canvas元素对象
    canvas: "#myCanvas",
    // 获取加载wasm相关文件(wasm/js/worker.js)路径位置
    locateFile: (fileName)=> new URL(`/node_modules/mxcad3d/dist/wasm/3d/${fileName}`, import.meta.url).href,
})

// 初始化完成
mxcad3d.on("init", ()=>{
    console.log("初始化完成");
});



function funDrawWall(){
    // 外墙轮廓
    const wallOutterPts: Mx3dGePoint[] = [];
    wallOutterPts.push(new Mx3dGePoint(0, 0, 0));
    wallOutterPts.push(new Mx3dGePoint(0, 4480, 0));
    wallOutterPts.push(new Mx3dGePoint(5480, 4480, 0));
    wallOutterPts.push(new Mx3dGePoint(5480, 0, 0));
    const wallOutterPolygon = new Mx3dMkPolygon();
    wallOutterPts.forEach((pt) => {
      wallOutterPolygon.Add(pt);
    });
    wallOutterPolygon.Close();
    const wallOutterWire = wallOutterPolygon.Wire();
    const wallOutterMkFace = new Mx3dMkFace(wallOutterWire);
    const wallOutterFace = wallOutterMkFace.Face();
  
    // 内墙轮廓
    const wallInnerPts: Mx3dGePoint[] = [];
    wallInnerPts.push(new Mx3dGePoint(240, 240, 0));
    wallInnerPts.push(new Mx3dGePoint(240, 4240, 0));
    wallInnerPts.push(new Mx3dGePoint(5240, 4240, 0));
    wallInnerPts.push(new Mx3dGePoint(5240, 240, 0));
    const wallInnerPolygon = new Mx3dMkPolygon();
    wallInnerPts.forEach((pt) => {
      wallInnerPolygon.Add(pt);
    });
    wallInnerPolygon.Close();
    const wallInnerWire = wallInnerPolygon.Wire();
    const wallInnerMkFace = new Mx3dMkFace(wallInnerWire);
    const wallInnerFace = wallInnerMkFace.Face();
  
    // 墙体截面
    const wallFace = wallOutterFace.cut(wallInnerFace);
    // 拉伸墙体
    const wallMkPrism = new Mx3dMkPrism(wallFace, new Mx3dGeVec(0, 0, 3000));
    let wall = wallMkPrism.Shape();
    // 开窗洞
    const winPts: Mx3dGePoint[] = [];
    winPts.push(new Mx3dGePoint(1990, 4240, 1000));
    winPts.push(new Mx3dGePoint(1990, 4240, 2200));
    winPts.push(new Mx3dGePoint(3490, 4240, 2200));
    winPts.push(new Mx3dGePoint(3490, 4240, 1000));
    const winPolygon = new Mx3dMkPolygon();
    winPts.forEach((pt) => {
      winPolygon.Add(pt);
    });
    winPolygon.Close();
    const winWire = winPolygon.Wire();
    const winMkFace = new Mx3dMkFace(winWire);
    const winFace = winMkFace.Face();
    const winMkPrism = new Mx3dMkPrism(winFace, new Mx3dGeVec(0, 240, 0));
    const win = winMkPrism.Shape();
  
    // 开门洞
    const doorPts: Mx3dGePoint[] = [];
    doorPts.push(new Mx3dGePoint(5240, 1160, 0));
    doorPts.push(new Mx3dGePoint(5240, 1160, 2000));
    doorPts.push(new Mx3dGePoint(5240, 360, 2000));
    doorPts.push(new Mx3dGePoint(5240, 360, 0));
    const doorPolygon = new Mx3dMkPolygon();
    doorPts.forEach((pt) => {
      doorPolygon.Add(pt);
    });
    doorPolygon.Close();
    const doorWire = doorPolygon.Wire();
    const doorMkFace = new Mx3dMkFace(doorWire);
    const doorFace = doorMkFace.Face();
    const doorMkPrism = new Mx3dMkPrism(doorFace, new Mx3dGeVec(240, 0, 0));
    const door = doorMkPrism.Shape();
  
    wall = wall.cut(win).cut(door);

    // 准备一个棕色
    const brownColor = new Mx3dGeColor(MdGe.MxNameOfColor.Color_NOC_BROWN);
    // 先清除视图中的模型
    mxcad3d.removeAll();
    // 获取视图文档
    const doc = mxcad3d.getDocument();
    // 文档中创建一个标签用于存储墙体形状
    const wallLabel = doc.addShapeLabel();
    // 墙体形状放入文档标签中
    wallLabel.setShape(wall);
    // 给墙体设置为棕色
    wallLabel.setColor(brownColor);
    // 更新显示视图
    mxcad3d.update();
  }


  // 给button添加点击事件，点击后调用drawRoundRectPipe函数，进行圆角方管的绘制
// 立即执行函数
(function addEventToButton(){
    const btn = document.querySelector("button");
    if (btn) {
      btn.addEventListener("click", () => {
        funDrawWall();
      });
    }
  })()