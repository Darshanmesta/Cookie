module.exports={
    index:(req,res)=>{
        if(req.cookies.user){
            message=req.cookies.user
        }
        else{
            message="No Cookie has set"
        }

           res.render('index',{msg:message})
    },
    user:(req,res)=>{


           res.render('user')
    },
    setUser:(req,res)=>{
        const data= req.body.user
        res.cookie('user',data, {expire:36000 + Date.now()})
        res.send('New Cookie has created <br><a href="/">Return to Home </a>')
    },

    clearUser:(req,res)=>{
        res.clearCookie('user')
        res.send('User Cookie cleared successfully.<br><a href="/">Return Home</a>')
    }
}