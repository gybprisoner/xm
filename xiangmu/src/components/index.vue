<template>
<div>
     <ddheader style="margin-buttom:50px"></ddheader>
    <div class="body">
        
        <div class="body-a">
            <div class="body-aa">
                <div class="body-aaa">
                    <span class="aa-c">正在热映（49部）</span>
                    <a class="aa-d" href="#">全部></a>
                </div>
                <div  class="aa-a">
                    <div class="aa-b" v-for="(aa,i) of list" :key="i">
                       
                            <div class="fff"><img :src='"http://127.0.0.1:3000/"+aa.img'  alt=""></div>
                            <div class="ddd"><a><span  @click="qqw" :data-ass="aa.aname">购票</span></a></div>
                        

                    </div>
                  
                </div>
                
               
            </div>
            <div class="body-aa body-top">
                    <div class="body-aaa">
                        <span class="aa-c blue">即将上映（139部）</span>
                        <a class="aa-d blue">全部></a>
                    </div>
                    <div class="aa-a">
                        <div class="aa-b" v-for="(aa,i) of list" :key="i">
                            <div>
                                <div class="fff"><img :src='"http://127.0.0.1:3000/"+aa.img' alt=""/></div>
                                <div class="ddd"><a href=""><span class="op">预售</span></a></div>
                            </div>
    
                        </div>
                       
                    </div>
            </div>
            <div class="body-aa body-top">
                <div class="body-aaa">
                    <span class="aa-c ">热播电影</span>
                    <div class="ggg">
                        <a claaa="hhh" href="">爱情</a>
                        <a claaa="hhh" href="">喜剧</a>
                        <a claaa="hhh" href="">动作</a>
                        <a claaa="hhh" href="">恐怖</a>
                        <a claaa="hhh" href="">动画</a>

                    </div>
                    <a class="aa-d sds" href="#">全部></a>

                </div>
                <div class="aa-a">
                    <div class="aa-b" v-for="(aa,i) of list" :key="i">
                        <div>
                            <div class="fff"><img :src='"http://127.0.0.1:3000/"+aa.img' alt=""/></div>
                            <div class="ddd"><a ><span>厉鬼将映&nbsp;9.7分</span></a></div>
                        </div>

                    </div>
                   
                    
                </div>
            </div>

        </div>
        <div class="body-b">
            <div class="b-aa">
                <div class=" b-aa-top">
                    <span>今日票房</span>
                </div>
                <div class="b-aa-a">
                    <ul class="baa">
                        <li class="baaa">
                            <a href="">
                                <img src="../assets/9.png" alt="">
                                <span>复仇者联盟4：终局之战</span>
                                <span class="asd">1.33亿</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i class="qwe">2</i>
                                <span>何以为家</span>
                                <span class="awa">1102.43万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>3</i>
                                <span>下一任：前任</span>
                                <span class="awa">527.29万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>4</i>
                                <span>神奇乐园历险记</span>
                                <span class="awa">325.82万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>5</i>
                                <span>悟空奇遇记</span>
                                <span class="awa">252.58万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>6</i>
                                <span>雪暴</span>
                                <span class="awa">116.44万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>7</i>
                                <span>调音师</span>
                                <span class="awa">74.52万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>8</i>
                                <span>反贪风暴4</span>
                                <span class="awa">52.34万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>9</i>
                                <span>动物出击</span>
                                <span class="awa">32.06万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>10</i>
                                <span>撞死了一只羊</span>
                                <span class="awa">22.87万</span>
                            </a>
                        </li>
                    </ul>
                    <div class="sssss">
                        <div class="baaca">今日大盘</div>
                        <span class="baacb">1.59亿</span>
                        <span class="baacc"><a href="">查看更多></a></span>
                        <span class="baacd">北京时间 13:17:59 猫眼专业版实时票房数据</span>
                    </div>
                </div>
            </div>
            <div class="b-aa body-top">
                    <div class=" b-aa-top">
                        <span>今日票房</span>
                    </div>
                    <div class="b-aa-a">
                        <ul class="baa">
                            <li class="baaa">
                                <a href="">
                                    <img src="../assets/9.png" alt="">
                                    <span>复仇者联盟4：终局之战</span>
                                    <span class="asd">1.33亿</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i class="qwe">2</i>
                                    <span>何以为家</span>
                                    <span class="awa">1102.43万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>3</i>
                                    <span>下一任：前任</span>
                                    <span class="awa">527.29万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>4</i>
                                    <span>神奇乐园历险记</span>
                                    <span class="awa">325.82万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>5</i>
                                    <span>悟空奇遇记</span>
                                    <span class="awa">252.58万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>6</i>
                                    <span>雪暴</span>
                                    <span class="awa">116.44万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>7</i>
                                    <span>调音师</span>
                                    <span class="awa">74.52万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>8</i>
                                    <span>反贪风暴4</span>
                                    <span class="awa">52.34万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>9</i>
                                    <span>动物出击</span>
                                    <span class="awa">32.06万</span>
                                </a>
                            </li>
                            <li class="baab">
                                <a href="">
                                    <i>10</i>
                                    <span>撞死了一只羊</span>
                                    <span class="awa">22.87万</span>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            <div class="b-aa body-top">
                <div class=" b-aa-top">
                    <span>今日票房</span>
                </div>
                <div class="b-aa-a">
                    <ul class="baa">
                        <li class="baaa">
                            <a href="">
                                <img src="../assets/9.png" alt="">
                                <span>复仇者联盟4：终局之战</span>
                                <span class="asd">1.33亿</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i class="qwe">2</i>
                                <span>何以为家</span>
                                <span class="awa">1102.43万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>3</i>
                                <span>下一任：前任</span>
                                <span class="awa">527.29万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>4</i>
                                <span>神奇乐园历险记</span>
                                <span class="awa">325.82万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>5</i>
                                <span>悟空奇遇记</span>
                                <span class="awa">252.58万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>6</i>
                                <span>雪暴</span>
                                <span class="awa">116.44万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>7</i>
                                <span>调音师</span>
                                <span class="awa">74.52万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>8</i>
                                <span>反贪风暴4</span>
                                <span class="awa">52.34万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>9</i>
                                <span>动物出击</span>
                                <span class="awa">32.06万</span>
                            </a>
                        </li>
                        <li class="baab">
                            <a href="">
                                <i>10</i>
                                <span>撞死了一只羊</span>
                                <span class="awa">22.87万</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        
    </div>
    <ddfooter style="margin-top:50px;"></ddfooter>
    </div>
