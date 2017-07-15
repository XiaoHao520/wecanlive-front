<template>

  <list-view :model="model"
             pk="user"
             title="用戶管理"
             subtitle="用戶列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :listActions="listActions"
             :actions="actions">
  </list-view>

</template>

<script lang="babel">
  import colMemberListFull from '../../models/cols/member_list_full';

  export default {
    data() {
      const vm = this;
      return {
        model: 'Member',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
          can_select: true,
        },
        cols: colMemberListFull(vm),
        listActions: [{
          title: '補償鑽石數',
          action() {
            vm.notify('開發中');
          },
        }, {
          title: '補償金幣數',
          action() {
            vm.notify('開發中');
          },
        }],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

