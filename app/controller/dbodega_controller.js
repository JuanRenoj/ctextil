const Dbodega = require("../model/model_dbodega");
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Dbodega.create(new Dbodega(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Dbodega.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro tarea ",...error});
            }else{
                res.status(500).send({message: "Error al consultar tarea ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Dbodega.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro tarea ",...error});
            }else{
                res.status(500).send({message: "Error al consultar tarea ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Dbodega.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro tarea ",...error});
            }else{
                res.status(500).send({message: "Error al consultar terea ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Dbodega.update( 
        new Dbodega(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro tarea ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar tarea ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };
    
exports.getDespacho=(req,res)=>{
    Dbodega.getDespacho(new Dbodega(req.body),(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro tarea ",...error});
            }else{
                res.status(500).send({message: "Error al consultar tarea ",...error});
            }
        }else
        { res.send(data);}
    }); 
}