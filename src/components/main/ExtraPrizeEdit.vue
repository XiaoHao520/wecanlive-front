<template>

  <edit-view :model="model"
             title="贈送物品管理"
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
        model: 'ExtraPrize',
        options: {
          can_edit: true,
          can_delete: true,
        },
        fields: [
          {
            title: '禮物包ID',
            key: 'prize_category',
            type: 'label',
          },
          {
            title: '禮物包類別',
            type: 'object',
            key: 'prize_category',
            options: {
              model: 'PrizeCategory',
              display_field: 'name',
              show_pager: true,
              cols: [{
                title: '禮物包ID',
                key: 'id',
                ordering: 'id',
              }, {
                title: '禮物包名稱',
                key: 'name',
                filtering: {
                  search_field: 'kw_name',
                },
              }],
            },
          },
          {
            title: '日消費金幣額',
            key: 'required_amount',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '圖片',
            type: 'image',
            key: {
              read: 'wallpaper_item',
              write: 'wallpaper',
            },
          },
          {
            title: '名稱',
            key: 'name',
          },
        ],
      };
    },
    methods: {},
  };
</script>
