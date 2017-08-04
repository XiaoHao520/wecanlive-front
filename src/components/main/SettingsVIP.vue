<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">等級與VIP管理</h3>
      <h4 class="page-header-subtitle">VIP管理
      </h4>
      <div class="tooltips">
        <v-button @click="$router.push({name: 'main_settings_vip_logo'})">Logo</v-button>
        <v-button @click="$router.push({name: 'main_settings_vip_rebate'})">回饋禮包</v-button>
        <v-button @click="$router.push({name: 'main_settings_vip_effects'})">進場特效</v-button>
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <div class="ant-table">
        <table>
          <thead class="ant-table-thead">
          <tr>
            <th>條件/福利</th>
            <th>VIP1</th>
            <th>VIP2</th>
            <th>VIP3</th>
            <th>VIP4</th>
            <th>VIP5</th>
            <th>VIP6</th>
            <th>VIP7</th>
            <th>VIP8</th>
            <th>VIP9</th>
          </tr>
          </thead>

          <tbody class="ant-table-tbody">
          <tr class="ant-table">
            <td>{{titles[0]}}</td>
            <td v-for="item in vip_rules">
              <v-input-number v-model="item.recharge"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[1]}}</td>
            <td v-for="item in vip_rules">
              <v-input-number v-model="item.recharge_next_month"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[2]}}</td>
            <td v-for="item in vip_rules">
              <v-input-number v-model="item.rebate"
                              :min="0"
                              :step="1"
                              size="large">
              </v-input-number>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[3]}}</td>
            <td v-for="item in vip_rules">
              <v-input-number v-model="item.experience_double"
                              :min="1"
                              :step="0.1"
                              size="large">
              </v-input-number>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[4]}}</td>
            <td v-for="item in vip_rules">
              <v-switch v-model="item.has_logo"></v-switch>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[5]}}</td>
            <td v-for="item in vip_rules">
              <v-switch v-model="item.has_feedback_prize"></v-switch>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[6]}}</td>
            <td v-for="item in vip_rules">
              <v-switch v-model="item.has_medium_marque"></v-switch>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[7]}}</td>
            <td v-for="item in vip_rules">
              <v-switch v-model="item.has_medium_special_effects"></v-switch>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[8]}}</td>
            <td v-for="item in vip_rules">
              <v-switch v-model="item.has_large_marque"></v-switch>
            </td>
          </tr>
          <tr class="ant-table">
            <td>{{titles[9]}}</td>
            <td v-for="item in vip_rules">
              <v-switch v-model="item.has_large_special_effects"></v-switch>
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
        vip_rules: [
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 0,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
          {
            recharge: 0,
            recharge_next_month: 0,
            rebate: 0,
            experience_double: 1,
            has_logo: false,
            has_feedback_prize: false,
            has_medium_marque: false,
            has_medium_special_effects: false,
            has_large_marque: false,
            has_large_special_effects: false,
          },
        ],
        titles: [
          '當月儲值要求(單位：元)',
          '次月續等要求(單位：元)',
          '儲值返點(單位：%)',
          '經驗值加倍',
          'VIP Logo',
          '回饋禮包',
          '送禮跑馬燈（中）',
          '進場特效（中）',
          '送禮跑馬燈（大）',
          '進場特效（大）',
        ],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'vip_rules',
        }).then(resp => {
          if (resp.data) {
            vm.vip_rules = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'vip_rules',
          value: JSON.stringify(vm.vip_rules),
        }).then(() => {
          vm.$message.success('保存設置成功');
          vm.reload();
        });
      },
    },
  };
</script>
