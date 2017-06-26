<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">平台管理</h3>
      <h4 class="page-header-subtitle">
        {{item.id ? '编辑' : '添加'}}角色
      </h4>
      <div class="tooltips">
        <v-button type="ghost" :to="{name: 'main_group_list'}">返回</v-button>
        <v-button type="dashed" v-if="item.id" @click="erase()">删除</v-button>
        <v-button @click="submit(false)">保存并继续编辑</v-button>
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">

      <section class="item-form ant-form ant-form-horizontal"
               style="max-width: 800px">

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>名称</label>
          </div>
          <div class="ant-col-10 ant-form-item-control">
            <input type="text" class="ant-input" max="30"
                   placeholder=""
                   v-model="item.name"/>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>描述</label>
          </div>
          <div class="ant-col-10 ant-form-item-control">
          <textarea class="ant-input" rows="5"
                    v-model="item.info.description"></textarea>
          </div>
        </div>

        <div class="ant-row" v-for="menu in menus">
          <div class="ant-col-6 ant-form-item-label">
            <label>{{menu.title}}</label>
          </div>
          <div class="ant-col-18 ant-form-item-control">
            <div class="ant-checkbox-group">
              <label class="ant-checkbox-group-item ant-checkbox-wrapper"
                     v-for="submenu in menu.children">
              <span class="ant-checkbox"
                    :class="{'ant-checkbox-checked': item.menus.indexOf(submenu.id) > -1}">
                <span class="ant-checkbox-inner"></span>
                <input type="checkbox" class="ant-checkbox-input"
                       :value="submenu.id"
                       v-model="item.menus">
              </span>
                <span>{{submenu.title}}</span>
              </label>
            </div>
          </div>
        </div>

      </section>

    </section>

  </div>

</template>

<script lang="babel">
  export default {
    route: { canReuse: false },
    data() {
      return {
        model: 'Group',
        password: '',
        password_confirm: '',
        menus: [],
        item: {
          name: '',
          slug: '',
          info: {
            description: '',
            is_builtin: false,
          },
          menus: [],
          content: '',
        },
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Menu').get({ page_size: 10000, project: vm.config.project }).then(resp => {
          vm.menus = [];
          const dict = {};
          const menus = resp.data.results;
          console.log(menus);
          while (menus.length) {
            const menu = menus.pop();
            if (!dict[menu.id]) {
              menu.children = [];
              dict[menu.id] = menu;
            }
            if (!menu.parent) vm.menus.unshift(menu);
            else if (dict[menu.parent]) dict[menu.parent].children.push(menu);
            else menus.unshift(menu);
          }
        });
        // 获取主体信息
        vm.loadItem();
      },
      loadItem() {
        const vm = this;
        if (Number(vm.$route.params.id)) {
          return vm.api().get({
            id: vm.$route.params.id,
          }).then(resp => {
            if (!resp.data.info) {
              resp.data.info = {
                description: '',
                is_builtin: false,
              };
            }
            vm.item = resp.data;
          });
        }
      },
      erase() {
        const vm = this;
        vm.confirm(`确定删除【${vm.item.name}】？`).then(
          () => vm.api().delete({ id: vm.item.id }),
        ).then(() => {
          vm.notify('删除成功');
          vm.$router.push({ name: 'main_group_list' });
        });
      },
      submit(backToList = true) {
        const vm = this;
        const data = JSON.parse(JSON.stringify(vm.item));
        const promise = vm.item.id
          ? vm.api().patch({ id: vm.item.id }, data)
          : vm.api().save({ ...data });
        promise.then(resp => {
          const itemId = vm.item.id || resp.data.id;
          const promise2 = vm.item.info && vm.item.info.group
            ? vm.api('GroupInfo').patch({ id: vm.item.id }, vm.item.info)
            : vm.api('GroupInfo').save({ group: itemId, ...vm.item.info });
          promise2.then(() => {
            vm.notify('操作成功');
            if (backToList) {
              vm.$router.push({ name: 'main_group_list' });
            } else if (vm.item.id) {
              vm.reload();
            } else {
              vm.$router.push({
                name: vm.$route.name,
                params: { id: itemId },
              });
            }
          });
        });
      },
    },
  };
</script>
