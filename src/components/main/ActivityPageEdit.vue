<template>

  <edit-view :model="model"
             title="活動頁設置"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + ''"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
//      const vm = this;
      return {
        model: 'ActivityPage',
        options: {
          can_edit: true,
        },
        fields: [
          {
            title: '海報',
            type: 'image',
            key: {
              read: 'banner_item',
              write: 'banner',
            },
          },
          {
            title: '跳轉活動',
            type: 'object',
            key: 'activity',
            options: {
              model: 'Activity',
              display_field: 'name',
              show_pager: true,
              cols: [
                {
                  title: '活動ID',
                  key: 'id',
                  ordering: 'id',
                  filtering: {
                    search_field: 'exact__id',
                  },
                },
                {
                  title: '活動類型',
                  key: 'type',
                  mapper: this.$root.choices.activity_type,
                  filtering: {
                    type: 'select',
                    search_field: 'kw_type',
                    choices: this.$root.choices.activity_type,
                  },
                },
                {
                  title: '活動標題',
                  key: 'name',
                  filtering: {
                    search_field: 'kw_name',
                  },
                },
                {
                  title: '活動開始時間',
                  key: 'date_begin',
                  filtering: {
                    type: 'date_range',
                    from_field: 'date_from__date_begin',
                    to_field: 'date_to__date_begin',
                  },
                },
                {
                  title: '活動結束時間',
                  key: 'date_end',
                  filtering: {
                    type: 'date_range',
                    from_field: 'date_from__date_end',
                    to_field: 'date_to__date_end',
                  },
                },
                {
                  title: '活動狀態',
                  key: 'status',
                  mapper: this.$root.choices.activity_status,
                },
              ],
            },
          },
          {
            title: '備註',
            key: 'remark',
            type: 'input',
            htmlType: 'textarea',
          },
        ],
      };
    },
    methods: {},
  };
</script>
