import type { RouteLocation, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import AdminView from "../views/AdminView.vue";
import ComponentsView from "../views/ComponentsView.vue";
import ContentManagementView from "../views/ContentManagementView.vue";
import AuthView from "../views/auth/AuthView.vue";
import LoginPage from "../views/auth/LoginPage.vue";
// import RegisterPage from "../views/auth/RegisterPage.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import ResetPasswordConfirmation from "../views/auth/ResetPasswordConfirmation.vue";
import SetNewPassword from "../views/auth/SetNewPassword.vue";
import SetPasswordSuccessful from "../views/auth/SetPasswordSuccessful.vue";
import BrandTheme from "../views/BrandTheme.vue";
import Recommendation from "../views/Recommendation.vue";
import Task from "../views/Task.vue";
import Setting from "../views/Setting.vue";
import Settings from "../views/Settings.vue";
import ContentView from "../views/ContentView.vue";
import AdvanceStatisticsView from "../views/AdvancedStatisticsView.vue";
import PlatformView from "../../src/components/layouts/RightCoulumn/PlatformShare.vue";
import { mustBeLoggedIn } from "./guards";
export const ROUTES = {
  HOME: "home",
  HOME_ADMIN: "home-admin",
  HOME_DASHBOARD: "home-dashboard",
  CONTENT_MANAGEMENT: "content-management",
  BRAND_THEME: "brand-theme",
  RECOMMENDATION: "recommendation",
  SETTINGS: "settings",
  SETTING: "setting",
  TASK: "Task",
  COMPONENTS: "components",
  LOGIN: "login",
  REGISTER: "register",
  RESET_PASSWORD: "reset-password",
  RESET_PASSWORD_CONFIRMATION: "reset-password-confirmation",
  SET_NEW_PASSWORD: "set-new-password",
  SET_NEW_PASSWORD_SUCCESSFUL: "set-new-password-successful",
  CONTENT_VIEW: "content-view",
  ADVANCED_STATISTICS_VIEW: "advanced-statistics-view",
  PLATFORM_VIEW: "platform"
};
export const ROUTES_MAPPING = {
  [ROUTES.HOME]: [],
  [ROUTES.HOME_ADMIN]: [],
  [ROUTES.HOME_DASHBOARD]: [],
  [ROUTES.CONTENT_MANAGEMENT]: [ROUTES.CONTENT_VIEW, ROUTES.PLATFORM_VIEW, ROUTES.ADVANCED_STATISTICS_VIEW],
  [ROUTES.BRAND_THEME]: [],
  [ROUTES.RECOMMENDATION]: [],
  [ROUTES.SETTINGS]: [],
  [ROUTES.SETTING]: [],
  [ROUTES.TASK]: [],
 
};



export default [
  {
    path: "/",
    name: ROUTES.HOME,
    component: HomeView,
    redirect: (to: RouteLocation) => {
      return { name: ROUTES.HOME_DASHBOARD };
    },
		beforeEnter: [mustBeLoggedIn],
    children: [
      {
        path: "/dashboard",
        name: ROUTES.HOME_DASHBOARD,
        component: HomePage,
        meta: {
          breadcrumbs: [ROUTES.HOME]
        }
      },
      {
        path: "/content-management",
        name: ROUTES.CONTENT_MANAGEMENT,
        component: ContentManagementView,
        meta: {
          breadcrumbs: [ROUTES.CONTENT_MANAGEMENT]
        },
        children: [
          
        ]
      },
      {
        path: "/content-management/:id",
        name: ROUTES.CONTENT_VIEW,
        component: ContentView,
        meta: {
          breadcrumbs: [ROUTES.CONTENT_MANAGEMENT, 'Details']
        }
      },
      {
        path: "/content-management/:id/statistics",
        name: ROUTES.ADVANCED_STATISTICS_VIEW,
        component: AdvanceStatisticsView,
        meta: {
          breadcrumbs: [ROUTES.CONTENT_MANAGEMENT, 'Details', 'Statistics']
        }
      },
      {
        path: "/content-management/platform",
        name: ROUTES.PLATFORM_VIEW,
        component: PlatformView,
        meta: {
          breadcrumbs: [ROUTES.CONTENT_MANAGEMENT, 'Platform']
        }
      },
      {
        path: "/brand-theme",
        name: ROUTES.BRAND_THEME,
        component: BrandTheme,
        meta: {
          breadcrumbs: [ROUTES.BRAND_THEME]
        }
      },
      {
        path: "/recommendation",
        name: ROUTES.RECOMMENDATION,
        component: Recommendation,
        meta: {
          breadcrumbs: [ROUTES.RECOMMENDATION]
        }
      },
      {
        path: "/settings",
        name: ROUTES.SETTINGS,
        component: Settings,
        meta: {
          breadcrumbs: [ROUTES.SETTINGS]
        }
      },
      {
        path: "/setting",
        name: ROUTES.SETTING,
        component: Setting,
        meta: {
          breadcrumbs: [ROUTES.SETTING]
        }
      },
      {
        path: "/task",
        name: ROUTES.TASK,
        component: Task,
        meta: {
          breadcrumbs: [ROUTES.TASK]
        }
      },

    ],
  },
  
  {
    path: "/component",
    name: ROUTES.COMPONENTS,
    component: ComponentsView,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
    redirect: (to: RouteLocation) => {
      return { name: ROUTES.LOGIN };
    },
    children: [
      {
        path: "login",
        name: ROUTES.LOGIN,
        component: LoginPage,
      },
      // {
      //   path: "register",
      //   name: ROUTES.REGISTER,
      //   component: RegisterPage,
      // },
      {
        path: "reset-password",
        name: ROUTES.RESET_PASSWORD,

        component: ForgotPassword,
      },
      {
        path: "reset-password-confirmation",
        name: ROUTES.RESET_PASSWORD_CONFIRMATION,

        component: ResetPasswordConfirmation,
      },
      {
        path: "set-new-password",
        name: ROUTES.SET_NEW_PASSWORD,
        component: SetNewPassword,
      },
      {
        path: "set-new-password-successful",
        name: ROUTES.SET_NEW_PASSWORD_SUCCESSFUL,
        component: SetPasswordSuccessful,
      },
    ],
  },
] as RouteRecordRaw[];
