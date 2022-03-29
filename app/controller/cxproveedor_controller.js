const Cxproveedor = require("../model/model_cxproveedor");
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Cxproveedor.create(new Cxproveedor(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Cxproveedor.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro la cuenta del proveedor ",...error});
            }else{
                res.status(500).send({message: "Error al consultar la cuenta del proveedor ",...error});
            }
        }else
        { res.send(data);}
    }); 
}


exports.GetCXPro=(req,res)=>{
    Cxproveedor.GetCXPro(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro la cuenta del proveedor ",...error});
            }else{
                res.status(500).send({message: "Error al consultar la cuenta del proveedor ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Cxproveedor.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro la cuenta del proveedor ",...error});
            }else{
                res.status(500).send({message: "Error al consultar la cuenta del proveedor ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Cxproveedor.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro la cuenta del proveedor para eliminar ",...error});
            }else{
                res.status(500).send({message: "Error al consultar la cuentad el proveedor para eliminar",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Cxproveedor.update( 
        new Cxproveedor(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro la cuenta del proveedor ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar la cuenta del proveedor ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };