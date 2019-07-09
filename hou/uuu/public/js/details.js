//js/details.js

$(function(){
  var lid=location.search.split("=")[1];
  if(lid!==undefined){
  $.ajax({
      url:"http://localhost:3000/details",
      type:"get",
      data:{lid},
      tataType:"json",
      success:function(result){
          //console.log(result);
          var {product,specs,pics}=result;
          var{title,subtitle,price,promise}=product;
          $("#p-title").html(title);
          $("#p-subtitle").html(subtitle);
          $("#p-price").html(`￥${price.toFixed(2)}`);
          $("#0-promise").html(promise);
      }
  })
}else{
  alert("请提供商品编号?lid=n")
}
})
//在product_details.html结尾引入
//<script src="js/header.js"
//<script src="js/details.js"