/* 样例 choices，可以通过 mixins 在任一个 vm 实例中 vm.mixins 访问到 */

export default {
  is_active: {
    ALL: '全部',
    True: '上架',
    False: '下架',
  },
  gender: {
    '': '保密',
    M: '男',
    F: '女',
  },
  isActive: {
    2: '启用',
    3: '禁用',
  },
  constellation: {
    ARIES: '白羊座',
    TAURUS: '金牛座',
    GEMINI: '双子座',
    CANCER: '巨蟹座',
    LEO: '狮子座',
    VIRGO: '处女座',
    LIBRA: '天秤座',
    SCORPIO: '天蝎座',
    SAGITTARIUS: '射手座',
    CAPRICORN: '摩羯座',
    AQUARIUS: '水瓶座',
    PISCES: '双鱼座',
  },
  activity_event_type: {
    TEXT: '文本',
    IMAGE: '图片',
    VIDEO: '视频',
    AUDIO: '音频',
    COMBO: '混合',
    OBJECT: '对象',
    PROMPT: '提示',
  },
  live_status: {
    ACTION: '直播中',
    OVER: '已結束',
  },
  live_watch_log_status: {
    NORMAL: '正常',
    SILENT: '禁言',
    SPEAK: '连麦',
  },
  account_transaction_type: {
    RECHARGE: '充值',
    WITHDRAW: '提现',
    COMMISSION: '佣金',
    PURCHASE: '消费',
    FEE: '手续费',
    REFUND: '退款',
    DIRECT_PAY: '直接支付',
  },
  payment_type: {
    BALANCE: '余额支付',
    WXPAY: '微信支付',
    ALIPAY: '支付宝',
    APP: 'Buy in app',
    PAYPAL: 'Paypal',
  },
  banner_subject: {
    HOT: '热门页面',
    VIDEO: '节目页面',
    ACTIVITY: '活动页面',
  },
  withdraw_status: {
    PENDING: '申请中',
    APPROVED: '提现成功',
    REJECTED: '驳回',
  },
  prize_type: {
    NORMAL: '普通款',
    SPECIAL: '特殊款',
  },
  prize_price_type: {
    COIN: '金幣',
    STAR: '元氣',
  },
  prize_marquee_size: {
    LARGE: '大',
    MEDIUM: '中',
    SMALL: '小',
  },
  family_member_role: {
    MASTER: '族长',
    ADMIN: '管理员',
    NORMAL: '平民',
  },
  family_mission_item: {
    WATCH_MASTER_PRIZE: '送家族長禮物額度',
    WATCH_MASTER_DURATION: '觀看家族長直播時長',
    COUNT_WATCH_LOG: '累計觀看數',
    COUNT_FOLLOWED: '陌生人追蹤你的個數',
    COUNT_FRIEND: '擁有的好友數',
    COUNT_LOGIN: '連續登錄天數',
    COUNT_INVITE: '邀請好友註冊數',
    COUNT_SHARE_MASTER_LIVE: '分享家族長直播的分享數',
    COUNT_WATCH_MASTER_LIVE: '在家族長直播間的訪談數',
    COUNT_LIVE: '連續開播的天數',
    COUNT_RECEIVE_DIAMOND: '收到鑽石額度',
  },
  family_mission_award: {
    EXPERIENCE_POINTS: '经验值',
    ICOIN: 'i币',
    COIN: '金币',
    PRIZE: '礼物',
    CONTRIBUTION: '贡献值',
    BADGE: '勋章',
    MARQUEE_CONTENT: '跑马灯内容',
    STAR: '元气',
  },
  badge_item: {
    SEND_PRIZE: '送禮物額度',
    WATCH_LIVE_DURATION: '觀看時長',
    COUNT_WATCH_LOG: '累計觀看數',
    COUNT_FOLLOWED: '追蹤數',
    COUNT_FRIEND: '好友數',
    COUNT_LOGIN: '連續登錄天數',
    COUNT_INVITE: '邀請好友註冊數',
    COUNT_ENTER_LIVE: '直播間訪談數',
    COUNT_SHARE_LIVE: '分享直播間數',
    COUNT_LIVE: '連續開播的天數',
    COUNT_RECEIVE_DIAMOND: '收到鑽石額度',
    COUNT_RECEIVE_PRIZE: '收到禮物數量',
    BINDING_MOBILE: '綁定手機',
    INFO_COMPLETE: '完善個人資料',
    LIVE_DURATION: '開播時數',
    CONTRIBUTION: '貢獻值（家族任務限定）',
    SPECIAL: '特殊徽章',
  },
};

