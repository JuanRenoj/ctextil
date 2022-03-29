const Abono = require("../model/model_abono");

exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Abono.create(new Abono(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Abono.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el abono ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el abono ",...error});
            }
        }else
        { res.send(data);}
    }); 
}


exports.findByCuenta=(req,res)=>{
    Abono.findByCuenta(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el abono ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el abono ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Abono.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el abono ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el abono ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Abono.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el abono ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el abono ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Abono.update( 
        new Abono(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro el abono ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar el abono ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };