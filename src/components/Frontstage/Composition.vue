<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <section class="entertainAllOutside">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5">

            <div class="entertainTitleOutside">
              <h2  class="entertainTitle">歷年專輯</h2>       
            </div>

            <div id="wrapper" class="p-2 pt-3" style="border: 2px solid #ffc400">
              <div id="buttons" class="m-0 p-0 d-flex" style="justify-content: center;">
                <button value="all" class="__btn001 __filterBtn my-1">全部</button>
                <button value="album1994" class="__btn001 __filterBtn m-1">1994年</button>
                <button value="album1996" class="__btn001 __filterBtn my-1">1996年</button>
                <button value="album1998" class="__btn001 __filterBtn m-1">1998年</button>
                <button value="album1999" class="__btn001 __filterBtn my-1">1999年</button>
              </div>

              <div id="buttons2" class="m-0 p-0 d-flex" style="justify-content: center;">
                <button value="album2003" class="__btn001 __filterBtn mx-1">2003年</button>
                <button value="album2006" class="__btn001 __filterBtn">2006年</button>
                <button value="album2016" class="__btn001 __filterBtn mx-1">2016年</button>
                <button value="album2019" class="__btn001 __filterBtn">2019年</button>
              </div>

              <ul id="list" class="d-flex">
                <li class="album1994"><img src="../../assets/images/cover001.jpg" width=100%></li>
                <li class="album1996"><img src="../../assets/images/cover002.jpg" width=100%></li>
                <li class="album1998"><img src="../../assets/images/cover003.jpg" width=100%></li>
                <li class="album1999"><img src="../../assets/images/cover004.jpg" width=100%></li>

              </ul>
              <ul id="list2" class="d-flex">
                <li class="album2003"><img src="../../assets/images/cover005.jpg" width=100%></li>
                <li class="album2006"><img src="../../assets/images/cover006.jpg" width=100%></li>
                <li class="album2016"><img src="../../assets/images/cover007.jpg" width=100%></li>
                <li class="album2019"><img src="../../assets/images/cover008.jpg" width=100%></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section  class="SongAllOutside py-3">
      <div class="container px-0">
        <div class="col-md-12 mb-4">

          <div class="SongTitleOutside mt-4">
            <h2  class="SongTitle">暢銷金曲</h2>       
          </div>

          <swiper :options="swiperOption" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song001.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong001"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song002.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong002"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song003.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong003"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song004.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong004"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song005.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong005"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song006.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong006"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song007.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong007"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song008.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong008"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song009.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong009"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <img src="../../assets/images/song010.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <div class="SongSingleOutside">                                     
                    <router-link target="_blank" class="p-0 m-0 songSingle" to="/wubaisong010"><button class="__btn001 __songBtn songSingle">點我聽歌</button></router-link>
                  </div>
                </div>
              </div>            
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </section>

    <section class="photoAllOutside">
      <div class="container">

        <div class="photoTitleOutside">
          <h2  class="photoTitle">生活剪影</h2>       
        </div>

        <div class="row">
          <div class="col-md-12 d-flex mx-0 px-0 " style="justify-content: center; align-items: center;">
            <viewer :images="basethree" class="mx-0 px-0" style="cursor:pointer">
              <img v-for="src in basethree" :src="src" :key="src" width="33.333%">
            </viewer>
          </div>
        </div>
      </div>

      <div class="backToTop" id="backToTopTag">
        <img class="arrowUp" src="../../assets/images/arrowup.png" alt="">
      </div>

    </section>
    <ComFrontfooter></ComFrontfooter>

  </div>  

</template>

<script>

import ComFrontnavbar from './FrontPages/ComFrontnavbar';
import ComFrontfooter from './FrontPages/ComFrontfooter';
import $ from 'jquery';

export default {

  name: "images",

  data(){
    return{

      basethree : [

        "static/images/wubaipic001.jpg",
        "static/images/wubaipic002.jpg",
        "static/images/wubaipic003.jpg",
        "static/images/wubaipic004.jpg",
        "static/images/wubaipic005.jpg",
        "static/images/wubaipic006.jpg",
        "static/images/wubaipic007.jpg",
        "static/images/wubaipic008.jpg",
        "static/images/wubaipic009.jpg",
      ],

      swiperOption: {
          slidesPerView: 3,
          // 設置分頁器
          pagination: {
            el: '.swiper-pagination',
            // 設置點擊切換
            clickable: true
          },
          // 設置前進後退按鈕
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // 設置自動輪播
          autoplay: {
            delay: 2000 // 切換秒數
          },
          // 設置輪播可循環
          loop: true
      },

    }
  },

  components: {
    ComFrontnavbar,
    ComFrontfooter,
  },

  methods: {
    onSwiper(){},
    onSlideChange(){}  
  },

  created(){

    $(function(){

      //歷年專輯filter

      // 按下按鈕
      $("button").click(function(){
        // 取得value屬性值
        var target = $(this).attr("value");

        // 比對所有li元素
        $("#list li").each(function(){
          // 將所有li元素隱藏不顯示
          $(this).animate({"opacity" : 0}, 100, function(){
            $(this).hide();

            // 比對是否符合篩選條件
            if($(this).hasClass(target) || target == "all"){
              // 顯示符合篩選條件的元素
              $(this).show();
              $(this).animate({"opacity" : 1}, 100);
            }
          });
        });

        $("#list2 li").each(function(){
          // 將所有li元素隱藏不顯示
          $(this).animate({"opacity" : 0}, 100, function(){
            $(this).hide();

            // 比對是否符合篩選條件
            if($(this).hasClass(target) || target == "all"){
              // 顯示符合篩選條件的元素
              $(this).show();
              $(this).animate({"opacity" : 1}, 100);
            }
          });
        });


      });

      //回頂部標籤功能

      var distBrand = $(".SongAllOutside").offset().top
      
      $(window).scroll(function(){

        if ( $(this).scrollTop() > distBrand ) {
          $("#backToTopTag").addClass("showToTopTag");
        } else {
          $("#backToTopTag").removeClass("showToTopTag");
        }
    
      })

      $('.backToTop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0,
        }, 700)
      });
      
      // 有些瀏覽器只支援html，有些只支援body，所以兩個都寫進去
      
    });

  },

};

</script>




