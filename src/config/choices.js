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
};

