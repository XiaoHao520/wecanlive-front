<template>

  <list-view :model="model"
             pk="id"
             title="物品管理"
             subtitle="禮物管理"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Prize',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        cols: [
          {
            title: '禮物ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '禮物分類',
            key: 'category_name',
            filtering: {
              search_field: 'kw_category__name',
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
            title: '上架時間',
            key: 'date_created',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

