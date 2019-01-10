import Vue from 'vue'
import Router from 'vue-router'
//启动页
import Start from '../pages/Start'
//首页
import Home from '../pages/Home'
//登录页面
import Login from '../pages/Login'
//大数据平台
import Data from "../pages/Data/Data"
//日常办公平台
import Daily from '../pages/Daily/Daily'
import WorkingDeptPlan from '../pages/Daily/Working/DeptPlan'
import WorkingMyPlan from '../pages/Daily/Working/MyPlan'
import WorkingArrangePlan from '../pages/Daily/Working/ArrangePlan'
import NoticeManage from '../pages/Daily/Notice/NoticeMange'
import WorkingLog from '../pages/Daily/Log/Log'
import WorkingLogAudit from '../pages/Daily/Log/LogAudit'
import EssayColumn from '../pages/Daily/Publicity/Column'
import EssayManage from '../pages/Daily/Publicity/Advertise'
import EssayCarousel from '../pages/Daily/Publicity/Carousel'
//人员画像平台
import Portrayal from '../pages/Portrayal/Portrayal'
import DrugPersonalInfo from '../pages/Portrayal/DrugPersonal/PeopleInfo'
import HealthOperate from '../pages/Portrayal/HealthInfo/Operate'
import HealthPatient from '../pages/Portrayal/HealthInfo/Patient'
import HealthProve from '../pages/Portrayal/HealthInfo/Prove'
import PoliceInfo from '../pages/Portrayal/PolicePersonal/PoliceInfo'
//安防平台
import AnFang from '../pages/AnFang/AnFang'
import VideoRecord from '../pages/AnFang/Video/Record'
//戒治综合平台
import Jiezhi from '../pages/Jiezhi/JieZhi'
import Bingli from '../pages/Jiezhi/Content/BingLi'
import GuanXi from '../pages/Jiezhi/Content/GuanXi'
import QuanXi from '../pages/Jiezhi/Content/QuanXi'

//GIS页面
import Gis from "../pages/GIS/Gis"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     component:Start
    },
    {
      path:'/home',
      component:Home
    },
    //大数据平台
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    //  日常办公平台
    {
      path: '/daily',
      component:Daily,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/daily/plan/dept',
          component: WorkingDeptPlan,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/plan/my',
          component:WorkingMyPlan,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/plan/undo',
          component: WorkingArrangePlan,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/notice',
          component:NoticeManage,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/logmanage/log',
          component: WorkingLog,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/logmanage/audit',
          component: WorkingLogAudit,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/advertise/essay',
          component: EssayManage,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/essay/column',
          component: EssayColumn,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/daily/essay/carousel',
          component: EssayCarousel,
          meta: {
            showHeader: true
          }
        },
        {
          path:'/daily',
          redirect:'/daily/plan/dept'
        }
      ],
    },
    //  人员画像平台
    {
      path: '/portrayal',
      component:Portrayal,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/personal/drug/info',
          component:DrugPersonalInfo,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/personal/health/HIS/patient',
          component:HealthPatient,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/personal/health/HIS/operate',
          component:HealthOperate,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/personal/health/HIS/prove',
          component:HealthProve,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/personal/police',
          component:PoliceInfo,
          meta: {
            showHeader: true
          }
        },
        {
          path:'/portrayal',
          redirect:'/personal/health/HIS/patient'
        }
      ],
    },
    //  安防平台
    {
      path: '/anfang',
      component:AnFang,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/anFang/video/record',
          component:VideoRecord,
          meta: {
            showHeader: true
          }
        },
        {
          path:'/anfang',
          redirect:'/anFang/video/record'
        }
      ],
    },
    //戒治综合平台
    {
      path: '/zongzhi',
      component:Jiezhi,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: '/zongzhi/bingli',
          component:Bingli,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/guanxi',
          component:GuanXi,
          meta: {
            showHeader: true
          }
        },
        {
          path: '/zongzhi/quanxi',
          component:QuanXi,
          meta: {
            showHeader: true
          }
        },
        {
          path:'/zongzhi',
          redirect:'/zongzhi/bingli'
        }
      ]
    },
    //GIS平台
    {
      path: '/gis',
      component:Gis,
      meta: {
        showHeader: true
      },
    }

  ]
})
