<template>

  <list-view :model="model"
             pk="id"
             title="子業務管理"
             subtitle="敏感詞設置"
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
        model: 'SensitiveWord',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        cols: [
          {
            title: '編號',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '敏感詞',
            key: 'text',
            filtering: {
              search_field: 'kw_text',
            },
            tdStyle: {
              maxWidth: '400px',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            },
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

