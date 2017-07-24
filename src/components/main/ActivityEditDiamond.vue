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
//      const vm = this;
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
            title: '累計鑽石數',
            type: 'html',
            key: 'rules',
            filter(item) {
              return `<div>${item}</div>`;
            },
          },
        ],
      };
    },
    methods: {},
  };
</script>
