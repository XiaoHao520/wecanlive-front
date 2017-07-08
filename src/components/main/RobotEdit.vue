<template>

  <edit-view :model="model"
             title="機器人管理"
             pk="user"
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
        model: 'Robot',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '用戶頭像',
            type: 'image',
            key: {
              read: 'member_item.avatar_item',
              write: 'member.avatar',
            },
          },
          {
            title: '用戶ID',
            key: 'member_item.user',
            type: 'label',
          },
          {
            title: '用戶暱稱',
            key: 'member_item.nickname',
          },
          {
            title: '性別',
            key: 'member_item.gender',
            type: 'radio-button',
            choices: this.$root.choices.gender,
          },
          {
            title: '年齡',
            key: 'age',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '星座',
            key: 'member_item.constellation',
            type: 'radio-button',
            choices: this.$root.choices.constellation,
          },
          {
            title: '好友數',
            key: 'count_friend',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '追蹤數',
            key: 'count_follow',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '發起直播數',
            key: 'count_live',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '鑽石數',
            key: 'count_diamond',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '送出禮物數',
            key: 'count_prize_sent',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
        ],
      };
    },
    methods: {},
  };
</script>
