
const sql=require("../config/db.js");

const Permiso=function(permiso){
this.idpermiso  =permiso.idpermiso;
this.idempleado =permiso.idempleado;
this.idmodulo   =permiso.idmodulo;
this.lectura    =permiso.lectura;
this.escritura  =permiso.escritura;
    
}
 

Permiso.create=(permiso,result)=>{
    sql.query(
      `call ingreso_permiso(${permiso.idpermiso},${permiso.idempleado},${permiso.idmodulo},${permiso.lectura},${permiso.escritura},"new");`,
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
    Permiso.update=(permiso,result)=>{
        sql.query(
            `call ingreso_permiso(${permiso.idpermiso},${permiso.idempleado},${permiso.idmodulo},${permiso.lectura},${permiso.escritura},"update");`,
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
        
        Permiso.findById=(id, result)=>{
        sql.query(
            `call ingreso_permiso(${id},${0},${0},${0},${0},"viewone");`,
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
        Permiso.findByEmp=(id, result)=>{
            sql.query(
                `call ingreso_permiso(${0},${id},${0},${0},${0},"viewxemp");`,
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
    
        Permiso.getView=(result)=>{
            sql.query(
                `call ingreso_permiso(${0},${0},${0},${0},${0},"view");`,

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
            Permiso.remove=(id,result)=>{
                sql.query(
                    `call ingreso_permiso(${id},${0},${0},${0},${0},"delete");`,

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
  module.exports=Permiso;
 
 
 