const sql=require("../config/db.js");

const Modulo=function(modulo){
    this.idmodulo=modulo.idmodulo;
    this.nombre=modulo.nombre;
  
}

Modulo.create=(modulo,result)=>{
sql.query(
    `call ingreso_modulo(${modulo.idmodulo},"${modulo.nombre}","new");`,
    (error,res)=>{
        if(error){
            console.log("Hubo un error durante la operación", error.message);
            result(error, null);
            return;
        }else{
        console.log(res);
        console.log("Usuario Ingresado",{message: "Success",res:res});
        result(null,{message:"Success",res:res});
        }
    });
}

Modulo.update=(modulo,result)=>{
    sql.query(
        `call ingreso_modulo(${modulo.idmodulo},"${modulo.nombre}","update");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error.message);
                result(error, null);
                return;
            }else{
            console.log(res);
            console.log("Usuario Ingresado",{message: "Success",res:res});
            result(null,{message:"Success",res:res});
            }
        });
    }
    
Modulo.findById=(id, result)=>{
    sql.query(
        `call ingreso_modulo(${id},"${null}","viewone");`,
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

    Modulo.getView=(result)=>{
        sql.query(
            `call ingreso_modulo(${null},"${null}","view");`,
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
        Modulo.remove=(id,result)=>{
            sql.query(
                `call ingreso_modulo(${id},"${null}","delete");`,
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

  module.exports=Modulo;
 
 
 