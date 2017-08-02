<template>

  <list-view :model="model"
             pk="id"
             title="子業務管理"
             subtitle="消息推送管理"
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
        model: 'Broadcast',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: false,
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
            title: '系統消息',
            key: 'content',
            tdStyle: {
              maxWidth: '500',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            },
            filtering: {
              search_field: 'kw_content',
            },
          },
          {
            title: '推送對象',
            key: 'groups',
          },
          {
            title: '發送時間',
            key: 'date_sent',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

