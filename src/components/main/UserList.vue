<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">管理员用户</h3>
      <h4 class="page-header-subtitle">用户列表</h4>
      <div class="tooltips">
        <v-button type="ghost"
                  :to="{name: 'main_user_edit', params: {id: 0}}">新增</v-button>
      </div>
    </header>

    <div class="page-body has-footer">

      <section class="page-content">
        <div class="ant-table ant-table-middle">
          <table>
            <thead class="ant-table-thead">
            <tr>
              <th>ID</th>
              <th>用户名</th>
              <th>姓名</th>
              <th>Email</th>
              <th>最后登录日期</th>
              <!--<th>最后登录IP</th>-->
              <th>状态</th>
              <th>创建日期</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody class="ant-table-tbody">
            <tr class="ant-table" v-for="item in items">
              <td>{{item.id}}</td>
              <td>{{item.username}}</td>
              <td>{{item.first_name+item.last_name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.last_login}}</td>
              <td>
                <v-switch v-model="item.is_active"
                          :disabled="item.id===me.id || !me.is_superuser && item.is_superuser"
                          @change="updateIsActive(item)">
                  <span slot="checked">是</span>
                </v-switch>
              </td>
              <td>{{item.date_joined}}</td>
              <td>
                <v-button size="small" type="ghost"
                          :to="{name:'main_user_edit', params: {id: item.id}}">
                  编辑
                </v-button>
                <v-button size="small" type="dashed" @click="erase(item)"
                          v-if="!item.is_superuser && item.id != me.id">
                  删除
                </v-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <footer class="page-footer">
      <pagination :page_count="pager.page_count" :page_size="pager.page_size"></pagination>
    </footer>

  </div>

</template>

<script lang="babel">
  export default {
    // 参数修改时能够跳转，分页需要
    route: { canReuse: false },
    data() {
      return {
        model: 'User',
        items: [],
        pager: {
          page_size: 10,
          page_count: 0,
        },
      };
    },
    computed: {},
    methods: {
      reload() {
        const vm = this;
        // 读取当前分页的所有对象
        vm.api().get({
          page: vm.$route.query.page || 1,
          page_size: vm.pager.page_size,
          is_staff: 'True',
        }).then(resp => {
          vm.items = resp.data.results;
          vm.pager.page_count = Math.ceil(resp.data.count / vm.pager.page_size - 1e-5);
        });
      },
      updateIsActive(item) {
        const vm = this;
        if (item.id === vm.me.id) {
          setTimeout(() => {
            item.is_active = true;
          }, 0);
          vm.notify('不允许对自己的可用状态进行修改');
          return;
        }
        vm.api().patch({ id: item.id }, { is_active: item.is_active }).then(() => {
          vm.reload();
        });
      },
      erase(item) {
        const vm = this;
        vm.confirm(`确认删除【${item.username}】？`).then(
          () => vm.api().delete({ id: item.id }),
        ).then(() => {
          vm.reload();
        });
      },
    },
  };
</script>
