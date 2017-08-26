<template>
  <chart
    :title="title"
    :subtitle="subtitle"
    :chart_type="chart_type"
    :actions="actions"
    :listActions="listActions"
  ></chart>
</template>

<script lang="babel">
  export default {
    data() {
      const vm = this;
      return {
        title: '直播管理',
        subtitle: '數據分析-新增用戶',
        chart_type: 'line',
        actions: [
          {
            model: 'Member',
            action: 'get_increased_chart_data',
            datasets: {
              label: '新增用戶',
              borderColor: '#108ee9',
              pointBackgroundColor: '#108ee9',
            },
          },
        ],
        listActions: [
          {
            title: '活躍用戶',
            action() {
              vm.$router.push({ name: 'main_live_active_member' });
            },
          },
//          {
//            title: '用戶留存',
//            action() {
//              vm.$router.push({ name: 'main_live_remain_member' });
//            },
//          },
          {
            title: '性别年龄比',
            action() {
              vm.$router.push({ name: 'main_live_gender_analysis' });
            },
          },
          {
            title: '收視行爲',
            action() {
              vm.$router.push({ name: 'main_live_watch_analysis' });
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
