const Producto = require("../model/model_producto");
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Producto.create(new Producto(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Producto.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el producto ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el producto ",...error});
            }
        }else
        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Producto.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el producto ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el producto ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Producto.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el producto ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el producto ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.getViewVenta=(req,res)=>{     
    Producto.getViewVenta((error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el producto ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el producto ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Producto.update( 
        new Producto(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro el producto ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar el producto ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };
    
exports.getBodegas=(req,res)=>{
 
    Producto.getBodegas(req.params.id,(error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el producto ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el producto ",...error});
            }
        }else
        { res.send(data);}
    }); 
};