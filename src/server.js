
//Initialization
const express =require('express');
const app = express();
 
//importing mongoose
const mongoose = require('mongoose');

//importing notes model
const Note = require('./models/Note');

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json()); 

// extended : true(can handle nested objects)
//    ""    : false(cant handle nested objects)

//connecting to mongodb using mongoose
const mongoDbPath ="mongodb+srv://manishsharma:<password>@cluster0.5vafntl.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function(){
   //App Routes
    app.get("/",function(req,res){
   const response = {message:"API Works"};
   res.json(response);
    });

    
   const noteRouter = require('./routes/Note'); 
   app.use("/notes",noteRouter)
    
});


// Starting the server on a PORT
const PORT = process.env.PORT || 5000 ;
app.listen(PORT,function(){
    console.log("Server started at PORT: " + PORT);
});
