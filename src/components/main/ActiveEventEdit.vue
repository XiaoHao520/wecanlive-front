<template>

  <edit-view :model="model"
             title="圖片管理"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'ActiveEvent',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: '發佈者暱稱',
            type: 'label',
            key: 'author_nickname',
          },
          {
            title: '發佈者賬號',
            type: 'label',
            key: 'author_mobile',
          },
          {
            title: '點贊數',
            type: 'label',
            key: 'count_like',
          },
          {
            title: '評論數',
            type: 'label',
            key: 'count_amount',
          },
          {
            title: '發佈內容',
            type: 'input',
            key: 'content',
            htmlType: 'textarea',
          },
          {
            title: '發佈時間',
            key: 'date_created',
            type: 'label',
          },
          {
            title: '狀態',
            type: 'switch',
            key: 'is_active',
          },
          {
            title: '圖片監控',
            type: 'image',
            key: {
              read: 'images_item.image',
              write: '',
            },
          },
          {
            title: '評論列表',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'Comment',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                activeevent: vm.$route.params.id,
              },
              cols: [
                {
                  title: '序號',
                  key: 'id',
                },
                {
                  title: '用戶暱稱',
                  key: 'author_nickname',
                  filtering: {
                    search_field: 'kw_author__member__nickname',
                  },
                },
                {
                  title: '用戶賬號',
                  key: 'author_mobile',
                  filtering: {
                    search_field: 'kw_author__member__mobile',
                  },
                },
                {
                  title: '內容',
                  key: 'content',
                  filtering: {
                    search_field: 'kw_content',
                  },
                },
                {
                  title: '評論時間',
                  key: 'date_created',
                },
              ],
            },
          },
        ],
      };
    },
    methods: {},
  };
</script>
