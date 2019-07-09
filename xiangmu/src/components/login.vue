<template>
    <div class="hang clearflx" >
       <div class="ds">
         <img src="../assets/logo.png" alt="">
       </div>
       <div class="df">
        <img src="../assets/qqq.png" alt="">
       </div>
       <div class="table">
          <table class="dsd">
              <tr class="plp">
                  <td class="one"><span>账号登陆</span></td>
                  <td  class="one"></td>
              </tr>
              <tr class="plp oo">
                  <td colspan=2><input type="text" v-model="phone"  id="phone" placeholder="+86>手机号"></td>
                  
              </tr>
              <tr>
                  <td colspan=2 class="oo"></td>
              </tr>
              <tr class="plp lm">
                  <td colspan=2><input type="password" v-model="upass"  placeholder="密码" id="mim"></td>
                  
              </tr>
              <tr class="plp">
                  <td></td>
                  <td  class="sd"><a href="">忘记密码</a></td>
              </tr>
              <tr class="plp">
                  <td colspan=2 class="ef"><input  @click="login" type="button" value="登录" id="dl"></td>
                  
              </tr>
              <tr class="plp">
                  <td class="fg"><span>还没有账号？</span><a href="">免费登录</a></td>
                  <td></td>
              </tr>
          </table>
       </div>
     </div>
</template>
<script>
export default {
      data(){
            return{
             
              phone:"",
              upass:"",
            }
        },
        methods:{
            login(){
                //完成用户登录
                //1.获取用户输入用户名  3~10
                var n=this.phone;
                //2.获取用户输入密码  3~8
                var p=this.upass;
                
                //3.创建两个正则表达式
                var nreg=/^[0-9]{3,15}$/;
                var preg=/^[a-zA-Z0-9]{3,8}$/;
                //4.判断用户名格式不正确  提示出错
               
                if(!nreg.test(n)){
                    alert("用户名格式不正确");
                    return;
                }
                //5.判断密码格式不正确  提示出错
                if(!preg.test(p)){
                   alert("密码格式不正确");
                    return;
                }
                //6.将用户名和密码发送  ajax请求
                var url="login";
                var obj={phone:n,upass:p};
                //7.并且获取服务器返回结果
                this.axios.get(url,{params:obj}).then(result=>{
                  //result 对象服务器返回的结果
                  //console.log(result.data.code);
                  //console.log(result.data.msg);
                  if(result.data.code==-1){
                    //8.返回失败  提示
                    alert(result.data.msg);
                  }else{
                    //this.$messagebox("消息",result.data.msg);
                    //9.返回成功  跳转Home.vue
                    this.$router.push("/");
                  }
                  });  
          }
        },
}

</script>
<style scope>
.hang{
    width: 100%;
   
    
}
a{text-decoration: none;}
.clearflx::before,
.clearflx::after{
    content: "";
    display: table;
}
.clearflx::after{
    clear: both;
}
.ds{
    float: left;
    margin-left:380px ;
    margin-top: 100px;
}
.ds img{
    width: 250px;
}
.df{
    margin-left:-240px ;
    float: left;
    margin-top: 180px;
}
.df img{
    width:600px;
}
.table{
    margin-top:250px ;
    margin-left: 50px;
    float:left;
}
.dsd{
     width: 360px;
     

}
.plp  .one span{
    color:#666;
    font-size:1rem;
}
.plp  a{
    font-size: 0.8rem;
    color:#ff5700;

}
.plp  .one a{
    
    padding-right: 10px;
    float :right;

}
.plp .sd a{
    padding-right: 10px;
    float :right;
}
.plp td{
    
    height: 45px;
    
}
.oo{
    height:20px;
}
td input{
   display: block;
   width: 350px;
   height:40px;
}
.fg span{
    font-size:0.8rem;  
}

.ef button{
    display: block;
    width:350px; 
    height :40px;
    background: #FF5700;
    color: azure;
    border: none;
}

</style>

