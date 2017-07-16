export default vm => [
  { title: '用戶ID', key: 'user' },
  { title: '頭像', key: 'avatar_url', type: 'image', width: 75, height: 75 },
  {
    title: '暱稱',
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
    mapper: vm.$root.choices.gender,
    filtering: {
      type: 'select',
      search_field: 'kw_gender',
      choices: vm.$root.choices.gender,
    },
  },
  {
    title: '年齡',
    key: 'member_age',
  },
  {
    title: '星座',
    key: 'constellation',
    mapper: vm.$root.choices.constellation,
  },
  {
    // title: '好友數',
    title: '好友',
    key: 'count_friend',
  },
  {
    // title: '追蹤數',
    title: '追蹤',
    key: 'count_follow',
  },
  {
    // title: '被追蹤數',
    title: '粉絲',
    key: 'count_followed',
  },
  {
    // title: '發起直播數',
    title: '直播',
    key: 'count_live',
  },
  {
    title: '最後直播時間',
    key: 'last_live_end',
  },
  {
    title: '註冊時間',
    key: 'date_created',
    filter(x) {
      return x.substr(0, 10);
    },
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
      choices: vm.$root.choices.isActive,
    },
  },
];
