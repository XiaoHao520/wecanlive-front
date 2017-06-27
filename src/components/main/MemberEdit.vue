<template>

  <edit-view :model='model'
             title="用戶管理"
             pk="user"
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
      const vm = this;
      return {
        model: 'Member',
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        fields: [
//          { title: '用戶ID', key: 'user', type: 'label' },
          { title: '註冊時間', key: 'date_created', type: 'label' },
          {
            title: '頭像',
            type: 'image',
            key: {
              read: 'avatar_item',
              write: 'avatar',
            },
          },
          { title: '手機號碼', key: 'mobile' },
          { title: '暱稱', key: 'nickname' },
          { title: '真實姓名', key: 'real_name', type: 'label' },
          {
            title: '性別',
            key: 'gender',
            type: 'radio-button',
            default: '',
            choices: this.$root.choices.gender,
          },
          {
            title: '星座',
            type: 'radio-button',
            key: 'constellation',
            choices: this.$root.choices.constellation,
          },
          {
            title: '生日',
            type: 'datepicker',
            key: 'birthday',
          },
          {
            title: '追踪数',
            type: 'label',
            key: 'count_follow',
          },
          {
            title: '被追踪数',
            type: 'label',
            key: 'count_followed',
          },
          {
            title: '是否啓用',
            key: 'is_active',
            default: true,
            type: 'switch',
          },
          {
            title: '用戶追蹤的人',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'Member',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                member: vm.$route.params.id,
                is_follow: true,
              },
              cols: [
                { title: '用戶ID', key: 'user' },
                {
                  title: '用戶暱稱',
                  key: 'nickname',
                  filtering: {
                    search_field: 'kw_nickname',
                  },
                },
                {
                  title: '用戶賬號',
                  key: 'mobile',
                  filtering: {
                    search_field: 'kw_mobile',
                  },
                },
                {
                  title: '性別',
                  key: 'gender',
                  mapper: this.$root.choices.gender,
                  filtering: {
                    type: 'select',
                    search_field: 'kw_gender',
                    choices: this.$root.choices.gender,
                  },
                },
                {
                  title: '年齡',
                  key: 'member_age',
                },
                {
                  title: '星座',
                  key: 'constellation',
                  mapper: this.$root.choices.constellation,
                },
                {
                  title: '最後直播時間',
                  key: 'count_followed',
                },
                {
                  title: '註冊時間',
                  key: 'date_created',
                  filter: x => x.substr(0, 10),
                  filtering: {
                    type: 'date_range',
                    from_field: 'date_from__date_created',
                    to_field: 'date_to__date_created',
                  },
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
            },
          },
          {
            title: '追蹤用戶的人',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'Member',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                member: vm.$route.params.id,
                is_followed: true,
              },
              cols: [
                { title: '用戶ID', key: 'user' },
                {
                  title: '用戶暱稱',
                  key: 'nickname',
                  filtering: {
                    search_field: 'kw_nickname',
                  },
                },
                {
                  title: '用戶賬號',
                  key: 'mobile',
                  filtering: {
                    search_field: 'kw_mobile',
                  },
                },
                {
                  title: '性別',
                  key: 'gender',
                  mapper: this.$root.choices.gender,
                  filtering: {
                    type: 'select',
                    search_field: 'kw_gender',
                    choices: this.$root.choices.gender,
                  },
                },
                {
                  title: '年齡',
                  key: 'member_age',
                },
                {
                  title: '星座',
                  key: 'constellation',
                  mapper: this.$root.choices.constellation,
                },
                {
                  title: '最後直播時間',
                  key: 'count_followed',
                },
                {
                  title: '註冊時間',
                  key: 'date_created',
                  filter: x => x.substr(0, 10),
                  filtering: {
                    type: 'date_range',
                    from_field: 'date_from__date_created',
                    to_field: 'date_to__date_created',
                  },
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
            },
          },
          {
            title: '用戶送出的禮物',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'PrizeOrder',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                member: vm.$route.params.id,
              },
              cols: [
                {
                  title: '禮物名稱',
                  key: 'prize_name',
                  filtering: {
                    search_field: 'kw_prize__name',
                  },
                },
                {
                  title: '所屬分類',
                  key: 'prize_category',
                  filtering: {
                    search_field: 'kw_prize__category__name',
                  },
                },
                {
                  title: '價格（金幣）',
                  key: 'prize_price',
                },
                {
                  title: '數量',
                  key: 'prize_transition_amount',
                },
                {
                  title: '送出用戶賬號',
                  key: 'user_debit',
                  filtering: {
                    search_field: 'kw_prize_transition__user_debit__member__mobile',
                  },
                },
                {
                  title: '送出用戶暱稱',
                  key: 'user_debit_nickname',
                },
                {
                  title: '對應直播房間號',
                  key: 'live_id',
                  filtering: {
                    search_field: 'kw_live_watch_log__live__id',
                  },
                },
                {
                  title: '送出時間',
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
            title: '用戶發起的動態',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'ActiveEvent',
              options: {
                can_edit: true,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                member: vm.$route.params.id,
              },
              cols: [
                {
                  title: '序號',
                  key: 'id',
                },
                {
                  title: '動態類型',
                  key: 'type',
                  mapper: this.$root.choices.activity_event_type,
                  filtering: {
                    type: 'select',
                    search_field: 'kw_type',
                    choices: this.$root.choices.activity_event_type,
                  },
                },
                {
                  title: '動態內容',
                  key: 'content',
                  filtering: {
                    search_field: 'kw_content',
                  },
                },
                {
                  title: '評論數',
                  key: 'count_amount',
                  ordering: 'count_amount',
                },
                {
                  title: '點贊',
                  key: 'count_like',
                  ordering: 'count_like',
                },
                {
                  title: '發起時間',
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
