<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:17:48
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:17:49
 * @FilePath: /umi/uuu/newNuxt/components/Scene-module.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-05 15:01:27
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 14:03:30
 * @FilePath: /umi/umiNuxt/components/Scene-module.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEdiv
-->
<template lang="pug">
section.ys-scene-module(:class="data.reverse && 'reverse'")
    ul.ys-scene-module__content-wrapper(
      data-aos="fade-scene-section"
      :data-aos-duration="data.content.dataAosDuration"
      :data-aos-delay="data.content.dataAosDelay"
    )
        h2.ys-scene-module__content-title
            img(:src="data.icon")
            span {{ data.title }}
        p.ys-scene-module__content-intro(v-if="data.content.intro") {{ data.content.intro }}
        div.description(v-if="data.content.description") {{ data.content.description }}
        ul.ys-scene-module__content-desc
            li(
                v-for="item in data.content.desc"
                :key="item"
            ) {{ item }}
    div.ys-scene-module__media-wrapper(
        data-aos="fade-scene-section"
        :data-aos-duration="mediaData.dataAosDuration"
        :data-aos-delay="mediaData.dataAosDelay"
    )
        div.blur-bg(:style="mediaData.blurBg")
        component.ys-scene-module__media(
            :is="mediaData.type"
            :src="mediaData.src"
            ref="sceneMedia"
            muted
            autoplay
            :data-delay="mediaData.dataAosDuration"
        )
</template>

<!-- <script>
export default{
  name: "SceneModule",
  props:{
    data:{
      type:Object,
      default:() =>({})
    }
  }
}
</script> -->
<script>
export default {
    name: 'SceneModule',
    props: {
        // 场景模块数据
        data: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        // 媒体数据
        mediaData () {
            const src = this.data.media?.src ?? ''
            return {
                ...this.data.media,
                src,
                type: this.data.media?.isVideo ? 'video' : 'img'
            }
        }
    },
    mounted () {
        if (this.$refs.sceneMedia && this.mediaData.isVideo) {
            this.$refs.sceneMedia.addEventListener('play', this.delayPlayVideo)
        }
    },
    methods: {
        getStyle ({ left, top, dataAosDelay, dataAosDuration }) {
            return {
                left,
                top,
                transitionDelay: `${dataAosDelay}ms`,
                transitionDuration: `${dataAosDuration}ms`
            }
        },
        /**
         * @description 延迟播放video
         * @param {Element} e 页面组件
         */
        delayPlayVideo (e) {
            e.target.pause()
            e.target.removeEventListener('play', this.delayPlayVideo)
            setTimeout(() => e.target.play(), e.target.dataset?.delay || 100)
        }
    }
}
</script>

<!-- <style lang="scss">
.ys-scene-module {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding-top: 40px;
    & + & {
        padding-top: 80px;
    }
    &.reverse {
        flex-direction: row-reverse;
        .ys-scene-module__content-wrapper {
            margin: 0 0 0 32px;
            padding-left: 48px;
        }
    }

    &__content {
        &-wrapper {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            margin: 0 32px 0 0;
            padding-left: 48px;

            .description {
                font-weight: 400;
                font-size: 14px;
                line-height: 26px;
            }
            .common-button {
                margin-top: 40px;
            }
        }
        &-title {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            > img {
                height: 48px;
            }
            > span {
                margin-left: 8px;
            }
        }
        &-intro {
            margin-bottom: 16px;
        }
        &-desc {
            & > li {
                position: relative;
                padding-left: 12px;
                &:before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 4px;
                    height: 4px;
                    transform: translateY(-50%);
                }
                &:not(:first-of-type) {
                    margin-top: 12px;
                }
            }
        }
    }

    &__media {
        width: 640px;
        &-wrapper {
            position: relative;
            .blur-bg {
                position: absolute;
                top: -122px;
                left: -93px;
                z-index: -1;
                width: 476px;
                height: 476px;
                opacity: 0.1;
                filter: blur(250px);
            }
            .reverse-blur-bg {
                top: -87px;
                left: 275px;
            }
        }
    }
}
</style>
 -->
