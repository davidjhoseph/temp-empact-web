<template>
  <div>
    <BrandModal @closeModal="close" :open="open" />
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
            <DialogPanel class="relative flex flex-1 w-full max-w-xs me-16">
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
              <div
                class="flex flex-col px-6 pb-4 overflow-y-auto bg-gray-900 grow gap-y-5 ring-1 ring-white/10"
              >
                <div class="flex items-center h-16 shrink-0 mt-4">
                  <div class="py-4">
                    <img src="/images/logo-export.png" alt="" />
                  </div>
                </div>
                <div class="flex items-center h-16 shrink-0">
                  <button
                    class="flex w-full py-3 mt-4 border rounded-md ps-3 pe-s space-s-4"
                    @click="open = true"
                  >
                    <div class="w-16 h-12 rounded overflow-clip">
                      <img
                        :src="selectedBrand?.brand_logo"
                        class="object-cover w-full h-full"
                      />
                    </div>
                    <div class="flex flex-col text-start">
                      <p class="text-sm text-white">
                        {{ selectedBrand?.actualName }}
                      </p>
                      <div class="flex space-s-1">
                        <p class="text-xs text-gray-60">Switch Brand</p>
                        <ArrowDownIcon class="w-4 h-4 text-gray-60" />
                      </div>
                    </div>
                  </button>
                </div>
                <nav class="flex flex-col flex-1">
                  <ul role="list" class="space-y-1 -ms-2 -me-2">
                    <li>
                      <SingleNavLink
                        title="Home"
                        :route="ROUTES.HOME_DASHBOARD"
                      >
                        <template #icon>
                          <HomeIcon />
                        </template>
                      </SingleNavLink>
                    </li>
                    <li>
                      <SingleNavLink title="Task" :route="ROUTES.TASK">
                        <template #icon>
                          <Person />
                        </template>
                      </SingleNavLink>
                    </li>
                    <li>
                      <SingleNavLink
                        title="Content Manager"
                        :route="ROUTES.CONTENT_MANAGEMENT"
                      >
                        <template #icon>
                          <HomeIcon />
                        </template>
                      </SingleNavLink>
                    </li>
                    <li>
                      <SingleNavLink
                        @click="isBrandThemeSelected = !isBrandThemeSelected"
                        title="Brand Theme"
                        :route="ROUTES.BRAND_THEME"
                      >
                        <template #icon>
                          <HomeIcon />
                        </template>
                        <!-- <template #arrowIcon>
                          <OutlineArrowDownIcon
                            class="w-4 h-4 transition-all ease-linear transform"
                            :class="{ 'rotate-180': !isBrandThemeSelected }"
                          />
                        </template> -->
                      </SingleNavLink>
                      <!-- <div
                        class="font-light transition-all duration-100 ease-linear transform ms-8 text-gray-40 text-micro"
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
                      </div> -->
                    </li>
                    <li>
                      <SingleNavLink
                        title="Recommendations"
                        :route="ROUTES.RECOMMENDATION"
                      >
                        <template #icon>
                          <RecommendationIcon />
                        </template>
                      </SingleNavLink>
                    </li>
                    <li>
                      <SingleNavLink title="Settings" :route="ROUTES.SETTING">
                        <template #icon>
                          <SettingIcon />
                        </template>
                      </SingleNavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <button
      type="button"
      class="-m-2.5 p-2.5 text-gray-700 lg:hidden absolute top-5"
      @click="sidebarOpen = true"
    >
      <span class="sr-only">Open sidebar</span>
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
    </button>

    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <div class="flex flex-col px-6 pb-4 overflow-y-auto grow bg-blue-80">
        <div class="py-4">
          <img src="/images/logo-export.png" alt="" />
        </div>
        <div class="flex items-center h-16 shrink-0">
          <button
            class="flex w-full py-3 mt-4 border rounded-md ps-3 pe-s space-s-4"
            @click="open = true"
          >
            <div class="w-16 h-12 rounded overflow-clip">
              <img
                :src="selectedBrand?.brand_logo"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="flex flex-col text-start">
              <p class="text-sm text-white">{{ selectedBrand?.actualName }}</p>
              <div class="flex space-s-1">
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
                <!-- <OutlineArrowDownIcon
                  class="w-4 h-4 transition-all ease-linear transform"
                  :class="{ 'rotate-180': !isBrandThemeSelected }"
                /> -->
              </template>
            </SingleNavLink>
            <!-- <div
              class="font-light transition-all duration-100 ease-linear transform ms-8 text-gray-40 text-micro"
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
            </div> -->
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
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ROUTES } from "../../../../router/routes";
import SingleNavLink from "./SingleNavLink.vue";
import BrandModal from "../../../../components/common/auth/BrandModal.vue";
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
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import { useAuthStore } from "../../../../store/auth";

const authStore = useAuthStore();
const open = ref(false);

const close = () => {
  open.value = false;
};
const sidebarOpen = ref(false);
const isBrandThemeSelected = ref(false);
const selectedBrand = computed(() => authStore.selectedBrand);
</script>
