<template>

  <list-view :model="model"
             pk="id"
             title="物品管理"
             subtitle="禮物訂單管理"
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
        model: 'PrizeOrder',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        cols: [
          {
            title: 'ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '禮物名稱',
            key: 'prize_name',
            filtering: {
              search_field: 'kw_prize__name',
            },
          },
          {
            title: '禮物ID',
            key: 'prize',
            filtering: {
              search_field: 'kw_prize__id',
            },
          },
          {
            title: '價格（金幣）',
            key: 'prize_price',
          },
          {
            title: '下單用戶賬號',
            type: 'link',
            route: item => ({ name: 'main_member_edit', params: { id: item.author } }),
            text: item => item.author_mobile,
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '下單用戶暱稱',
            key: 'author_nickname',
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '對應直播房間號',
            type: 'link',
            route: item => ({ name: 'main_live_edit', params: { id: item.live_id } }),
            text: item => item.live_id,
            filtering: {
              search_field: 'kw_live_watch_log__live__id',
            },
          },
          {
            title: '主播賬號',
            type: 'link',
            route: item => ({ name: 'main_member_edit', params: { id: item.live_author_id } }),
            text: item => item.live_author_mobile,
            filtering: {
              search_field: 'kw_live_watch_log__live__author__member__mobile',
            },
          },
          {
            title: '主播暱稱',
            key: 'live_author_nickname',
            filtering: {
              search_field: 'kw_live_watch_log__live__author__member__nickname',
            },
          },
          {
            title: '訂單時間',
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

