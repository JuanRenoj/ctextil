const http=require('http');
const path=require('path');
const express=require('express');
const socketIO= require("socket.io");
//websocket
const app=express();
const server=http.createServer(app);
const io=socketIO(server,{'transports': ['websocket', 'polling']})
app.use(express.static(path.join(__dirname,'public')));
                                                                                                                                                                                                                                                                                                                           
     io.on('connection',function(socket){                                                                                                                                    
         console.log("nueva conexion " );                                                                                                                                        
         socket.on('Bodega',function(datos){                                                                                                                                     
             io.emit('Bodega',{...datos})                                                                                                                                            
            });                                                                                                                                                                     
            socket.on('BodegaLaSeptima',function(datos){                                                                                                                                    
                io.emit('BodegaLaSeptima',{...datos})                                                                                                                                           
            });                                                                                                                                                                     
            socket.on('BodegaLaVuelta',function(datos){                                                                                                                                    
                io.emit('BodegaLaVuelta',{...datos})                                                                                                                                           
            });                                                                                                                                                                     
            socket.on('Bodega4',function(datos){                                                                                                                                    
                io.emit('Bodega4',{...datos})                                                                                                                                           
            }); 
            socket.on('Caja',function(datos){                                                                                                                                    
                io.emit('Caja',{...datos})                                                                                                                                           
            });    
            socket.on('disconnect',function(datos){
                console.log("socket desconectado",datos)
            })                                                                                                                                                                              
        });                      

server.listen(process.env.PORT || 5000,(error)=>{
    console.log("socket connectado");
})