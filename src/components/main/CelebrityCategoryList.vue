<template>

  <list-view :model="model"
             pk="id"
             title="搜索頁面管理"
             subtitle="衆星雲集管理"
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
        model: 'CelebrityCategory',
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
          },
          {
            title: '對應用戶',
            key: 'leader_nickname',
          },
          {
            title: '置頂順序',
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

