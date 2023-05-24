<template>
  <FullPrimarySidebar>
    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex justify-between h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-10"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex items-center space-x-2">
          <div
            class="border-2 rounded-full h-6 w-6 mt-2 border-gray-60 flex justify-center items-center"
          >
            <Vector class="items-center px-1 h-6 w-6" />
          </div>
          <div class="h-5">
            <a href="#" class="text-gray-60 text-base"> Community</a>
          </div>
          <div class="h-5 w-5 flex justify-center items-center">
            <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
          </div>
          <div class="h-5">
            <a href="" class="text-base text-gray-60">Content Manager</a>
          </div>
          <div class="h-5 w-5 flex justify-center items-center">
            <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
          </div>
          <div class="h-5">
            <a href="" class="text-base text-blue">Content</a>
          </div>
        </div>
        <!-- Profile dropdown -->
        <Menu as="div" class="relative">
          <MenuButton class="-m-1.5 flex items-center p-1.5">
            <span class="sr-only">Open user menu</span>
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <div class="text-black font-medium text-micro">
                  David Carrasco
                </div>
                <div class="text-gray-60 text-nano">davidcarrasco@mail.com</div>
              </div>
              <div class="w-14 h-14">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe"
                  alt="user image"
                  class="w-full h-full"
                />
              </div>
              <button>
                <ArrowDownIcon class="w-8 h-8 text-gray-60" />
              </button>
            </div>
          </MenuButton>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
            >
              <MenuItem
                v-for="item in userNavigation"
                :key="item.name"
                v-slot="{ active }"
              >
                <a
                  :href="item.href"
                  :class="[
                    active ? 'bg-gray-50' : '',
                    'block px-3 py-1 text-sm leading-6 text-gray-900',
                  ]"
                  >{{ item.name }}</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <main class="py-10 px-4">
        <div class="sm:px-6 lg:px-6">
          <!-- Your content -->
          <div class="flex justify-between">
            <div>
              <h1 class="text-3xl text-black font-bold">
                10 [Holiday] Gifts for People Who Love Paintings
              </h1>
              <div class="flex items-center mt-4 space-x-4">
                <button class="bg-green-10 text-green-70 h-6 w-14 rounded-md">
                  <p class="text-center text-sm px-2">Image</p>
                </button>
                <Ellipse />
                <p class="text-gray-60">March 20, 2023</p>
                <Ellipse />
                <p>12:30 PM</p>
              </div>
            </div>
            <div class="flex space-x-4">
              <button
                class="flex space-x-2 items-center h-7 w-auto border rounded-sm border-gray-60 px-2"
              >
                <EditIcon />
                <button
                  @click="showModal = !showModal"
                  class="text-gray-70 text-sm"
                >
                  Edit
                </button>
                <EditContent v-if="showModal" />
              </button>
              <button
                class="flex space-x-2 items-center h-7 w-auto border rounded-sm border-gray-60 px-2"
                @click="openArchive = !openArchive"
              >
                <ArchiveIcon />
                <p class="text-gray-70 text-sm">Archive</p>
              </button>
              <button
                class="flex space-x-2 items-center h-7 w-auto border rounded-sm border-red px-2"
                @click="openDelete = !openDelete"
              >
                <DeleteIcon />
                <p class="text-red text-sm">Delete</p>
              </button>
            </div>
            <DeleteContent v-if="openDelete" />
            <ArchiveContent v-if="openArchive" />
          </div>
          <div class="mt-14 flex space-x-72">
            <div class="w-1/2">
              <p class="text-gray-80">
                Paintings are a form of visual art that have been around for
                centuries, and they continue to be a popular and powerful way of
                expressing ideas, emotions, and experiences. Paintings can vary
                greatly in style, subject matter, and technique, but they all
                have one thing in common: they are created by the application of
                paint or other pigments to a surface such as canvas, paper, or
                wood. Paintings can be realistic or abstract, figurative or
                landscape, still life or portrait, and they can be made using a
                variety of mediums, including oil, acrylic, watercolor, and
                gouache.
              </p>
              <br />
              <p class="text-gray-80 pb-4 mt-4">
                One of the most fascinating aspects of paintings is the way they
                can communicate complex ideas and emotions through color,
                composition, and form. A well-executed painting can evoke
                feelings of joy, sadness, awe, or contemplation, and it can
                transport the viewer to another time or place. Moreover,
                paintings can be appreciated on many levels, from the purely
                aesthetic to the intellectual and symbolic, making them a rich
                and rewarding art form for both artists and viewers alike.
              </p>
              <hr />
              <div class="flex space-x-4 mt-8">
                <div>
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe"
                    alt=""
                    class="h-12 w-12"
                  />
                </div>
                <div class="flex flex-col">
                  <p><smaall>Posted By</smaall></p>
                  <p><small>David Green</small></p>
                </div>
              </div>
            </div>
            <div class="w-1/2">
              <div>
                <img
                  src="../assets/images/Rectangle.png"
                  alt=""
                  class="w-full"
                />
              </div>
              <div class="flex space-x-4 mt-2">
                <img
                  v-for="i in 4"
                  :key="i"
                  src="../assets/images/Rectangle.png"
                  alt=""
                  class="w-20 h-12 rounded-md"
                />
                <button class="text-gray-60">+ 5 more</button>
              </div>
              <div class="mt-6 flex justify-between">
                <div>
                  <h2 class="text-black font-bold text-xl">Content Stats</h2>
                </div>
                <div class="flex space-x-2 items-center">
                  <a
                    href="#"
                    @click="
                      router.push({
                        path: `/content-management/${id}/statistics`,
                      })
                    "
                    >Advanced Stats</a
                  ><ArrowRightIcon />
                </div>
              </div>
              <div class="mt-4 flex justify-between">
                <div
                  v-for="i in 3"
                  :key="i"
                  class="h-28 w-48 bg-blue-10 rounded-lg"
                >
                  <div
                    class="my-7 px-3 flex flex-col items-center justify-center"
                  >
                    <h3 class="text-blue text-lg">150,397</h3>
                    <div class="flex space-x-2 items-center">
                      <EyeIcon />
                      <p class="text-gray-60">View</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </FullPrimarySidebar>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import FullPrimarySidebar from "../components/layouts/nav/sidebar/FullPrimarySidebar.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useRouter, useRoute } from "vue-router";
import { ArrowRightIcon, Vector } from "../components/icons/AllIcons";
import EyeIcon from "../components/icons/eyeIcon.vue";
import EditIcon from "../components/icons/EditIcon.vue";
import ArchiveIcon from "../components/icons/Archive.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";
import Ellipse from "../components/icons/Ellipse.vue";
import EditContent from "../components/Modals/EditContent.vue";
import DeleteContent from "../components/Modals/DeleteContent.vue";
import ArchiveContent from "../components/Modals/ArchiveContent.vue";
const router = useRouter();
const route = useRoute();
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
const sidebarOpen = ref(false);
const showModal = ref(false);
const openDelete = ref(false);
const openArchive = ref(false);
const id = route.params.id;
const statistics = route.params.statistics;
</script>
