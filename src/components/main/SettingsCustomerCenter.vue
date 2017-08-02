<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">平臺參數設置</h3>
      <h4 class="page-header-subtitle">客服郵箱
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

</template>121054104

<script lang="babel">

  export default {
    data() {
      return {
        options: [{
          title: '跳轉至外部鏈接',
          key: 'url_customer_center',
          type: 'input',
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
