
const sql=require("../config/db.js");

const Informe=function(informe){
    this.id_fac     =informe.id_fac;
    this.fech1      =informe.fech1;
    this.fech2     =informe.fech2;
    this.accion=informe.accion
}
 

Informe.getInforme=(informe,result)=>{
    sql.query(
      `call consulta_ventas(${informe.id_fac},"${informe.fech1}","${informe.fech2}","${informe.accion}");`,
        (error,res)=>{
            if(error){
                console.log("Hubo un error durante la operación", error);
                result(error, null);
                return;
            }if(res[0].length){
                console.log(res[0]);
                result(null, {message:"Success",res:res[0]});
            }else{
                result({error:"not_found"},null);
            }
        });
    }
 
      
  module.exports=Informe;
 
 
 