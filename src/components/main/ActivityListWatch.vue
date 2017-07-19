<template>

  <list-view :model="model"
             pk="id"
             title="活動列表"
             subtitle="觀看直播活動"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :filters="filters"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Activity',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        filters: {
          activity_type: 'WATCH',
        },
        cols: [
          {
            title: '活動ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '活動類型',
            key: 'type',
            mapper: this.$root.choices.activity_type,
          },
          {
            title: '活動標題',
            key: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
          {
            title: '活動開始時間',
            key: 'date_begin',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_begin',
              to_field: 'date_to__date_begin',
            },
          },
          {
            title: '活動結束時間',
            key: 'date_end',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_end',
              to_field: 'date_to__date_end',
            },
          },
          {
            title: '觀看直播數（人）',
            key: 'watch_min_watch',
          },
          {
            title: '個人觀看單個直播最低時長（分鐘）',
            key: 'watch_min_duration',
          },
          {
            title: '活動狀態',
            key: 'status',
            mapper: this.$root.choices.activity_status,
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

