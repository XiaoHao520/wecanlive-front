<template>

  <list-view :model="model"
             pk="user"
             title="直播管理"
             subtitle="首頁推荐设置"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :list-actions="listActions"
             :actions="actions"
             :filters="filters"
             ref="view">

    <v-modal slot="after"
             title="添加直播"
             :visible="modal.show"
             @ok="modal.show=false"
             @cancel="modal.show=false">
      <list-view-table
        class="list-view-main-table"
        :cols="modal.cols"
        :options="modal.options"
        :model="model"
        :pageSize="5"
        :actions="modal.actions"
        :filters="modal.filters"
        ref="modalView"
      ></list-view-table>
    </v-modal>

  </list-view>

</template>

<script lang="babel" type="text/babel">
  import colLiveListFull from '../../models/cols/live_list_full';

  export default {
    data() {
      const vm = this;
      return {
        model: 'Live',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        filters: {
          is_index_recommended: 'True',
        },
        cols: colLiveListFull(vm),
        listActions: [{
          title: '添加',
          buttonClass: 'primary',
          action() {
            vm.modal.show = true;
          },
        }],
        actions: [{
          title: '刪除',
          buttonClass: 'danger',
          action(item) {
            vm.confirm('確定將這個用戶從推薦名單移除？').then(() => {
              vm.api().patch({
                id: item.id,
              }, {
                is_index_recommended: false,
              }).then(resp => {
                vm.$message.success('操作成功');
                vm.$refs.view.reload();
              });
            });
          },
        }],
        modal: {
          show: false,
          options: {
            show_pager: true,
          },
          filters: {
            is_index_recommended: 'False',
          },
          cols: [
            {
              title: '房間號',
              key: 'id',
              ordering: 'id',
              filtering: {
                search_field: 'kw_id',
              },
            },
            {
              title: '直播分類',
              key: 'category',
              filtering: {
                search_field: 'kw_category__name',
              },
            },
            {
              title: '主播暱稱',
              key: 'nickname',
              filtering: {
                search_field: 'kw_author__member__nickname',
              },
            },
            {
              title: '主播賬號',
              key: 'mobile',
              filtering: {
                search_field: 'kw_author__member__mobile',
              },
            },
          ],
          actions: [{
            title: '添加',
            buttonClass: 'primary',
            action(item) {
              vm.api().patch({
                id: item.id,
              }, {
                is_index_recommended: true,
              }).then(resp => {
                vm.$message.success('操作成功');
                vm.$refs.modalView.reload();
                vm.$refs.view.reload();
              });
            },
          }],
        },
      };
    },
    computed: {},
    methods: {},
  };
</script>

