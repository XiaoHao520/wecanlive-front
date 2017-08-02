<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">子業務管理</h3>
      <h4 class="page-header-subtitle">發送彈幕設置
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
          title: '發送1條彈幕扣除金幣數',
          key: 'coins_barrage_cost',
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
