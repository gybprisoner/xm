//app.js node.js 服务器
//1:第三方模块 
//  express          web服务器
//  cors             跨域
//  express-session  session
//  body-parser      处理post数据
//  multer           上传文件
//  fs               文件操作(内置)
//  mysql            mysql驱动模块 
//下载指令:联网 
//npm i express-session body-parser //multer mysql express cors
//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"xm",
  connectionLimit:15
})
//3:创建express对象 nodejs app.js
var server = express();
//4:指定静态资源目录
server.use(express.static("public"))
//5:处理跨域请求
const cors = require("cors");
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://127.0.0.1:8081",
  "http://localhost:8081",
  "http://localhost:8080"],
  credentials:true
}));
//6:添加session功能
const session = require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));
//9:绑定监听端口
server.listen(3000);
//功能一：接收用户注册请求
server.get("/reg",(req,res)=>{
  //1:接收脚手架参数 uname upass
  var phone = req.query.phone;
  var upass = req.query.upass;
  var uname=  req.query.uname;
  //2:sql
  //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
  var sql =" INSERT INTO t_login  SET  ? ";      
      
  //3:返回结果 
  pool.query(sql,[{phone,upass,uname}],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{
      //result=[{id:1}]
     
      res.send({code:1,msg:"登录成功"});
    }
  });
});
//电影数据
server.get("/index",(req,res)=>{
  //1:接收脚手架参数 uname upass
  
  
  //2:sql
  //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
  var sql =" select * from  list";      
      
  //3:返回结果 
  pool.query(sql,[],(err,result)=>{
    if(err)throw err;
    res.send(result)
  });
});
//功能一：接收用户登录请求
server.get("/login",(req,res)=>{
   //1:接收脚手架参数 uname upass
   var phone = req.query.phone;
   var upass = req.query.upass;
   //2:sql
   //  SELECT id FROM t_login WHERE //uname = ? AND upass = md5(?)
   var sql =" SELECT id FROM t_login";       sql+=" WHERE phone = ?";
       sql+=" AND upass = md5(?)";
   //3:返回结果 
   pool.query(sql,[phone,upass],(err,result)=>{
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       //result=[{id:1}]
       req.session.uid = result[0].id 
       res.send({code:1,msg:"登录成功"});
     }
   });
});







 //app.js
 server.get("/aaa",(req,res)=>{
   //参数
   var aname= req.query.aname;
   console.log(aname);
   //sql
   var sql = "SELECT * FROM list WHERE aname = ?";
   pool.query(sql,[aname],(err,result)=>{
     if(err)throw err;
     res.send(result);
   });
   //json
 })
 

