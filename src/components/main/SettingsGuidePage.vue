<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">子業務管理</h3>
      <h4 class="page-header-subtitle">引導頁設置
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
        <v-button @click="$router.back()">返回</v-button>
      </div>
    </header>

    <section class="page-body">
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>引導頁圖片</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <template v-if="guide_page.value.length>=0">
            <gallery-picker v-model="guide_page.value"
                            @input="updateField"></gallery-picker>
          </template>
        </v-col>
      </v-row>

    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        guide_page: {
          value: [],
        },
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.guide_page.value = [];
        vm.api('Option').get({
          action: 'get',
          name: 'guide_page',
        }).then(resp => {
          if (resp.data) {
            const guidePageArr = JSON.parse(resp.data);
            console.log(guidePageArr);
            vm.api('Image').save({
              action: 'get_guide_page',
            }, {
              guide_page_arr: guidePageArr,
            }).then(val => {
              vm.guide_page.value = val.data;
            });
          }
        });
      },
      submit() {
        const vm = this;
        const guidePageArr = [];
        for (let i = 0; i < vm.guide_page.value.length; i += 1) {
          guidePageArr.push(vm.guide_page.value[i].id);
        }
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'guide_page',
          value: JSON.stringify(guidePageArr),
        }).then(() => {
          vm.$message.success('设置保存成功');
          vm.reload();
        });
      },
      updateField(field) {
        const vm = this;
        console.log(field);
        console.log(vm.guide_page);
      },
    },
  };
</script>
