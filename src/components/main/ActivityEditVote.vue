<template>

  <edit-view :model="model"
             title="发布活动"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'Activity',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: '活動ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '活動類型',
            type: 'radio-button',
            key: 'type',
            choices: this.$root.choices.activity_type,
          },
          {
            title: '活動標題',
            type: 'label',
            key: 'name',
          },
          {
            title: '活動開始時間',
            type: 'datepicker',
            key: 'date_begin',
          },
          {
            title: '活動結束時間',
            type: 'datepicker',
            key: 'date_end',
          },
          {
            title: '得票方式',
            type: 'label',
            key: 'vote_way',
          },
          {
            title: '獲獎方式',
            type: 'html',
            key: 'json_rules',
            filter(item) {
              let str = '';
              const promise = [];
              const activityAward = {
                experience: '經驗值',
                icoin: 'i幣',
                coin: '金幣',
                star: '星星',
                prize: '禮物',
                contribution: '貢獻值',
                badge: '勳章',
              };
              item.awards.forEach(awardItem => {
                let strAward = '';
                let strRank = '';
                if (awardItem.award.type === 'badge' || awardItem.award.type === 'prize') {
                  promise.push(vm.api(awardItem.award.type).get({
                    id: awardItem.award.value,
                  }).then(resp => {
                    strAward = resp.data.name;
                  }));
                } else {
                  strAward = awardItem.award.value + activityAward[awardItem.award.type];
                }
                if (awardItem.from === awardItem.to) {
                  strRank = `第${awardItem.from}名：`;
                } else {
                  strRank = `第${awardItem.from}名 - 第${awardItem.to}名：`;
                }
                Promise.all(promise).then(() => {
                  str += `<div>${strRank + strAward}</div>`;
                  console.log(str);
                });
              });
              return str;
            },
          },
        ],
      };
    },
    methods: {},
  };
</script>
