<template>

  <edit-view :model="model"
             title="發佈訊息"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             :actions="actions"
             ref="view">

    <template slot="before">
      <v-row :gutter="6"
             type="flex"
             style="margin-left: 20%;">
        <v-col :span="8" class="ant-form-item-control">
          <p class="ant-form-text">推送對象:</p>
          <v-select style="width: 200px" :data="type_select" @change="change_type" v-model="push_object"></v-select>
        </v-col>
      </v-row>
    </template>
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        push_object: '',
        model: 'Broadcast',
        options: {
          can_edit: false,
        },
        type_select: [{
          value: 'TARGET_SYSTEM',
          label: '全部',
        }, {
          value: 'TARGET_SYSTEM_FAMILYS',
          label: '家族成員',
        }, {
          value: 'TARGET_SYSTEM_NOT_FAMILYS',
          label: '非家族成員',
        }],
        fields: [
          {
            title: '訊息內容',
            key: 'content',
            type: 'input',
            htmlType: 'textarea',
          },
        ],
        actions: [
          {
            title: '發佈',
            buttonClass: 'primary',
            action() {
              if (!vm.fields[0].value) {
                vm.notify('請填寫訊息內容');
                return false;
              }
              if (!vm.push_object) {
                vm.notify('請選擇推送對象');
              }
              vm.api('Broadcast').save({
                action: 'create_system_broadcast',
              }, {
                content: vm.fields[0].value,
                target: vm.push_object,
              }).then(() => {
                vm.$message.success('發佈成功');
                vm.$router.back();
              });
            },
          },
        ],
      };
    },
    methods: {
      change_type(val) {
        console.log(val);
      },
    },
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .ant-row {
    margin-left: 20% !important;
  }
</style>
