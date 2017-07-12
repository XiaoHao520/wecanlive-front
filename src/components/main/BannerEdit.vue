<template>

  <edit-view :model="model"
             title="Banner管理"
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
//      const vm = this;
      return {
        model: 'Banner',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '圖片',
            key: {
              read: 'image_item',
              write: 'image',
            },
            type: 'image',
            description: '尺寸大小： 750*360',
          },
          {
            title: '跳轉鏈接',
            key: 'url',
          },
          {
            title: '輪播次序',
            key: 'sorting',
            description: '數字越小越靠前',
            htmlType: 'number',
          },
          {
            title: '備註',
            key: 'remark',
            htmlType: 'textarea',
          },
          {
            title: '主題',
            key: 'subject',
            type: 'radio-button',
            choices: this.$root.choices.banner_subject,
          },
        ],
      };
    },
    methods: {},
  };
</script>
