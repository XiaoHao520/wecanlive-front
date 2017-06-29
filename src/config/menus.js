/* 侧栏菜单样例，支持二级菜单 */

export default [{
  title: '用戶管理',
  expanded: false,
  sub_menus: [
    { title: '用戶信息管理', link: { name: 'main_member_list' } },
    // { title: '家族信息管理', link: { name: 'main_personal_validation_list' } },
  ],
}, {
  title: '直播管理',
  sub_menus: [
    { title: '直播分類', link: { name: 'main_live_category_list' } },
    { title: '直播間管理', link: { name: 'main_live_list' } },
  ],
}];
