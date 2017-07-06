<template>

  <edit-view :model="model"
             title="直播間管理"
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
      const vm = this;
      return {
        model: 'Live',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: '房間號',
            key: 'id',
            type: 'label',
          },
          {
            title: '直播分類',
            key: 'category',
            type: 'label',
          },
          {
            title: '直播標題',
            key: 'name',
            type: 'label',
          },
          {
            title: '開始時間',
            key: 'date_created',
            type: 'label',
          },
//          TODO: 地區
//          {
//            title: '地區',
//            key: ''
//          }
          {
            title: '直播主暱稱',
            key: 'nickname',
            type: 'label',
          },
          {
            title: '直播主賬號',
            key: 'mobile',
            type: 'label',
          },
          {
            title: '設置密碼',
            key: 'password',
            type: 'label',
          },
          {
            title: '設置隱藏',
            key: 'is_private',
            type: 'switch',
          },
          {
            title: '是否免費',
            key: 'is_free',
            type: 'switch',
          },
          {
            title: '上限人數',
            key: 'quota',
            type: 'number',
            min: 0,
            description: '上限观众人数，0为不做限制',
          },
          {
            title: '推流地址',
            key: 'push_url',
            type: 'label',
          },
          {
            title: '用戶列表',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'LiveWatchLog',
              options: {
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                live: vm.$route.params.id,
              },
              cols: [
                {
                  title: '序號',
                  key: 'user_id',
                },
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
//                TODO: 家族
//                {
//                  title: '所屬家族',
//                  key: 'mobile',
//                  filtering: {
//                    search_field: 'kw_mobile',
//                  },
//                },
                {
                  title: '性別',
                  key: 'gender',
                  mapper: this.$root.choices.gender,
                },
                {
                  title: '年齡',
                  key: 'member_age',
                  filter: x => `${x}歲`,
                },
//                TODO: 用戶等級 VIP
//                {
//                  title: '用戶等級',
//                },
//                {
//                  title: 'VIP',
//                }
                {
                  title: '發佈評論數',
                  key: 'count_comment',
                },
                {
                  title: '開播時長',
                  key: 'live_total_duration',
                  filter: x => `${x}分鐘`,
                },
                {
                  title: '用戶停留時間',
                  key: 'duration',
                  filter: x => `${x}分鐘`,
                },
                {
                  title: '消費金額（臺幣）',
                  key: 'expense',
                  filter: x => `${x}元`,
                },
                {
                  title: '狀態',
                  key: 'status',
                  mapper: this.$root.choices.live_watch_log_status,
                  filtering: {
                    type: 'select',
                    search_field: 'kw_status',
                    choices: this.$root.choices.live_watch_log_status,
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
                live: vm.$route.params.id,
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
        ],
      };
    },
    methods: {},
  };
</script>
