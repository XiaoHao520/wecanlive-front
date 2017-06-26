<template>

  <edit-view :model='model'
             title="客户管理"
             pk="user"
             :subtitle="(Number($route.params.id)?'编辑':'创建') + ''"
             :fields="fields"
             :options="options"
             ref="view">
  </edit-view>

</template>

<script lang="babel">
  //  import * as api from '../../resource/api';

  export default {
    data() {
      return {
        model: 'Member',
        options: {
          can_create: true,
          can_edit: true,
          can_delete: true,
        },
        fields: [
          { title: '用户ID', key: 'user', type: 'label' },
          { title: '注册时间', key: 'date_created', type: 'label' },
          {
            title: '头像',
            type: 'image',
            key: {
              read: 'avatar_item',
              write: 'avatar',
            },
          },
          { title: '手机号码', key: 'mobile' },
          { title: '昵称', key: 'nickname' },
          { title: '真实姓名', key: 'real_name', type: 'label' },
          {
            title: '性别',
            key: 'gender',
            type: 'radio-button',
            default: '',
            choices: this.$root.choices.gender,
          },
          {
            title: '星座',
            type: 'radio-button',
            key: 'constellation',
            choices: this.$root.choices.constellation,
          },
          {
            title: '生日',
            type: 'datepicker',
            key: 'birthday',
          },
          {
            title: '是否启用',
            key: 'is_active',
            default: true,
            type: 'switch',
          },
        ],
      };
    },
    methods: {},
  };
</script>