</template>
<script>
import ddheader from './header.vue'
import ddfooter from './footer.vue'
export default {
    data(){
        return{
             list:[]
              
        }
    },
    components:{
        "ddheader":ddheader,
        "ddfooter":ddfooter
    },
    mounted:function(){
        var url="/index";
        this.axios.get(url,{}).then(result=>{
                   this.list=result.data;   
                   console.log(this.list)})
    },
     methods:{
         qqw(e){
             var a=(e.target.dataset.ass);
          this.$router.push({name:"aaa" ,params:{a,}});
        }}
}
</script>
<style scope>
  *{margin: 0;padding: 0;}
li{
    list-style: none;
}
a{text-decoration: none;}
   .body{
    
    display: flex;
    width:70%;
    height:2050px;
    margin: 0 auto;
    margin-top: 67px;
    
}
.body-a{
    width: 60%;
    
}
.body-aa{
    width: 100%;
    height: 620px;

}
.body-aaa{
    width: 100%;
    height: 50px;
    display: flex;
    
}

.aa-a{
    width:94%;
    height:565px;

    margin-left: 20px;

}
.aa-b{
    display:block;
    width:160px;
    height:260px;
    border: 1px solid #d8d8d8 ;
    float:left;
    margin-left: 25px;
    margin-top: 10px;
    margin-bottom: 52px;
}
.fff{
    width: 100%;
    height:220px;
}
.ddd{
    width:100%;
    height:40px;
   
    text-align: center;

}
.ddd a:hover{
    color: white;
    background-color: #ff5700;
}
.ddd a{
    display: block;
    width: 100%;
    line-height: 40px;
    color:#ff5700;
    margin-left: -624px;
}
.ddd span{
    display: block;
    width: 100%;
    line-height: 40px;
   
}
.saas{margin-left: 33px;}
.ssss{margin-top: 40px;}
/*side    asdhfljsdfhklsajdfhkljsadfkljsgalfjsfdaljfsdk*/
.body-b{
    width:40%;
 
}
.b-aa{
    width:88%;
    height: 615px;
    
    margin-left: 60px;
}
.b-aa-top{
    width: 100%;
    height:50px;
    
    font-size: 1.5rem;
    color:#ff5700;
    
}
.b-aa-top span{
    line-height: 50px;
}
/*第一个排行                                 jhasdfiuysaeyhfiouweyriueyroweyriouwqeyriuowqyeyuiwjfiuuisdaiufh*/
.b-aa-a{
    width: 100%;
    height:564px;
}
.baa{
    width: 100%;
    height: 457px;
}
.baaa{
    width :100%;
    height:78px;
}
.baaa img{
    width:120px;
    height:78px;
    float: left;
}
.baaa span{
    width: 220px;
    height :40px;
    display: block;
    float: left;
    color:#000;
    font-size: 20px;
    line-height: 40px;
    margin-left: 20px;
}
.baaa .asd{
    float: left;
    color: #000;
    font-size:16px;
    margin-left: 20px;
    color: #ff5700;

}

