<template>
  <Aside :active="activeIndex" :title="title" :lists="lists"/>
</template>

<script>
  import Aside from  '../Aside'
    export default {
        name: "ContainerAside",
      data(){
          return {
            activeIndex:'/daily/plan/dept',
            title:'日常办公平台',
            lists:[
              {
                index:'/daily/advertise',
                name:'宣传管理',
                childs:[
                  {
                    index:'/daily/advertise/essay',
                    name:'文章管理',
                  },
                  {
                    index:'/daily/essay/column',
                    name:'文章栏目管理',
                  },
                  {
                    index:'/daily/essay/carousel',
                    name:'轮播图管理',
                  },
                ]
              },
              {
                index:'/daily/logmanage',
                name:'日志管理',
                childs:[
                  {
                    index:'/daily/logmanage/log',
                    name:'工作日志',
                  },
                  {
                    index:'/daily/logmanage/audit',
                    name:'日志审核',
                  },
                ]
              },
              {
                index:'/daily/plan',
                name:'工作计划',
                childs:[
                  {
                    index:'/daily/plan/my',
                    name:'我的工作计划',
                  },
                  {
                    index:'/daily/plan/undo',
                    name:'我安排的工作',
                  },
                  {
                    index:'/daily/plan/dept',
                    name:'部门工作计划',
                  },

                ]
              },
              {
                index:'/daily/notice',
                name:'公告管理',
              }
            ]
          }
      },
      components:{
          Aside
      }
    }
</script>
<style>

</style>
<style scoped>
</style>
