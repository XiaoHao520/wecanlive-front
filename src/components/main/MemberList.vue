<template>

  <list-view :model="model"
             pk="user"
             title="用户管理"
             subtitle="用户列表"
             :options="options"
             :cols="cols"
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
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
          can_select: true,
        },
        cols: [
          { title: 'ID', key: 'user' },
          { title: '头像', key: 'avatar_url', type: 'image', width: 75, height: 75 },
          {
            title: '昵称',
            key: 'nickname',
            filtering: {
              search_field: 'kw_nickname',
            },
          },
          {
            title: '用户账号',
            key: 'mobile',
            filtering: {
              search_field: 'kw_mobile',
            },
          },
          {
            title: '性别',
            key: 'gender',
            mapper: this.$root.choices.gender,
            filtering: {
              type: 'select',
              search_field: 'kw_gender',
              choices: this.$root.choices.gender,
            },
          },
          {
            title: '年龄',
            key: 'member_age',
          },
          {
            title: '星座',
            key: 'constellation',
            mapper: this.$root.choices.constellation,
          },
          {
            title: '好友数',
          },
          {
            title: '追踪数',
          },
          {
            title: '被追踪数',
          },
          {
            title: '发起直播数',
          },
          {
            title: '最后直播时间',
          },
          {
            title: '注册时间',
            key: 'date_created',
            filter: x => x.substr(0, 10),
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '账户状态',
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

