<template>

  <list-view :model="model"
             pk="id"
             title="直播管理"
             subtitle="直播間列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">
  </list-view>

</template>

<script lang="babel">
  import colLiveListFull from '../../models/cols/live_list_full';

  export default {
    data() {
      const vm = this;
      return {
        model: 'Live',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        cols: colLiveListFull(vm),
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

