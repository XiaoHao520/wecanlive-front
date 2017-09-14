<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">直播管理</h3>
      <h4 class="page-header-subtitle">直播間系統消息
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
          title: '直播間系統消息',
          key: 'live_broadcast_setting',
          type: 'input',
          htmlType: 'textarea',
          description: '每次進入直播間顯示的消息',
          value: '',
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
