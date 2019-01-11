<template>
  <el-container id="login">
    <el-main >
      <el-row style="margin: 130px auto 22px">
        <el-col :span="24" >
          <img :src="titleLogo" alt="">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin: 0 auto 0">
          <img :src="titleImg" alt="">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="box">
            <el-row>
              <el-col :span="24" class="boxTitle">
                  欢迎登录
              </el-col>
            </el-row>
          <el-row>
            <el-col :span="8" class="userBox" :offset="8">
              <el-form :model="ruleForm2"  ref="ruleForm2" >
                <el-form-item  prop="pass">
                  <img :src="user" alt="" >
                  <el-input  v-model="ruleForm2.user"  placeholder="请输入管理员的姓名..." ></el-input>
                </el-form-item>
                <el-form-item  prop="age" style="margin-left: 40px;">
                  <img :src="pwdLeft" alt="" >
                  <el-input type="password" v-model="ruleForm2.pwd" placeholder="******" ></el-input>
                  <img :src="pwdRight" alt="" style="margin-right: 20px;">
                </el-form-item>
                <el-form-item class="open">
                  <el-row style="margin-top: 28px;">
                    <el-col :span="8" :offset="5">
                      <span>ABC &nbsp;&nbsp;</span><img :src="openBottom" alt=""> <img :src="openTop" alt="">
                    </el-col>
                    <el-col :span="5" :offset="2"> <a>忘记密码?</a></el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button  @click="submitForm('ruleForm')" class="login">登 录</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            titleLogo:require('./images/login/logo.png'),
            titleImg:require('./images/login/title.png'),
            user:require('./images/login/user.png'),
            pwdLeft:require('./images/login/pwdLeft.png'),
            pwdRight:require('./images/login/pwdRight.png'),
            openBottom:require('./images/login/btnBottom.png'),
            openTop:require('./images/login/btnTop.png'),
            ruleForm2: {
              pwd:'',
              user:'',
              open:false
            },
          }
      },
      methods:{
        submitForm(formName) {
              this.$router.push('/home');
        },
      }
    }
</script>

<style scoped>
.el-main{
  background: url("./images/login/bg.png");
  background-size: 100% 100%;
  height: 100vh;
  color:#676565;
  font-size: 17px;
}
  .box{
    background: url("./images/login/loginBg.png") no-repeat;
    background-position: center center;
    height:535px;
  }
.box .boxTitle{
  background: url("./images/login/top.png") no-repeat;
  background-position: center center;
  height:112px;
  color:#e7e2e2;
  font-size:20px;
  letter-spacing: .7em;
  padding-top: 40px;
}
.box .userBox{
  background: url("./images/login/userBox.png") no-repeat;
  background-position: center center;
  height: 170px;
}
.el-form{
  margin-top: 45px;
}
.el-input{
  width:310px;
}
.el-form-item__content,.el-input{
  font-size: 17px!important;
}
  .open{
    text-align: left;
    font-weight: bolder;
  }
  .open span{
    position: relative;
    top: -5px;
    font-size: 17px;
  }
  .open img:nth-of-type(2){
    position: relative;
    left: -52px;
    top: 1px;
    cursor: pointer;
    transition: .5s;
  }
  .open img:nth-of-type(2):hover{
    transform: translateX(20px);
  }
  .open a{
    font-size:15px;
    color:#444;
    position: relative;
    right: -30%;
    top: -5px;
    cursor: pointer;
    text-decoration: underline;
  }
  .login{
    background: url("./images/login/loginBtn.png") no-repeat;
    background-position: center center;
    border:none!important;
    width: 100%;
    color:#fff;
    font-size: 20px;
    height: 95px;
    letter-spacing: 1em;
    font-weight: 600;
  }
.el-button:focus, .el-button:hover{
  background-color: transparent !important;
  color:#fff !important;
}
</style>
