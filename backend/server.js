const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const connectionString = "mongodb+srv://test:mern12345@cluster0-k2vqb.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
    useNewUrlParser :true,
    useUnifiedTopology :true,
    useCreateIndex:true
}, (err, client) => {
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(client);
    }
    console.log('Connected');
});

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use("/users", userRouter);
app.use("/exercises", exerciseRouter);

app.listen(3000, () => {
    console.log("Server has been started on port 3000.");
});

// const Cat = mongoose.model("Cat",{
//     name:String
// });

// const kitty = new Cat({name:"Amit"});

// kitty.save().then(() => {console.log("Document has been inserted successfully.");})
