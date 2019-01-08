<template>
  <el-container>
    <el-main>
      <DeptMain></DeptMain>
    </el-main>
  </el-container>
</template>

<script>
  import DeptMain from '../../../components/Daily/Working/MyPlanMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      DeptMain
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped>

</style>
