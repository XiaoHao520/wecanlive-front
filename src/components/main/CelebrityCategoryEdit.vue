<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">搜索頁面管理/衆星雲集</h3>
      <h4 class="page-header-subtitle">{{(Number($route.params.id)?'編輯':'新增') + ''}}
      </h4>
      <div class="tooltips">
        <v-button type="primary" @click="submit()">保存</v-button>
        <v-button type="ghost" @click="$router.back()">返回</v-button>
      </div>
    </header>

    <section class="page-body">
      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>分類類別</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-select style="width: 200px" :data="type_select" @change="change_type" v-model="item.selected_type"></v-select>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>分類ID</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input :type="'number'" v-model="category_id" size="large" :min="1"></v-input>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>分類名稱</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input :type="'text'" v-model="item.category_name" size="large"></v-input>
        </v-col>
      </v-row>

      <v-row :gutter="6"
             type="flex"
             style="margin: 4px 0">
        <v-col :span="6" class="ant-form-item-label" style="padding: 0">
          <label>置頂順序</label>
        </v-col>
        <v-col :span="8" class="ant-form-item-control">
          <v-input :type="'number'" v-model="item.sorting" size="large"></v-input>
          <div class="ant-form-explain">數字越小排序越靠前</div>
        </v-col>
      </v-row>
    </section>

  </div>

</template>

<script lang="babel">

  export default {
    data() {
      return {
        category_id: 0,
        item: {
          selected_type: '',
          category_name: '',
          sorting: '',
        },
        type_select: [{
          value: 'LIVE',
          label: '直播',
        }, {
          value: 'ACTIVITY',
          label: '活動',
        }],
      };
    },
    watch: {
      category_id: {
        handler(val, oldVal) {
          const vm = this;
          console.log(val);
          if (!vm.item.selected_type) {
            vm.item.category_name = '';
          } else if (vm.item.selected_type === 'LIVE' && !isNaN(val)) {
            vm.api('LiveCategory').get({
              id: Number(val),
            }).then(resp => {
              vm.item.category_name = resp.data.name;
            }).catch(() => {
              vm.item.category_name = '';
            });
          } else if (vm.item.selected_type === 'ACTIVITY' && !isNaN(val)) {
            vm.api('Activity').get({
              id: Number(val),
            }).then(resp => {
              vm.item.category_name = resp.data.name;
            }).catch(() => {
              vm.item.category_name = '';
            });
          }
        },
        deep: true,
      },
    },
    methods: {
      reload() {
        const vm = this;
        if (Number(vm.$route.params.id)) {
          vm.api('CelebrityCategory').get({
            id: vm.$route.params.id,
          }).then(resp => {
            console.log(resp.data);
            vm.item.selected_type = resp.data.type;
            vm.category_id = resp.data.category.category_id;
            vm.item.category_name = resp.data.name;
            vm.item.sorting = resp.data.sorting;
          });
        }
      },
      change_type(val) {
        console.log(val);
        const vm = this;
        vm.item.selected_type = val;
        if (!val) {
          vm.item.category_name = '';
        } else if (val === 'LIVE' && vm.category_id) {
          vm.api('LiveCategory').get({
            id: vm.category_id,
          }).then(resp => {
            vm.item.category_name = resp.data.name;
          }).catch(() => {
            vm.item.category_name = '';
          });
        } else if (val === 'ACTIVITY' && vm.category_id) {
          vm.api('Activity').get({
            id: vm.category_id,
          }).then(resp => {
            vm.item.category_name = resp.data.name;
          }).catch(() => {
            vm.item.category_name = '';
          });
        }
      },
      submit() {
        const vm = this;
        if (!vm.item.selected_type) {
          vm.notify('請選擇分類類別');
          return false;
        }
        if (!vm.category_id) {
          vm.notify('請填寫分類ID');
          return false;
        }
        if (!vm.item.category_name) {
          vm.notify('請填寫分類名稱');
          return false;
        }
        if (Number(vm.$route.params.id)) {
          const promise = [];
          const filter = {
            type: vm.item.selected_type,
            name: vm.item.category_name,
            sorting: vm.item.sorting,
          };
          if (vm.item.selected_type === 'LIVE') {
            promise.push(vm.api('LiveCategory').get({
              id: vm.category_id,
            }).then(resp => {
              filter.live_category = resp.data.id;
            }).catch(() => {
              vm.notify('分類ID不存在');
              return false;
            }));
          } else if (vm.item.selected_type === 'ACTIVITY') {
            promise.push(vm.api('Activity').get({
              id: vm.category_id,
            }).then(resp => {
              filter.activity = resp.data.id;
            }).catch(() => {
              vm.notify('分類ID不存在');
              return false;
            }));
          }
          Promise.all(promise).then(() => {
            vm.api('CelebrityCategory').patch({
              id: Number(vm.$route.params.id),
            }, {
              ...filter,
            }).then(resp => {
              vm.$message.success('保存成功');
              vm.$router.back();
            });
          });
        } else {
          const promise = [];
          const filter = {
            type: vm.item.selected_type,
            name: vm.item.category_name,
            sorting: vm.item.sorting,
          };
          if (vm.item.selected_type === 'LIVE') {
            promise.push(vm.api('LiveCategory').get({
              id: vm.category_id,
            }).then(resp => {
              filter.live_category = resp.data.id;
            }).catch(() => {
              vm.notify('分類ID不存在');
              return false;
            }));
          } else if (vm.item.selected_type === 'ACTIVITY') {
            promise.push(vm.api('Activity').get({
              id: vm.category_id,
            }).then(resp => {
              filter.activity = resp.data.id;
            }).catch(() => {
              vm.notify('分類ID不存在');
              return false;
            }));
          }
          Promise.all(promise).then(() => {
            vm.api('CelebrityCategory').save({
              ...filter,
            }).then(resp => {
              vm.$message.success('保存成功');
              vm.$router.back();
            });
          });
        }
      },
    },
  };
</script>
