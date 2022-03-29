const Pxcliente = require("../model/model_pxcliente");
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Pxcliente.create(new Pxcliente(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Pxcliente.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro ",...error});
            }else{
                res.status(500).send({message: "Error al consultar ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.findC=(req,res)=>{
    Pxcliente.findByC(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro ",...error});
            }else{
                res.status(500).send({message: "Error al consultar ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.findCP=(req,res)=>{
    Pxcliente.findByCP(new Pxcliente(req.body),(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro ",...error});
            }else{
                res.status(500).send({message: "Error al consultar ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Pxcliente.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro  ",...error});
            }else{
                res.status(500).send({message: "Error al consultar  ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Pxcliente.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro  ",...error});
            }else{
                res.status(500).send({message: "Error al consultar  ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Pxcliente.update( 
        new Pxcliente(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };