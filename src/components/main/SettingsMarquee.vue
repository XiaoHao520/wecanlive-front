<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">管理设置</h3>
      <h4 class="page-header-subtitle">
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <option-form ref="form"
                   :options="options"></option-form>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        options: [{
          title: '客服电话',
          key: 'service_telephone',
          type: 'input',
          description: '用户点击联系客服的时候拨打的电话号码',
          value: '',
        }, {
          title: '店铺上架自动审批时间（分钟）',
          key: 'auto_approve_minutes_shop',
          type: 'input',
          description: '开启店铺上架自动审批功能后，经过*分钟后如果后台没有审批即会自动审批通过上架,填写0或者空即为关闭功能',
          value: 0,
        }, {
          title: '商品上架自动审批时间（分钟）',
          key: 'auto_approve_minutes_goods',
          type: 'input',
          description: '开启商品上架自动审批功能后，经过*分钟后如果后台没有审批即会自动审批通过上架,填写0或者空即为关闭功能',
          value: 0,
        }, {
          title: '需求自动下架时间（天）',
          key: 'demand_shelves_day',
          type: 'input',
          description: '需求发布后*天后自动下架。默认2天',
          value: 2,
        }, {
          title: '社区公告自动下架时间（天）',
          key: 'socialarticle_shelves_day',
          type: 'input',
          description: '社区公告发布后*天后自动下架。默认2天',
          value: 2,
        }, {
          title: '订单自动确认天数（天）',
          key: 'order_accept_deadline',
          type: 'input',
          description: '订单发货后自动确认天数，默认7天',
          value: 7,
        }, {
          title: '订单款项拨付天数',
          key: 'order_payment_receive_days',
          type: 'input',
          description: '在客户确认订单后此天数之后，订单款项才从系统拨付给商户',
          value: 30,
        }, {
          title: '订单最多可以延期次数',
          key: 'order_delays_quantity ',
          type: 'input',
          description: '每张订单可以申请*次延期，默认5次',
          value: 5,
        }, {
          title: '订单每次延期天数（天）',
          key: 'order_delay_day ',
          type: 'input',
          description: '每张订单每次延期的天数，默认30天',
          value: 30,
        }, {
          title: '订单退款自动确认（天）',
          key: 'auto_order_return_day ',
          type: 'input',
          description: '退款单自动确认。商家在*天内没有处理退款单自动确认处理，默认7天',
          value: 7,
        }, {
          title: '店铺3个月内被举报最大次数',
          key: 'max_months_shop_report ',
          type: 'input',
          description: '店铺3个月被举报*次自动下架,默认200次',
          value: 200,
        }, {
          title: '店铺一日内被举报最大次数',
          key: 'max_day_shop_report ',
          type: 'input',
          description: '店铺1日被举报*次自动下架,默认50次',
          value: 50,
        }, {
          title: '商品和店铺销量统计最近天数',
          key: 'sales_recent_days',
          type: 'input',
          description: '店铺和商品销量的统计口径，即最近销量代表几天之内的销量',
          value: 90,
        }, {
          title: '紧急通告通知范围（公里）',
          key: 'urgency_notify_distance ',
          type: 'input',
          description: '紧急通告发布后通知方圆*公里里用户，默认5公里',
          value: 5,
        }, {
          title: '紧急通告通知人数',
          key: 'urgency_notify_count ',
          type: 'input',
          description: '紧急通告通知的人数，默认50人',
          value: 50,
        }, {
          title: '申请举报保护每月费用（元）',
          key: 'pay_protect ',
          type: 'input',
          description: '申请举报保护每月所交费用，默认1000元',
          value: 1000,
        }, {
          title: '是否显示支付宝登录按钮',
          key: 'alipay_login_display',
          type: 'switch',
          description: '开启后APP登录页第三方登录开放支付宝登录',
          checked: '开',
          unchecked: '关',
          value: false,
        }, {
          title: '是否显示QQ登录按钮',
          key: 'qq_login_display',
          type: 'switch',
          description: '开启后APP登录页第三方登录开放QQ登录',
          checked: '开',
          unchecked: '关',
          value: false,
        }, {
          title: '是否显示微信登录按钮',
          key: 'wx_login_display',
          type: 'switch',
          description: '开启后APP登录页第三方登录开放微信登录',
          checked: '开',
          unchecked: '关',
          value: false,
        }, {
          title: '登录页底部联系我们方式',
          key: 'contact_us',
          type: 'input',
          description: '首页底部联系地主淘方式,默认“181056310（临时微信），18925940886（临时电话）”',
          value: '',
        }, {
          title: '轮播图轮播速度(秒)',
          key: 'banner_speed',
          type: 'input',
          description: '轮播图轮播速度，默认2秒',
          value: '',
        }, {
          title: '忘记支付密码重新设定间隔（小时）',
          key: 'forget_payment_pass_interval',
          type: 'input',
          description: '设置后用户忘记支付密码重新修改要距离上次修改*小时后，默认24小时后',
          value: '',
        }, {
          title: '忘记支付密码生效时间（小时）',
          key: 'forget_payment_pass_reset_delay_hours',
          type: 'input',
          description: '用户通过忘记支付密码重设后新密码生效的延时，默认24小时',
          value: '',
        }, {
          title: '广告上架是否需要审批',
          key: 'require_advert_approve',
          type: 'input',
          description: '0 或不填即不审批，否则需要审批才能上架',
          value: '',
        }, {
          title: '开店送广告积分',
          key: 'create_shop_give_score',
          type: 'input',
          description: '创建商铺赠送积分，填写0或者不填不送积分',
          value: '',
        }, {
          title: '广告积分不足提示条件（积分数）',
          key: 'customer_advert_score_warn',
          type: 'input',
          description: '设置后，用户在广告投入时，如果广告积分少于这个数，会出现你的广告积分剩余**是否充值提示，默认100',
          value: '',
//        }, {
//          title: '开启项目审核功能',
//          key: 'is_project_review',
//          type: 'switch',
//          description: '开启项目审核功能后，用户发布的【项目】必须经由管理员审核才能上架',
//          checked: '开',
//          unchecked: '关',
//          value: false,
//        }, {
//          title: '推送半径',
//          key: 'notify_radius',
//          type: 'input',
//          htmlType: 'number',
//          after: 'km',
//          value: 0,
        }, {
          title: '最低提现金额（元）',
          key: 'withdraw_min_amount',
          type: 'input',
          htmlType: 'number',
          description: '低于这个金额将不允许提现，默认100元',
          value: '',
        }, {
          title: '提现手续费率',
          key: 'withdraw_fee_rate',
          type: 'input',
          htmlType: 'number',
          after: '%',
          value: 0,
          min: 0,
          max: 100,
        }],
      };
    },
    methods: {
      submit() {
        const vm = this;
        vm.$refs.form.submit();
      },
    },
  };
</script>
