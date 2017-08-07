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
      <template v-for="(item, index) in daily_sign_award.daily_seven_days">
        <v-row :gutter="6"
               type="flex"
               style="margin: 4px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <label>第{{index + 1}}天簽到獎勵</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <v-select style="width: 200px" :data="type_select" @change="change_type" v-model="item.type"></v-select>
            <v-input-number :min="1" :step="1" v-model="item.value"></v-input-number>
          </v-col>
        </v-row>
      </template>

      <br>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0"
             class="daily-for-days">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>連續登錄
            <v-input-number :min="1"
                            :step="1"
                            v-model="daily_sign_award.daily_for_days.days"
                            :disabled="is_days_disabled">
            </v-input-number>
            天</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-select style="width: 200px" :data="type_select" @change="change_type" v-model="daily_sign_award.daily_for_days.type"></v-select>
          <v-input-number :min="1" :step="1" v-model="daily_sign_award.daily_for_days.value"></v-input-number>
        </v-col>
      </v-row>

    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        is_days_disabled: false,
        daily_sign_award: {
          daily_for_days: {
            days: 1,
            type: '',
            value: 0,
          },
          daily_seven_days: [
            {
              type: '',
              value: 0,
            },
            {
              type: '',
              value: 0,
            },
            {
              type: '',
              value: 0,
            },
            {
              type: '',
              value: 0,
            },
            {
              type: '',
              value: 0,
            },
            {
              type: '',
              value: 0,
            },
            {
              type: '',
              value: 0,
            },
          ],
        },
        type_select: [
//            TODO: 經驗值、i幣先隱藏
//          {
//            value: 'experience',
//            label: '經驗值',
//          },
//          {
//            value: 'icoin',
//            label: 'i幣',
//          },
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
        vm.api('Option').get({
          action: 'get',
          name: 'daily_sign_award',
        }).then(resp => {
          if (resp.data) {
            vm.daily_sign_award = JSON.parse(resp.data);
            vm.is_days_disabled = true;
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'daily_sign_award',
          value: JSON.stringify(vm.daily_sign_award),
        }).then(() => {
          vm.$message.success('设置保存成功');
          vm.reload();
        });
      },
      change_type(val) {
        console.log(val);
      },
    },
  };
</script>

