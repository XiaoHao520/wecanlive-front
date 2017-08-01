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

      <embed-form :fields="fields"></embed-form>

      <template v-for="(item, index) in prize_list">
        <v-row :gutter="6"
               type="flex"
               style="margin: 4px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <label>禮物編號{{item.prize}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <v-input-number :min="1" :step="1" v-model="item.amount"></v-input-number>
            <v-button type="danger" @click="remove(index)">移除</v-button>
          </v-col>
        </v-row>
      </template>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      const vm = this;
      return {
        prize_list: [],
        options: [{
          title: '元气宝盒金币最大值',
          key: 'max_star_box_coin',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }, {
          title: '元气宝盒金币最小值',
          key: 'min_star_box_coin',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }, {
          title: '元气宝盒钻石最大值',
          key: 'max_star_box_diamond',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }, {
          title: '元气宝盒钻石最小值',
          key: 'min_star_box_diamond',
          type: 'input',
          htmlType: 'number',
          value: 0,
          min: 1,
        }],
        fields: [
          {
            title: '禮物列表',
            type: 'list-view',
            display: 'full',
            options: {
              model: 'Prize',
              options: {
                can_edit: false,
                show_pager: true,
              },
              pageSize: 5,
              cols: [{
                title: 'ID',
                key: 'id',
                ordering: 'id',
                filtering: {
                  search_field: 'exact__id',
                },
              }, {
                title: '禮物分類',
                key: 'category_name',
                filtering: {
                  search_field: 'kw_category__name',
                },
              }, {
                title: '圖標',
                key: 'icon_item.image',
                type: 'image',
                width: 30,
                height: 30,
              }, {
                title: '禮物名稱',
                key: 'name',
                filtering: {
                  search_field: 'kw_name',
                },
              }, {
                title: '價格（金幣）',
                key: 'price',
              }],
              actions: [{
                title: '添加',
                action(item) {
                  for (let i = 0; i < vm.prize_list.length; i += 1) {
                    if (item.id === vm.prize_list[i].prize) {
                      vm.notify('該禮物已被添加');
                      return false;
                    }
                  }
                  vm.prize_list.push({
                    prize: item.id,
                    amount: 0,
                  });
                  console.log(item);
                },
              }],
            },
          },
        ],
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'star_box_prize_list',
        }).then(resp => {
          if (resp.data) {
            vm.prize_list = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        vm.$refs.form.submit();
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'star_box_prize_list',
          value: JSON.stringify(vm.prize_list),
        });
      },
      remove(index) {
        const vm = this;
        vm.prize_list.splice(index, 1);
      },
    },
  };
</script>
