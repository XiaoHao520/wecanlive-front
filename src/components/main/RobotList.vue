<template>

  <list-view :model="model"
             pk="user"
             title="直播管理"
             subtitle="機器人管理"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :listActions="listActions"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Robot',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        cols: [
          {
            title: '用戶頭像',
            key: 'user_avatar',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '用戶ID',
            key: 'user_id',
          },
          {
            title: '用戶暱稱',
            key: 'user_nickname',
          },
          {
            title: '性別',
            key: 'user_gender',
            mapper: this.$root.choices.gender,
          },
          {
            title: '年齡',
            key: 'user_age',
          },
          {
            title: '星座',
            key: 'user_constellation',
            mapper: this.$root.choices.constellation,
          },
          {
            title: '好友數',
            key: 'count_friend',
          },
          {
            title: '追蹤數',
            key: 'count_follow',
          },
          {
            title: '發起直播數',
            key: 'count_live',
          },
          {
            title: '鑽石數',
            key: 'count_diamond',
          },
          {
            title: '送出禮物數',
            key: 'count_prize_sent',
          },
        ],
        actions: [],
        listActions: [
          {
            title: '分配規則',
            buttonClass: 'primary',
            action() {
              const vm = this;
              vm.$router.push({
                name: 'main_robot_settings',
              });
            },
          },
        ],
      };
    },
    computed: {},
    methods: {},
  };
</script>

