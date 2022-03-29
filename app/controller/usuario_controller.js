const Usuario = require("../model/model_usuario");
const jwt =require("jsonwebtoken");



exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Contenido no puede ser vacio"});
    }

    Usuario.create(new Usuario(req.body), (error, data) =>{
        if(error)
        res.status(500).send({message:"faild", error:error.message});
           
        else res.send(data);
    });
};

exports.findOne=(req,res)=>{
    Usuario.findById(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el usuario ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el usuario ",...error});
            }
        }else

        { res.send(data);}
    }); 
}


exports.findUOne=(req,res)=>{
    Usuario.findUOne(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el usuario ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el usuario ",...error});
            }
        }else

        { res.send(data);}
    }); 
}

exports.getView=(req,res)=>{
 
    Usuario.getView((error,data) =>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el usuario ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el usuario ",...error});
            }
        }else
        { res.send(data);}
    }); 
};
exports.delete=(req,res)=>{
    Usuario.remove(req.params.id,(error,data)=>{
        if(error){  
            if(error.kind === "not_found"){
                res.status(404).send({message:"No se encrontro el usuario ",...error});
            }else{
                res.status(500).send({message: "Error al consultar el usuario ",...error});
            }
        }else
        { res.send(data);}
    });
}

exports.update =(req, res) =>{
    if(!req.body){
        res.status(400).send({msg: "El contenido no puede estar vacio", error:"Llenos los campos antes enviar"});
    }

    Usuario.update( 
        new Usuario(req.body),  
        (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro el usuario ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar el usuario ",...error});
                }
            }else
            { res.send(data);}
        }
        );
    };
    
exports.findUser=(req, res) =>{
         Usuario.findByUser(new Usuario(req.body), 
         (error, data) => {
            if(error){  
                if(error.kind === "not_found"){
                    res.status(404).send({message:"No se encrontro el usuario ",...error});
                }else{
                    res.status(500).send({message: "Error al consultar el usuario ",...error});
                }
            }else
            { 
                const user={
                    id:0,
                    nombre:'distribuidora_gs',
                    cdd:"5689"
                }
                jwt.sign({user}, 'secretKey',(error, token) =>{
                    //console.log(token)
                     //res.json({message:"Bienvenido a centro comercial y textiles gs",token:token});
                     data.res[0].token=token
                      res.send(data);
                })
                
               }
     });
 };
