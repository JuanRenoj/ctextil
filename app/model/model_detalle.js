
const sql=require("../config/db.js");

const Detalle=function(detalle){
    this.iddetalle  =detalle.iddetalle;
    this.idfactura  =detalle.idfactura;
    this.idproducto =detalle.idproducto;
    this.rollo=detalle.rollo;
    this.yarda   =detalle.yarda;
    this.precio     =detalle.precio;
    this.total      =detalle.total;
    
}
 

Detalle.create=(detalle,result)=>{
    sql.query(
      `call ingreso_detalle(${detalle.iddetalle},${detalle.idfactura},${detalle.idproducto},${detalle.rollo},${detalle.yarda},${detalle.precio},${detalle.total},"new");`,
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
    Detalle.update=(detalle,result)=>{
        sql.query(
            `call ingreso_detalle(${detalle.iddetalle},${detalle.idfactura},${detalle.rollo},${detalle.yarda},${detalle.precio},${detalle.total},"update");`,
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
        
        Detalle.findById=(id, result)=>{
        sql.query(
            `call ingreso_detalle(${id},${0},${0},${null},${0},${0},${0},"viewone");`,
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
        Detalle.getFac=(id, result)=>{
            sql.query(
                `call ingreso_detalle(${0},${id},${0},${null},${0},${0},${0},"viewxfa");`,
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
                        console.log(error);
                        result({error:"not_found"},null);
                    }
                }
            );
            }
    
        Detalle.getView=(result)=>{
            sql.query(
                `call ingreso_detalle(${0},${0},${0},${null},${0},${0},${0},"view");`,
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
            Detalle.remove=(id,result)=>{
                sql.query(
                    `call ingreso_detalle(${id},${0},${0},${null},${0},${0},${0},"delete");`,
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
  module.exports=Detalle;
 
 
 