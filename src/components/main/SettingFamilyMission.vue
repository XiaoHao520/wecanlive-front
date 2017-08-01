<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">家族信息管理</h3>
      <h4 class="page-header-subtitle">家族任務設定
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">
      <p style="margin-left: 5%;font-weight: bold">冷卻時間</p>
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>家族長發佈任務後的冷卻時間</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input-number :min="0" :step="1" v-model="mission_cd.days"></v-input-number>天
          <v-input-number :min="0" :max="23" :step="1" v-model="mission_cd.hours"></v-input-number>小時
          <v-input-number :min="0" :max="59" :step="1" v-model="mission_cd.minutes"></v-input-number>分鐘
        </v-col>
      </v-row>

      <br>
      <p style="margin-left: 5%;font-weight: bold">任務元件</p>
      <template v-for="(item, index) in mission_elements">
        <v-row :gutter="6"
               type="flex"
               style="margin: 4px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <p class="ant-form-text item-id">{{item.id}}</p>
            <label>{{$root.choices.family_mission_item[item.title]}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <p class="ant-form-text" v-if="item.amount">啓用</p>
            <p class="ant-form-text" v-else>禁用</p>
            <v-button type="danger" v-if="item.amount" @click="item.amount=0">禁用</v-button>
            <v-button type="primary" v-else @click="item.amount=1">啓用</v-button>
            <v-input-number :min="0" :step="1" v-model="item.amount" :disabled="!item.amount"></v-input-number>
          </v-col>
        </v-row>
      </template>

      <br>
      <p style="margin-left: 5%;font-weight: bold;">獎勵元件</p>

      <template v-for="(item, index) in award_elements">
        <v-row :gutter="6"
               type="flex"
               style="margin: 4px 0">
          <v-col :span="6" class="ant-form-item-label" style="padding: 0">
            <p class="ant-form-text item-id">{{item.id}}</p>
            <label>{{$root.choices.family_mission_award[item.title]}}</label>
          </v-col>
          <v-col :span="8" class="ant-form-item-control">
            <p class="ant-form-text" v-if="item.amount">啓用</p>
            <p class="ant-form-text" v-else>禁用</p>
            <v-button type="danger" v-if="item.amount" @click="item.amount=0">禁用</v-button>
            <v-button type="primary" v-else @click="item.amount=1">啓用</v-button>
            <v-input-number :min="0" :step="1" v-model="item.amount"
                            :disabled="!item.amount || item.title==='BADGE' || item.title==='MARQUEE_CONTENT'"></v-input-number>
            <v-button type="primary"
                      v-if="item.amount && (item.title==='PRIZE' || item.title==='BADGE')"
                      @click="item.title==='PRIZE'?modal.prize.show=true:modal.badge.show=true">去選擇
            </v-button>
            <p class="ant-form-text" v-if="item.amount && item.title==='PRIZE' && item.value">禮物名稱: </p>
            <p class="ant-form-text" v-if="item.amount && item.title==='BADGE' && item.value">徽章名稱: </p>
            <p class="ant-form-text"
               v-if="item.amount && (item.title==='PRIZE'||item.title==='BADGE') && item.value">
              {{item.title==='PRIZE'?prize_name:badge_name}}
            </p>
            <v-input v-model="award_elements[6].value"
                     size="large"
                     v-if="item.title==='MARQUEE_CONTENT'"
                     style="width:200px; display:inline-block"
                     :disabled="!item.amount">
            </v-input>
          </v-col>
        </v-row>
      </template>

      <v-modal title="選擇禮物"
               :visible="modal.prize.show"
               @ok="modal.prize.show=false"
               @cancel="modal.prize.show=false">
        <list-view-table
          class="list-view-main-table"
          :cols="modal.prize.cols"
          :options="modal.options"
          :model="modal.prize.model"
          :pageSize="5"
          :actions="modal.prize.actions"
          ref="modalPrizeView"
        ></list-view-table>
      </v-modal>

      <v-modal title="選擇徽章"
               :visible="modal.badge.show"
               @ok="modal.badge.show=false"
               @cancel="modal.badge.show=false">
        <list-view-table
          class="list-view-main-table"
          :cols="modal.badge.cols"
          :options="modal.options"
          :model="modal.badge.model"
          :pageSize="5"
          :actions="modal.badge.actions"
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
        mission_cd: {
          days: 0,
          hours: 0,
          minutes: 0,
        },
        mission_elements: [
          {
            id: '000001',
            title: 'WATCH_MASTER_PRIZE',
            amount: 0,
          },
          {
            id: '000002',
            title: 'WATCH_MASTER_DURATION',
            amount: 0,
          },
          {
            id: '000003',
            title: 'COUNT_WATCH_LOG',
            amount: 0,
          },
          {
            id: '000004',
            title: 'COUNT_FOLLOWED',
            amount: 0,
          },
          {
            id: '000005',
            title: 'COUNT_FRIEND',
            amount: 0,
          },
          {
            id: '000006',
            title: 'COUNT_LOGIN',
            amount: 0,
          },
          {
            id: '000007',
            title: 'COUNT_INVITE',
            amount: 0,
          },
          {
            id: '000008',
            title: 'COUNT_SHARE_MASTER_LIVE',
            amount: 0,
          },
          {
            id: '000009',
            title: 'COUNT_WATCH_MASTER_LIVE',
            amount: 0,
          },
          {
            id: '000010',
            title: 'COUNT_LIVE',
            amount: 0,
          },
          {
            id: '000011',
            title: 'COUNT_RECEIVE_DIAMOND',
            amount: 0,
          },
        ],
        award_elements: [
          {
            id: '000001',
            title: 'EXPERIENCE_POINTS',
            amount: 0,
          },
          {
            id: '000002',
            title: 'ICOIN',
            amount: 0,
          },
          {
            id: '000003',
            title: 'COIN',
            amount: 0,
          },
          {
            id: '000004',
            title: 'PRIZE',
            amount: 0,
            value: 1,
          },
          {
            id: '000005',
            title: 'CONTRIBUTION',
            amount: 0,
          },
          {
            id: '000006',
            title: 'BADGE',
            amount: 0,
            value: 0,
          },
          {
            id: '000007',
            title: 'MARQUEE_CONTENT',
            amount: 0,
            value: '',
          },
          {
            id: '000008',
            title: 'STAR',
            amount: 0,
          },
        ],
        prize_name: '',
        badge_name: '',
        modal: {
          options: {
            can_delete: false,
            can_edit: false,
          },
          prize: {
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
                vm.award_elements[3].value = item.id;
                vm.prize_name = item.name;
                vm.modal.prize.show = false;
              },
            }],
          },
          badge: {
            show: false,
            model: 'Badge',
            cols: [
              {
                title: '徽章圖標',
                key: 'icon_item.image',
                type: 'image',
                width: 50,
                height: 50,
              },
              {
                title: '徽章名稱',
                key: 'name',
                filtering: {
                  search_field: 'kw_name',
                },
              },
              {
                title: '徽章有效期',
                key: 'validity',
                filter(item) {
                  return `${item}天`;
                },
              },
              {
                title: '徽章激活時間',
                key: 'date_created',
              },
            ],
            actions: [{
              title: '選擇',
              action(item) {
                vm.award_elements[5].value = item.id;
                vm.badge_name = item.name;
                vm.modal.badge.show = false;
              },
            }],
          },
        },
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Option').get({
          action: 'get',
          name: 'family_mission_cd',
        }).then(resp => {
          if (resp.data) {
            vm.mission_cd = JSON.parse(resp.data);
          }
        });
        vm.api('Option').get({
          action: 'get',
          name: 'family_mission_element',
        }).then(resp => {
          if (resp.data) {
            vm.mission_elements = JSON.parse(resp.data);
          }
        });
        vm.api('Option').get({
          action: 'get',
          name: 'family_award_element',
        }).then(resp => {
          if (resp.data) {
            vm.award_elements = JSON.parse(resp.data);
            if (vm.award_elements[3].value) {
              vm.api('Prize').get({
                id: vm.award_elements[3].value,
              }).then(resp2 => {
                console.log(resp2);
                vm.prize_name = resp2.data.name;
              });
            }
            if (vm.award_elements[5].value) {
              vm.api('Badge').get({
                id: vm.award_elements[5].value,
              }).then(resp3 => {
                vm.badge_name = resp3.data.name;
              });
            }
          }
        });
      },
      submit() {
        const vm = this;
        vm.api('Option').save({
          action: 'set',
        }, {
          name: 'family_mission_cd',
          value: JSON.stringify(vm.mission_cd),
        }).then(() => {
          vm.api('Option').save({
            action: 'set',
          }, {
            name: 'family_mission_element',
            value: JSON.stringify(vm.mission_elements),
          }).then(() => {
            vm.api('Option').save({
              action: 'set',
            }, {
              name: 'family_award_element',
              value: JSON.stringify(vm.award_elements),
            }).then(() => {
              vm.$message.success('設置保存成功');
              vm.reload();
            });
          });
        });
      },
    },
  };
</script>


<style scoped lang="less" rel="stylesheet/less">
  .item-id {
    float: left;
    margin-left: 40%;
  }
</style>

