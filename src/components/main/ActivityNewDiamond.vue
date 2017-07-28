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
      <table>
        <th>鑽石數區間</th>
        <th>獎勵內容</th>
        <tbody>
        <tr v-for="item in items">
          <td>
            <v-input-number :min="1" v-model="item.from"></v-input-number>
            -
            <v-input-number :min="1" v-model="item.to"></v-input-number>
          </td>
          <td>
            <v-button type="primary" style="margin-left: 20px" @click="choose_prize(item)">選擇獎品</v-button>
            <div style="display: inline-block;margin-left: 20px;" v-if="item.show_prize">{{format(item.prize_type,
              item.prize_value)}}
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <v-modal title="選擇獎勵" :visible="showModal" @ok="submit" @cancel="showModal=false" :width="1000"
               v-if="current_item">
        <v-select style="width: 200px" :data="selectData" @change="change" v-model="current_item.prize_type"></v-select>
        <v-input-number :min="1" v-if="current_item.prize_type!=='prize' && current_item.prize_type!=='badge'"
                        v-model="current_item.prize_value"></v-input-number>

        <list-view-table
          class="list-view-main-table"
          :cols="modalPrizeCols"
          :options="modalPrizeOptions"
          :model="modalPrizeModel"
          :pageSize="pageSize"
          :actions="modalPrizeActions"
          ref="modalPrizeView"
          v-show="current_item.prize_type==='prize'"
        ></list-view-table>

        <list-view-table
          class="list-view-main-table"
          :cols="modalBadgeCols"
          :options="modalBadgeOptions"
          :model="modalBadgeModel"
          :pageSize="pageSize"
          :actions="modalBadgeActions"
          ref="modalBadgeView"
          v-show="current_item.prize_type==='badge'"
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
        items: [
          {
            from: 0,
            to: 0,
            prize_type: '',
            prize_value: 1,
            show_prize: false,
          },
          {
            from: 0,
            to: 0,
            prize_type: '',
            prize_value: 1,
            show_prize: false,
          },
          {
            from: 0,
            to: 0,
            prize_type: '',
            prize_value: 1,
            show_prize: false,
          },
          {
            from: 0,
            to: 0,
            prize_type: '',
            prize_value: 1,
            show_prize: false,
          },
          {
            from: 0,
            to: 0,
            prize_type: '',
            prize_value: 1,
            show_prize: false,
          },
        ],
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
            vm.current_item.prize_value = item.id;
            vm.showModal = false;
            vm.current_item.show_prize = true;
          },
        }],
        modalBadgeActions: [{
          title: '選擇',
          action(item) {
            console.log(item);
            vm.current_item.prize_value = item.id;
            vm.showModal = false;
            vm.current_item.show_prize = true;
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
              console.log(vm.items);
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
              if (!vm.items[0].prize_value) {
                _vm.notify('請選擇獎品');
                return false;
              }
              const awardAwards = [];
              let lastTo = 0;
              vm.items.forEach(item => {
                if (!item.prize_type || !item.prize_value) {
                  vm.notify('請選擇獎品');
                  return false;
                }
                if (item.from < lastTo || item.to < item.from) {
                  vm.notify('請輸入正確的鑽石數區間');
                  return false;
                }
                lastTo = item.to;
                const awardItem = {
                  from: item.from,
                  to: item.to,
                  award: {
                    type: item.prize_type,
                    value: item.prize_value,
                  },
                };
                awardAwards.push(awardItem);
              });
              const awardRules = {
                awards: awardAwards,
              };
              const filter = {
                name: _vm.fields[0].value,
                type: 'DIAMOND',
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
      choose_prize(item) {
        const vm = this;
        console.log(item);
        vm.current_item = item;
        vm.showModal = true;
      },
      submit() {
        const vm = this;
        vm.showModal = false;
        vm.current_item.show_prize = true;
      },
    },
  };
</script>


<style scoped lang="less" rel="stylesheet/less">
  .prize {
    table {
      margin-left: 25%;
      th {
        background-color: #cccccc;
      }
    }
  }
</style>
