<template>

  <list-view :model="model"
             pk="id"
             title="直播管理"
             subtitle="直播間系統消息"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :listActions="listActions"
             :filters="filters"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Broadcast',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
          can_delete: true,
        },
        filters: {
          target: 'TARGET_LIVE',
        },
        cols: [
          {
            title: '序號',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '系統消息',
            key: 'content',
          },
          {
            title: '發送對象',
            key: 'target_text',
            filter() {
              return '所有直播間';
            },
          },
          {
            title: '修改時間',
            key: 'date_sent',
          },
        ],
        actions: [],
        listActions: [
          {
            title: '新增',
            action() {
              const vm = this;
              const len = vm.$el.querySelector('.ant-table-tbody').childElementCount;
              if (len >= 3) {
                vm.notify('直播間系統消息最多三條');
                return false;
              }
              vm.$router.push({
                name: 'main_live_broadcast_edit',
                params: {
                  id: 0,
                },
              });
            },
          },
        ],
      };
    },
    computed: {},
    methods: {},
  };
</script>

