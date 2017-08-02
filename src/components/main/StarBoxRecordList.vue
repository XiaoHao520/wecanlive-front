<template>

  <list-view :model="model"
             pk="id"
             title="子業務管理"
             subtitle="元氣相關管理"
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
        model: 'StarBoxRecord',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        cols: [
          {
            title: '寶盒ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '鑽石',
            key: 'diamond_amount',
          },
          {
            title: '金幣',
            key: 'coin_amount',
          },
          {
            title: '禮物名稱',
            key: 'prize_name',
          },
          {
            title: '用戶ID',
            key: 'author',
          },
          {
            title: '用戶賬號',
            key: 'author_mobile',
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '用戶暱稱',
            key: 'author_nickname',
            filtering: {
              search_field: 'kw_author__member__nickname',
            },
          },
          {
            title: '領取時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

