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
            <DialogPanel class="relative flex flex-1 w-full max-w-xs mr-16">
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
                  class="absolute top-0 flex justify-center w-16 pt-5 left-full"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex flex-col px-6 pb-4 overflow-y-auto bg-gray-900 grow gap-y-5 ring-1 ring-white/10"
              >
                <div class="flex items-center h-16 shrink-0">
                  <img
                    class="w-auto h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <nav class="flex flex-col flex-1">
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
      <div class="flex flex-col px-6 pb-4 overflow-y-auto grow bg-blue-80">
        <div class="py-4">
          <img src="/images/logo-export.png" alt="" />
        </div>
        <div class="flex items-center h-16 shrink-0">
          <button
            class="flex w-full px-3 py-3 mt-4 space-x-4 border rounded-md"
          >
            <AvatarsSquare />
            <div class="flex flex-col text-start">
              <p class="text-sm text-white">Coca Cola</p>
              <div class="flex space-x-1">
                <p class="text-xs text-gray-60">Switch Brand</p>
                <ArrowDownIcon class="w-4 h-4 text-gray-60" />
              </div>
            </div>
          </button>
        </div>
        <nav class="flex flex-col flex-1">
          <div class="w-full my-6 space-y-4">
            <SingleNavLink title="Home" :route="ROUTES.HOME_DASHBOARD">
              <template #icon>
                <HomeIcon />
              </template>
            </SingleNavLink>
            <SingleNavLink title="Task" :route="ROUTES.TASK">
              <template #icon>
                <Person />
              </template>
            </SingleNavLink>
            <SingleNavLink
              title="Content Manager"
              :route="ROUTES.CONTENT_MANAGEMENT"
            >
              <template #icon>
                <HomeIcon />
              </template>
            </SingleNavLink>
            <SingleNavLink
              @click="isBrandThemeSelected = !isBrandThemeSelected"
              title="Brand Theme"
              :route="ROUTES.BRAND_THEME"
            >
              <template #icon>
                <HomeIcon />
              </template>
              <template #arrowIcon>
                <OutlineArrowDownIcon
                  class="w-4 h-4 transition-all ease-linear transform"
                  :class="{ 'rotate-180': !isBrandThemeSelected }"
                />
              </template>
            </SingleNavLink>
            <div
              class="ml-8 font-light transition-all duration-100 ease-linear transform text-gray-40 text-micro"
              :class="
                isBrandThemeSelected
                  ? 'h-[70px] opacity-100 pointer-events-auto'
                  : 'h-0 opacity-0 pointer-events-none'
              "
            >
              <div class="py-2 tracking-wider cursor-pointer">
                Content Manager
              </div>
              <div class="py-2 tracking-wider cursor-pointer">
                Theme Manager
              </div>
            </div>
            <!-- <SingleNavLink title="Settings" :route="ROUTES.SETTINGS">
              <template #icon>
                <SettingIcon />
              </template>
            </SingleNavLink> -->
            <SingleNavLink
              title="Recommendations"
              :route="ROUTES.RECOMMENDATION"
            >
              <template #icon>
                <RecommendationIcon />
              </template>
            </SingleNavLink>
            <SingleNavLink title="Settings" :route="ROUTES.SETTING">
              <template #icon>
                <SettingIcon />
              </template>
            </SingleNavLink>
          </div>
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
const isBrandThemeSelected = ref(false);
</script>
