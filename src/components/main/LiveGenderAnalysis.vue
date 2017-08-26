<template>
  <chart
    :title="title"
    :subtitle="subtitle"
    :chart_type="chart_type"
    :show_date="false"
    :show_refresh="true"
    :actions="actions"
  ></chart>
</template>

<script lang="babel">
  export default {
    data() {
      return {
        title: '直播管理',
        subtitle: '用戶年齡、性別比',
        chart_type: 'bar',
        actions: [
          {
            model: 'Member',
            action: 'get_gender_chart_data',
            params: {
              gender: 'M',
            },
            datasets: {
              label: '男性',
              borderColor: '#108ee9',
              pointBackgroundColor: '#108ee9',
            },
          },
          {
            model: 'Member',
            action: 'get_gender_chart_data',
            params: {
              gender: 'F',
            },
            datasets: {
              label: '女性',
              borderColor: '#f9c3d4',
              pointBackgroundColor: '#f9c3d4',
            },
          },
        ],
      };
    },
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .small {
    max-width: 1200px;
    margin: 100px auto;
  }
</style>
