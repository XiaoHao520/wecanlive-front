<template>

  <list-view :model="model"
             pk="id"
             title="節目管理"
             subtitle="熱門視頻管理"
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
          category: 'HOT',
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
            title: '類型',
            key: 'type',
            mapper: this.$root.choices.movie_type,
          },
          {
            title: '熱門標題',
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

