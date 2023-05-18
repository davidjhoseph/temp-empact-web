<template>
  <div class="text-white bg-blue-80 py-6 px-4 h-full">
    <img src="/public/images/logo-export.png" alt="" />
    <button class="flex space-x-4 border rounded-md px-3 py-3 mt-4 w-full">
      <AvatarsSquare />
      <div class="flex flex-col text-start">
        <p class="text-sm">Coca Cola</p>
        <div class="flex space-x-1">
          <p class="text-xs">Switch Brand</p>
          <ArrowDownIcon class="h-3 w-3" />
        </div>
      </div>
    </button>
    <div class="my-6">
      <SingleNavLink title="Home" :route="ROUTES.HOME_DASHBOARD">
        <template #icon><HomeIcon /></template>
      </SingleNavLink>
      <SingleNavLink title="Task" :route="ROUTES.TASK">
        <template #icon><Person /></template>
      </SingleNavLink>
      <SingleNavLink title="Content Manager" :route="ROUTES.CONTENT_MANAGEMENT">
        <template #icon><Person /></template>
      </SingleNavLink>
      <SingleNavLink title="BrandTheme" :route="ROUTES.BRAND_THEME">
        <template #icon> <HomeIcon /></template>
        <template #arrowIcon>
          <ArrowDownIcon class="w-4 h-4" />
        </template>
      </SingleNavLink>
      <SingleNavLink title="Settings" :route="ROUTES.SETTINGS">
        <template #icon><SettingIcon /></template>
      </SingleNavLink>
      <SingleNavLink title="Recommendations" :route="ROUTES.RECOMMENDATION">
        <template #icon><RecommendationIcon /></template>
      </SingleNavLink>
      <SingleNavLink title="Settings" :route="ROUTES.SETTING">
        <template #icon><SettingIcon /></template>
      </SingleNavLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ROUTES } from "../../../../router/routes";
import SingleNavLink from "./SingleNavLink.vue";
import {
  ArrowDownIcon,
  AvatarsSquare,
  ChevronRightIcon,
} from "../../../icons/AllIcons";
import {
  HomeIcon,
  Person,
  RecommendationIcon,
  SettingIcon,
} from "../../../icons/AllIcons";
</script>
