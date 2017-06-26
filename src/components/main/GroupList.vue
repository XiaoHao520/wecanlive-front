<template>

  <list-view model="Group"
             title="角色列表"
             subtitle=""
             :options="options"
             :cols="cols">
  </list-view>

</template>

<script lang="babel">
  export default {
    data() {
      return {
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        cols: [
          { title: 'ID', key: 'id' },
          { title: '名称', key: 'name' },
          {
            title: '是否内置',
            key: 'info.is_builtin',
            filter: value => (value ? '是' : '否'),
          },
          { title: '描述', key: 'info.description' },
          { title: '创建日期', key: 'info.date_created' },
        ],
      };
    },
    computed: {},
    methods: {},
  };
</script>
