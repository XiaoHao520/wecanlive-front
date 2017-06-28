<template>

  <list-view :model="model"
             pk="user"
             title="用戶管理"
             subtitle="用戶列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :listActions="listActions"
             :actions="actions">
  </list-view>

</template>

<script lang="babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'Member',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
          can_select: true,
        },
        cols: [
          { title: '用戶ID', key: 'user' },
          { title: '頭像', key: 'avatar_url', type: 'image', width: 75, height: 75 },
          {
            title: '暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'kw_nickname',
            },
          },
          {
            title: '用戶賬號',
            key: 'mobile',
            filtering: {
              search_field: 'kw_mobile',
            },
          },
          {
            title: '性別',
            key: 'gender',
            mapper: this.$root.choices.gender,
            filtering: {
              type: 'select',
              search_field: 'kw_gender',
              choices: this.$root.choices.gender,
            },
          },
          {
            title: '年齡',
            key: 'member_age',
          },
          {
            title: '星座',
            key: 'constellation',
            mapper: this.$root.choices.constellation,
          },
          {
            title: '好友數',
            key: 'count_friend',
          },
          {
            title: '追蹤數',
            key: 'count_follow',
          },
          {
            title: '被追蹤數',
            key: 'count_followed',
          },
          {
            title: '發起直播數',
            key: 'count_live',
          },
          {
            title: '最後直播時間',
            key: 'last_live_end',
          },
          {
            title: '註冊時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '賬戶狀態',
            key: 'is_active',
            type: 'switch',
            filtering: {
              type: 'select',
              search_field: 'is_active',
              choices: this.$root.choices.isActive,
            },
          },
        ],
        listActions: [{
          title: '補償鑽石數',
          action() {
            vm.notify('開發中');
          },
        }, {
          title: '補償金幣數',
          action() {
            vm.notify('開發中');
          },
        }],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

