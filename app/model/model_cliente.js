
const sql=require("../config/db.js");

const Cliente=function(cliente){
    this.idcliente=cliente.idcliente;
    this.nombre =cliente.nombre;
    this.apellido =cliente.apellido;
    this.direccion=cliente.direccion;
    this.telefono =cliente.telefono;
    this.correo =cliente.correo;
    
}
 

  Cliente.create=(cliente,result)=>{
    sql.query(
      `call ingreso_cliente(${cliente.idcliente},"${cliente.nombre}","${cliente.apellido}","${cliente.direccion}",${cliente.telefono},"${cliente.correo}","new");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la cliente", error.message);
                result(error, null);
                return;
            }else{
            console.log(res);
            console.log("Ingresado",{mesage: "Success",res:res});
            result(null,{message:"Success",res:res});
            }
        });
    }
    Cliente.update=(cliente,result)=>{
        sql.query(
            `call ingreso_cliente(${cliente.idcliente},"${cliente.nombre}","${cliente.apellido}","${cliente.direccion}",${cliente.telefono},"${cliente.correo}","update");`,
            (error,res)=>{
                if(error){
                    console.log("Hubo un error durante la cliente", error.message);
                    result(error, null);
                    return;
                }else{
                console.log(res);
                console.log(" Ingresado",{message: "Success",res:res});
                result(null,{message:"Success",res:res});
                }
            });
        }
        
        Cliente.findById=(id, result)=>{
        sql.query(
            `call ingreso_cliente(${id},"${null}","${null}","${null}",${0},"${null}","viewone");`,
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
    
        Cliente.getView=(result)=>{
            sql.query(
                `call ingreso_cliente(${0},"${null}","${null}","${null}",${0},"${null}","view");`,
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
            Cliente.remove=(id,result)=>{
                sql.query(
                    `call ingreso_cliente(${id},"${null}","${null}","${null}",${0},"${null}","delete");`,
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
  module.exports=Cliente;
 
 
 