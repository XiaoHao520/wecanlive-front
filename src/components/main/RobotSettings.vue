<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">直播管理</h3>
      <h4 class="page-header-subtitle">機器人管理
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
        <v-button @click="$router.back()">返回</v-button>
      </div>
    </header>

    <section class="page-body">
      <v-row :gutter="6"
             type="flex"
             style="margin:10px 0;">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>房間初始機器人數</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input-number :min="0" :step="1" v-model="robot_rules.initial_amount"></v-input-number>
        </v-col>
      </v-row>

      <template v-for="(item, index) in robot_rules.increase_amounts">
        <v-row :gutter="6"
               type="flex"
               style="margin: 10px 0;">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <label>{{`房間人數範圍${titles[index]}`}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <v-input-number :min="0" :step="1" v-model="item.diamond"></v-input-number>
            <div class="ant-form-explain">每增長1個真實用戶，增加的機器人數</div>
          </v-col>
        </v-row>
      </template>

    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        robot_rules: {
          initial_amount: 0,
          increase_amounts: [
            {
              from_10_to_100: 0,
            },
            {
              from_101_to_300: 0,
            },
            {
              from_301_to_1000: 0,
            },
            {
              more_than_1000: 0,
            },
          ],
        },
        titles: ['10-100', '101-300', '300-1000', '1000以上'],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'robot_rules',
        }).then(resp => {
          if (resp.data) {
            vm.robot_rules = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'robot_rules',
          value: JSON.stringify(vm.robot_rules),
        }).then(() => {
          vm.$message.success('设置保存成功');
          vm.reload();
        });
      },
    },
  };
</script>

