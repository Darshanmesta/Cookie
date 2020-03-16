const express= require('express')
const appRoute=express.Router()

const appControl=require('../controller')

appRoute.route('/').get(appControl.index)
appRoute.route('/user').get(appControl.user)
appRoute.route('/setUser').post(appControl.setUser)
appRoute.route('/clearUser').get(appControl.clearUser)

module.exports=appRoute

