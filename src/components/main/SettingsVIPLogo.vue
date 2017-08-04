<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">VIP管理</h3>
      <h4 class="page-header-subtitle">
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
        <v-button @click="$router.back()">返回</v-button>
      </div>
    </header>

    <section class="page-body">
      <template v-for="(item, index) in vip_logo">
        <v-row :gutter="6"
               type="flex"
               style="margin: 4px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <label>VIP{{index + 1}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <image-picker v-model="item.value" @input="updateField(item)"></image-picker>
          </v-col>
        </v-row>
      </template>

    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        vip_logo: [
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
          {
            value: null,
          },
        ],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'vip_logo',
        }).then(resp => {
          if (resp.data) {
            const VIPLogo = JSON.parse(resp.data);
            for (let i = 0; i < VIPLogo.length; i += 1) {
              if (VIPLogo[i]) {
                vm.api('Image').get({
                  id: VIPLogo[i],
                }).then(val => {
                  vm.vip_logo[i].value = val.data;
                });
              }
            }
          }
        });
      },
      submit() {
        const vm = this;
        const VIPLogo = [];
        for (let i = 0; i < vm.vip_logo.length; i += 1) {
          if (vm.vip_logo[i].value) {
            VIPLogo.push(vm.vip_logo[i].value.id);
          } else {
            VIPLogo.push(null);
          }
        }
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'vip_logo',
          value: JSON.stringify(VIPLogo),
        }).then(() => {
          vm.$message.success('设置保存成功');
          vm.reload();
        });
      },
      updateField(field) {
        console.log(field);
      },
    },
  };
</script>

