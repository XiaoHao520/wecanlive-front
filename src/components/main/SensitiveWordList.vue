<template>

  <list-view :model="model"
             pk="id"
             title="[請輸入主標題]"
             subtitle="[請輸入副標題]"
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
        model: '',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        cols: [
          {
            title: 'ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '是否啓用',
            key: 'is_active',
            type: 'switch',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

