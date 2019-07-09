<template>
    <div>
       <div class="top">
         <img class="a" src="../assets/logo.png" alt="">
       </div>
       <div class="body">
          <table>
             <tr>
                 <td>用户名</td>
                 <td><input type="text" v-model="uname" ></td>
             </tr>
             <tr>
                 <td>密码</td>
                 <td><input type="password" v-model="upass" ></td>
             </tr>
              <tr>
                 <td>手机号</td>
                 <td><input type="text" v-model="phone" ></td>
             </tr>
             
               <tr>
                 
                 <td colspan=2><input type="button" @click="login" value="注册"></td>
                 
             </tr>
          </table>
       </div>
    </div>
    
</template>
<script>

export default {
    data(){
       return{
            uname:"",
            upass:"",
            phone:"",

       }
    },
    methods:{
        login(){
                var n=this.uname;
                //2.获取用户输入密码  3~8
                var p=this.upass;
                var ph=this.phone;
                var nreg=/^[0-9]{11}$/;
                var preg=/^[a-zA-Z0-9]{3,8}$/;
                if(!preg.test(n)){
                    alert("用户名格式不正确");
                    return;
                }
                //5.判断密码格式不正确  提示出错
                if(!preg.test(p)){
                   alert("密码格式不正确");
                    return;
                }
                if(!nreg.test(ph)){
                   alert("手机号式不正确");
                    return;
                }
                var url="reg";
                var obj={uname:n,upass:p,phone:ph};
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
                    this.$router.push("/login");
                  }
                  });

        }
        
    },
    
}
</script>
<style scope>
    .top{
           width:100%;
           height:60px;
           border-bottom:3px solid red; 
       }
       .top .a{
           display:block;
           margin-left:610px;
           margin-top:10px;
       }
       table{
           margin:200px auto;
       }
       .body{
           width:100%;
           height:400px;
           border-bottom:3px solid #999;
       }
       td{
           border:1px solid red;
       }
    
</style>
