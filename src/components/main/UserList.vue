<template>

  <list-view :model="model"
             pk="id"
             title="系統管理"
             subtitle="後臺賬戶管理"
             :options="options"
             :cols="cols"
             :filters="filters"
             :pageSize="pageSize"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'User',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        filters: {
          is_staff: 'True',
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
            title: '賬號',
            key: 'username',
            filtering: {
              search_field: 'kw_username',
            },
          },
          {
            title: '姓名',
            key: 'first_name',
            filtering: {
              search_field: 'kw_first_name',
            },
          },
          {
            title: '角色',
            key: 'group_names',
          },
          {
            title: '創建人',
            filter: () => '系統管理員',
          },
          {
            title: '創建時間',
            key: 'date_joined',
            ordering: 'date_created',
          },
          {
            title: '最後一次登錄時間',
            key: 'last_login',
            ordering: 'last_login',
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

