const sql=require("../config/db.js");

const Empleado=function(empleado){
    this.idempleado=empleado.idempleado;
    this.nombre=empleado.nombre;
    this.apellido=empleado.apellido;
    this.dpi=empleado.dpi;
    this.telefono=empleado.telefono;
    this.correo=empleado.correo;
    this.estado=empleado.estado;
    
}

Empleado.create=(empleado,result)=>{
sql.query(
    `call ingreso_empleado(${empleado.idempleado},"${empleado.nombre}","${empleado.apellido}","${empleado.dpi}",${empleado.telefono},"${empleado.correo}","${empleado.estado}","new");`,
    (error,res)=>{
        if(error){
            console.log("Hubo un error durante la operación", error.message);
            result(error, null);
            return;
        }else{
        console.log(res);
        console.log("Empleado Ingresado",{mesage: "Success",res:res});
        result(null,{message:"Success",res:res});
        }
    });
}
Empleado.update=(empleado,result)=>{
    sql.query(
        `call ingreso_empleado(${empleado.idempleado},"${empleado.nombre}","${empleado.apellido}","${empleado.dpi}",${empleado.telefono},"${empleado.correo}","${empleado.estado}","update");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error.message);
                result(error, null);
                return;
            }else{
            console.log(res);
            console.log("empeleado Ingresado",{message: "Success",res:res});
            result(null,{message:"Success",res:res});
            }
        });
    }
    
Empleado.findById=(id, result)=>{
    sql.query(
        `call ingreso_empleado(${id},"${null}","${null}","${null}",${0},"${null}","${null}","viewone");`,
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

    Empleado.getView=(result)=>{
        sql.query(
            `call ingreso_empleado(${0},"${null}","${null}","${null}",${0},"${null}","${null}","view");`,
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
        Empleado.remove=(id,result)=>{
            sql.query(
                `call ingreso_empleado(${id},"${null}","${null}","${null}",${0},"${null}","${null}","delete");`,
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
  module.exports=Empleado;
 
 
 