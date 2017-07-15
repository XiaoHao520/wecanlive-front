<template>

  <list-view :model="model"
             pk="user"
             title="子業務管理"
             subtitle="首頁追蹤推薦名單"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :list-actions="listActions"
             :actions="actions"
             :filters="filters"
             ref="view">

    <v-modal slot="after"
             title="添加用戶"
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
  import colMemberListFull from '../../models/cols/member_list_full';
  import colMemberListModal from '../../models/cols/member_list_modal';

  export default {
    data() {
      const vm = this;
      return {
        model: 'Member',
        pageSize: 10,
        options: {
          can_create: false,
          can_edit: false,
        },
        cols: colMemberListFull(vm),
        filters: {
          is_follow_recommended: 'True',
        },
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
                id: item.user,
              }, {
                is_follow_recommended: false,
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
            is_follow_recommended: 'False',
          },
          actions: [{
            title: '添加',
            buttonClass: 'primary',
            action(item) {
              vm.api().patch({
                id: item.user,
              }, {
                is_follow_recommended: true,
              }).then(resp => {
                vm.$message.success('操作成功');
                vm.$refs.modalView.reload();
                vm.$refs.view.reload();
              });
            },
          }],
          cols: colMemberListModal(vm),
        },
      };
    },
    computed: {},
    methods: {},
  };
</script>

