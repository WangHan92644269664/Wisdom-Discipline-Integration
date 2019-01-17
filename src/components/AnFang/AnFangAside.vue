<template>
  <Aside :active="activeIndex" :title="title" :lists="lists"></Aside>
</template>

<script>
  import Aside from '../Aside'
    export default {
      data(){
          return {
            activeIndex:'/anFang/video/record',
            title:'安防平台',
            lists:[
              {
                index:'/anFang/video',
                name:'视频探视系统',
                childs:[
                  {
                    index:'/anFang/video/record',
                    name:'会见探访记录'
                  },
                  {
                    index:'#/anFang/video/remote',
                    name:'戒毒远程视频医疗系统'
                  },
                  {
                    index:'#/anFang/video/process',
                    name:'会见流程'
                  },
                ]
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
