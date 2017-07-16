<template>

  <edit-view :model="model"
             title="禮物分類"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             :actions="actions"
             ref="view">
    <v-modal slot="after"
             title="添加到分类"
             :visible="modal.show"
             :width="700"
             @ok="modal.show=false"
             @cancel="modal.show=false">
      <list-view-table
        class="list-view-main-table"
        :cols="modal.cols"
        :options="modal.options"
        model="Prize"
        :pageSize="5"
        :actions="modal.actions"
        :filters="modal.filters"
        ref="modalView"
      ></list-view-table>
    </v-modal>
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  const prizeCols = [
    {
      title: '禮物ID',
      key: 'id',
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
      title: '排序',
      key: 'sorting',
    },
  ];
  const modalPrizeCols = [...prizeCols];
  modalPrizeCols.splice(3, 0, {
    title: '當前分類',
    key: 'category_name',
  });
  export default {
    data() {
      const vm = this;
      return {
        model: 'PrizeCategory',
        options: {
          can_edit: true,
        },
        actions: [{
          title: '添加',
          buttonClass: 'success',
          action() {
            vm.modal.show = true;
          },
        }],
        fields: [
          {
            title: '分類ID',
            key: 'id',
            type: 'label',
          },
          {
            title: '分類名稱',
            key: 'name',
          },
          {
            title: '排序',
            key: 'sorting',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '普通款禮物',
            type: 'list-view',
            display: 'full',
            id: 'listViewNormal',
            options: {
              model: 'Prize',
              options: {
                can_edit: true,
                can_delete: false,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                category: vm.$route.params.id,
                prize_type: 'NORMAL',
              },
              cols: prizeCols,
              actions: [{
                title: '删除',
                buttonClass: 'danger',
                action(item) {
                  vm.api('Prize').patch({
                    id: item.id,
                  }, {
                    category: null,
                  }).then(resp => {
                    vm.$message.success('操作成功');
                    vm.$refs.view.reload();
                    vm.$refs.view.$refs.form.$refs.listViewNormal[0].reload();
                    vm.$refs.view.$refs.form.$refs.listViewSpecial[0].reload();
                  });
                },
              }],
            },
          },
          {
            title: '特殊款禮物',
            type: 'list-view',
            display: 'full',
            id: 'listViewSpecial',
            options: {
              model: 'Prize',
              options: {
                can_edit: true,
                can_delete: false,
                show_pager: true,
              },
              pageSize: 5,
              filters: {
                category: vm.$route.params.id,
                prize_type: 'SPECIAL',
              },
              cols: prizeCols,
              actions: [{
                title: '删除',
                buttonClass: 'danger',
                action(item) {
                  vm.api('Prize').patch({
                    id: item.id,
                  }, {
                    category: null,
                  }).then(resp => {
                    vm.$message.success('操作成功');
                    vm.$refs.view.reload();
                    vm.$refs.view.$refs.form.$refs.listViewNormal[0].reload();
                    vm.$refs.view.$refs.form.$refs.listViewSpecial[0].reload();
                  });
                },
              }],
            },
          },
        ],
        modal: {
          show: false,
          options: {
            show_pager: true,
          },
          filters: {
            ne__category: vm.$route.params.id,
          },
          actions: [{
            title: '添加到普通款',
            action(item) {
              vm.api('prize').patch({
                id: item.id,
              }, {
                category: vm.$route.params.id,
                type: 'NORMAL',
              }).then(resp => {
                vm.$message.success('操作成功');
                vm.$refs.modalView.reload();
                vm.$refs.view.reload();
                vm.$refs.view.$refs.form.$refs.listViewNormal[0].reload();
                vm.$refs.view.$refs.form.$refs.listViewSpecial[0].reload();
              });
            },
          }, {
            title: '添加到特殊款',
            action(item) {
              vm.api('prize').patch({
                id: item.id,
              }, {
                category: vm.$route.params.id,
                type: 'SPECIAL',
              }).then(resp => {
                vm.$message.success('操作成功');
                vm.$refs.modalView.reload();
                vm.$refs.view.reload();
                vm.$refs.view.$refs.form.$refs.listViewNormal[0].reload();
                vm.$refs.view.$refs.form.$refs.listViewSpecial[0].reload();
              });
            },
          }],
          cols: modalPrizeCols,
        },
      };
    },
    methods: {},
  };
</script>

