<template>

  <list-view :model="model"
             pk="id"
             title="直播分類管理"
             subtitle="直播分類列表"
             :options="options"
             :cols="cols"
             :pageSize="pageSize"
             :actions="actions">

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

<script lang="babel">
  export default {
    data() {
      return {
        model: 'LiveCategory',
        pageSize: 5,
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        cols: [
          {
            title: '分類ID',
            key: 'id',
            ordering: 'id',
            filtering: {
              search_field: 'exact__id',
            },
          },
          {
            title: '分類名稱',
            key: 'name',
            ordering: 'name',
            filtering: {
              search_field: 'kw_name',
            },
          },
          {
            title: '置頂順序',
            key: 'sorting',
            ordering: 'sorting',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

