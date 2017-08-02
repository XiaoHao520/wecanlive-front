<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">家族信息管理</h3>
      <h4 class="page-header-subtitle">家族等級設定
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <p class="ant-form-text level-title" style="font-weight: bold">升級所需貢獻值</p>
      <p class="ant-form-text" style="font-weight: bold;margin-left: 3%;">家族名稱顏色</p>
      <template v-for="(item, index) in items">
        <v-row :gutter="6"
               type="flex"
               style="margin: 4px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <label>{{((index+1)*10-9) +'-'+ ((index+1)*10) +' 級'}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <v-input-number :min="1" :step="1" v-model="item.val"></v-input-number>
            <p class="ant-form-text" style="margin-left: 15%;">{{colors[index]}}</p>
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
        items: [{
          key: 'form_1_to_10',
          val: 0,
        }, {
          key: 'form_11_to_20',
          val: 0,
        }, {
          key: 'form_21_to_30',
          val: 0,
        }, {
          key: 'form_31_to_40',
          val: 0,
        }, {
          key: 'form_41_to_50',
          val: 0,
        }, {
          key: 'form_51_to_60',
          val: 0,
        }],
        colors: ['白色', '綠色', '藍色', '紫色', '金色', '紅色'],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'family_level_rules',
        }).then(resp => {
          if (resp.data) {
            vm.items = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'family_level_rules',
          value: JSON.stringify(vm.items),
        }).then(() => {
          vm.$message.success('設定保存成功');
          vm.reload();
        });
      },
    },
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .level-title {
    margin-left: 25%;
  }
</style>
