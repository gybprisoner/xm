<template>
<div>
     <adheader></adheader>
    <div class="asas">
       
    <div class="bg"></div>
      <div class="bod">
          <img :src='"http://127.0.0.1:3000/"+pro.img' class="img" alt="">
          <div class="jieshao">
            <span class="a">{{pro.aname}}</span>
            <span class="s">{{pro.ename}} </span>
            <span class="d">{{pro.atype}}</span>
            <span class="f">{{pro.coun}}/{{pro.shic}}</span>
            <span class="g">{{pro.sy}}</span>
            <div class="anniu"><div class="h">  <button class="j">想看</button>
            <button class="k">评分</button></div>
            <div class="l"> <button class="q">购票</button></div>
            </div>
          </div>
          
      </div>
       <div>
              <!------左半部分即可撒都不放假快乐撒地方了健康撒地方看见啦十多个回复即可--------->
         <div class="aa">
           <div class="bb">介绍</div>
           <div>剧情简介</div>
           <div class="c">英国黑衣人总部王牌探员H（克里斯·海姆斯沃斯 饰）与新晋探员M（泰莎·汤普森 饰）在阻止外星团伙入侵的过程中意外铲除了隐藏在黑衣人组织中的内奸，成功拯救世界。</div>
           <div>演职人员</div>
           <div class="d"><span>导演</span><span>演员</span></div>
           <div class="f">
              
              <div class="gg">
             <img src="../assets/21.png" alt="">
              <span>F·加里·格雷</span>
              </div>
              <div class="gg">
                 <img src="../assets/22.png" alt="">
                 <span>克里斯·海姆斯沃斯</span>
                 <span>饰：特工H Agent H</span>
              </div>
              <div class="gg">
               <img src="../assets/23.png" alt="">
                 <span>泰莎·汤普森</span>
                 <span>饰：特工M Agent</span>
                 </div>
              <div class="gg">
                <img src="../assets/24.png" alt="">
                 <span>丽贝卡·弗格森</span>
                 <span>饰：Riza</span>
              </div>
              <div class="gg">
                 <img src="../assets/25.png" alt="">
                 <span>连姆·尼森</span>
                 <span>饰：High T</span>
              
              </div>
           </div>
           
           
         </div>
         <!-- 右半部分          是，假道伐虢手机卡大富科技sad回复了空间撒地方还看见了sad-->
         <div class="kk">
            <div class="sd">相关资讯</div>
            <div>
                <ul>
                    <li>
                      <img src="../assets/11.png" alt="">
                      <span>《黑衣人：全球追缉》发布中国独家片段，外星人黄渤意外暴露行踪</span>
                    </li>
                    <li>
                       <img src="../assets/12.png" alt="">
                      <span>《黑衣人：全球追缉》热映中！看锤哥女武神全球狂飙组队打怪</span>
                    </li>
                    <li>
                       <img src="../assets/13.png" alt="">
                      <span>《复联4》后，《黑衣人：全球追缉》接棒成为口碑大片</span>
                    </li>
                </ul> 
            </div>
           </div>
         </div>
         
    </div>
     <afooter style="margin-top:720px"></afooter>
</div>
</template>
<script>
import asd from './header.vue'
import asda from './footer.vue'
export default {
    data() {
        return {
          
            pro:{}
                
        }
    },
    components:{
        "adheader":asd,
        "afooter":asda
    },
     mounted:function(){
        this.a= this.$route.params.a;
     console.log(this.a);
      var url="/aaa";
      var obj={aname:this.a};

      this.axios.get(url,{params:obj}).then(result=>{
                      
                   this.pro=result.data[0];
                    console.log(this.pro);
                        })
     }
}
</script>
<style scope>
.asas{
    margin-top: 50px;
}
/* sdfgsdf? */
/* 上半部分详情页？oloipopioujoiujopiujoihyuoiuhyiughiug、 */
    .bg{
          width:100%;
          height:376px;
          background-color:#704451;
          position: relative;
      }
    .bod{
        position: absolute;
        top: 190px;
        left:570px;
        color:#fff;
        display:flex;
       
          
    }     
    .img{
        width:240px;
        height:330px;
    }
     .jieshao{
         display:flex;
         flex-direction:column;
         width:300px;
         margin-left:70px;
      }
     .anniu{
          display:flex;
          flex-direction:column;
          width:60px;
      }
     .anniu div{
         display :flex;
         
      }
     .a{
         font-size:25px;
       }
   
     .d,.f,.g{ 
         font-size:14px;
         margin-top:12px;
         }
     .l,.h{
         width:200px;

          }
     .j,.k{
         width:50%;
         height:36px;
         opacity:.5;  
           }
     .h{
         margin-top:50px;
      }
     .q{ width:100%;
         height:36px;
         background:#ff5700;
       }
    .l{
       margin-top:10px; 
       }
    /* 下半部分详情sdjhsadfsadghasdfasdfsadasdfsaghdfhasgdf */
   .aa{margin-top: 100px;
        width:700px;
      
        float: left;
        margin-left: 300px;
       }
       .bb{
           color:#ff5700;
           margin-bottom: 25px;
           font-size: 24px;
           margin-top: 30px;
       }
       .c{
           font-size: 14px;
           margin-top: 50px;
       }
       .d{
           display: flex;
       }
       .f{
           display: flex;
       }
       .gg{
           display: flex;
           flex-direction: column;
           margin-top: 30px;
           margin-right: 10px;
       }
       .hh{
        display: flex;  
       }
       .kk{
           margin-left: 50px;
           width:500px;
           float:left;
           margin-top: 150px;
           margin-bottom: 200px;
       }
       .kk li{
           margin-top: 30px;
           display: flex;
       }
       .sd{
           margin-left: 35px;
       }
  
</style>
