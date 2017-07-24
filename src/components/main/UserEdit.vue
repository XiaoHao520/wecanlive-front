<template>

  <edit-view :model="model"
             title="系統管理"
             pk="id"
             :subtitle="(Number($route.params.id)?'編輯':'創建') + '用戶'"
             :fields="fields"
             :actions="actions"
             :options="options"
             ref="view">
    <div class="ant-row" slot="after">
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
  </edit-view>

</template>

<script lang="babel" type="text/babel">
  export default {
    data() {
      const vm = this;
      return {
        model: 'User',
        groups: [],
        options: {
          can_edit: true,
          can_delete: true,
        },
        fields: [
          {
            title: '賬號',
            key: 'username',
          },
          {
            title: '姓名',
            key: 'first_name',
          },
          {
            title: '是否啓用',
            key: 'is_active',
            type: 'switch',
          },

        ],
        actions: [{
          title: '重設密碼',
          action(item) {
            vm.modalForm({
              title: '重設密碼',
              fields: [{
                label: '重設密碼',
                name: 'pwd_new',
                type: 'password',
              }, {
                label: '確認密碼',
                name: 'pwd_confirm',
                type: 'password',
              }],
              validator(data) {
                if (!data.pwd_new) {
                  vm.$message.warning('新密碼不能爲空');
                  return false;
                } else if (data.pwd_new.length < 6) {
                  vm.$message.warning('密碼至少6位');
                  return false;
                } else if (data.pwd_new !== data.pwd_confirm) {
                  vm.$message.warning('兩次輸入的密碼不一致');
                  return false;
                }
                return true;
              },
            }).then(data => vm.api().save({
              id: vm.$route.params.id,
              action: 'update_password',
            }, {
              password: data.pwd_new,
            })).then(() => {
              vm.$refs.view.reload();
            });
          },
        }],
      };
    },
    computed: {
      item() {
        const vm = this;
        if (!vm.$refs.view.item.id) {
//          TODO:  bug
          console.log('>>>>>>>>> 新建用户时，item 没有对应信息导致角色选项显示不正确 <<<<<<<<<');
        }
        return vm.$refs.view.item;
      },
    },
    methods: {
      reload() {
        const vm = this;
        vm.api('Group').get({ page_size: 10000 }).then(resp => {
          vm.groups = resp.data.results;
        });
      },
    },
  };
</script>
