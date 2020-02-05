const express=require('express')
const cors=require('cors')
const {MongoClient,ObjectId}=require('mongodb')
const bodyParser=require('body-parser')
const assert=require('assert')


const mongo_url='mongodb://localhost:27017'
const dataBase="RestAPI"

const app=express()

app.use(bodyParser.json())
app.use(cors())

MongoClient.connect(mongo_url,{ useUnifiedTopology: true },(err,client)=>{
    assert.equal(err,null,('DataBase connection failed'))
    const db=client.db(dataBase)

    app.get('/contacts',(req,res)=>{
        db.collection('Contact').find().toArray((err,data)=>{
            if (err) res.send('error finding the contact list')
            else res.send(data)
        })
    })
    
    app.post('/add_contact',(req,res)=>{
        let newContact=req.body
        db.collection('Contact').insertOne(newContact,(err,data)=>{
        if (err) res.send('error adding new contact')
        else res.send(data)
        })
    })
    
    app.delete('/deleted_contact/:id',(req,res)=>{
        let ContactToRemoveId=ObjectId(req.params.id)
        db.collection('Contact').findOneAndDelete({_id:ContactToRemoveId},(err,data)=>{
            if (err) res.send("error deleting contact")
            else res.send(data)
        })
    })
    app.put('/edit_contact/:id',(req,res)=>{
        let ContactToModifyId=ObjectId(req.params.id)
        let modifiedContact=req.body
        db.collection('Contact').findOneAndUpdate({_id:ContactToModifyId},{$set:{...modifiedContact}},(err,data)=>{
            if (err) res.send("error editing contact")
           else  res.send(data)
        })
    })
})




app.listen(3012,(err)=>{
    if (err) console.log("Sercver Crashed")
    else console.log("Server Running")
})