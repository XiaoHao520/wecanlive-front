<template>

  <list-view :model="model"
             pk="id"
             title="徽章管理"
             subtitle="徽章列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">
    <v-modal slot="after"
             title="用戶列表"
             :visible="showModal"
             @ok="showModal=false"
             @cancel="showModal=false">
      <list-view-table
        class="list-view-main-table"
        :cols="modal.cols"
        :model="modal.model"
        :options="modal.options"
        :pageSize="pageSize"
        :actions="modal.actions"
        ref="modalView"
      ></list-view-table>
    </v-modal>
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        showModal: false,
        model: 'Badge',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
        },
        modal: {
          model: 'Member',
          options: {
            show_pager: true,
          },
          actions: [{
            title: '頒發',
            buttonClass: 'primary',
            action(item) {
//              TODO: 頒發徽章
              vm.$message.warning('頒發功能開發中');
              vm.showModal = false;
            },
          }],
          cols: [
            {
              title: '用戶ID',
              key: 'user',
              ordering: 'user',
              filtering: {
                search_field: 'kw_user__id',
              },
            },
            {
              title: '用戶暱稱',
              key: 'nickname',
              filtering: {
                search_field: 'kw_nickname',
              },
            },
            {
              title: '用戶賬號',
              key: 'mobile',
              filtering: {
                search_field: 'kw_mobile',
              },
            },
          ],
        },
        cols: [
          {
            title: '徽章圖標',
            key: 'icon_item.image',
            type: 'image',
            width: 75,
            height: 75,
          },
          {
            title: '徽章名稱',
            key: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
          {
            title: '獲取條件',
            key: 'badge_item',
            mapper: this.$root.choices.badge_item,
            filtering: {
              type: 'select',
              search_field: 'kw_badge_item',
              choices: this.$root.choices.badge_item,
            },
          },
          {
            title: '條件數值',
            key: 'item_value',
            filter(item) {
              if (item === 0) {
                return '-';
              }
              return item;
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
          {
            title: '排序',
            key: 'sorting',
            ordering: 'sorting',
          },
        ],
        actions: [{
          title: '手動頒發',
          buttonClass: 'primary',
          isVisible(item) {
            return item.badge_item === 'SPECIAL';
          },
          action(item) {
            vm.showModal = true;
          },
        }],
      };
    },
    computed: {},
    methods: {},
  };
</script>

