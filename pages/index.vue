<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-08-27 14:37:59
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 15:44:21
 * @FilePath: /umi/umiNuxt/pages/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template lang="pug">
//- div.test
//-   div h1 {{ testD }}

//-   div.testSwiper(data-aos="fade-up" data-aos-duration="800")
//-       myBanner(data-aos="fade-banner-wrapper"
//-         data-aos-duration="600"
//-         data-aos-easing="ease-in-out")
Scene(:data="automatic.sections.scene")
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue';
// import myBanner from '../components/myBanner.vue';
// import SceneModule from '../components/Scene-module.vue';
import Scene from '../components/Scene.vue';
import automatic from '../config/automatic.conf';
export default {
  components: {
        Scene
    },
    data () {
        return {
            automatic,
        }
    },
  computed: {
    testD() {
      return this.$store.state.data
    }
  },
  created() {
    console.log("123");
  },
  // layout: 'blog',

  // 注意这里要和middleware文件名一致
  middleware: 'auth'

  // validate() {
  //   // 这里写验证逻辑
  //   let data = 0
  //   if (data) {
  //     return false
  //   }
  // },
}
</script>

<style lang="scss">
.testSwiper{
  width: 500px;
  height: 200px;
}
.test{
  width: 200px;
  height: 900px;
  color: red;
}
</style>
