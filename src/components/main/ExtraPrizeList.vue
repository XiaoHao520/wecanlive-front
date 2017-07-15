<template>

  <list-view :model="model"
             pk="id"
             title="物品管理"
             subtitle="贈送物品管理"
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
        model: 'ExtraPrize',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        cols: [
          {
            title: '禮物包ID',
            key: 'prize_category',
            filtering: {
              search_field: 'exact__prize_category__id',
            },
          },
          {
            title: '禮物包名稱',
            key: 'prize_category_name',
            filtering: {
              search_field: 'kw_prize_category__name',
            },
          },
          {
            title: '消費金幣要求（當日）',
            key: 'required_amount',
          },
          {
            title: '贈送桌布',
            key: 'wallpaper_url',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '壁紙名稱',
            key: 'name',
          },
          {
            title: '最後一次修改時間',
            key: 'date_updated',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_updated',
              to_field: 'date_to__date_updated',
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

