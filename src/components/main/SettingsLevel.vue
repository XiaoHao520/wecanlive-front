<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">等級與VIP管理</h3>
      <h4 class="page-header-subtitle">等級管理
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <p class="ant-form-text" style="font-weight: bold;margin-left: 25%;">每升1級所需經驗值</p>
      <p class="ant-form-text" style="font-weight: bold;margin-left: 5%;">儲值返點</p>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0"
             class="daily-for-days">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <p class="ant-form-text">黃色星星</p>
          <p class="ant-form-text" style="margin-right: 20px;">1-99等</p>
        </v-col>
        <v-col :span="8" class="ant-form-item-control level_1">
          <template v-for="(level_item, index) in item.level_1">
            <p class="ant-form-text" v-if="index!==4">{{((index+1)*20-19)+'-'+(index+1)*20 +'等'}}</p>
            <p class="ant-form-text" v-else>81-99等</p>
            <v-input-number :min="1" :step="1" v-model="level_item.value"></v-input-number>
          </template>
        </v-col>
      </v-row>

      <template v-for="(level_item, index) in item.level_more">
        <v-row :gutter="6"
               type="flex"
               style="margin: 14px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <p class="ant-form-text">{{level_name[index+1]}}</p>
            <p class="ant-form-text" style="margin-right: 20px;">1-99等</p>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <v-input-number :min="1" :step="1" v-model="level_item.value"></v-input-number>
            <v-input v-model="level_item.rebate"
                     type="number"
                     min="0"
                     max="100"
                     size="large">
              <template slot="after">%</template>
            </v-input>
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
        item: {
          level_1: [
            {
              key: 'form_1_to_20',
              value: 0,
            },
            {
              key: 'form_21_to_40',
              value: 0,
            },
            {
              key: 'form_41_to_60',
              value: 0,
            },
            {
              key: 'form_61_to_80',
              value: 0,
            },
            {
              key: 'form_81_to_99',
              value: 0,
            },
          ],
          level_more: [
            {
              key: 'level_2',
              value: 0,
              rebate: 0,
            },
            {
              key: 'level_3',
              value: 0,
              rebate: 0,
            },
            {
              key: 'level_4',
              value: 0,
              rebate: 0,
            },
            {
              key: 'level_5',
              value: 0,
              rebate: 0,
            },
          ],
        },
        level_name: ['黃色星星', '綠色水晶', '紅寶石', '藍色鑽石', '寶石皇冠'],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'level_rules',
        }).then(resp => {
          if (resp.data) {
            vm.item = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'level_rules',
          value: JSON.stringify(vm.item),
        }).then(() => {
          vm.$message.success('設置保存成功');
          vm.reload();
        });
      },
    },
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .level_1 {
    width: 170px;
  }
  .ant-input-group {
    display: inline-table;
    margin-left: 20%;
    width: 30%;
    vertical-align: top;
  }
</style>
