<template>

  <edit-view :model="model"
             title="徽章管理"
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
        model: 'Badge',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '徽章名稱',
            key: 'name',
            type: 'input',
          },
          {
            title: '徽章圖標',
            key: {
              read: 'icon_item',
              write: 'icon',
            },
            type: 'image',
          },
          {
            title: '徽章獲取資格',
            key: 'badge_item',
            type: 'radio-button',
            choices: this.$root.choices.badge_item,
          },
          {
            title: '條件所需數值',
            key: 'item_value',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '起始可用時間',
            key: 'date_from',
            type: 'datepicker',
          },
          {
            title: '結束可用時間',
            key: 'date_to',
            type: 'datepicker',
          },
          {
            title: '排序',
            key: 'sorting',
            htmlType: 'number',
            description: '數字越小越靠前',
          },
        ],
      };
    },
    methods: {},
  };
</script>
