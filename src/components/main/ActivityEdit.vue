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
            title: 'ID',
            key: 'id',
            type: 'label',
          },
        ],
      };
    },
    methods: {},
  };
</script>
