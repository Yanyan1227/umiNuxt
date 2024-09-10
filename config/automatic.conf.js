/*
 * @Author: uyinyan yinyan2323@qq.com
 * @Date: 2024-09-10 16:19:11
 * @LastEditors: uyinyan yinyan2323@qq.com
 * @LastEditTime: 2024-09-10 16:19:11
 * @FilePath: /umi/uuu/newNuxt/config/automatic.conf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { cdnEndpoint } from './endpoint.conf.js'

export default {
  sections: {
    coreFeature: {
      titleConf: {
        title: '智能投放-核心功能'
      },
      content: [
        {
          title: '批量搭建',
          subtitle: '批量创建智能起量，解放双手',
          content: [
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-1_1.png`,
              title: '跨账户管理'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-1_2.png`,
              title: '批量新建'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-1_3.png`,
              title: '批量复制'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-1_4.png`,
              title: '批量修改'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-1_5.png`,
              title: '定向包管理'
            }
          ]
        },
        {
          title: '自动预警',
          subtitle: '24 小时计划监控，防亏损',
          content: [
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-2_1.png`,
              title: '广告止损'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-2_2.png`,
              title: '低质广告清理'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-2_3.png`,
              title: '定期监控'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-2_4.png`,
              title: '24 小时轮询'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-2_5.png`,
              title: '钉钉飞书机器人'
            }
          ]
        },
        {
          title: '智能报表',
          subtitle: '高效管理团队，投放报表一键归拢推送',
          content: [
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-3_1.png`,
              title: '一键推送'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-3_2.png`,
              title: '自定义报表'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-3_3.png`,
              title: '文案报表'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-3_4.png`,
              title: '人效报表'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-3_5.png`,
              title: '团队绩效管理'
            }
          ]
        },
        {
          title: '敏捷素材',
          subtitle: '跨团队素材协同，直播带货爆单归因',
          content: [
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-4_1.png`,
              title: '素材存储'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-4_2.png`,
              title: '自动标签'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-4_3.png`,
              title: '团队协作'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-4_4.png`,
              title: '素材数据归因'
            },
            {
              icon: `${cdnEndpoint}/automatic/core-feature-icon-4_5.png`,
              title: '智能文案推荐'
            }
          ]
        }
      ]
    },
    scene: {
      titleConf: {
        title: '应用场景'
      },
      content: [
        {
          title: '批量管理',
          icon: `${cdnEndpoint}/automatic/scene-icon-1.png`,
          content: {
            intro: '1 分钟创建 1,000+ 计划，10倍提升人效比',
            dataAosDuration: '600',
            dataAosDelay: '0',
            desc: [
              '支持多账户绑定，实现跨账户一站式高效管理',
              '定向 × 创意 × 文案 × 分类标签叉乘组合，灵活测试广告计划',
              '全网优质文案推荐，支持AI智能扩写，一键应用效果提升30%',
              '批量复制优秀计划，调整出价/地域等条件，优化更高效'
            ]
          },
          media: {
            src: `${cdnEndpoint}/automatic/scene-img-1.png`,
            dataAosDuration: '600',
            dataAosDelay: '200',
            blurBg: {
              left: '174px',
              top: '-88px'
            }
          },
          button: {
            link: 'https://auth.youcloud.com/register?app_id=youshu&goto=https://adguanjia.youshu.youcloud.com/pages/block',
            target: '_blank',
            text: '免费试用'
          }
        },
        {
          title: '自动预警',
          reverse: true,
          icon: `${cdnEndpoint}/automatic/scene-icon-2.png`,
          content: {
            intro: '24小时自动监控预警，不做盯盘工具人',
            dataAosDuration: '600',
            dataAosDelay: '200',
            desc: [
              '6种自动预警类型，覆盖广告投放盯盘全场景',
              '多渠道消息通知，及时掌握账户异动情况',
              '预警任务一键复制，高效灵活复用盯盘策略',
              '亏损计划及时止损，优秀计划快速拓量，提升ROI'
            ]
          },
          media: {
            src: `${cdnEndpoint}/automatic/scene-img-2.png`,
            dataAosDuration: '600',
            dataAosDelay: '0',
            blurBg: {
              left: '-77px',
              top: '64px'
            }
          },
          button: {
            link: 'https://auth.youcloud.com/register?app_id=youshu&goto=https://adguanjia.youshu.youcloud.com/pages/block',
            target: '_blank',
            text: '免费试用'
          }
        },
        {
          title: '素材管理',
          icon: `${cdnEndpoint}/automatic/scene-icon-3.png`,
          content: {
            intro: '智能管理与洞察投放素材，全盘掌握起量趋势',
            dataAosDuration: '600',
            dataAosDelay: '0',
            desc: [
              '企业级在线素材库，统一管理内容资产，提升团队协作效率',
              '素材标签自动识别，精细化管理素材，使创意归因更便捷',
              '素材效果评估指数，智能诊断素材效果，自动提供优化建议',
              '跨平台素材数据整合，快速挖掘素材起量趋势，助力迭代优化'
            ]
          },
          media: {
            src: `${cdnEndpoint}/automatic/scene-img-3.png`,
            dataAosDuration: '600',
            dataAosDelay: '200',
            blurBg: {
              left: '-32px',
              top: '18px'
            }
          },
          button: {
            link: 'https://auth.youcloud.com/register?app_id=youshu&goto=https://adguanjia.youshu.youcloud.com/pages/block',
            target: '_blank',
            text: '免费试用'
          }
        },
        {
          title: '智能报表',
          reverse: true,
          icon: `${cdnEndpoint}/automatic/scene-icon-4.png`,
          content: {
            intro: '提供多维度智能数据报表，让数据复盘更高效',
            dataAosDuration: '600',
            dataAosDelay: '200',
            desc: [
              '多平台多维度投放数据清晰呈现，助力轻松盯盘',
              '投放报表自动生成及推送，告别手工繁琐制表',
              '预制多款可视化分析图表，洞察数据趋势更直观',
              '支持自定义报表，量身定制符合团队需求的数据维度'
            ]
          },
          media: {
            src: `${cdnEndpoint}/automatic/scene-img-4.png`,
            dataAosDuration: '600',
            dataAosDelay: '0',
            blurBg: {
              left: '-77px',
              top: '64px'
            }
          },
          button: {
            link: 'https://auth.youcloud.com/register?app_id=youshu&goto=https://adguanjia.youshu.youcloud.com/pages/block',
            target: '_blank',
            text: '免费试用'
          }
        }
      ]
    },
    versionPermission: {
      title: '版本权限',
      ids: [63, 25]
    }
  }
}
