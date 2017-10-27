<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">兌換管理</h3>
      <h4 class="page-header-subtitle">金幣充值
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <div class="ant-table">
        <table>
          <thead class="ant-table-thead">
          <tr>
            <th>臺幣（元）</th>
            <th>可購買金幣數（個）</th>
            <th>贈送金幣</th>
            <th>首次儲值優惠</th>
          </tr>
          </thead>

          <tbody class="ant-table-tbody">
          <tr class="ant-table" v-for="item in coin_recharge_rules">
            <td>
              <v-input-number v-model="item.money"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
            <td>
              <v-input-number v-model="item.coin"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
            <td>
              <v-input-number v-model="item.award2"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
            <td>
              <v-input-number v-model="item.award"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        coin_recharge_rules: [
          {
            product: '',
            coin: 0,
            money: 0,
            award: 0,
            award2: 0,
          },
          {
            product: '',
            coin: 0,
            money: 0,
            award: 0,
            award2: 0,
          },
          {
            product: '',
            coin: 0,
            money: 0,
            award: 0,
            award2: 0,
          },
          {
            product: '',
            coin: 0,
            money: 0,
            award: 0,
            award2: 0,
          },
          {
            product: '',
            coin: 0,
            money: 0,
            award: 0,
            award2: 0,
          },
        ],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'coin_recharge_rules',
        }).then(resp => {
          if (resp.data) {
            console.log(resp.data);
            vm.coin_recharge_rules = JSON.parse(resp.data);
            console.log(vm.coin_recharge_rules);
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'coin_recharge_rules',
          value: JSON.stringify(vm.coin_recharge_rules),
        }).then(() => {
          vm.$message.success('保存設置成功');
          vm.reload();
        });
      },
    },
  };
</script>
