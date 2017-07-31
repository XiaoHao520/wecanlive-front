<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">簽到設置</h3>
      <h4 class="page-header-subtitle">
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0"
             v-for="(item, index) in items">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>第{{index + 1}}天簽到獎勵</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-select style="width: 200px" :data="type_select" @change="change_type" v-model="item.val.type"></v-select>
          <v-input-number :min="1" :step="1" v-model="item.val.value"></v-input-number>
        </v-col>
      </v-row>

      <br>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0"
             class="daily-for-days">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>連續登錄
            <v-input-number :min="1" :step="1" v-model="item_daily_for_days.val.days" :disabled="item_daily_for_days.disabled"></v-input-number>
            天</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-select style="width: 200px" :data="type_select" @change="change_type" v-model="item_daily_for_days.val.type"></v-select>
          <v-input-number :min="1" :step="1" v-model="item_daily_for_days.val.value"></v-input-number>
        </v-col>
      </v-row>

    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        items: [{
          key: 'daily_sign_award1',
          val: {
            type: '',
            value: 0,
          },
        }, {
          key: 'daily_sign_award2',
          val: {
            type: '',
            value: 0,
          },
        }, {
          key: 'daily_sign_award3',
          val: {
            type: '',
            value: 0,
          },
        }, {
          key: 'daily_sign_award4',
          val: {
            type: '',
            value: 0,
          },
        }, {
          key: 'daily_sign_award5',
          val: {
            type: '',
            value: 0,
          },
        }, {
          key: 'daily_sign_award6',
          val: {
            type: '',
            value: 0,
          },
        }, {
          key: 'daily_sign_award7',
          val: {
            type: '',
            value: 0,
          },
        }],
        item_daily_for_days: {
          disabled: false,
          key: 'daily_sign_for_days',
          val: {
            days: 1,
            type: '',
            value: 0,
          },
        },
        type_select: [
          {
            value: 'experience',
            label: '經驗值',
          },
          {
            value: 'icoin',
            label: 'i幣',
          },
          {
            value: 'coin',
            label: '金幣',
          },
          {
            value: 'star',
            label: '元氣',
          },
        ],
      };
    },
    methods: {
      reload() {
        const vm = this;
        Promise.all(vm.items.map(item => vm.api('Option').get({
          action: 'get',
          name: item.key,
        }).then(resp => {
          console.log(item.key);
          console.log(resp.data);
          if (resp.data) {
            item.val.type = JSON.parse(resp.data).type;
            item.val.value = JSON.parse(resp.data).value;
          }
        }))).then(() => {
          vm.api('Option').get({
            action: 'get',
            name: vm.item_daily_for_days.key,
          }).then(resp2 => {
            if (resp2.data) {
              if (JSON.parse(resp2.data).days) {
                vm.item_daily_for_days.disabled = true;
              }
              vm.item_daily_for_days.val.days = JSON.parse(resp2.data).days;
              vm.item_daily_for_days.val.type = JSON.parse(resp2.data).type;
              vm.item_daily_for_days.val.value = JSON.parse(resp2.data).value;
            }
          });
        });
      },
      submit() {
        const vm = this;
        Promise.all(vm.items.map(item => vm.api('Option').save({
          action: 'set',
        }, {
          name: item.key,
          value: JSON.stringify(item.val),
        }))).then(() => {
          vm.api('Option').save({
            action: 'set',
          }, {
            name: vm.item_daily_for_days.key,
            value: JSON.stringify(vm.item_daily_for_days.val),
          }).then(() => {
            vm.$message.success('设置保存成功');
            vm.reload();
          });
        });
      },
      change_type(val) {
        console.log(val);
      },
    },
  };
</script>

