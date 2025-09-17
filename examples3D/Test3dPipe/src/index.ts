import { MxCAD3DObject, MdGe, Mx3dAlgoFillet2d, Mx3dGeColor, Mx3dGeCSYSR, Mx3dGeDir, Mx3dGeMaterial, Mx3dGeomCircle, Mx3dGePlane, Mx3dGePoint, Mx3dMkFace, Mx3dMkPipe, Mx3dShapeDownCast, Mx3dShapeEdge, Mx3dShapeFace, Mx3dShapeWire, Mx3dWireTool, MxApp3D } from "mxcad3d"


// 创建mxcad3d对象
const mxcad3d = new MxCAD3DObject()

// 初始化mxcad3d对象
mxcad3d.create({
    // canvas元素的css选择器字符串（示例中是id选择器），或canvas元素对象
    canvas: "#myCanvas",
    // 获取加载wasm相关文件(wasm/js/worker.js)路径位置
    locateFile: (fileName)=> new URL(`/node_modules/mxcad3d/dist/wasm/3d/${fileName}`, import.meta.url).href,
})


function drawRoundRectPipe() {
    // 管道用到的颜色材质
    const grayColor = new Mx3dGeColor(MdGe.MxNameOfColor.Color_NOC_GRAY25);
    const mat = new Mx3dGeMaterial(MdGe.MxNameOfMaterial.Material_NOM_Steel);
    // 管道的路径，由直线和圆弧构成，必须C1连续。
    let wire: Mx3dShapeWire;
    {
      const pt1 = new Mx3dGePoint(0, 0, 0);
      const pt2 = new Mx3dGePoint(0, 0, 85);
      // 直线段
      const edge1 = new Mx3dShapeEdge(pt1, pt2);
      
      const filletCsysr1 = new Mx3dGeCSYSR(new Mx3dGePoint(15, 0, 85), new Mx3dGeDir(0, -1, 0), new Mx3dGeDir(0, 0, 1));
      const fillet1 = new Mx3dGeomCircle(filletCsysr1, 15);
      // 圆弧
      const edge2 = fillet1.Edge(0, Math.PI / 2);
  
      const pt3 = new Mx3dGePoint(15, 0, 100);
      const pt4 = new Mx3dGePoint(85, 0, 100);
      // 直线段
      const edge3 = new Mx3dShapeEdge(pt3, pt4);
  
      const filletCsysr2 = new Mx3dGeCSYSR(new Mx3dGePoint(85, 15, 100), new Mx3dGeDir(0, 0, 1), new Mx3dGeDir(0, -1, 0));
      const fillet2 = new Mx3dGeomCircle(filletCsysr2, 15);
      // 圆弧
      const edge4 = fillet2.Edge(0, Math.PI / 2);
  
      const pt5 = new Mx3dGePoint(100, 15, 100);
      const pt6 = new Mx3dGePoint(100, 85, 100);
      // 直线段
      const edge5 = new Mx3dShapeEdge(pt5, pt6);
  
      const filletCsysr3 = new Mx3dGeCSYSR(new Mx3dGePoint(100, 85, 115), new Mx3dGeDir(1, 0, 0), new Mx3dGeDir(0, 0, -1));
      const fillet3 = new Mx3dGeomCircle(filletCsysr3, 15);
      // 圆弧
      const edge6 = fillet3.Edge(0, Math.PI / 2);
  
      const pt7 = new Mx3dGePoint(100, 100, 115);
      const pt8 = new Mx3dGePoint(100, 100, 200);
      // 直线段
      const edge7 = new Mx3dShapeEdge(pt7, pt8);
  
      const shape = Mx3dWireTool.ConnectEdgesToWires([edge1, edge2, edge3, edge4, edge5, edge6, edge7], 1e-6, false)[0];
      // 得到最后连接组合而成的管道路径
      wire = Mx3dShapeDownCast.Wire(shape);
    }
  
    // 管道横截面形状，由一个内圆角方形和外圆角方形之间构成的区域
    let faceRoundRect:Mx3dShapeFace;
    {
      const pts: Mx3dGePoint[] = [];
      const pt1 = new Mx3dGePoint(0, 0, 0);
      const pt2 = new Mx3dGePoint(0, 10, 0);
      const pt3 = new Mx3dGePoint(10, 10, 0);
      const pt4 = new Mx3dGePoint(10, 0, 0);
      
      pts.push(pt2);
      pts.push(pt3);
      pts.push(pt4);
      pts.push(pt1);
      // 四条直线段构成正方形
      const edges: Mx3dShapeEdge[] = [];
      const edge1 = new Mx3dShapeEdge(pt1, pt2);
      const edge2 = new Mx3dShapeEdge(pt2, pt3);
      const edge3 = new Mx3dShapeEdge(pt3, pt4);
      const edge4 = new Mx3dShapeEdge(pt4, pt1);
      edges.push(edge1);
      edges.push(edge2);
      edges.push(edge3);
      edges.push(edge4);
      
      // 四条直线段，循环进行二维倒圆角，圆角放入arcs数组。
      const arcs: Mx3dShapeEdge[] = [];
      for(let i = 0; i < edges.length; i++)
      {
        // 矩形所在平面，默认构造就是在XOY平面（右手系）
        const pln = new Mx3dGePlane();
        // 二维倒圆角算法对象
        const f2d = new Mx3dAlgoFillet2d();
  
        if (i < edges.length - 1) {
          // 初始化时，传入两条要进行倒圆角的直线段，以及他们所在的平面（必须是在同一平面）
          f2d.Init(edges[i], edges[i + 1], pln);
          // 执行倒圆角算法，圆角半径为2
          f2d.Perform(2);
          // Result方法返回倒圆角算法在所在点执行倒圆角后的圆弧段，Result方法传入第一个参数是要执行倒圆角的点，因为我们当前是两个直线段倒圆角，所以就只有在这两个直线段的交点或延长后的交点倒圆角，只有这个一个交点，所以这里就传入这个交点，如果不是两直线段倒圆角，比如一个直线段和一个圆弧，他们就可能有两个交点，这时就要指定要返回哪个交点处倒圆角的结果了。第二个参数和第三个参数分别传入参与倒圆角的两条直线段，Result方法会将这两个参数修改为倒圆角之后改变过后的两条直线段。
          arcs.push(f2d.Result(pts[i], edges[i], edges[i + 1]));
        }
        else{
          f2d.Init(edges[i], edges[0], pln);
          f2d.Perform(2);
          arcs.push(f2d.Result(pts[i], edges[i], edges[0]));
        }
      }
      // 连接所有的直线段和圆弧
      const wireOuterShape = Mx3dWireTool.ConnectEdgesToWires([...edges, ...arcs], 1e-6, false)[0];
      // 外圈
      const wireOuter = Mx3dShapeDownCast.Wire(wireOuterShape);
      // 内圈
      const wireInner = wireOuter.Scaled(new Mx3dGePoint(5, 5, 0), 0.8);
      // 内圈方向要进行个反向
      wireInner.reverse();
      // 生成内外圈之间构成的环面
      const faceMaker = new Mx3dMkFace(wireOuter, true);
      faceMaker.Add(wireInner);
      faceRoundRect = faceMaker.Face();
      // 移动到中心位置和管道路径起点一致
      faceRoundRect.TranslateByVec(-5, -5, 0);
    }
  	// 通过路径和截面生成管道形状
    const pipe = new Mx3dMkPipe(wire, faceRoundRect);
    const pipeShape = pipe.Shape();
  
  	// 给pipeShape设置材质颜色，放入模型文档并显示
    mxcad3d.removeAll();
    const doc = mxcad3d.getDocument();
    const pipeShapeLabel = doc.addShapeLabel();
    pipeShapeLabel.setShape(pipeShape);
    pipeShapeLabel.setMaterial(mat);
    pipeShapeLabel.setColor(grayColor);
    mxcad3d.update();
}

// 初始化完成
mxcad3d.on("init", ()=>{
    console.log("初始化完成");
});

// 给button添加点击事件，点击后调用drawRoundRectPipe函数，进行圆角方管的绘制
// 立即执行函数
(function addEventToButton(){
    const btn = document.querySelector("button");
    if (btn) {
      btn.addEventListener("click", () => {
        drawRoundRectPipe();
      });
    }
  })()