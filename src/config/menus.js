/* 侧栏菜单样例，支持二级菜单 */

export default [{
  title: '系统管理',
  sub_menus: [
    { title: '後臺賬戶管理', link: { name: 'main_user_list' } },
    { title: '後臺權限管理', link: { name: 'main_group_list' } },
    { title: '新增修改記錄', link: { name: 'main_admin_log_list' } },
  ],
}, {
  title: '用戶管理',
  sub_menus: [
    { title: '用戶信息管理', link: { name: 'main_member_list' } },
    { title: '家族信息管理', link: { name: 'main_family_list' } },
  ],
}, {
  title: '直播管理',
  sub_menus: [
    { title: '直播分類', link: { name: 'main_live_category_list' } },
    { title: '直播間管理', link: { name: 'main_live_list' } },
    { title: '直播間系統消息', link: { name: 'main_live_broadcast_list' } },
    { title: '機器人管理', link: { name: 'main_robot_list' } },
  ],
}, {
  title: '節目管理',
  sub_menus: [
    { title: 'Banner管理', link: { name: 'main_member_list' } },
    { title: '特輯視頻管理', link: { name: 'main_movie_list_special' } },
    { title: '熱門排行管理', link: { name: 'main_movie_list_hot' } },
  ],
}, {
  title: '動態管理',
  sub_menus: [
    { title: '圖片管理', link: { name: 'main_active_event_list' } },
  ],
}, {
  title: '物品管理',
  sub_menus: [
    { title: '禮物包管理', link: { name: 'main_prize_list' } },
    { title: '禮物訂單管理', link: { name: 'main_prize_order_list' } },
    { title: '贈送物品管理', link: { name: 'main_extra_prize_list' } },
  ],
}, {
  title: '榜單管理',
  sub_menus: [
    { title: '鑽石榜', link: { name: 'main_rank_diamond' } },
    { title: '送禮榜', link: { name: 'main_rank_prize' } },
    { title: '元氣榜', link: { name: 'main_rank_star' } },
  ],
}, {
  title: '活動管理',
  sub_menus: [
    { title: '票選活動', link: { name: 'main_activity_list_vote' } },
    { title: '觀看直播活動', link: { name: 'main_activity_list_watch' } },
    { title: '抽獎活動', link: { name: 'main_activity_list_draw' } },
    { title: '累計鑽石活動', link: { name: 'main_activity_list_diamond' } },
  ],
}, {
  title: '財務管理',
  sub_menus: [
    { title: '流水記錄', link: { name: 'main_account_transaction_list' } },
    { title: '提現管理', link: { name: 'main_withdraw_list' } },
    { title: '提現黑名單', link: { name: 'main_withdraw_blacklist' } },
  ],
}, {
  title: '子業務管理',
  sub_menus: [
    { title: '熱門頁面Banner', link: { name: 'main_banner_list_hot' } },
    { title: '熱門頁面管理', link: { name: 'main_settings_hot' } },
    { title: '衆星雲集分類', link: { name: 'main_celebrity_category_list' } },
    { title: '首次登陸推薦', link: { name: 'main_member_list_recommend_welcome' } },
    { title: '首頁追蹤推薦', link: { name: 'main_member_list_recommend_follow' } },
    { title: '簽到管理', link: { name: 'main_settings_daily' } },
    { title: '舉報管理', link: { name: 'main_inform_list' } },
    { title: '元氣管理', link: { name: 'main_settings_star' } },
    { title: '元氣寶盒', link: { name: 'main_settings_star_box' } },
    { title: '寶盒領取記錄', link: { name: 'main_star_box_record_list' } },
    { title: '消息推送管理', link: { name: 'main_broadcast_list' } },
    { title: '敏感詞管理', link: { name: 'main_sensitive_word_list' } },
    { title: '發送彈幕設置', link: { name: 'main_settings_barrage' } },
    { title: '跑马灯设置', link: { name: 'main_settings_marquee' } },
    { title: '启动页设置', link: { name: 'main_settings_splash_screen' } },
    { title: '等级区间管理', link: { name: 'main_settings_level' } },
    { title: '经验值管理', link: { name: 'main_settings_experience_point' } },
    { title: 'VIP管理', link: { name: 'main_settings_vip' } },
    { title: '钻石兑换管理', link: { name: 'main_settings_diamond_exchange' } },
    { title: '金币充值管理', link: { name: 'main_settings_recharge' } },
    { title: '金币充值管理', link: { name: 'main_settings_redbag' } },
    { title: '客服中心', link: { name: 'main_settings_customer_center' } },
  ],
}];
