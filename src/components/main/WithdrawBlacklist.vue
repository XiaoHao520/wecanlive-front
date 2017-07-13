<template>

  <list-view :model="model"
             pk="id"
             title="提現管理"
             subtitle="提現黑名單"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             ref="view"
             :filters="filters"
             :listActions="listActions"
             :actions="actions">

    <v-modal slot="after"
             title="用戶列表"
             :visible="showModal"
             @ok="showModal=false"
             @cancel="showModal=false">
      <list-view-table
        class="list-view-main-table"
        :cols="modalCols"
        :options="modalOptions"
        :model="model"
        :pageSize="pageSize"
        :actions="modalActions"
        :filters="modalFilters"
        ref="modalView"
      ></list-view-table>
    </v-modal>

  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'Member',
        showModal: false,
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        modalOptions: {
          show_pager: true,
        },
        filters: {
          is_withdraw_blacklisted: true,
        },
        modalFilters: {
          is_withdraw_blacklisted: false,
        },
        cols: [
          {
            title: '用戶ID',
            key: 'user',
            ordering: 'user',
            filtering: {
              search_field: 'kw_user__id',
            },
          },
          {
            title: '用戶暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'kw_nickname',
            },
          },
          {
            title: '用戶賬號',
            key: 'mobile',
            filtering: {
              search_field: 'kw_mobile',
            },
          },
        ],
        modalCols: [
          {
            title: '用戶ID',
            key: 'user',
            ordering: 'user',
            filtering: {
              search_field: 'kw_user__id',
            },
          },
          {
            title: '用戶暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'kw_nickname',
            },
          },
          {
            title: '用戶賬號',
            key: 'mobile',
            filtering: {
              search_field: 'kw_mobile',
            },
          },
        ],
        listActions: [{
          title: '新增至黑名單',
          buttonClass: 'primary',
          action() {
            vm.showModal = true;
          },
        }],
        actions: [{
          title: '移除黑名單',
          action(item) {
            vm.confirm('確定把該用戶從黑名單移除？').then(() => {
              vm.api().patch({
                id: item.user,
              }, {
                is_withdraw_blacklisted: false,
              }).then(() => {
                vm.$refs.view.reload();
                vm.$message.success('操作成功');
              });
            });
          },
        }],
        modalActions: [{
          title: '移入黑名單',
          buttonClass: 'danger',
          action(item) {
            vm.confirm('確定把該用戶移入黑名單？').then(() => {
              vm.api('WithdrawRecord').save({
                action: 'add_withdraw_blacklisted',
              }, {
                author: item.user,
              }).then(() => {
                vm.$message.success('操作成功');
                vm.$refs.modalView.reload();
                vm.$refs.view.reload();
              });
            });
          },
        }],
      };
    },
    computed: {},
    methods: {},
  };
</script>

