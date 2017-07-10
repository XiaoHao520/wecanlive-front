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
//      const vm = this;
      return {
        model: 'Prize',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '禮物名稱',
            key: 'name',
          },
          {
            title: '價格（金幣）',
            key: 'price',
            type: 'input',
            htmlType: 'number',
            min: 0,
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
            title: '圖標',
            type: 'image',
            key: {
              read: 'icon_item',
              write: 'icon',
            },
          },
          {
            title: '表情包',
            type: 'gallery',
            key: {
              read: 'stickers_item',
              write: 'stickers',
            },
          },
          {
            title: '表情包有效期開始',
            type: 'datepicker',
            pick_time: true,
            key: 'date_sticker_begin',
          },
          {
            title: '表情包有效期結束',
            type: 'datepicker',
            pick_time: true,
            key: 'date_sticker_end',
          },
        ],
      };
    },
    methods: {},
  };
</script>
