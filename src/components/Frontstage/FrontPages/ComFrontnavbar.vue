<template>
 
  <nav class="navbar navbar-expand-lg navbar-light px-5 sticky-top" style="box-shadow: 2px 2px 10px #ffffff">
    <a class="navbar-brand navbarBrandLogo m-0 p-0" style=" background-color: #190e1b" href=""><img src="../../../assets/images/universal.png" alt="" style="width: 100%"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-light"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mr-5">
        <li class="nav-item">
          <router-link to ="/" class="nav-link" href="#" id="00002">關於伍佰</router-link>
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>
        <li class="nav-item">
          <router-link to ="/composition" class="nav-link" href="#" id="00002">作品欣賞</router-link>
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>
        <li class="nav-item">
          <router-link to ="/activity" class="nav-link" href="#" id="00002">新聞快訊</router-link>
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>

        <li class="nav-item">
          <router-link to ="/contact" class="nav-link" href="#" id="00002">客服信箱</router-link>
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>
      </ul>
    </div>
  </nav>


</template>

<script>
import $ from 'jquery';
export default {

  created() {

    //navbar hover變色與跳出效果
    $(function(){
      $(".nav-item").hover(
        function(e){
          e.preventDefault();
          $(this).find(".innerBar").css("width","100%");
          $(this).siblings().find(".innerBar").css("width","0%");
        },
        function(e){
          e.preventDefault();
          $(this).find(".innerBar").css("width","0%");
          $(this).siblings().find(".innerBar").css("width","0%");
        }
      );	
    });

    $(function(){
      $(".nav-item").hover(
        function (e) {
        e.preventDefault();
        $(this).find(".backgroundBar").css("opacity","100%");
        $(this).siblings().find(".backgroundBar").css("opacity","0%");
        },
        function (e) {
        e.preventDefault();
        $(this).find(".backgroundBar").css("opacity","0%");
        $(this).siblings().find(".backgroundBar").css("opacity","0%");
        }
      );	
    });

  },
};
</script>

