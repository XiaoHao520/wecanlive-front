<template>

  <list-view :model="model"
             pk="id"
             title="物品管理"
             subtitle="禮物包分類"
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
        model: 'PrizeCategory',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        cols: [
          {
            title: '分類ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '分類名稱',
            key: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
//          todo vip專屬禮包
//          {
//            title: 'VIP專屬禮包',
//            key: 'is_static',
//            type: 'switch',
//          },
          {
            title: '禮物數量',
            key: 'count_prize',
          },
          {
            title: '排序',
            key: 'sorting',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

