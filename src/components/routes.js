/* eslint-disable */
// TODO: 要将 UserList 和 GroupList 拉进来作为默认选项。

export default [
  { path: '/user', name: 'main_user_list', component: require('./main/UserList.vue') },
  { path: '/user/:id', name: 'main_user_edit', component: require('./main/UserEdit.vue') },
  { path: '/group', name: 'main_group_list', component: require('./main/GroupList.vue') },
  { path: '/group/:id', name: 'main_group_edit', component: require('./main/GroupEdit.vue') },
  // 对应 menus.js 中的用户管理
  { path: '/member', name: 'main_member_list', component: require('./main/MemberList.vue') },
  { path: '/member/:id', name: 'main_member_edit', component: require('./main/MemberEdit.vue') },

  // 对应 menus.js 中的直播管理
  { path: '/live/category', name: 'main_live_category_list', component: require('./main/LiveCategoryList.vue') },
  { path: 'live/category/:id', name: 'main_live_category_edit', component: require('./main/LiveCategoryEdit.vue') },
];
