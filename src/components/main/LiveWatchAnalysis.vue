<template>
  <chart
    :title="title"
    :subtitle="subtitle"
    :chart_type="chart_type"
    :show_date="show_date"
    :show_refresh="show_refresh"
    :actions="actions"
  ></chart>
</template>

<script lang="babel">
  export default {
    data() {
      return {
        title: '直播管理',
        subtitle: '數據分析-用戶收視行爲',
        chart_type: 'line',
        show_date: false,
        show_refresh: true,
        actions: [],
        color: [
          '#5ba3d5',
          '#f47b3e',
          '#ababab',
          '#ffc247',
          '#467fc4',
          '#76af5c',
          '#206893',
          '#a7532a',
          '#6b6b6b',
        ],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('LiveCategory').get({}).then(resp => {
          console.log(resp.data.results);
          resp.data.results.forEach(item => {
            vm.actions.push(
              {
                model: 'LiveWatchLog',
                action: 'get_watch_chart_data',
                params: {
                  category: item.id,
                },
                datasets: {
                  label: item.name,
                  borderColor: vm.color[item.id % vm.color.length],
                  pointBackgroundColor: vm.color[item.id % vm.color.length],
                },
              },
            );
          });
        });
      },
    },
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .small {
    max-width: 1200px;
    margin: 100px auto;
  }
</style>
