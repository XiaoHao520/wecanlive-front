<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">子業務管理</h3>
      <h4 class="page-header-subtitle">跑馬燈設置
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <p class="ant-form-text" style="font-weight: bold;margin-left: 20%;">大跑馬燈</p>
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>所需等級區間</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-radio-group type="button"
                         v-model="marque_settings.large_marque_level"
                         :data="item.level"></v-radio-group>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>所需VIP等級</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-radio-group v-model="marque_settings.large_marque_vip" :data="item.vip"></v-radio-group>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>所需禮物價值金幣數</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input-number v-model="marque_settings.large_marque_amount"
                          :min="1"
                          :step="1"
                          size="large">
          </v-input-number>
        </v-col>
      </v-row>

      <br>
      <p class="ant-form-text" style="font-weight: bold;margin-left: 20%;">中跑馬燈</p>
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>所需等級區間</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-radio-group type="button"
                         v-model="marque_settings.medium_marque_level"
                         :data="item.level"></v-radio-group>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>所需VIP等級</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-radio-group v-model="marque_settings.medium_marque_vip" :data="item.vip"></v-radio-group>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>所需禮物價值金幣數</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input-number v-model="marque_settings.medium_marque_amount"
                          :min="1"
                          :step="1"
                          size="large">
          </v-input-number>
        </v-col>
      </v-row>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        marque_settings: {
          large_marque_level: 1,
          large_marque_vip: 1,
          large_marque_amount: 0,
          medium_marque_level: 1,
          medium_marque_vip: 1,
          medium_marque_amount: 0,
        },
        item: {
          level: [
            {
              value: 1,
              text: '黃色星星',
            },
            {
              value: 2,
              text: '綠色水晶',
            },
            {
              value: 3,
              text: '紅寶石',
            },
            {
              value: 4,
              text: '藍晶鑽石',
            },
            {
              value: 5,
              text: '寶石皇冠',
            },
          ],
          vip: [
            {
              value: 1,
              text: 'vip1',
            },
            {
              value: 2,
              text: 'vip2',
            },
            {
              value: 3,
              text: 'vip3',
            },
            {
              value: 4,
              text: 'vip4',
            },
            {
              value: 5,
              text: 'vip5',
            },
            {
              value: 6,
              text: 'vip6',
            },
            {
              value: 7,
              text: 'vip7',
            },
            {
              value: 8,
              text: 'vip8',
            },
            {
              value: 9,
              text: 'vip9',
            },
          ],
        },
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'marque_settings',
        }).then(resp => {
          if (resp.data) {
            vm.marque_settings = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'marque_settings',
          value: JSON.stringify(vm.marque_settings),
        }).then(() => {
          vm.$message.success('设置保存成功');
          vm.reload();
        });
      },
    },
  };
</script>
