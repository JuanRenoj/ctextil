
const sql=require("../config/db.js");

const Factura=function(factura){
    this.idfactura  =factura.idfactura;
    this.idcliente  =factura.idcliente;
    this.idempleado =factura.idempleado;
    this.fecha      =factura.fecha;
    this.total      =factura.total;
    this.estado     =factura.estado;
    this.lugar      =factura.lugar;
    
}
 

Factura.create=(factura,result)=>{
    sql.query(
      `call ingreso_factura(${factura.idfactura},${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${factura.estado}","${factura.lugar}","new");`,
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
        });
    }
    Factura.update=(factura,result)=>{
        sql.query(
            `call ingreso_factura(${factura.idfactura},${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${factura.estado}","${factura.lugar}","update");`,
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
        
        Factura.findById=(id, result)=>{
        sql.query(
            `call ingreso_factura(${id},${0},${0},"2022-02-02",${0},"${null}","${null}","viewone");`,
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
        Factura.getCaja=(factura, result)=>{
            sql.query(
                `call ingreso_factura(${factura.idfactura},${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${factura.estado}","${factura.lugar}","viewcaja");`,
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
    
            Factura.getHoy=(factura, result)=>{
                sql.query(
                    `call ingreso_factura(${factura.idfactura},${factura.idcliente},${factura.idempleado},"${factura.fecha}",${factura.total},"${factura.estado}","${factura.lugar}","viewhoy");`,
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
        
        Factura.getView=(result)=>{
            sql.query(
                `call ingreso_factura(${0},${0},${0},"2022-02-02",${0},"${null}","${null}","view");`,
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
            Factura.remove=(id,result)=>{
                sql.query(
                    `call ingreso_factura(${id},${0},${0},"2022-02-02",${0},"${null}","${null}","delete");`,
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
            Factura.getViewOrden=(result)=>{
                sql.query("SELECT * FROM numero_orden",(err,res)=>{
    
                    if(err){
                        console.log("error", err);
                        result(error,null);
                        return;
                    }
                    if(res.length){
                  
                    result(null, {message:"Success",res:res});
                    return;
                    }
                    result({error:"not_found"},null);
                });
                }
  module.exports=Factura;
 
 
 