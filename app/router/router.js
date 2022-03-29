module.exports=app=>{
    const empleado=require("../controller/empleado_controller");
    const usuario=require("../controller/usuario_controller");
    const proveedor=require("../controller/proveedor_controller");
    const abono=require("../controller/abono_controller");
    const producto =require("../controller/producto_controller");
    const cliente=require("../controller/cliente_controller");
    const cxproveedor =require("../controller/cxproveedor_controller");
    const dbodega=require("../controller/dbodega_controller");
    const detalle=require("../controller/detalle_controller");
    const factura=require("../controller/factura_controller");
    const permiso=require("../controller/permiso_controller");
    const precio=require("../controller/precio_controller");
    const pxcliente=require("../controller/pxcliente_controller");
    const informe=require("../controller/informe_controller");
    const modulo=require("../controller/modulo_controller");
    const verifyToken =require("../middleware/verifyToken");

    app.post("/informe",verifyToken,informe.getInforme);

    
    app.post("/modulo",verifyToken,modulo.create);
    app.post("/modulo/update",verifyToken,modulo.update)
    app.get("/modulo/view",verifyToken,modulo.getView);
    app.get("/modulo/:id",verifyToken,modulo.findOne);
    app.post("/modulo/delete/:id",verifyToken,modulo.delete);

    app.post("/empleado",verifyToken,empleado.create);
    app.post("/empleado/update",verifyToken,empleado.update)
    app.get("/empleado/view",verifyToken,empleado.getView);
    app.get("/empleado/:id",verifyToken,empleado.findOne);
    app.post("/empleado/delete/:id",verifyToken,empleado.delete);
  

    app.post("/usuario",verifyToken,usuario.create);
    app.post("/usuario/update",verifyToken,usuario.update);
    app.post("/usuario/delete/:id",verifyToken,usuario.delete);
    app.post("/usuario/login", usuario.findUser);
    app.get("/usuario/view",verifyToken,usuario.getView);
    app.get("/usuario/:id",verifyToken,usuario.findOne);
    app.get("/usuario/user/:id",verifyToken,usuario.findUOne);

    app.post("/proveedor",verifyToken,proveedor.create);
    app.post("/proveedor/update",verifyToken,proveedor.update);
    app.post("/proveedor/delete/:id",verifyToken,proveedor.delete)
    app.get("/proveedor/view",verifyToken,proveedor.getView);
    app.get("/proveedor/:id",verifyToken,proveedor.findOne);
    
    app.post("/abono",verifyToken,abono.create);
    app.post("/abono/update",verifyToken,abono.update);
    app.post("/abono/delete/:id",verifyToken,abono.delete)
    app.get("/abono/view",verifyToken,abono.getView);
    app.get("/abono/:id",verifyToken,abono.findOne);
    app.get("/abono/cuenta/:id",verifyToken,abono.findByCuenta);

    app.post("/producto",verifyToken,producto.create);
    app.post("/producto/update",verifyToken,producto.update);
    app.post("/producto/delete/:id",verifyToken,producto.delete)
    app.get("/producto/view",verifyToken,producto.getView);
    app.get("/producto/venta",verifyToken,producto.getViewVenta);
    app.get("/producto/:id",verifyToken,producto.findOne);
    app.get("/producto/ubicacion/:id",verifyToken,producto.getBodegas);

    app.post("/cliente",verifyToken,cliente.create);
    app.post("/cliente/update",verifyToken,cliente.update);
    app.post("/cliente/delete/:id",verifyToken,cliente.delete)
    app.get("/cliente/view",verifyToken,cliente.getView);
    app.get("/cliente/:id",verifyToken,cliente.findOne);

    app.post("/cxproveedor",verifyToken,cxproveedor.create);
    app.post("/cxproveedor/update",verifyToken,cxproveedor.update);
    app.post("/cxproveedor/delete/:id",verifyToken,cxproveedor.delete)
    app.get("/cxproveedor/view",verifyToken,cxproveedor.getView);
    app.get("/cxproveedor/:id",verifyToken,cxproveedor.findOne);
    app.get("/cxproveedor/proveedor/:id",verifyToken,cxproveedor.GetCXPro);

    app.post("/dbodega",verifyToken,dbodega.create);
    app.post("/dbodega/update",verifyToken,dbodega.update);
    app.post("/dbodega/delete/:id",verifyToken,dbodega.delete)
    app.get("/dbodega/view",verifyToken,dbodega.getView);
    app.get("/dbodega/:id",verifyToken,dbodega.findOne);
    app.post("/dbodega/despacho",verifyToken,dbodega.getDespacho);

    app.post("/detalle",verifyToken,detalle.create);
    app.post("/detalle/update",verifyToken,detalle.update);
    app.post("/detalle/delete/:id",verifyToken,detalle.delete)
    app.get("/detalle/factura/:id",verifyToken,detalle.getFac)
    app.get("/detalle/view",verifyToken,detalle.getView);
    app.get("/detalle/:id",verifyToken,detalle.findOne);

    app.post("/factura",verifyToken,factura.create);
    app.post("/factura/update",verifyToken,factura.update);
    app.post("/factura/caja",verifyToken,factura.getCaja);
    app.post("/factura/fecha",verifyToken,factura.getHoy);
    app.post("/factura/delete/:id",verifyToken,factura.delete)
    app.get("/factura/view",verifyToken,factura.getView);
    app.get("/factura/orden",verifyToken,factura.getViewOrden);
    app.get("/factura/:id",verifyToken,factura.findOne);
   

    app.post("/permiso",verifyToken,permiso.create);
    app.post("/permiso/update",verifyToken,permiso.update);
    app.post("/permiso/delete/:id",verifyToken,permiso.delete)
    app.get("/permiso/view",verifyToken,permiso.getView);
    app.get("/permiso/:id",verifyToken,permiso.findOne);
    app.get("/permiso/emp/:id",verifyToken,permiso.findEmp);

    app.post("/precio",verifyToken,precio.create);
    app.post("/precio/update",verifyToken,precio.update);
    app.post("/precio/delete/:id",verifyToken,precio.delete)
    app.get("/precio/view",verifyToken,precio.getView);
    app.get("/precio/:id",verifyToken,precio.findOne);
    app.get("/precio/allpro/:id",verifyToken,precio.findAllPro);
    app.get("/precio/bypro/:id",verifyToken,precio.findOnePro);

    app.post("/pxcliente",verifyToken,pxcliente.create);
    app.post("/pxcliente/update",verifyToken,pxcliente.update);
    app.post("/pxcliente/bycp",verifyToken,pxcliente.findCP);
    app.post("/pxcliente/delete/:id",verifyToken,pxcliente.delete)
    app.get("/pxcliente/view",verifyToken,pxcliente.getView);
    app.get("/pxcliente/:id",verifyToken,pxcliente.findOne);
    app.get("/pxcliente/bycl/:id",verifyToken,pxcliente.findC);
   
};