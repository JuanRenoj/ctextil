const mysql=require("mysql");
const dbconfig=require("./db_config");

const connection=mysql.createConnection({
host:dbconfig.HOST,
port:dbconfig.PORT,
user:dbconfig.USER,
password:dbconfig.PASSWORD,
database:dbconfig.DB
});

function handleDisconnect(){
    console.log('handleDisconnect()');
    connection.destroy();
    connection.mysql.createConnection(connection);

connection.connect(error =>{
    if(error) {
         console.log(error);
         setTimeout(handleDisconnect,1000);
        throw error;
       
    }
    else{
       console.log("Conectado a la base de datos"); 
    }
    
});
connection.on(error,function(err){
    if(err){
        setTimeout(handleDisconnect,1000);
        handleDisconnect();
    }else{
        throw err;
    }
});
}
module.exports=connection;