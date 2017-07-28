<template>

  <list-view :model="model"
             pk="id"
             title="活動列表"
             subtitle="抽獎活動"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :filters="filters"
             :listActions="listActions"
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
          can_create: false,
          can_edit: false,
        },
        filters: {
          activity_type: 'DRAW',
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
            title: '抽獎資格元件',
            key: 'draw_condition_code',
            mapper: this.$root.choices.draw_condition,
          },
          {
            title: '元件數值',
            key: 'draw_condition_value',
          },
          {
            title: '活動狀態',
            key: 'status',
            mapper: this.$root.choices.activity_status,
          },
        ],
        actions: [{
          title: '查看',
          action(item) {
            const vm = this;
            vm.$router.push({
              name: 'main_activity_edit_draw',
              params: {
                id: item.id,
              },
            });
          },
        }],
        listActions: [{
          title: '新增',
          action() {
            const vm = this;
            vm.$router.push({
              name: 'main_activity_new_draw',
            });
          },
        }],
      };
    },
    computed: {},
    methods: {},
  };
</script>

