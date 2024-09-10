/*
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:18:39
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:18:40
 * @FilePath: /umi/uuu/newNuxt/common/plugins/aos.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-05 10:21:56
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-05 11:02:43
 * @FilePath: /umi/umiNuxt/common/plugins/aos.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import AOS from 'aos'
import Vue from 'vue'

class AosPlugin {
  config = {
    offset: 0,
    once: true,
    disable: 'mobile'
  }

  install (Vue) {
    AOS.init(this.config)

    Vue.mixin({
      updated () {
        this.$nextTick(() => {
          AOS.refreshHard()
        })
      }
    })
  }
}

Vue.use(new AosPlugin())
