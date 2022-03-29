
const sql=require("../config/db.js");

const Precio=function(precio){
    this.idprecio    =precio.idprecio;
    this.idproducto  =precio.idproducto;
    this.preciorollo =precio.preciorollo;
    this.precioyarda =precio.precioyarda;
}
 

Precio.create=(precio,result)=>{
    sql.query(
      `call ingreso_precio(${precio.idprecio},${precio.idproducto},${precio.preciorollo},${precio.precioyarda},"new");`,
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
    Precio.update=(precio,result)=>{
        sql.query(
            `call ingreso_precio(${precio.idprecio},${precio.idproducto},${precio.preciorollo},${precio.precioyarda},"update");`,
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
        
        Precio.findById=(id, result)=>{
        sql.query(
            `call ingreso_precio(${id},${0},${0},${0},"viewone");`,
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
        Precio.findByPro=(id, result)=>{
            sql.query(
                `call ingreso_precio(${0},${id},${0},${0},"viewxpro");`,
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
            Precio.findAllPro=(id, result)=>{
                sql.query(
                    `call ingreso_precio(${0},${id},${0},${0},"viewall");`,
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
        
        Precio.getView=(result)=>{
            sql.query(
                `call ingreso_precio(${0},${0},${0},${0},"view");`,
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
            Precio.remove=(id,result)=>{
                sql.query(
                    `call ingreso_precio(${id},${0},${0},${0},"delete");`,
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
  module.exports=Precio;
 
 
 