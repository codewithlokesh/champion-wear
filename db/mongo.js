import mongoose from "mongoose";
mongoose.connect("mongodb+srv://lokeshingle2020:DcvQ7K3zYFeT95Fv@cluster0.xb7okva.mongodb.net/champions?retryWrites=true&w=majority")
.then(result=>{
    console.log("Database Conncted....");
})
.catch(err=>{
    console.log(err);
});
export default mongoose.connection;