.baab{
    width :100%;
    height: 40px;
    border:1px solid transparent;
    color:#000;
    
}
.baab .qwe{
    margin-left: -357px;
}
.baab i{
    font-size: 16px;
    color: #000;
   
}
.aa-d{
    margin-left: 580px;

}
.baab span{
    font-size: 16px;
    color: #000;
    margin-left: 10px;
    line-height: 40px;
}
.baab .awa{
    font-size: 10px;
    color: #ff5700;
    float: right;
    line-height: 40px;
    margin-right: 10px;

}
li:hover{
    background: #d8d8d8;

}
/*今日大盘      asjdfklsadghflsjgdfkasdjfjgakjsghdfjkgajsk
                                         */
.sssss{
    width:100%;
    height:107px;
    border:1px solid #d8d8d8; 
    
}
.baaca{
    width:40px;
    height: 105px;
    background: #ff5700;
    font-size: 21px;
    color:#fff;
    text-align: center;
    float: left;
   
}   
.baacb{
    display: block;
    width: 120px;
    height: 65px;
    line-height:65px;
    font-size: 20px;
    color: #ff5700;
    float: left;
    margin-left: 10px;
}
.baacc{
    display: block;
    width: 70px;
    height: 30px;
    margin-left: 227px; 
    margin-top: 25px;
    font-size: 13px;
    float: left;
}   
.baacc a{
    color:#ff5700;
}
.baacd{
    display: block;
    width: 270px;
    height: 36px;
    float: left;
    line-height: 36px;
    color: #999;
    margin-left: 88px;
    font-size: 12px;
}   
/*diergr第二个的小改*9/*/
.body-top{
    margin-top: 90px;
}    
.blue{
    color:#2D98F3;
   
    }       
.po{
    width: 50%;
    height: 100%;
    float: left;
    line-height: 40px;
    color: #999;
    border-right:1px solid rgb(228, 223, 223);
}                      
.op{
    width: 49%;
    height: 100%;
    float: left;
    color: #2D98F3; 
}
.op a{
    display: block;
    width: 100%;
    height: 100%;
   
    margin:0 auto;
}
.op:hover{
    background: #2D98F3;
    color: #fff;
}
/*kzjhviuasdhfjilhadfkjlahjhasdfjh
第三部分                                   */
.ggg{
    margin-left: 18px;
    margin-top: 20px;
    font-size: 12px;
    width:188px;
    height: 22px;
}
.ggg a{
    display: block;
    float: left;
    color: #000;
    margin-left: 10px;
}
.sds{
    margin-left: 390px;
}
</style>
