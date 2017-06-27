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
};

