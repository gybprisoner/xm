const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  var sql="select * from xz_index_product where seq_recommended != 0 order by seq_recommended";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  })
})

module.exports=router;