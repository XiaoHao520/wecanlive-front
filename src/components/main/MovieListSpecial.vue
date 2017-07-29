<template>

  <list-view :model="model"
             pk="id"
             title="節目管理"
             subtitle="特輯視頻管理"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :filters="filters"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Movie',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        filters: {
          category: 'SPECIAL',
        },
        cols: [
          {
            title: '序號',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '特輯標題',
            key: 'name',
          },
          {
            title: '封面圖片',
            key: 'thumbnail_item.image',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '標籤管理',
            key: 'tag_name',
            type: 'tag',
            color: '#ff0000',
          },
          {
            title: '跳轉鏈接',
            key: 'embed_link',
          },
          {
            title: '輪播次序',
            key: 'sorting',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

