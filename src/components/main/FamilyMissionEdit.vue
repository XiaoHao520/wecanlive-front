<template>

  <edit-view :model="model"
             title="家族任務"
             pk="id"
             subtitle="查看"
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
        model: 'FamilyMission',
        options: {
          can_edit: false,
        },
        fields: [
          {
            title: '任務序號',
            key: 'id',
            type: 'label',
          },
          {
            title: '任務元件',
            key: 'mission_item',
            type: 'radio-button',
            choices: this.$root.choices.family_mission_item,
          },
          {
            title: '任務元件數值',
            key: 'mission_item_value',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '獎勵元件',
            key: 'award_item',
            type: 'radio-button',
            choices: this.$root.choices.family_mission_award,
          },
          {
            title: '獎勵元件數值',
            key: 'award_item_value',
            type: 'input',
            htmlType: 'number',
            min: 0,
          },
          {
            title: '獎勵禮物',
            type: 'object',
            key: 'prize',
            options: {
              model: 'Prize',
              display_field: 'name',
              show_pager: true,
              cols: [{
                title: '禮物ID',
                key: 'id',
                ordering: 'id',
              }, {
                title: '禮物分類',
                key: 'category_name',
                filtering: {
                  search_field: 'kw_category__name',
                },
              }, {
                title: '圖標',
                key: 'icon_item.image',
                type: 'image',
                width: 75,
                height: 75,
              }, {
                title: '禮物名稱',
                key: 'name',
                filtering: {
                  search_field: 'kw_name',
                },
              }],
            },
          },
          {
            title: '獎勵勳章',
            type: 'object',
            key: 'badge',
            options: {
              model: 'Badge',
              display_field: 'name',
              show_pager: true,
              cols: [{
                title: '圖標',
                key: 'icon_item.image',
                type: 'image',
                width: 75,
                height: 75,
              }, {
                title: '徽章名稱',
                key: 'name',
                filtering: {
                  search_field: 'kw_name',
                },
              }, {
                title: '徽章激活時間',
                key: 'date_created',
              }, {
                title: '徽章有效期',
                key: 'validity',
                filter(item) {
                  return `${item}天`;
                },
              }],
            },
          },
        ],
      };
    },
    methods: {},
  };
</script>
