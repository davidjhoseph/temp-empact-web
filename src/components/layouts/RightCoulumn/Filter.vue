<template>
  <div class="flex">
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 sm:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Filters -->
              <form class="">
                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.name"
                  class="border-t border-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    >
                      <span class="font-medium text-gray-900">{{
                        section.name
                      }}</span>
                      <span class="ml-6 flex items-center">
                        <ChevronDownIcon
                          :class="[
                            open ? '-rotate-180' : 'rotate-0',
                            'h-5 w-5 transform',
                          ]"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`filter-mobile-${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          :for="`filter-mobile-${section.id}-${optionIdx}`"
                          class="ml-3 text-sm text-gray-500"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <section aria-labelledby="filter-heading" class="mt-2">
      <!-- <div class="flex items-center justify-between"> -->
      <Menu
        as="div"
        class="relative inline-block text-left px-4 py-3 border border-gray-40 rounded-md h-12 w-40"
      >
        <div class="flex items-center space-x-2">
          <FilterIcon />

          <MenuButton
            class="group inline-flex justify-center text-sm font-medium text-gray-70"
          >
            Filter By Date
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute left-0 z-10 mt-5 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem>
                <div class="">
                  <div class="flex justify-between">
                    <p>Filter</p>
                    <button>X</button>
                  </div>
                </div>
              </MenuItem>
              <!-- <MenuItem
                v-for="option in sortOptions"
                :key="option"
                v-slot="{ active }"
              >
                <a
                  :href="option.href"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm font-medium text-gray-900',
                  ]"
                  >{{ option.name }}</a
                >
              </MenuItem> -->
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <!-- </div> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import FilterIcon from "../../icons/FilterIcon.vue";
const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "hats", label: "Hats" },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "clothing-company", label: "Clothing Company" },
      { value: "fashion-inc", label: "Fashion Inc." },
      { value: "shoes-n-more", label: "Shoes 'n More" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
    ],
  },
];

const open = ref(false);
</script>
