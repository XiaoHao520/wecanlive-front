<template>

  <div>

    <header class="page-header">
      <h3 class="page-header-title">管理员用户</h3>
      <h4 class="page-header-subtitle">
        {{item.id ? '编辑' : '添加'}}用户
      </h4>
      <div class="tooltips">
        <v-button v-if="!item.is_superuser && item.id && me.id!=item.id"
                  type="dashed" @click="erase()">删除
        </v-button>
        <v-button @click="submit(false)">保存并继续编辑</v-button>
        <v-button type="primary" @click="submit()">保存</v-button>
      </div>
    </header>

    <section class="page-body">

      <section class="item-form ant-form ant-form-horizontal"
               style="max-width: 800px">

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>用户名</label>
          </div>
          <div class="ant-col-10 ant-form-item-control">
            <input type="text" class="ant-input" max="30"
                   :readonly="item.id === me.id"
                   placeholder=""
                   v-model="item.username"/>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>姓名</label>
          </div>
          <div class="ant-col-3 ant-form-item-control">
            <input type="text" class="ant-input" max="30"
                   placeholder="姓"
                   v-model="item.first_name"/>
          </div>
          <div class="ant-col-6 ant-col-offset-1 ant-form-item-control">
            <input type="text" class="ant-input" max="30"
                   placeholder="名"
                   v-model="item.last_name"/>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>新密码</label>
          </div>
          <div class="ant-col-10 ant-form-item-control">
            <input type="password" class="ant-input" max="30"
                   placeholder="不填的话保持原密码不变"
                   v-model="password"/>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>确认密码</label>
          </div>
          <div class="ant-col-10 ant-form-item-control">
            <input type="password" class="ant-input" max="30"
                   placeholder="请重复输入新密码"
                   v-model="password_confirm"/>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>Email</label>
          </div>
          <div class="ant-col-10 ant-form-item-control">
            <input type="text" class="ant-input" max="30"
                   placeholder=""
                   v-model="item.email"/>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>是否启用</label>
          </div>
          <div class="ant-col-18 ant-form-item-control">
            <v-switch :disabled="item.id==me.id || !me.is_superuser && item.is_superuser"
                      v-model="item.is_active">
              <!--{{item.is_active?'是':'否'}}-->
              <template slot="checked">是</template>
              <template slot="unchecked">否</template>
            </v-switch>
          </div>
        </div>

        <div class="ant-row">
          <div class="ant-col-6 ant-form-item-label">
            <label>角色</label>
          </div>
          <div class="ant-col-18 ant-form-item-control">
            <div class="ant-checkbox-group">
              <label class="ant-checkbox-group-item ant-checkbox-wrapper"
                     v-for="group in groups">
            <span class="ant-checkbox"
                  :class="{'ant-checkbox-checked': item.groups.indexOf(group.id) > -1}">
              <span class="ant-checkbox-inner"></span>
              <input type="checkbox" class="ant-checkbox-input"
                     :value="group.id"
                     v-model="item.groups">
            </span>
                <span>{{group.name}}</span>
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
        model: 'User',
        password: '',
        password_confirm: '',
        groups: [],
        item: {
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          groups: [],
        },
      };
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Group').get({ page_size: 10000 }).then(resp => {
          vm.groups = resp.data.results;
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
          vm.$router.push({ name: 'main_user_list' });
        });
      },
      submit(backToList = true) {
        const vm = this;
        if (vm.password !== vm.password_confirm) {
          vm.notify('两次输入的密码不相同！');
          return;
        }
        if (vm.password && vm.password.length < 6) {
          vm.notify('新密码长度不得少于6位！');
          return;
        }

        const data = JSON.parse(JSON.stringify(vm.item));

        const promise = vm.item.id
          ? vm.api().patch({ id: vm.item.id }, data)
          : vm.api().save({ is_superuser: false, is_staff: true, ...data });
        promise.then(resp => {
          if (vm.password) {
            vm.api().save({
              id: vm.item.id || resp.data.id,
              action: 'update_password',
            }, {
              password: vm.password,
            });
          }
          vm.notify('操作成功');
          if (backToList) {
            vm.$router.push({ name: 'main_user_list' });
          } else if (vm.item.id) {
            vm.reload();
          } else {
            vm.$router.push({
              name: vm.$route.name,
              params: { id: resp.data.id },
            });
          }
        });
      },
    },
  };
</script>
