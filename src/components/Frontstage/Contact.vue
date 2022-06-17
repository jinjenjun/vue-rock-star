<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <!-- 產品介紹 -->
    <section class="contactAllSapce pt-4">

      <div class="container contactAllSapce">

        <div class="row">
          <div class="col-md-12">
            <div>
              <div class="contactTitleOuterSpace">
                <h2  class="contactTitle">客服信箱</h2>       
              </div>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="col-md-6 mb-5 mt-4">
            <div id="leftImg">
              <img :src="basesix[Math.floor(2*Math.random())].img" alt="" class="contactpicStyle">
            </div>
          </div>
          <div class="col-md-6 mb-5 mt-4">

            <form action="" id="needs-validation" novalidate >
              <div class="form-group">
                <label for="username" class="contactFormString">姓名*</label>
                <input type="text" class="form-control" id="username" placeholder="請輸入姓名" required  name="username" v-validate="'required'">
                <!-- <div class="invalid-feedback">
                  請輸入姓名                  
                </div> -->
                <span class="text-danger" v-if="errors.has('username')">姓名不能留空</span>    
              </div>
              <div class="form-group">
                <label for="tel" class="contactFormString">電話*</label>
                <input type="tel" class="form-control" id="tel" placeholder="請輸入電話" required  name="tel" v-validate="'required'">
                <!-- <div class="invalid-feedback">
                  請輸入電話                  
                </div> -->
                <span class="text-danger" v-if="errors.has('tel')">電話不能留空</span>   
              </div>
              <div class="form-group">
                <label for="email" class="contactFormString">Email*</label>
                <input type="email" class="form-control" id="email" placeholder="請輸入Email" required  name="email" v-validate="'required|email'">
                <!-- <div class="invalid-feedback">
                  請輸入Email                 
                </div> -->
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="contactFormString">留言內容*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="請輸入留言內容" required  name="message" v-validate="'required'"></textarea>
                <!-- <div class="invalid-feedback">
                  請輸入留言內容                  
                </div> -->
                <span class="text-danger" v-if="errors.has('message')">留言內容不能留空</span>
              </div>
              <div class="text-right">
                <button type="button" class="btn btn-secondary font-weight-bold">取消</button>
                <button tyep="submit" class="btn btn-primary font-weight-bold">送出</button>
              </div> 

              <!-- <div class="form-group">
                <label for="number">輸入人數*</label>
                <input type="number" class="form-control" id="number" placeholder="請輸入人數" required>
                <div class="invalid-feedback">
                  請輸入人數      
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                  需要素食
                </label>
              </div>
              <div class="form-check mt-1">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  不需要素食
                </label>
              </div> -->

            </form>

          </div>
             
        </div>
      </div>

      <div class="backToTop" id="backToTopTag">
        <img class="arrowUp" src="../../assets/images/arrowup.png" alt="">
      </div>

    </section>



    <ComFrontfooter></Comfrontfooter>

  </div>  

</template>

<script>

import ComFrontnavbar from './FrontPages/ComFrontnavbar';
import ComFrontfooter from './FrontPages/ComFrontfooter';
import $ from 'jquery';

export default {

  data(){

    return{

      basesix :[

        {
          id: 0,
          img: 'static/images/contactpic001.jpg',
        },
        {
          id: 1,
          img: 'static/images/contactpic002.jpg',
        }

      ],

    }
  },

  components: {
    ComFrontnavbar,
    ComFrontfooter,
  },

  created() {

    //側邊廣告功能

    $(function(){
      
      $("#asideButton").click(function(event) {
        $("div").toggleClass("asideIn");
      });


      //回頂部標籤功能

      var distBrand = $(".contactTitleOuterSpace").offset().top
      
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

