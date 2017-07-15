<template>

  <edit-view :model="model"
             title="禮物分類"
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
        model: 'PrizeCategory',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '分類ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '分類名稱',
            key: 'name',
          },
          {
            title: '排序',
            key: 'sorting',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '普通款禮物',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'Prize',
              options: {
                can_edit: false,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                prize_category: vm.$route.params.id,
                prize_type: 'NORMAL',
              },
              cols: [
                {
                  title: '禮物ID',
                  key: 'id',
                  filtering: {
                    search_field: 'exact__id',
                  },
                },
                {
                  title: '圖標',
                  key: 'icon_item.image',
                  type: 'image',
                  width: 75,
                  height: 75,
                },
                {
                  title: '禮物名稱',
                  key: 'name',
                  filtering: {
                    search_field: 'kw_name',
                  },
                },
                {
                  title: '價格（金幣）',
                  key: 'price',
                },
                {
                  title: '排序',
                  key: 'sorting',
                },
              ],
            },
          },
          {
            title: '特殊款禮物',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'Prize',
              options: {
                can_edit: false,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                prize_category: vm.$route.params.id,
                prize_type: 'SPECIAL',
              },
              cols: [
                {
                  title: '禮物ID',
                  key: 'id',
                  filtering: {
                    search_field: 'exact__id',
                  },
                },
                {
                  title: '圖標',
                  key: 'icon_item.image',
                  type: 'image',
                  width: 75,
                  height: 75,
                },
                {
                  title: '禮物名稱',
                  key: 'name',
                  filtering: {
                    search_field: 'kw_name',
                  },
                },
                {
                  title: '價格（金幣）',
                  key: 'price',
                },
                {
                  title: '排序',
                  key: 'sorting',
                },
              ],
            },
          },
        ],
      };
    },
    methods: {},
  };
</script>
