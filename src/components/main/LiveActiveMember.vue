<template>
  <chart
    :title="title"
    :subtitle="subtitle"
    :chart_type="chart_type"
    :actions="actions"
  ></chart>
</template>

<script lang="babel">
  export default {
    data() {
      return {
        title: '直播管理',
        subtitle: '活躍用戶',
        chart_type: 'line',
        actions: [
          {
            model: 'LoginRecord',
            action: 'get_active_chart_data',
            datasets: {
              label: '活躍用戶數',
              borderColor: '#108ee9',
              pointBackgroundColor: '#108ee9',
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
