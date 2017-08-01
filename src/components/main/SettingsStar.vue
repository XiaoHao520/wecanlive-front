<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">子業務管理</h3>
      <h4 class="page-header-subtitle">元氣相關管理</h4>
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
          title: '每觀看30分鐘直播可獲得元氣',
          key: 'star_mission_points_watch',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }, {
          title: '每分享直播間可獲得元氣',
          key: 'star_mission_points_share',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }, {
          title: '每邀請1個好友可獲得元氣',
          key: 'star_mission_points_invite',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }, {
          title: '完善個人資料可獲得元氣',
          key: 'star_mission_points_information',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
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
