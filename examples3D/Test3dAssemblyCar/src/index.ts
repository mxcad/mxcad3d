import { MdGe, Mx3dGeAxis, Mx3dGeColor, Mx3dGeCSYSR, Mx3dGeDir, Mx3dGeLocation, Mx3dGePoint, Mx3dGeTrsf, Mx3dGeVec, Mx3dMkCylinder, Mx3dMkFace, Mx3dMkPolygon, Mx3dMkPrism, MxCAD3DObject } from "mxcad3d"

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


function drawAssemblyCar() {
  // 轮子形状
  const pt = new Mx3dGePoint(0, 0, 0);  // 中心点
  const dir = new Mx3dGeDir(0, 0, 1); // 方向
  const csysr = new Mx3dGeCSYSR(pt, dir); // 根据点和方向创建一个右手坐标系
  const wheel = new Mx3dMkCylinder(csysr, 20, 10);  // 轮子(宽扁的圆柱体)
  let wheelShape = wheel.Shape(); // 获取轮子拓扑形状

  // 轴形状
  const axle = new Mx3dMkCylinder(csysr, 5, 100); // 轴(细长的圆柱体)
  const axleShape = axle.Shape(); // 获取轴拓扑形状
  
  wheelShape = wheelShape.cut(axleShape); // 切割掉轮子的轴孔

  // 车体形状
  const bodyPts:Mx3dGePoint[] = []
  bodyPts.push(new Mx3dGePoint(0, 0, 0));
  bodyPts.push(new Mx3dGePoint(0, 50, 0));
  bodyPts.push(new Mx3dGePoint(160, 50, 0));
  bodyPts.push(new Mx3dGePoint(160, 0, 0));
  const bodyPoly = new Mx3dMkPolygon(); // 创建多段线(车体的截面轮廓)
  bodyPts.forEach((pt) => {
    bodyPoly.Add(pt);
  });
  bodyPoly.Close(); // 闭合多段线
  const bodyWire = bodyPoly.Wire(); // 获取多段线(车体的截面轮廓)的拓扑Wire
  const bodyMkFace = new Mx3dMkFace(bodyWire); // 用Wire生成面
  const bodyFace = bodyMkFace.Face(); // 获取面
  const bodyPrism = new Mx3dMkPrism(bodyFace, new Mx3dGeVec(0, 0, 100)); // 用面生成车体实体
  let bodyShape = bodyPrism.Shape(); // 获取车体实体形状
  bodyShape.TranslateBy2Points(new Mx3dGePoint(30, 0, 0), new Mx3dGePoint(0, 0, 0)); // 移动到合适位置，方便装配

  const wheelForCut = new Mx3dMkCylinder(csysr, 25, 15); // 车体嵌入车轮的地方，用车体切掉，用于放入轮子
  // 以下是切出四个放轮子的空间
  const wheelForCutShape = wheelForCut.Shape();
  bodyShape = bodyShape.cut(wheelForCutShape);
  bodyShape = bodyShape.cut(wheelForCutShape.TranslatedByVec(new Mx3dGeVec(0, 0, 85)));
  bodyShape = bodyShape.cut(wheelForCutShape.TranslatedByVec(new Mx3dGeVec(100, 0, 0)));
  bodyShape = bodyShape.cut(wheelForCutShape.TranslatedByVec(new Mx3dGeVec(100, 0, 85)));
  
  const axleForCut = new Mx3dMkCylinder(csysr, 6, 100); // 车体嵌入轴的地方，用车体切掉，用于放入轴
  // 以下是切出两个放轴的空间
  const axleForCutShape = axleForCut.Shape();
  bodyShape = bodyShape.cut(axleForCutShape);
  bodyShape = bodyShape.cut(axleForCutShape.TranslatedByVec(new Mx3dGeVec(100, 0, 0)));

  // 获取文档
  const doc = mxcad3d.getDocument();
  // 车子装配体标签
  const carLabel = doc.addShapeLabel();
  // 轮子实例标签
  const wheelLabel = doc.addShapeLabel();
  // 车轴实例标签
  const axleLabel = doc.addShapeLabel();
  // 轮轴装配体实例标签
  const wheelAxleLabel = doc.addShapeLabel();
  // 车壳实例标签
  const bodyLabel = doc.addShapeLabel();

  // 轮子、轴、车体形状都添加到模型文档的标签中(同时为不同的形状设置不同的颜色)
  wheelLabel.setShape(wheelShape);
  wheelLabel.setColor(new Mx3dGeColor(MdGe.MxNameOfColor.Color_NOC_BLACK));
  axleLabel.setShape(axleShape);
  axleLabel.setColor(new Mx3dGeColor(MdGe.MxNameOfColor.Color_NOC_RED));
  bodyLabel.setShape(bodyShape);
  bodyLabel.setColor(new Mx3dGeColor(MdGe.MxNameOfColor.Color_NOC_BLUE2));

  // 轮轴装配体(轮轴装配体需要两个轮子、一个轴)
  wheelAxleLabel.addComponent(wheelLabel, new Mx3dGeLocation()); // 添加第一个轮子，没有位置(原位置，轮子模型创建的位置)
  const wheel_2_trsf = new Mx3dGeTrsf();
  wheel_2_trsf.SetTranslationPart(new Mx3dGeVec(0, 0, 90));
  wheelAxleLabel.addComponent(wheelLabel, new Mx3dGeLocation(wheel_2_trsf)); // 添加第二个轮子，有位置(向Z轴正方向移动90之后的位置)
  wheelAxleLabel.addComponent(axleLabel, new Mx3dGeLocation()); // 添加轴，没有位置(原位置，轴模型创建的位置)
  
  // 车子装配体(车子装配体需要两个轮轴装配体、一个车体)
  const wheelAxle_1_trsf = new Mx3dGeTrsf();
  wheelAxle_1_trsf.SetRotation(new Mx3dGeAxis(new Mx3dGePoint(0, 0, 0), new Mx3dGeDir(1, 0, 0)), Math.PI / 2);
  carLabel.addComponent(wheelAxleLabel, new Mx3dGeLocation(wheelAxle_1_trsf)); // 添加第一个轮轴装配体，有位置(绕X轴旋转90度之后的位置)
  let wheelAxle_2_trsf = new Mx3dGeTrsf();
  wheelAxle_2_trsf.SetTranslationPart(new Mx3dGeVec(100, 0, 0));
  wheelAxle_2_trsf = wheelAxle_2_trsf.Multiplied(wheelAxle_1_trsf); // 矩阵相乘，得到第二个轮轴装配体的位置，相乘后的矩阵代表先绕X轴旋转90度，然后再向X轴正方形平移100
  carLabel.addComponent(wheelAxleLabel, new Mx3dGeLocation(wheelAxle_2_trsf)); // 添加第二个轮轴装配体，有位置(绕X轴旋转90度，然后再向X轴正方形平移100之后的位置)
  carLabel.addComponent(bodyLabel, new Mx3dGeLocation(wheelAxle_1_trsf)); // 添加车体，有位置(绕X轴旋转90度之后的位置)

  // 更新新图显示模型，会将文档中的模型显示到当前视图中
  mxcad3d.update();
}

// 给button添加点击事件，点击后调用drawAssemblyCar函数
// 立即执行函数
(function addEventToButton(){
  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", () => {
      drawAssemblyCar();
    });
  }
})() 