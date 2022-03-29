const Proveedor = require("../model/model_proveedor");
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Proveedor.create(new Proveedor(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Proveedor.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el proveedor ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el proveedor ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Proveedor.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el proveedor ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el proveedor ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Proveedor.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el proveedor ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el proveedor ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Proveedor.update( 
        new Proveedor(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro el proveedor ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar el proveedor ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };