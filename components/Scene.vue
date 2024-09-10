<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:17:57
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:17:59
 * @FilePath: /umi/uuu/newNuxt/components/Scene.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-05 15:00:44
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-05 17:50:43
 * @FilePath: /umi/umiNuxt/components/scence.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template lang="pug">
div.ys-feature__scene-wrapper
        scene-module(
            v-for="item in data.content"
            :key="item.title"
            :data="item"
        )
</template>

<script>
import SceneModule from './Scene-module.vue';

export default{
  components:{
    SceneModule
  },
  props: {
        // 功能页应用场景数据
        data: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>
<!-- <style lang="scss">
.ys-feature__scene {
    width: 1200px;
    margin: 0 auto;
    padding: 200px 0;
    &-title {
        text-align: center;
    }
}
</style> -->


