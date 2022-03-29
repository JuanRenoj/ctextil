const sql=require("../config/db.js");

const Usuario=function(usuario){
    this.idusuario=usuario.idusuario;
    this.idempleado=usuario.idempleado;
    this.usuario=usuario.usuario;
    this.pass=usuario.pass;
}

Usuario.create=(usuario,result)=>{
sql.query(
    `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","new");`,
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

Usuario.update=(usuario,result)=>{
    sql.query(
        `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","update");`,
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
    
Usuario.findById=(id, result)=>{
    sql.query(
        `call ingreso_usuario(${id},${0},"${null}","${null}","viewone");`,
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
    Usuario.findUOne=(id, result)=>{
        sql.query(
            `call ingreso_usuario(${0},${id},"${null}","${null}","viewuser");`,
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

    Usuario.getView=(result)=>{
        sql.query(
            `call ingreso_usuario(${0},${0},"${null}","${null}","view");`,
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
        Usuario.remove=(id,result)=>{
            sql.query(
                `call ingreso_usuario(${id},${0},"${null}","${null}","delete");`,
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
        Usuario.findByUser=(usuario, result)=>{
            sql.query(
            `call ingreso_usuario(${usuario.idusuario},${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","login");`,
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

  module.exports=Usuario;
 
 
 