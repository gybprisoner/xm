<template>
    <div class="toopp">
        <div class="top">

            <a class="top-a" href="#"></a>
            <div class="top-b">北京</div>
            <div class="top-c">
                <ul class="top-c-a">
                    <li class="top-c-d"><a class="top-c-b" href="#">首页</a></li>
                    <li class="top-c-d"><a class="top-c-b" href="#">电影</a></li>
                    <li class="top-c-d"><a class="top-c-b" href="#">影院</a></li>
                    <li class="top-c-d"><a class="top-c-b" href="#">演出</a></li>
                    <li class="top-c-d"><a class="top-c-b" href="#">榜单</a></li>
                    <li class="top-c-d"><a class="top-c-b" href="#">热点</a></li>
                    <li class="top-c-d"><a class="top-c-b" href="#">商城</a></li>
                </ul>
            </div>
            <div class="top-d">
                <div>
                    <span class="d-aa">app下载</span>
                    <div class="d-bb">
                        <img class="qqq" src="../assets/app.png" alt="999"/>
                    </div>
                </div>
                <div class="top-d-a">
                    <input class="top-d-c" type="text"/>
                    <a href="#"><img class="top-d-b" src="../assets/fangda.png" alt=""/></a>
                </div>
                <a @click="dj"><img class="top-d-d" src="../assets/a.png" alt=""/></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     methods:{
           dj(){
                this.$router.push('/login')
           }
         }
}
</script>
<style>
*{margin: 0;padding: 0;}
   li{
    list-style: none;
}
a{text-decoration: none;}
.my_header,.my_footer{
    width: 100%;
    height: 200px;
}
/*头和脚的宽*/
.foota{
    height :200px;
}
/*toppp     sdkjfklhsadfkjhklsadhfkljsadhfksajdhfkjlsadhflkjhasdfklsadhsadfhfjk*/
.toopp{
    width: 100%;
    border-bottom: 1px solid #d8d8d8;
}
.top{
    width: 100%;
    height:80px;
    background: #fff;

    display: flex;
    margin-left:210px  ;
    
}
.top-a{
    width:150px;
    height:80px;

    background: url(../assets/logo.png) no-repeat 50% 50%;
}
.top-b{
    width:100px;
    height:80px;

    font-size: 1rem;
    line-height: 80px;
    text-align: center;
}
.top-c{
    width:800px;
    height:80px;

    
}
.top-c-a{
    display: flex;
}
.top-c-d{

    width: 114px;
    height: 80px;
    text-align: center;
}
.top-c-b{
    display: block;
    width: 114px;
    height:80px;
     font-size: 1.5rem;
    line-height: 80px;
    color:#000;
}
.top-c-d:hover{
    background-color: #ff5700;
}
.top-d{

    width:500px;
    height:80px;

    display: flex;
}
.d-aa{
    width: 120px;
    line-height: 80px;
    font-size: 20px;
    text-align: center;
}
.d-bb{
    width: 120px;
    height: 150px;

}
.qqq{
    display: block;
    width: 100px;
    height: 100px;
    margin-top: 5px;
    display:none;

}
.top-d-a{
    border: 1px solid #999;
    width: 270px;
    height:35px;
    border-radius: 20px;
    margin-top: 20px;
    padding-left: 14px;

}
.top-d-c{
    float: left;
    line-height: 35px;
    width: 235px;
    border: none;

    outline:none ;

}
.top-d-b{
    float: left;
    height: 100%;
    background-color: #ff5700;
    border-radius: 20px;
}
.top-d-d{
    width:40px;
    margin-top: 20px;
    margin-left: 15px;}
</style>
