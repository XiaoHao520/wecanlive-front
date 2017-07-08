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
  export default {
    data() {
      return {
        model: 'Live',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        cols: [
          {
            title: '房間號',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'kw_id',
            },
          },
          {
            title: '直播分類',
            key: 'category',
            filtering: {
              search_field: 'kw_category__name',
            },
          },
          {
            title: '主播暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'kw_author__member__nickname',
            },
          },
          {
            title: '主播賬號',
            key: 'mobile',
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '觀看數',
            key: 'count_view',
          },
          {
            title: '評論數',
            key: 'count_comment',
          },
          {
            title: '點贊數',
            key: 'count_like',
          },
          {
            title: '收禮物數量',
            key: 'count_prize',
          },
//          TODO: 鑽石數暫未實現
//          {
//            title: '收鑽石數',
//            key: 'count_view',
//          },
          {
            title: '直播開始時間',
            key: 'date_created',
            filtering: {
              type: 'date_range',
              from_field: 'date_from__date_created',
              to_field: 'date_to__date_created',
            },
          },
          {
            title: '直播時長',
            key: 'duration',
            filter: x => `${x}分鐘`,
          },
          {
            title: '直播狀態',
            key: 'live_status',
            mapper: this.$root.choices.live_status,
            filtering: {
              type: 'select',
              search_field: 'live_status',
              choices: this.$root.choices.live_status,
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

