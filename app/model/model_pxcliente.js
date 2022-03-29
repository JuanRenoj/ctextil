
const sql=require("../config/db.js");

const Pxcliente=function(pxcliente){
    this.idprecio   =pxcliente.idprecio;
    this.idproducto =pxcliente.idproducto;
    this.idcliente  =pxcliente.idcliente;
    this.preciorollo=pxcliente.preciorollo;
    this.precioyarda=pxcliente.precioyarda;
    
}
 

Pxcliente.create=(pxcliente,result)=>{
    sql.query(
      `call ingreso_precioxcliente(${pxcliente.idprecio},${pxcliente.idproducto},${pxcliente.idcliente},${pxcliente.preciorollo},${pxcliente.precioyarda},"new");`,
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
    Pxcliente.update=(pxcliente,result)=>{
        sql.query(
            `call ingreso_precioxcliente(${pxcliente.idprecio},${pxcliente.idproducto},${pxcliente.idcliente},${pxcliente.preciorollo},${pxcliente.precioyarda},"update");`,
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
        
        Pxcliente.findById=(id, result)=>{
        sql.query(
            `call ingreso_precioxcliente(${id},${0},${0},${0},${0},"viewone");`,
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
        Pxcliente.findByC=(id, result)=>{
            sql.query(
                `call ingreso_precioxcliente(${0},${0},${id},${0},${0},"viewall");`,
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
    
            Pxcliente.findByCP=(pxcliente, result)=>{
                sql.query(
                    `call ingreso_precioxcliente(${0},${pxcliente.idproducto},${pxcliente.idcliente},${0},${0},"viewxpro");`,
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
        
        Pxcliente.getView=(result)=>{
            sql.query(
                `call ingreso_precioxcliente(${0},${0},${0},${0},${0},"view");`,
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
            Pxcliente.remove=(id,result)=>{
                sql.query(
                    `call ingreso_precioxcliente(${id},${0},${0},${0},${0},"delete");`,
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
  module.exports=Pxcliente;
 
 
 