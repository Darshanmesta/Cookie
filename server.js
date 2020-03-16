const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const app=express()
const appRoute=require('./router')

app.use(cookieParser())

app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.urlencoded({extended:true}))

app.use('/',appRoute)

app.listen(4000,function(){
    console.log(`Server is upa nd running at ${4000}`)
})