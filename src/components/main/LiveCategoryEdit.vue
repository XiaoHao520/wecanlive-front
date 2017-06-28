<template>

  <edit-view :model='model'
             title="直播分類管理"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel">
  //  import * as api from '../../resource/api';

  export default {
    data() {
//      const vm = this;
      return {
        model: 'LiveCategory',
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        fields: [
          {
            title: '分類ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '分類名稱',
            key: 'name',
          },
          {
            title: '置頂順序',
            key: 'sorting',
            type: 'number',
            min: 0,
            description: '數字越大排名越靠前',
          },
        ],
      };
    },
    methods: {},
  };
</script>
