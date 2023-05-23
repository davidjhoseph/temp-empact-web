<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="-mx-2 space-y-1"></ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col overflow-y-auto bg-blue-80 px-6 pb-4">
        <div class="py-4">
          <img src="/images/logo-export.png" alt="" />
        </div>
        <div class="flex h-16 shrink-0 items-center">
          <button
            class="flex space-x-4 border rounded-md px-3 py-3 mt-4 w-full"
          >
            <AvatarsSquare />
            <div class="flex flex-col text-start">
              <p class="text-sm text-white">Coca Cola</p>
              <div class="flex space-x-1">
                <p class="text-xs text-gray-60">Switch Brand</p>
                <ArrowDownIcon class="h-4 w-4 text-gray-60" />
              </div>
            </div>
          </button>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li>
                  <div class="my-6">
                    <SingleNavLink title="Home" :route="ROUTES.HOME_DASHBOARD">
                      <template #icon><HomeIcon /></template>
                    </SingleNavLink>
                    <SingleNavLink title="Task" :route="ROUTES.TASK">
                      <template #icon><Person /></template>
                    </SingleNavLink>
                    <SingleNavLink
                      title="Content Manager"
                      :route="ROUTES.CONTENT_MANAGEMENT"
                    >
                      <template #icon><HomeIcon /></template>
                    </SingleNavLink>
                    <SingleNavLink
                      title="Brand Theme"
                      :route="ROUTES.BRAND_THEME"
                    >
                      <template #icon> <HomeIcon /></template>
                      <template #arrowIcon>
                        <OutlineArrowDownIcon class="w-4 h-4" />
                      </template>
                    </SingleNavLink>
                    <SingleNavLink title="Settings" :route="ROUTES.SETTINGS">
                      <template #icon><SettingIcon /></template>
                    </SingleNavLink>
                    <SingleNavLink
                      title="Recommendations"
                      :route="ROUTES.RECOMMENDATION"
                    >
                      <template #icon><RecommendationIcon /></template>
                    </SingleNavLink>
                    <SingleNavLink title="Settings" :route="ROUTES.SETTING">
                      <template #icon><SettingIcon /></template>
                    </SingleNavLink>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ROUTES } from "../../../../router/routes";
import SingleNavLink from "./SingleNavLink.vue";
import { ArrowRightIcon, Vector } from "../../../icons/AllIcons";
import {
  HomeIcon,
  Person,
  RecommendationIcon,
  SettingIcon,
  ArrowDownIcon,
  AvatarsSquare,
  OutlineArrowDownIcon,
} from "../../../icons/AllIcons";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
</script>
