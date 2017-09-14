<template>

  <edit-view :model="model"
             title="直播間系統消息"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             :actions="actions"
             ref="view">
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'Broadcast',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: '系統消息內容',
            key: 'content',
            htmlType: 'textarea',
          },
        ],
        actions: [
          {
            title: '發佈',
            buttonClass: 'primary',
            action() {
              vm.api('Broadcast').save({
                action: 'create_system_broadcast',
              }, {
                target: 'TARGET_LIVE',
                content: vm.fields[0].value,
              }).then(() => {
                vm.$message.success('發佈成功');
                vm.$router.back();
              });
            },
          },
        ],
      };
    },
    methods: {},
  };
</script>
