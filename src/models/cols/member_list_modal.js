export default vm => [
  {
    title: '用戶ID',
    key: 'user',
    ordering: 'user',
    filtering: {
      search_field: 'kw_user__id',
    },
  },
  { title: '頭像', key: 'avatar_url', type: 'image', width: 45, height: 45 },
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
];
