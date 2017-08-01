<template>

  <list-view :model="model"
             pk="id"
             title="子業務管理"
             subtitle="舉報管理"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Inform',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        cols: [
          {
            title: '舉報人ID',
            key: 'author',
            filtering: {
              search_field: 'kw_author__id',
            },
          },
          {
            title: '舉報人暱稱',
            key: 'author_nickname',
            filtering: {
              search_field: 'kw_author__member__nickname',
            },
          },
          {
            title: '舉報人賬號',
            key: 'author_mobile',
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '被舉報人ID',
            key: 'accused_person.accused_id',
            filtering: {
              search_field: 'la_lives__author__id',
            },
          },
          {
            title: '被舉報人賬號',
            key: 'accused_person.accused_mobile',
            filtering: {
              search_field: 'la_lives__author__member__mobile',
            },
          },
          {
            title: '舉報類型',
            key: 'inform_type',
            filtering: {
              search_field: 'kw_inform_type',
            },
          },
          {
            title: '舉報內容',
            key: 'reason',
            tdStyle: {
              maxWidth: '260px',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            },
          },
          {
            title: '對應的直播/動態',
            key: 'accused_object_info',
            type: 'link',
            route: item => ({
              name: item.accused_object_info.object_type === 'live'
                ? 'main_live_edit' : 'main_active_event_edit',
              params: {
                id: item.accused_object_info.object_id,
              },
            }),
            text: item =>
              `${this.$root.choices.inform_object_type[item.accused_object_info.object_type]}
              :${item.accused_object_info.object_name}`,
          },
          {
            title: '舉報時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '狀態',
            key: 'status',
            mapper: this.$root.choices.inform_status,
            filtering: {
              type: 'select',
              search_field: 'kw_stauts',
              choices: this.$root.choices.inform_status,
            },
          },
        ],
        actions: [{
          title: '處理',
          action(item) {
            const vm = this;
            vm.$router.push({
              name: item.accused_object_info.object_type === 'live'
                ? 'main_live_edit' : 'main_active_event_edit',
              params: {
                id: item.accused_object_info.object_id,
              },
            });
          },
        }],
      };
    },
    computed: {},
    methods: {},
  };
</script>

