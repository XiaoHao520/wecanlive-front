<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">熱門直播權重設置</h3>
      <h4 class="page-header-subtitle">
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <option-form ref="form"
                   :options="options"></option-form>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        options: [{
          title: '直播分享數量（單位：1）',
          key: 'count_live_share',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '不填則默認5分',
        }, {
          title: '直播湧入觀看人數（單位：1）',
          key: 'count_live_watch',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '不填則直播湧入觀看人數 1x1分',
        }, {
          title: '直播湧入觀看人數 紅寶石（單位：1）',
          key: 'level_red',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '不填則土豪(VIP4)/高等級(綠水晶以上)進駐直播間 1x10分,每升一個VIP權重+5分',
        }, {
          title: '收到鑽石數（單位：1）',
          key: 'count_receive_diamond',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '不填收到的鑽石數量 1x1分',
        }, {
          title: '發言數（單位：1）',
          key: 'count_comment',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '不填則發言筆數 x0.2分,排序規則：正在直播（按照熱門排序規則）>已結束的歷史直播（按照熱門排序規則',
        }],
      };
    },
    methods: {
      submit() {
        const vm = this;
        vm.$refs.form.submit();
      },
    },
  };
</script>
