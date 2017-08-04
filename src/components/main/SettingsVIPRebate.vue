<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">等級與VIP管理</h3>
      <h4 class="page-header-subtitle">VIP禮包管理
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
        <v-button @click="$router.back()">返回</v-button>
      </div>
    </header>

    <section class="page-body">
      <template v-for="(item, index) in vip_rebate">
        <v-row :gutter="6"
               type="flex"
               style="margin-bottom: 70px;">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <label>{{`VIP${index+1}禮包設定`}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <p class="ant-form-text">鑽石：</p>
            <v-input-number :min="0" :step="1" v-model="item.diamond"></v-input-number>
            <p class="ant-form-text">金幣：</p>
            <v-input-number :min="0" :step="1" v-model="item.coin"></v-input-number>
            <v-button type="primary" @click="add_prize(index)">添加禮物</v-button>
          </v-col>
          <template v-for="(prize, index2) in item.prize">
            <v-col :span="8" class="ant-form-item-control" style="margin-left: 25%;margin-bottom: 10px;">
              <p class="ant-form-text">{{`禮物名稱：${prize.name}`}}</p>
              <v-input-number :min="0" :step="1" v-model="prize.amount"></v-input-number>
              <v-button type="danger" @click="item.prize.splice(index2, 1)">刪除</v-button>
            </v-col>
          </template>
        </v-row>
      </template>

      <v-modal title="選擇禮物"
               :visible="modal.show"
               @ok="modal.show=false"
               @cancel="modal.show=false">
        <list-view-table
          class="list-view-main-table"
          :cols="modal.cols"
          :options="modal.options"
          :model="modal.model"
          :pageSize="5"
          :actions="modal.actions"
          ref="modalPrizeView"
        ></list-view-table>
      </v-modal>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      const vm = this;
      return {
        current_index: 0,
        vip_rebate: [
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
          {
            diamond: 0,
            coin: 0,
            prize: [],
          },
        ],
        modal: {
          options: {
            can_delete: false,
            can_edit: false,
          },
          show: false,
          model: 'Prize',
          cols: [
            {
              title: '禮物ID',
              key: 'id',
              ordering: 'id',
              filtering: {
                search_field: 'exact__id',
              },
            },
            {
              title: '禮物分類',
              key: 'category_name',
              filtering: {
                search_field: 'kw_category__name',
              },
            },
            {
              title: '圖標',
              key: 'icon_item.image',
              type: 'image',
              width: 50,
              height: 50,
            },
            {
              title: '禮物名稱',
              key: 'name',
              filtering: {
                search_field: 'kw_name',
              },
            },
            {
              title: '價格（金幣）',
              key: 'price',
            },
          ],
          actions: [{
            title: '選擇',
            action(item) {
              const prizeItem = {
                id: item.id,
                name: item.name,
                amount: 0,
              };
              for (let i = 0; i < vm.vip_rebate[vm.current_index].prize.length; i += 1) {
                if (vm.vip_rebate[vm.current_index].prize[i].id === item.id) {
                  vm.notify('不能添加相同的禮物');
                  return false;
                }
              }
              vm.vip_rebate[vm.current_index].prize.push(prizeItem);
              vm.modal.show = false;
            },
          }],
        },
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'vip_rebate',
        }).then(resp => {
          if (resp.data) {
            vm.vip_rebate = JSON.parse(resp.data);
          }
        });
      },
      submit() {
        const vm = this;
        console.log(vm.vip_rebate);
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'vip_rebate',
          value: JSON.stringify(vm.vip_rebate),
        }).then(() => {
          vm.$message.success('设置保存成功');
          vm.reload();
        });
      },
      add_prize(index) {
        const vm = this;
        vm.modal.show = true;
        vm.current_index = index;
        console.log(vm.current_index);
      },
    },
  };
</script>

