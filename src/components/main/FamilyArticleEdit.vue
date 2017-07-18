<template>

  <edit-view :model="model"
             title="家族公告"
             pk="id"
             subtitle="查看"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
//      const vm = this;
      return {
        model: 'FamilyArticle',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: 'ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '公告標題',
            key: 'name',
            type: 'label',
          },
          {
            title: '公告內容',
            key: 'content',
            htmlType: 'textarea',
          },
          {
            title: '發佈人暱稱',
            key: 'author_nickname',
            type: 'label',
          },
          {
            title: '發佈人賬號',
            key: 'author_mobile',
            type: 'label',
          },
          {
            title: '發佈時間',
            key: 'date_created',
            type: 'label',
          },
        ],
      };
    },
    methods: {},
  };
</script>
