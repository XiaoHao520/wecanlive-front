<template>

  <edit-view :model="model"
             title="发布活动"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             :actions="actions"
             ref="view">
    <div slot="after" class="prize">
      <v-button size="small" class="btn-add" @click="showModal=true">選擇獎品</v-button>

      <v-row :gutter="6" type="flex" style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>獎品</label>
        </v-col>
        <v-col class="ant-form-item-control" :span="8">
          <p class="ant-form-text">{{format(item.prize_type, item.prize_value)}}</p>
        </v-col>
      </v-row>

      <v-modal title="選擇獎勵" :visible="showModal" @ok="submit" @cancel="showModal=false" :width="1000"
               v-if="current_item">
        <v-select style="width: 200px" :data="selectData" @change="change" v-model="item.prize_type"></v-select>
        <v-input-number :min="1" v-if="item.prize_type!=='prize' && item.prize_type!=='badge'"
                        v-model="item.prize_value"></v-input-number>

        <list-view-table
          class="list-view-main-table"
          :cols="modalPrizeCols"
          :options="modalPrizeOptions"
          :model="modalPrizeModel"
          :pageSize="pageSize"
          :actions="modalPrizeActions"
          ref="modalPrizeView"
          v-show="item.prize_type==='prize'"
        ></list-view-table>

        <list-view-table
          class="list-view-main-table"
          :cols="modalBadgeCols"
          :options="modalBadgeOptions"
          :model="modalBadgeModel"
          :pageSize="pageSize"
          :actions="modalBadgeActions"
          ref="modalBadgeView"
          v-show="item.prize_type==='badge'"
        ></list-view-table>
      </v-modal>
    </div>
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        showModal: false,
        current_item: {},
        item: {
          prize_type: '',
          prize_value: 1,
        },
        selectData: [
          {
            value: 'experience',
            label: '經驗值',
          },
          {
            value: 'icoin',
            label: 'i幣',
          },
          {
            value: 'coin',
            label: '金幣',
          },
          {
            value: 'star',
            label: '元氣',
          },
          {
            value: 'contribution',
            label: '貢獻值',
          },
          {
            value: 'prize',
            label: '禮物',
          },
          {
            value: 'badge',
            label: '勳章',
          },
        ],
        pageSize: 5,
        modalPrizeModel: 'Prize',
        modalBadgeModel: 'Badge',
        modalPrizeOptions: {
          can_create: false,
          can_edit: false,
          can_delete: false,
        },
        modalBadgeOptions: {
          can_create: false,
          can_edit: false,
          can_delete: false,
        },
        modalPrizeActions: [{
          title: '選擇',
          action(item) {
            console.log(item);
            vm.item.prize_value = item.id;
            vm.showModal = false;
            this.$message.success('選擇成功');
          },
        }],
        modalBadgeActions: [{
          title: '選擇',
          action(item) {
            console.log(item);
            vm.item.prize_value = item.id;
            vm.showModal = false;
            this.$message.success('選擇成功');
          },
        }],
        modalPrizeCols: [
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
            width: 75,
            height: 75,
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
          {
            title: '上架時間',
            key: 'date_created',
          },
        ],
        modalBadgeCols: [
          {
            title: '勳章ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '圖標',
            key: 'icon_item.image',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '名稱',
            key: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
        ],
        model: 'Activity',
        options: {
          can_edit: true,
          hooks: {
            pre_save(_vm) {
              console.log(_vm.fields);
              console.log(vm.item);
              if (!_vm.fields[0].value) {
                _vm.notify('請輸入活動標題');
                return false;
              }
              if (!_vm.fields[1].value) {
                _vm.notify('請輸入活動開始時間');
                return false;
              }
              if (!_vm.fields[2].value) {
                _vm.notify('請輸入活動結束時間');
                return false;
              }
              if (!_vm.fields[4].value || _vm.fields[4].value <= 0) {
                _vm.notify('請輸入正確的觀看數');
                return false;
              }
              if (!_vm.fields[5].value || _vm.fields[5].value <= 0) {
                _vm.notify('請輸入正確的觀看最低時長');
                return false;
              }
              if (!vm.item.prize_value) {
                _vm.notify('請選擇獎品');
                return false;
              }
              const awardRules = {
                min_watch: _vm.fields[4].value,
                min_duration: _vm.fields[5].value,
                award: {
                  type: vm.item.prize_type,
                  value: vm.item.prize_value,
                },
              };
              const filter = {
                name: _vm.fields[0].value,
                type: 'WATCH',
                date_begin: _vm.fields[1].value,
                date_end: _vm.fields[2].value,
                rules: JSON.stringify(awardRules),
              };
              if (_vm.fields[3].value) {
                filter.thumbnail = _vm.fields[3].value.id;
              }
              console.log(filter);
              vm.api('Activity').save(filter).then(resp => {
                vm.$message.success('保存成功');
                vm.$router.back();
              });
              return false;
            },
          },
        },
        fields: [
          {
            title: '活動標題',
            key: 'name',
          },
          {
            title: '活動開始時間',
            key: 'date_begin',
            type: 'datepicker',
            pick_time: true,
          },
          {
            title: '活動結束時間',
            key: 'date_end',
            type: 'datepicker',
            pick_time: true,
          },
          {
            title: '活動海報',
            type: 'image',
            key: {
              read: 'thumbnail_item',
              write: 'thumbnail',
            },
          },
          {
            title: '觀看數',
            type: 'input',
            htmlType: 'number',
            key: 'min_watch',
          },
          {
            title: '個人觀看單個直播最低時長',
            type: 'input',
            htmlType: 'number',
            after: '分鐘',
            key: 'min_duration',
          },
//          {
//            title: '編輯推送消息文字',
//            key: 'content',
//            type: 'editor',
//          },
        ],
        actions: [],
      };
    },
    methods: {
      change(val) {
        console.log(val);
        const vm = this;
        vm.prize_type = val;
      },
      format(prizeType, prizeValue) {
        if (prizeType === 'experience') {
          return `${prizeValue}經驗值`;
        } else if (prizeType === 'icoin') {
          return `${prizeValue}i幣`;
        } else if (prizeType === 'coin') {
          return `${prizeValue}金幣`;
        } else if (prizeType === 'star') {
          return `${prizeValue}元氣`;
        } else if (prizeType === 'contribution') {
          return `${prizeValue}貢獻值`;
        } else if (prizeType === 'prize') {
          return `禮物id：${prizeValue}`;
        } else if (prizeType === 'badge') {
          return `徽章id：${prizeValue}`;
        }
        return '';
      },
      add_item() {
        const vm = this;
        vm.items.push({
          from: 1,
          to: 3,
          prize_type: '',
          prize_value: 1,
          show_prize: false,
        });
      },
      submit() {
        const vm = this;
        vm.showModal = false;
      },
    },
  };
</script>


<style scoped lang="less" rel="stylesheet/less">
  .prize {
    table {
      margin: 0 auto;
      th {
        background-color: #cccccc;
      }
    }
    .btn-add {
      display: block;
      margin-left: 25%;
      margin-top: 25px;
    }
  }
</style>
