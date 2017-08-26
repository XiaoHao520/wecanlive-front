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
        subtitle: '用戶留存',
        chart_type: 'bar',
        actions: [
          {
            model: 'LoginRecord',
            action: 'get_remain_chart_data',
            params: {
              days: 1,
            },
            datasets: {
              label: '1日後',
              borderColor: '#108ee9',
              pointBackgroundColor: '#108ee9',
            },
          },
          {
            model: 'LoginRecord',
            action: 'get_remain_chart_data',
            params: {
              days: 3,
            },
            datasets: {
              label: '3日後',
              borderColor: '#c4594c',
              pointBackgroundColor: '#c4594c',
            },
          },
          {
            model: 'LoginRecord',
            action: 'get_remain_chart_data',
            params: {
              days: 7,
            },
            datasets: {
              label: '7日後',
              borderColor: '#2b9b74',
              pointBackgroundColor: '#2b9b74',
            },
          },
          {
            model: 'LoginRecord',
            action: 'get_remain_chart_data',
            params: {
              days: 15,
            },
            datasets: {
              label: '15日後',
              borderColor: '#834f99',
              pointBackgroundColor: '#834f99',
            },
          },
          {
            model: 'LoginRecord',
            action: 'get_remain_chart_data',
            params: {
              days: 30,
            },
            datasets: {
              label: '30日後',
              borderColor: '#f7d24c',
              pointBackgroundColor: '#f7d24c',
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
