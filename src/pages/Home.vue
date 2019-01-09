<template>
  <el-container>
    <el-header style="background: #181818;box-shadow: 4px 0 20px rgba(0,0,0,0.3);height: 70px;">
      <el-row>
        <el-col :span="24" style="color:#fdfdfd;text-align: left;line-height: 70px;height: 70px;font-size:27px">
          <img :src="left" alt="" style="margin-right: 10px;">智慧戒管一体化平台
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            left:require('./images/logo.png')
          }
      }
    }
</script>

<style scoped>

</style>
