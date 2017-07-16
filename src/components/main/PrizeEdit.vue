<template>

  <edit-view :model="model"
             title="禮物"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'Prize',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '禮物名稱',
            key: 'name',
            required: true,
          },
          {
            title: '價格',
            key: 'price',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '單位',
            key: 'price_type',
            type: 'radio-button',
            choices: vm.$root.choices.prize_price_type,
            default: 'COIN',
          },
          {
            title: '禮物分類',
            type: 'object',
            key: 'category',
            options: {
              model: 'PrizeCategory',
              display_field: 'name',
              show_pager: true,
              cols: [{
                title: '分類ID',
                key: 'id',
                ordering: 'id',
              }, {
                title: '分類名稱',
                key: 'name',
                filtering: {
                  search_field: 'kw_name',
                },
              }],
            },
          },
          {
            title: '跑马灯尺寸',
            key: 'marquee_size',
            type: 'radio-button',
            choices: vm.$root.choices.prize_marquee_size,
            default: 'SMALL',
          },
          {
            title: '送出的礼物',
            type: 'image',
            key: {
              read: 'marquee_image_item',
              write: 'marquee_image',
            },
            description: '尺寸大小：小-96*96/中-750*628/大-750*1334，支持扩展名：png/jpg/gif',
          },
          {
            title: '圖標',
            type: 'image',
            key: {
              read: 'icon_item',
              write: 'icon',
            },
            description: '尺寸大小：100*100，支持扩展名：png/jpg',
          },
          {
            title: '表情包',
            type: 'gallery',
            key: {
              read: 'stickers_item',
              write: 'stickers',
            },
            description: '尺寸大小：100*100，支持扩展名：png/jpg',
          },
          {
            title: '表情包有效期開始',
            type: 'datepicker',
            pick_time: false,
            key: 'date_sticker_begin',
          },
          {
            title: '表情包有效期結束',
            type: 'datepicker',
            pick_time: false,
            key: 'date_sticker_end',
          },
          {
            title: '礼物类型',
            key: 'type',
            type: 'radio-button',
            choices: this.$root.choices.prize_type,
            description: '普通款不限制购买，' +
            '特殊款必须在同一礼物分类里面的所有普通款商品都购买过之后才能购买',
            default: 'NORMAL',
          },
          {
            title: '排序',
            key: 'sorting',
            htmlType: 'number',
          },
        ],
      };
    },
    methods: {},
  };
</script>
