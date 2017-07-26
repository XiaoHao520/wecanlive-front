<template>

  <list-view :model="model"
             pk="id"
             title="系統管理"
             subtitle="新增修改記錄"
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
        model: 'AdminLog',
        pageSize: 5,
        options: {
          can_create: false,
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
            title: '修改動作',
            key: 'content',
          },
          {
            title: '修改類型',
            key: 'type',
            mapper: this.$root.choices.admin_log_type,
            filtering: {
              type: 'select',
              search_field: 'kw_type',
              choices: this.$root.choices.admin_log_type,
            },
          },
          {
            title: '修改人',
            key: 'author_name',
            filtering: {
              search_field: 'kw_author__first_name',
            },
          },
          {
            title: '修改人角色',
            key: 'author_groups',
          },
          {
            title: '修改人賬號',
            key: 'author_account',
            filtering: {
              search_field: 'kw_author__username',
            },
          },
          {
            title: '修改模塊',
            key: 'target_type',
          },
          {
            title: '修改時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
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

