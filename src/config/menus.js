/* 侧栏菜单样例，支持二级菜单 */

export default [{
  title: '用户管理',
  expanded: false,
  sub_menus: [
    { title: '用户信息管理', link: { name: 'main_member_list' } },
    // { title: '家族信息管理', link: { name: 'main_personal_validation_list' } },
  ],
}];
