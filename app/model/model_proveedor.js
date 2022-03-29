
const sql=require("../config/db.js");

const Proveedor=function(proveedor){
    this.idproveedor=proveedor.idproveedor;
    this.nombre=proveedor.nombre;
    
}
 

  Proveedor.create=(proveedor,result)=>{
    sql.query(
      `call ingreso_proveedor(${proveedor.idproveedor},"${proveedor.nombre}","new");`,
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
    Proveedor.update=(proveedor,result)=>{
        sql.query(
            `call ingreso_proveedor(${proveedor.idproveedor},"${proveedor.nombre}","update");`,
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
        
    Proveedor.findById=(id, result)=>{
        sql.query(
            `call ingreso_proveedor(${id},"${null}","viewone");`,
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
    
        Proveedor.getView=(result)=>{
            sql.query(
                `call ingreso_proveedor(${0},"${null}","view");`,
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
            Proveedor.remove=(id,result)=>{
                sql.query(
                    `call ingreso_proveedor(${id},"${null}","delete");`,
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
  module.exports=Proveedor;
 
 
 