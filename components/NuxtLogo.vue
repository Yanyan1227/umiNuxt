<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:17:42
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:17:43
 * @FilePath: /umi/uuu/newNuxt/components/NuxtLogo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-08-27 14:37:59
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-08-28 18:05:15
 * @FilePath: /umi/umiNuxt/components/NuxtLogo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    NuxtLgo
    testData
  </div>

</template>

<script>
export default {
  data() {
    return {
      testData: []
    }
  },
  created() {
    console.log('created')
  },
  asyncData() {
    console.log('NuxtLgo asyncData')
  },
  fetch() {
    console.log('NuxtLgo fetch')
  }
}
</script>
