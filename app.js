const express= require("express"); 

const app = express();

const PORT = process.env.PORT;

app.listen(PORT || 3000, ()=>{
    console.log(`Server up and running at ${PORT}`);
});

