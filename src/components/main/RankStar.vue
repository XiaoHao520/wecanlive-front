<template>

  <list-view :model="model"
             pk="id"
             title="榜單管理"
             subtitle="元氣榜管理"
             :options="options"
             :cols="cols"
             :filters="filters"
             :pageSize="pageSize"
             ref="view"
             :actions="actions">
    <ul slot="menu" class="duration-tabs">
      <li><a :class="{active: $route.query.duration==='DATE'}" @click="$refs.view.$refs.table.doQuery({ duration: 'DATE' })">日榜单</a> |</li>
      <li><a :class="{active: $route.query.duration==='WEEK'}" @click="$refs.view.$refs.table.doQuery({ duration: 'WEEK' })">周榜单</a> |</li>
      <li><a :class="{active: $route.query.duration==='TOTAL'}" @click="$refs.view.$refs.table.doQuery({ duration: 'TOTAL' })">总榜</a></li>
    </ul>
  </list-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      return {
        model: 'RankRecord',
        pageSize: 5,
        options: {
          can_create: false,
          can_edit: false,
        },
        filters: {
          rank_type: 'star_index_amount',
          duration: 'TOTAL',
        },
        cols: [
          {
            title: '用戶暱稱',
            key: 'author_nickname',
            filtering: {
              search_field: 'kw_author__member__nickname',
            },
          },
          {
            title: '用戶賬號',
            key: 'author_mobile',
            filtering: {
              search_field: 'kw_author__member__mobile',
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
            key: 'receive_diamond_amount',
          },
          {
            title: '總送出鑽石數',
            key: 'send_diamond_amount',
          },
          {
            title: '元氣指數',
            key: 'star_index_amount',
          },
        ],
        actions: [],
      };
    },
    computed: {},
    methods: {},
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  ul.duration-tabs {
    display: inline-block;
    margin-right: 20px;
    li {
      display: inline-block;
      a {
        color: black;
        &.active {
          color: blue;
        }
      }
    }
  }
</style>
