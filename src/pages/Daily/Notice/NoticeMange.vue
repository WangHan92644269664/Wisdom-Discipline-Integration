<template>
  <el-container>
    <el-main>
      <NoticeManger></NoticeManger>
    </el-main>
  </el-container>

</template>

<script>
  import NoticeManger from '../../../components/Daily/Notice/NoticeManageMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
     NoticeManger
    },
    data() {
      return {
        title:'公告管理'
      }
    },
    methods: {
    }
  }
</script>
<style>

</style>
<style scoped>

</style>
