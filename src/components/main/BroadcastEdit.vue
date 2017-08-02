<template>

  <edit-view :model="model"
             title="發佈訊息"
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
        model: 'Broadcast',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '訊息內容',
            type: 'input',
            htmlType: 'textarea',
          },
        ],
      };
    },
    methods: {},
  };
</script>
