
const sql=require("../config/db.js");

const Abono=function(abono){
this.idabono =abono.idabono;
this.idcuenta=abono.idcuenta;
this.cantidad=abono.cantidad;
this.tipopago=abono.tipopago
this.comprobante =abono.comprobante;
    
}
 

Abono.create=(abono,result)=>{
    sql.query(
      `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.cantidad},"${abono.tipopago}","${abono.comprobante}","new");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error);
                result(error, null);
                return;
            }else{
            console.log(res);
            console.log("Ingresado",{mesage: "Success",res:res});
            result(null,{message:"Success",res:res});
            }
        });
    }
    Abono.update=(abono,result)=>{
        sql.query(
            `call ingreso_abono(${abono.idabono},${abono.idcuenta},${abono.cantidad},"${abono.tipopago}","${abono.comprobante}","update");`,
            (error,res)=>{
                if(error){
                    console.log("Hubo un error durante la operación", error);
                    result(error, null);
                    return;
                }else{
                console.log(res);
                console.log(" Ingresado",{message: "Success",res:res});
                result(null,{message:"Success",res:res});
                }
            });
        }
        
        Abono.findById=(id, result)=>{
        sql.query(
            `call ingreso_abono(${id},${0},${0},"${null}","${null}","viewone");`,
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
        Abono.findByCuenta=(id, result)=>{
            sql.query(
                `call ingreso_abono(${0},${id},${0},"${null}","${null}","viewxcuenta");`,
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
    
        Abono.getView=(result)=>{
            sql.query(
                `call ingreso_abono(${0},${0},${0},"${null}","${null}","view");`,
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
            Abono.remove=(id,result)=>{
                sql.query(
                    `call ingreso_abono(${id},${0},${0},"${null}","${null}","delete");`,
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
  module.exports=Abono;
 
 
 