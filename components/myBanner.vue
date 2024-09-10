<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:17:36
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:17:37
 * @FilePath: /umi/uuu/newNuxt/components/myBanner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-04 14:16:31
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-04 18:52:14
 * @FilePath: /umi/umiNuxt/components/myBanner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- <template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div> -->
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template> -->

<template lang="pug">
div(v-swiper:mySwiper="swiperOption")
    div.swiper-wrapper
      div.swiper-slide Slide 1
      div.swiper-slide Slide 2
      div.swiper-slide Slide 3

    div.swiper-pagination


    div.swiper-button-prev
    div.swiper-button-next
</template>
<script>
import { directive } from 'vue-awesome-swiper'

export default{
directives: {
        swiper: directive
    },
    data() {
    return {
      mySwiper: null,
      swiperOption: {
        // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  }
}
  </script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
  background-color: pink;
}
.swiper-wrapper .swiper-slide {
  height: 100vh;
  background-color: skyblue;
  text-align: center;
}
</style>
