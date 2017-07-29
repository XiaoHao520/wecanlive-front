<template>

  <edit-view :model="model"
             title="節目管理"
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
        model: 'Movie',
        options: {
          can_edit: true,
          hooks: {
            pre_save(_vm) {
              console.log(_vm.fields);
              if (_vm.fields[3].value === 'HOT' && !_vm.fields[4].value) {
                vm.notify('請選擇熱門視頻類型');
                return false;
              }
              return true;
            },
            post_save(_vm) {
              if (_vm.fields[3].value === 'HOT') {
                vm.$router.push({
                  name: 'main_movie_list_hot',
                });
              } else if (_vm.fields[3].value === 'SPECIAL') {
                vm.$router.push({
                  name: 'main_movie_list_special',
                });
              }
            },
          },
        },
        fields: [
          {
            title: '序號',
            key: 'id',
            type: 'label',
          },
          {
            title: '標題',
            key: 'name',
          },
          {
            title: '封面圖片',
            type: 'image',
            key: {
              read: 'thumbnail_item',
              write: 'thumbnail',
            },
          },
          {
            title: '影片分類',
            type: 'radio-button',
            key: 'category',
            choices: this.$root.choices.movie_category,
          },
          {
            title: '熱門視頻類型',
            type: 'radio-button',
            key: 'type',
            choices: this.$root.choices.movie_type,
            description: '當影片分類爲“熱門視頻”需要選擇',
//            visible() {
//              return false;
//            },
//            context: !this.$route.params.is_hot,
          },
          {
            title: '跳轉鏈接',
            key: 'embed_link',
          },
          {
            title: '輪播次序',
            key: 'sorting',
            description: '數字越小越靠前',
            htmlType: 'number',
          },
          {
            title: '標籤',
            key: 'tag_name',
          },
          {
            title: '標籤顏色',
            key: 'tag_color',
          },
        ],
      };
    },
    methods: {},
  };
</script>
