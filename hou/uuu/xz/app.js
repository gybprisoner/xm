//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
const index=require("./routes/index");
const details=require("./routes/details");


var app = express();
var server = app.listen(3000);
//统一伪装跨域，之后不用再res.writeHead
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/details",details);


