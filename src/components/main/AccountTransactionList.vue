<template>

  <list-view :model="model"
             pk="id"
             title="財務管理"
             subtitle="流水記錄"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">
    <div slot="page-header-menu" class="page-header-menu">
      <div class="total_recharge">儲值總額： {{total_recharge.toFixed(2)}}元 （臺幣）</div>
      <div class="total_withdraw">提現總額：{{total_withdraw.toFixed(2)}} 美元</div>
    </div>
  </list-view>


</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        total_recharge: 0,
        total_withdraw: 0,
        model: 'AccountTransaction',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        cols: [
          {
            title: '訂單號',
            key: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '交易類型',
            key: 'type',
            mapper: this.$root.choices.account_transaction_type,
            filtering: {
              type: 'select',
              search_field: 'kw_type',
              choices: this.$root.choices.account_transaction_type,
            },
          },
          {
            title: '交易內容',
            key: 'amount',
          },
          {
            title: '用戶暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'nickname',
            },
          },
          {
            title: '用戶賬號',
            key: 'mobile',
            filtering: {
              search_field: 'mobile',
            },
          },
          {
            title: '交易金額（臺幣）',
            key: 'amount',
          },
          {
            title: '交易方式',
            key: 'platform',
            mapper: this.$root.choices.payment_type,
          },
          {
            title: '交易時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '交易流水號',
            key: 'out_trade_no',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {
      reload() {
        const vm = this;
        vm.api().get({
          action: 'get_total_recharge',
        }).then(resp => {
          vm.total_recharge = resp.data;
        });
        vm.api().get({
          action: 'get_total_withdraw',
        }).then(resp => {
          vm.total_withdraw = resp.data;
        });
      },
    },
  };
</script>

<style rel="stylesheet/less" type="text/less">
  .page-header-menu {
    font-weight: normal;
    display: inline-block;
    color: rgba(0, 0, 0, 0.38);
    margin-left: 2em;
    font-size: 14px;
    vertical-align: middle;
  }
</style>
