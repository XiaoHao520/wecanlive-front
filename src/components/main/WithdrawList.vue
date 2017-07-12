<template>

  <list-view :model="model"
             pk="id"
             title="財務管理"
             subtitle="提現管理"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             ref="view"
             :listActions="listActions"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'WithdrawRecord',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        cols: [
          {
            title: '訂單號',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '提現金額（臺幣）',
            key: 'amount',
          },
//          todo: 消耗鑽石數
//          {
//            title: '消耗鑽石數',
//          }
          {
            title: '用戶暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'kw_author__member__nickname',
            },
          },
          {
            title: '用戶ID',
            key: 'author',
            filtering: {
              search_field: 'kw_author',
            },
          },
          {
            title: '用戶賬號',
            key: 'mobile',
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '提現賬號',
            key: 'account',
          },
          {
            title: '提現時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '提現狀態',
            key: 'status',
            mapper: this.$root.choices.withdraw_status,
            filtering: {
              type: 'select',
              search_field: 'kw_status',
              choices: this.$root.choices.withdraw_status,
            },
          },
        ],
        listActions: [{
          buttonClass: 'primary',
          title: '提現黑名單管理',
          action() {
            vm.$router.push({
              name: 'main_withdraw_blacklist',
            });
          },
        }],
        actions: [{
          title: '同意',
          buttonClass: 'success',
          isVisible(item) {
            return item.status === 'PENDING';
          },
          action(item) {
            vm.confirm('確定同意該條提現？').then(() => {
              vm.api().save({
                action: 'withdraw_approve',
              }, {
                withdraw_record: item.id,
                status: 'APPROVED',
              }).then(() => {
                vm.$message.success('操作成功');
                vm.$refs.view.reload();
              });
            });
          },
        }, {
          title: '拒絕',
          buttonClass: 'danger',
          isVisible(item) {
            return item.status === 'PENDING';
          },
          action(item) {
            vm.confirm('確定拒絕該條提現？').then(() => {
              vm.api().save({
                action: 'withdraw_approve',
              }, {
                withdraw_record: item.id,
                status: 'REJECTED',
              }).then(() => {
                vm.$message.success('操作成功');
                vm.$refs.view.reload();
              });
            });
          },
        }, {
          title: '加入提現黑名單',
          isVisible(item) {
            return item.status === 'PENDING';
          },
          action(item) {
            vm.confirm('確定把該用戶加入提現黑名單？').then(() => {
              vm.api().save({
                action: 'add_withdraw_blacklisted',
              }, {
                author: item.author,
              }).then(() => {
                vm.$message.success('操作成功');
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

