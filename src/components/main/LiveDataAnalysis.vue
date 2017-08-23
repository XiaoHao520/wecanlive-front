<template>
  <div id="line-container">
    <header class="page-header">
      <h3 class="page-header-title">直播管理</h3>
      <h4 class="page-header-subtitle">數據分析-新增用戶</h4>
      <div class="tooltips">
        <v-button type="ghost" @click="$router.back()">返回</v-button>
      </div>
    </header>

    <section class="page-body">
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>請選擇時間區間</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-date-picker v-model="duration"
                         :range="true"
                         :clearable="true"
                         format="yyyy-MM-dd"
          ></v-date-picker>
          <v-button type="primary" @click="filter">搜索</v-button>
        </v-col>
      </v-row>
      <div class="small">
        <line-chart
          :chart-data="datacollection"
          :options="options"></line-chart>
      </div>
    </section>

  </div>
</template>

<script lang="babel">
  import LineChart from '../../models/chart/LineChart';

  export default {
    components: {
      LineChart,
    },
    data() {
      return {
        duration: '',
        labels: [],
        amounts: [],
        datacollection: null,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            }],
            xAxes: [{
              gridLines: {
                display: false,
              },
            }],
          },
          legend: {
            display: true,
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
    mounted() {
      this.fillData();
    },
    methods: {
      fillData() {
        const vm = this;
        this.datacollection = {
          labels: vm.labels,
          datasets: [
            {
              label: '新增用戶',
              data: vm.amounts,
              borderColor: '#108ee9',
              pointBackgroundColor: '#108ee9',
              borderWidth: 1,
              pointBorderColor: 'white',
            },
          ],
        };
      },
      filter() {
        const vm = this;
        console.log(vm.duration);
        vm.api('Member').get({
          action: 'get_increased_chart_data',
          time_begin: vm.duration[0],
          time_end: vm.duration[1],
        }).then(resp => {
          console.log(resp.data);
          vm.labels = resp.data.labels;
          vm.amounts = resp.data.amounts;
          vm.fillData();
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
