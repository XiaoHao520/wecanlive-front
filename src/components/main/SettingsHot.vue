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
          description: '分享1次權重增加1分',
        }, {
          title: '直播湧入觀看人數（單位：1）',
          key: 'count_live_watch',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '湧入直播觀看人當中，VIP4以上，每一個人在前面的基礎上加5分',
        }, {
          title: '直播湧入觀看人數 紅寶石（單位：1）',
          key: 'level_red',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
          description: '湧入直播觀看人當中，綠色水晶等級以上，每一個人在前面的基礎上加10分',
        }, {
          title: '收到鑽石數（單位：1）',
          key: 'count_receive_diamond',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
        }, {
          title: '發言數（單位：1）',
          key: 'count_comment',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
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
