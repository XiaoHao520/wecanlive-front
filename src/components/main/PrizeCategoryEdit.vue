<template>

  <edit-view :model="model"
             title="禮物分類"
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
        model: 'PrizeCategory',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '分類ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '分類名稱',
            key: 'name',
          },
//          {
//            title: 'VIP專屬禮包',
//            key: 'is_active',
//            type: 'switch',
//          },
          {
            title: '排序',
            key: 'sorting',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
        ],
      };
    },
    methods: {},
  };
</script>
