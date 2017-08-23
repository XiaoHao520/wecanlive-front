/* eslint-disable */
// TODO: 要将 UserList 和 GroupList 拉进来作为默认选项。

export default [
  // 系統管理
  { path: '/user', name: 'main_user_list', component: require('./main/UserList.vue') },
  { path: '/user/:id', name: 'main_user_edit', component: require('./main/UserEdit.vue') },
  { path: '/group', name: 'main_group_list', component: require('./main/GroupList.vue') },
  { path: '/group/:id', name: 'main_group_edit', component: require('./main/GroupEdit.vue') },
  { path: '/admin/log', name: 'main_admin_log_list', component: require('./main/AdminLogList.vue') },

  // 用户管理
  { path: '/member', name: 'main_member_list', component: require('./main/MemberList.vue') },
  { path: '/member/:id', name: 'main_member_edit', component: require('./main/MemberEdit.vue') },
  { path: '/family', name: 'main_family_list', component: require('./main/FamilyList.vue') },
  { path: '/family/:id', name: 'main_family_edit', component: require('./main/FamilyEdit.vue') },
  {
    path: '/family/:id/setting/mission',
    name: 'main_family_setting_mission',
    component: require('./main/FamilySettingMission.vue')
  },
  {
    path: '/family/:id/setting/level',
    name: 'main_family_setting_level',
    component: require('./main/FamilySettingLevel.vue')
  },
  { path: '/family/article/:id', name: 'main_family_article_edit', component: require('./main/FamilyArticleEdit.vue') },
  { path: '/family/mission/:id', name: 'main_family_mission_edit', component: require('./main/FamilyMissionEdit.vue') },
  { path: '/settings/family/mission', name: 'main_settings_family_mission', component: require('./main/SettingFamilyMission.vue') },
  { path: '/settings/family/level', name: 'main_settings_family_level', component: require('./main/SettingFamilyLevel.vue') },

  // 直播管理
  { path: '/live/analysis', name: 'main_live_analysis', component: require('./main/LiveAnalysis.vue') },
  { path: '/live/category', name: 'main_live_category_list', component: require('./main/LiveCategoryList.vue') },
  { path: '/live/category/:id', name: 'main_live_category_edit', component: require('./main/LiveCategoryEdit.vue') },
  { path: '/live/broadcast', name: 'main_live_broadcast_list', component: require('./main/LiveBroadcastList.vue') },
  { path: '/live/broadcast/:id', name: 'main_live_broadcast_edit', component: require('./main/LiveBroadcastEdit.vue') },
  { path: '/live', name: 'main_live_list', component: require('./main/LiveList.vue') },
  { path: '/live/:id', name: 'main_live_edit', component: require('./main/LiveEdit.vue') },
  { path: '/robot', name: 'main_robot_list', component: require('./main/RobotList.vue') },
  { path: '/robot/settings', name: 'main_robot_settings', component: require('./main/RobotSettings.vue') },
  { path: '/robot/:id', name: 'main_robot_edit', component: require('./main/RobotEdit.vue') },
  { path: '/live/recommend/index', name: 'main_live_list_recommend_index', component: require('./main/LiveListRecommendIndex.vue') },
  { path: '/live/recommend/hot', name: 'main_live_list_recommend_hot', component: require('./main/LiveListRecommendHot.vue') },
  { path: '/live/data/analysis', name: 'main_live_data_analysis', component: require('./main/LiveDataAnalysis.vue') },


  // 節目管理
  { path: '/banner', name: 'main_banner_list', component: require('./main/BannerList.vue') },
  { path: '/banner/movie', name: 'main_banner_list_movie', component: require('./main/BannerListMovie.vue') },
  { path: '/banner/:id', name: 'main_banner_edit', component: require('./main/BannerEdit.vue') },
  { path: '/movie/hot', name: 'main_movie_list_hot', component: require('./main/MovieListHot.vue') },
  { path: '/movie/special', name: 'main_movie_list_special', component: require('./main/MovieListSpecial.vue') },
  { path: '/movie', name: 'main_movie_list', component: require('./main/MovieList.vue') },
  { path: '/movie/:id', name: 'main_movie_edit', component: require('./main/MovieEdit.vue') },

  // 動態管理
  { path: '/active/event', name: 'main_active_event_list', component: require('./main/ActiveEventList.vue') },
  { path: '/active/event/:id', name: 'main_active_event_edit', component: require('./main/ActiveEventEdit.vue') },

  // 物品管理
  { path: '/prize/order', name: 'main_prize_order_list', component: require('./main/PrizeOrderList.vue') },
  { path: '/prize/order/:id', name: 'main_prize_order_edit', component: require('./main/PrizeOrderEdit.vue') },
  { path: '/prize/detail', name: 'main_prize_list', component: require('./main/PrizeList.vue') },
  { path: '/prize/detail/:id', name: 'main_prize_edit', component: require('./main/PrizeEdit.vue') },
  { path: '/prize/category', name: 'main_prize_category_list', component: require('./main/PrizeCategoryList.vue') },
  { path: '/prize/category/:id', name: 'main_prize_category_edit', component: require('./main/PrizeCategoryEdit.vue') },
  { path: '/extra/prize', name: 'main_extra_prize_list', component: require('./main/ExtraPrizeList.vue') },
  { path: '/extra/prize/:id', name: 'main_extra_prize_edit', component: require('./main/ExtraPrizeEdit.vue') },

  // 榜單管理
  { path: '/rank/diamond', name: 'main_rank_diamond', component: require('./main/RankDiamond.vue') },
  { path: '/rank/prize', name: 'main_rank_prize', component: require('./main/RankPrize.vue') },
  { path: '/rank/star', name: 'main_rank_star', component: require('./main/RankStar.vue') },

  // 活動管理
  { path: '/activity/vote', name: 'main_activity_list_vote', component: require('./main/ActivityListVote.vue') },
  { path: '/activity/watch', name: 'main_activity_list_watch', component: require('./main/ActivityListWatch.vue') },
  { path: '/activity/draw', name: 'main_activity_list_draw', component: require('./main/ActivityListDraw.vue') },
  { path: '/activity/diamond', name: 'main_activity_list_diamond', component: require('./main/ActivityListDiamond.vue') },
  { path: '/activity/new/vote', name: 'main_activity_new_vote', component: require('./main/ActivityNewVote.vue') },
  { path: '/activity/new/watch', name: 'main_activity_new_watch', component: require('./main/ActivityNewWatch.vue') },
  { path: '/activity/new/draw', name: 'main_activity_new_draw', component: require('./main/ActivityNewDraw.vue') },
  { path: '/activity/new/diamond', name: 'main_activity_new_diamond', component: require('./main/ActivityNewDiamond.vue') },
  { path: '/activity/vote/:id', name: 'main_activity_edit_vote', component: require('./main/ActivityEditVote.vue') },
  { path: '/activity/watch/:id', name: 'main_activity_edit_watch', component: require('./main/ActivityEditWatch.vue') },
  { path: '/activity/draw/:id', name: 'main_activity_edit_draw', component: require('./main/ActivityEditDraw.vue') },
  { path: '/activity/diamond/:id', name: 'main_activity_edit_diamond', component: require('./main/ActivityEditDiamond.vue') },
  { path: '/activity', name: 'main_activity_list', component: require('./main/ActivityList.vue') },
  // { path: '/activity/:id', name: 'main_activity_edit', component: require('./main/ActivityEdit.vue') },

  // 財務管理
  { path: '/account/transaction', name: 'main_account_transaction_list', component: require('./main/AccountTransactionList.vue') },
  { path: '/withdraw', name: 'main_withdraw_list', component: require('./main/WithdrawList.vue') },
  { path: '/withdraw/blacklist', name: 'main_withdraw_blacklist', component: require('./main/WithdrawBlacklist.vue') },

  // 子業務管理
  { path: '/banner/hot', name: 'main_banner_list_hot', component: require('./main/BannerListHot.vue') },
  { path: '/settings/hot', name: 'main_settings_hot', component: require('./main/SettingsHot.vue') },
  { path: '/celebrity/category', name: 'main_celebrity_category_list', component: require('./main/CelebrityCategoryList.vue') },
  { path: '/celebrity/category/:id', name: 'main_celebrity_category_edit', component: require('./main/CelebrityCategoryEdit.vue') },
  { path: '/member/recommend/welcome', name: 'main_member_list_recommend_welcome', component: require('./main/MemberListRecommendWelcome.vue') },
  { path: '/member/recommend/follow', name: 'main_member_list_recommend_follow', component: require('./main/MemberListRecommendFollow.vue') },
  { path: '/settings/daily', name: 'main_settings_daily', component: require('./main/SettingsDaily.vue') },
  { path: '/inform', name: 'main_inform_list', component: require('./main/InformList.vue') },
  { path: '/settings/invite', name: 'main_settings_invite', component: require('./main/SettingsInvite.vue') },
  { path: '/settings/star', name: 'main_settings_star', component: require('./main/SettingsStar.vue') },
  { path: '/settings/star/box', name: 'main_settings_star_box', component: require('./main/SettingsStarBox.vue') },
  { path: '/star/box/record', name: 'main_star_box_record_list', component: require('./main/StarBoxRecordList.vue') },
  { path: '/broadcast', name: 'main_broadcast_list', component: require('./main/BroadcastList.vue') },
  { path: '/broadcast/:id', name: 'main_broadcast_edit', component: require('./main/BroadcastEdit.vue') },
  { path: '/sensitive/word', name: 'main_sensitive_word_list', component: require('./main/SensitiveWordList.vue') },
  { path: '/sensitive/word/:id', name: 'main_sensitive_word_edit', component: require('./main/SensitiveWordEdit.vue') },
  { path: '/settings/barrage', name: 'main_settings_barrage', component: require('./main/SettingsBarrage.vue') },
  { path: '/settings/marquee', name: 'main_settings_marquee', component: require('./main/SettingsMarquee.vue') },
  { path: '/activity/page', name: 'main_activity_page_list', component: require('./main/ActivityPageList.vue') },
  { path: '/activity/page/:id', name: 'main_activity_page_edit', component: require('./main/ActivityPageEdit.vue') },
  { path: '/settings/splash/screen', name: 'main_settings_splash_screen', component: require('./main/SettingsSplashScreen.vue') },
  { path: '/settings/level', name: 'main_settings_level', component: require('./main/SettingsLevel.vue') },
  { path: '/settings/experience/point', name: 'main_settings_experience_point', component: require('./main/SettingsExperiencePoint.vue') },
  { path: '/settings/vip', name: 'main_settings_vip', component: require('./main/SettingsVIP.vue') },
  { path: '/settings/vipLogo', name: 'main_settings_vip_logo', component: require('./main/SettingsVIPLogo.vue') },
  { path: '/settings/vip/rebate', name: 'main_settings_vip_rebate', component: require('./main/SettingsVIPRebate.vue') },
  { path: '/settings/vip/effects', name: 'main_settings_vip_effects', component: require('./main/SettingsVIPEffects.vue') },
  { path: '/settings/guide/page', name: 'main_settings_guide_page', component: require('./main/SettingsGuidePage.vue') },

  { path: '/badge', name: 'main_badge_list', component: require('./main/BadgeList.vue') },
  { path: '/badge/:id', name: 'main_badge_edit', component: require('./main/BadgeEdit.vue') },
  { path: '/settings/diamond/exchange', name: 'main_settings_diamond_exchange', component: require('./main/SettingsDiamondExchange.vue') },
  { path: '/settings/recharge', name: 'main_settings_recharge', component: require('./main/SettingsRecharge.vue') },
  { path: '/settings/redbag', name: 'main_settings_redbag', component: require('./main/SettingsRedbag.vue') },
  { path: '/virbo/card', name: 'main_virbo_card_list', component: require('./main/VirboCardList.vue') },
  { path: '/virbo/card/generate', name: 'main_virbo_card_generate', component: require('./main/VirboCardGenerate.vue') },
  { path: '/settings/customer/center', name: 'main_settings_customer_center', component: require('./main/SettingsCustomerCenter.vue') },
];
