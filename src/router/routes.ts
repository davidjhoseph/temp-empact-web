import type { RouteLocation, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import AdminView from "../views/AdminView.vue";
import ComponentsView from "../views/ComponentsView.vue";
import ContentManagementView from "../views/ContentManagementView.vue";
import AuthView from "../views/auth/AuthView.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
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
export const ROUTES = {
  HOME: "home",
  HOME_ADMIN: "home-admin",
  HOME_DASHBOARD: "home-dashboard",
  CONTENT_MANAGEMENT: "content-management",
  BRAND_THEME: "board-team",
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
  CONTENT_VIEW: "content-view"
};

export default [
  {
    path: "/",
    name: ROUTES.HOME,
    component: HomeView,
    redirect: (to: RouteLocation) => {
      return { name: ROUTES.HOME_DASHBOARD };
    },
    children: [
      {
        path: "/dashboard",
        name: ROUTES.HOME_DASHBOARD,
        component: HomePage,
      },
      {
        path: "/content-management",
        name: ROUTES.CONTENT_MANAGEMENT,
        component: ContentManagementView,
      },

      {
        path: "/brand-theme",
        name: ROUTES.BRAND_THEME,
        component: BrandTheme,
      },
      {
        path: "/recommendation",
        name: ROUTES.RECOMMENDATION,
        component: Recommendation,
      },
      {
        path: "/settings",
        name: ROUTES.SETTINGS,
        component: Settings,
      },
      {
        path: "/setting",
        name: ROUTES.SETTING,
        component: Setting,
      },
      {
        path: "/task",
        name: ROUTES.TASK,
        component: Task,
      },

    ],
  },
  {
    path: "/content-management/:id",
    name: ROUTES.CONTENT_VIEW,
    component: ContentView
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
      {
        path: "register",
        name: ROUTES.REGISTER,
        component: RegisterPage,
      },
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
