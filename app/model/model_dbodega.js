
const sql=require("../config/db.js");

const Dbodega=function(dbodega){
    this.iddespacho     =dbodega.iddespacho;
    this.idfactura      =dbodega.idfactura;
    this.idproducto     =dbodega.idproducto;
    this.descripcion    =dbodega.descripcion;
    this.rollo       =dbodega.rollo;
    this.yarda =dbodega.yarda;
    this.ubicacion=dbodega.ubicacion;
    this.estado=dbodega.estado
}
 

Dbodega.create=(dbodega,result)=>{
    sql.query(
      `call ingreso_despachobodega(${dbodega.iddespacho},${dbodega.idfactura},${dbodega.idproducto},"${dbodega.descripcion}",${dbodega.rollo},${dbodega.yarda},"${dbodega.ubicacion}","${dbodega.estado}","new");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error.message);
                result(error, null);
                return;
            }else{
            console.log(res);
            console.log("Ingresado",{mesage: "Success",res:res});
            result(null,{message:"Success",res:res});
            }
        });
    }
    Dbodega.update=(dbodega,result)=>{
        sql.query(
            `call ingreso_despachobodega(${dbodega.iddespacho},${dbodega.idfactura},${dbodega.idproducto},"${dbodega.descripcion}",${dbodega.rollo},${dbodega.yarda},"${dbodega.ubicacion}","${dbodega.estado}","update");`,
            (error,res)=>{
                if(error){
                    console.log("Hubo un error durante la operación", error.message);
                    result(error, null);
                    return;
                }else{
                console.log(res);
                console.log(" Ingresado",{message: "Success",res:res});
                result(null,{message:"Success",res:res});
                }
            });
        }
        
        Dbodega.findById=(id, result)=>{
        sql.query(
            `call ingreso_despachobodega(${id},${0},${0},"${null}",${0},${0},"${null}","${null}","viewone");`,
            (error,res)=>{
                if (error){
                    console.log(error);
                    result(error,null);
                    return
                }
                if(res[0].length){
                    console.log(res[0]);
                    result(null, {message:"Success",res:res[0]});
                }else{
                    result({error:"not_found"},null);
                }
            }
        );
        }
    
        Dbodega.getView=(result)=>{
            sql.query(
                `call ingreso_despachobodega(${0},${0},${0},"${null}",${0},${0},"${null}","${null}","view");`,
                (error,res)=>{
                    if (error){
                        console.log(error);
                        result(error,null);
                        return
                    }
                    if(res[0].length){
                        console.log(res[0]);
                        result(null, {message:"Success",res:res[0]});
                    }else{
                        result({error:"not_found"},null);
                    }
                }
            );
            }
            Dbodega.remove=(id,result)=>{
                sql.query(
                    `call ingreso_despachobodega(${id},${0},${0},"${null}",${0},${0},"${null}","${null}","delete");`,
                (error,res)=>{
                    if(error){
                        console.log(error);
                        result(null, {message:"Success",res:res[0]});
                        return;
                    }else{
                        result(null,{message:"Success",res:res});
                    }
                }
                    );
        
            }
            Dbodega.getDespacho=(dbodega,result)=>{
                sql.query(
                    `call ingreso_despachobodega(${dbodega.iddespacho},${dbodega.idfactura},${dbodega.idproducto},"${dbodega.descripcion}",${dbodega.rollo},${dbodega.yarda},"${dbodega.ubicacion}","${dbodega.estado}","viewpen");`,    
                    (error,res)=>{
                        if (error){
                            console.log(error);
                            result(error,null);
                            return
                        }
                        if(res[0].length){
                            console.log(res[0]);
                            result(null, {message:"Success",res:res[0]});
                        }else{
                            result({error:"not_found"},null);
                        }
                    }
                );
                }
  module.exports=Dbodega;
 
 
 