<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">兌換管理</h3>
      <h4 class="page-header-subtitle">鑽石兌換
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
          title: '鑽石數：金幣數',
          key: 'exchange_diamonds_per_coin',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 0,
        }, {
          title: '鑽石數：美元',
          key: 'exchange_diamonds_per_dollar',
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
