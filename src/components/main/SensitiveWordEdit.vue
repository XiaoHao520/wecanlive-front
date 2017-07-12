<template>

  <edit-view :model="model"
             title="敏感詞設置"
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
        model: 'SensitiveWord',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: 'ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '敏感詞',
            htmlType: 'textarea',
            key: 'text',
          },
        ],
      };
    },
    methods: {},
  };
</script>
