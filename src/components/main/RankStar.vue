<template>

  <list-view :model="model"
             pk="id"
             title="榜單管理"
             subtitle="元氣榜管理"
             :options="options"
             :cols="cols"
             :filters="filters"
             :pageSize="pageSize"
             :actions="actions">
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'Member',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        filters: {
          rank_type: 'rank_star',
        },
        cols: [
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
          {
            title: '性別',
            key: 'gender',
            mapper: this.$root.choices.gender,
          },
          {
            title: '年齡',
            key: 'age',
          },
          {
            title: '星座',
            key: 'constellation',
            mapper: this.$root.choices.constellation,
          },
          {
            title: '總收禮鑽石數',
            key: 'credit_diamond',
          },
          {
            title: '總送出鑽石數',
            key: 'debit_diamond',
          },
          {
            title: '元氣指數',
            key: 'debit_star_index',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

