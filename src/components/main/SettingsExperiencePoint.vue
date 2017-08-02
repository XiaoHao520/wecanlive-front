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
          title: '登入簽到',
          key: 'experience_points_login',
          type: 'input',
          description: '滿足一次簽到',
          htmlType: 'number',
          value: 0,
        }, {
          title: '公開分享',
          key: 'experience_points_share',
          type: 'input',
          description: '滿足一次分享直播間',
          htmlType: 'number',
          value: 0,
        }, {
          title: '收到禮物',
          key: 'experience_points_prize_receive',
          type: 'input',
          description: '累計收禮150鑽石數',
          htmlType: 'number',
          value: 0,
        }, {
          title: '送出禮物',
          key: 'experience_points_prize_send',
          type: 'input',
          description: '累計送禮150鑽石數',
          htmlType: 'number',
          value: 0,
        }, {
          title: '觀看直播',
          key: 'experience_points_watch',
          type: 'input',
          description: '累計觀看30分鐘',
          htmlType: 'number',
          value: 0,
        }, {
          title: '本人直播',
          key: 'experience_points_live',
          type: 'input',
          description: '累計直播30分鐘',
          htmlType: 'number',
          value: 0,
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
