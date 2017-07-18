<template>

  <edit-view :model="model"
             title="家族信息管理"
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
        model: 'Family',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: '家族ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '家族名稱',
            key: 'name',
            type: 'label',
          },
          {
            title: '家族創始人',
            key: 'author_nickname',
            type: 'label',
          },
          {
            title: '創始人ID',
            key: 'author',
            type: 'label',
          },
          {
            title: '家族管理員',
            type: 'input',
            key: 'count_admin',
            htmlType: 'number',
          },
          {
            title: '家族Logo',
            type: 'image',
            key: {
              read: 'logo_item',
              write: 'logo',
            },
          },
          {
            title: '家族貢獻值',
            type: 'input',
            key: 'count_admin',
            htmlType: 'number',
          },
          {
            title: '家族成員',
            type: 'input',
            key: 'count_family_member',
            htmlType: 'number',
          },
          {
            title: '家族公告數',
            type: 'input',
            key: 'count_family_article',
            htmlType: 'number',
          },
          {
            title: '家族任務數',
            type: 'input',
            key: 'count_family_mission',
            htmlType: 'number',
          },
          {
            title: '創立時間',
            type: 'datepicker',
            key: 'date_created',
          },
          {
            title: '家族狀態',
            key: 'is_active',
            type: 'switch',
          },
          {
            title: '家族成員',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'FamilyMember',
              options: {
                can_edit: false,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                family: vm.$route.params.id,
              },
              cols: [
                { title: '用戶ID', key: 'author' },
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
                  title: '身份',
                  key: 'role',
                  mapper: this.$root.choices.family_member_role,
                },
                {
                  title: '家族稱號',
                  key: 'title',
                },
                {
                  title: '觀看家族長直播',
                  key: 'watch_master_live_duration',
                  filter(item) {
                    return `${item}分鐘`;
                  },
                },
                {
                  title: '送禮給家族長',
                  key: 'watch_master_live_prize',
                  filter(item) {
                    return `${item}金幣`;
                  },
                },
//                TODO: 貢獻值暫時遺留
                {
                  title: '貢獻值',
                  key: 'title',
                },
                {
                  title: '加入時間',
                  key: 'date_approved',
                },
                {
                  title: '賬戶狀態',
                  key: 'is_active',
                  type: 'switch',
                  filtering: {
                    type: 'select',
                    search_field: 'is_active',
                    choices: this.$root.choices.isActive,
                  },
                },
              ],
              actions: [{
                title: '查看',
                action(item) {
                  vm.$router.push({
                    name: 'main_member_edit',
                    params: {
                      id: item.author,
                    },
                  });
                },
              }],
            },
          },
          {
            title: '家族公告',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'FamilyArticle',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                family: vm.$route.params.id,
              },
              cols: [
                { title: '公告序號', key: 'id' },
                {
                  title: '公告標題',
                  key: 'name',
                  filtering: {
                    search_field: 'kw_name',
                  },
                },
                {
                  title: '公告內容',
                  key: 'content',
                  tdStyle: {
                    maxWidth: '300px',
                    whiteSpace: 'normal',
                    wordBreak: 'normal',
                  },
                },
                {
                  title: '發佈人暱稱',
                  key: 'author_nickname',
                  filtering: {
                    search_field: 'kw_author__member__nickname',
                  },
                },
                {
                  title: '發佈人賬號',
                  key: 'author_mobile',
                  filtering: {
                    search_field: 'kw_author__member__mobile',
                  },
                },
                {
                  title: '發佈時間',
                  key: 'date_created',
                  filtering: {
                    type: 'date_range',
                    from_field: 'date_from__date_created',
                    to_field: 'date_to__date_created',
                  },
                },
              ],
            },
          },
          {
            title: '家族任務',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'FamilyMission',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                family: vm.$route.params.id,
              },
              cols: [
                { title: '任务序号', key: 'id' },
                {
                  title: '任务標題',
                  key: 'name',
                  filtering: {
                    search_field: 'kw_name',
                  },
                },
                {
                  title: '任務元件',
                  key: 'mission_item',
                  mapper: this.$root.choices.family_mission_item,
                },
                {
                  title: '元件數值',
                  key: 'mission_item_value',
                },
                {
                  title: '任務開始時間',
                  key: 'date_begin',
                },
                {
                  title: '任務結束時間',
                  key: 'date_end',
                },
                {
                  title: '發佈人暱稱',
                  key: 'author_nickname',
                  filtering: {
                    search_field: 'kw_author__member__nickname',
                  },
                },
                {
                  title: '發佈人賬號',
                  key: 'author_mobile',
                  filtering: {
                    search_field: 'kw_author__member__mobile',
                  },
                },
                {
                  title: '發佈時間',
                  key: 'date_created',
                  filtering: {
                    type: 'date_range',
                    from_field: 'date_from__date_created',
                    to_field: 'date_to__date_created',
                  },
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
