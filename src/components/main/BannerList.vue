<template>

  <list-view :model="model"
             pk="id"
             title="Banner管理"
             subtitle="Banner列表"
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
        model: 'Banner',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
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
            title: 'Banner圖片',
            key: 'image_url',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '跳轉鏈接',
            key: 'url',
          },
          {
            title: '備註',
            key: 'remark',
            tdStyle: {
              maxWidth: '260px',
              whiteSpace: 'normal',
              wordBreak: 'normal',
            },
          },
          {
            title: '主題',
            key: 'subject',
            mapper: this.$root.choices.banner_subject,
            filtering: {
              type: 'select',
              search_field: 'kw_subject',
              choices: this.$root.choices.banner_subject,
            },
          },
          {
            title: '輪播次序',
            key: 'sorting',
            ordering: 'sorting',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

