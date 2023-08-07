
const express=require('express')
const app=express();
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandler=require('./middleware/error-handler')
const port=process.env.PORT || 3000

//midleware
app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true
        })
        app.listen(port,()=>{
            console.log(`The Server is listening in port ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}
start()