<template>

  <list-view :model="model"
             pk="id"
             title="用戶管理"
             subtitle="家族信息管理"
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
        model: 'Family',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: true,
        },
        cols: [
          {
            title: '家族ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '家族名稱',
            key: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
          {
            title: '家族Logo',
            key: 'logo_item.image',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '家族創始人',
            key: 'author_nickname',
          },
          {
            title: '創始人ID',
            key: 'author',
          },
          {
            title: '家族管理員',
            key: 'count_admin',
          },
          {
            title: '家族成員',
            key: 'count_family_member',
          },
          {
            title: '家族公告數',
            key: 'count_family_article',
          },
          {
            title: '家族任務數',
            key: 'count_family_mission',
          },
          {
            title: '家族貢獻值',
            key: 'count_family_contribution',
          },
          {
            title: '家族等级',
            key: 'family_level',
          },
          {
            title: '創立時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '是否啓用',
            key: 'is_active',
            type: 'switch',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

