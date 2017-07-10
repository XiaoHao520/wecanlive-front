<template>

  <list-view :model="model"
             pk="id"
             title="動態管理"
             subtitle="圖片管理"
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
        model: 'ActiveEvent',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: true,
        },
        cols: [
          {
            title: '圖片',
            key: 'images_item.image.url',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '內容',
            key: 'content',
            tdStyle: {
              maxWidth: '260px',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            },
          },
          {
            title: '發佈者暱稱',
            key: 'nickname',
            filtering: {
              search_field: 'kw_author__member__nickname',
            },
          },
          {
            title: '發佈者賬號',
            key: 'mobile',
            filtering: {
              search_field: 'kw_author__member__mobile',
            },
          },
          {
            title: '評論數',
            key: 'count_amount',
          },
          {
            title: '點贊數',
            key: 'count_like',
          },
          {
            title: '發佈時間',
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

