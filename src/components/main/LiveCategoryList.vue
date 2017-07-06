<template>

  <list-view :model="model"
             pk="id"
             title="直播分類管理"
             subtitle="直播分類列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">
  </list-view>

</template>

<script lang="babel">
  export default {
    data() {
      return {
        model: 'LiveCategory',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        cols: [
          {
            title: '分類ID',
            key: 'id',
            ordering: 'id',
          },
          {
            title: '分類名稱',
            key: 'name',
            ordering: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
          {
            title: '置頂順序',
            key: 'sorting',
            ordering: 'sorting',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

