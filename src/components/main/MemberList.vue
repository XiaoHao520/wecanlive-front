<template>

  <list-view :model="model"
             pk="user"
             title="用戶管理"
             subtitle="用戶列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :listActions="listActions"
             :actions="actions"
             ref="view">
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
        cols: [...colMemberListFull(vm), {
          title: '點數',
          type: 'html',
          filter: item => `<div>鑽石：${item.diamond_balance}</div>` +
          `<div>金幣：${item.coin_balance}</div>` +
          `<div>元氣：${item.star_balance}</div>` +
          `<div>主播元氣指數：${item.star_index_receiver_balance}</div>` +
          `<div>觀衆元氣指數：${item.star_index_sender_balance}</div>`,
        }],
        listActions: [],
        actions: [{
          title: '+鑽石',
          buttonClass: 'dashed',
          action(item) {
            vm.modalForm({
              title: '補償鑽石數',
              fields: [{
                label: '數量',
                name: 'amount',
                type: 'number',
              }],
            }).then(data => {
              vm.api('CreditDiamondTransaction').save({
                user_debit: item.user,
                amount: data.amount,
                remark: '後臺補償',
                type: 'ADMIN',
              }).then(() => {
                vm.$message.success('補償成功');
                vm.$refs.view.reload();
              });
            });
          },
        }, {
          title: '+金幣',
          buttonClass: 'dashed',
          action(item) {
            vm.modalForm({
              title: '補償金幣數',
              fields: [{
                label: '數量',
                name: 'amount',
                type: 'number',
              }],
            }).then(data => {
              vm.api('CreditCoinTransaction').save({
                user_debit: item.user,
                amount: data.amount,
                remark: '後臺補償',
                type: 'ADMIN',
              }).then(() => {
                vm.$message.success('補償成功');
                vm.$refs.view.reload();
              });
            });
          },
        }, {
          title: '+元氣',
          buttonClass: 'dashed',
          action(item) {
            vm.modalForm({
              title: '補償元氣數',
              fields: [{
                label: '數量',
                name: 'amount',
                type: 'number',
              }],
            }).then(data => {
              vm.api('CreditStarTransaction').save({
                user_debit: item.user,
                amount: data.amount,
                remark: '後臺補償',
                type: 'ADMIN',
              }).then(() => {
                vm.$message.success('補償成功');
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

