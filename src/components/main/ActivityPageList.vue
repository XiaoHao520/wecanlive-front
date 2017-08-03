<template>

  <list-view :model="model"
             pk="id"
             title="子業務管理"
             subtitle="活動頁管理"
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
        model: 'ActivityPage',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        cols: [
          {
            title: '序號',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '活動頁海報',
            key: 'banner_item.image',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '跳轉活動鏈接',
            type: 'link',
            route: item => ({ name: `main_activity_edit_${item.activity_type.toLowerCase()}`, params: { id: item.id } }),
            text: item => `活動ID ${item.activity}`,
          },
          {
            title: '備註',
            key: 'remark',
          },
          {
            title: '最後一次修改記錄',
            key: 'date_updated',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

