<template>
  <!-- <div class=""> -->
  <!-- Mobile filter dialog -->
  <!-- <TransitionRoot as="template" :show="open">
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
        <div class="fixed inset-0 bg-black bg-opacity-25" />
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
              <button
                type="button"
                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2"
                @click="open = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <form class="mt-4">
              <Disclosure
                as="div"
                class="border-gray-30 px-4"
                v-slot="{ open }"
              >
                <h3 class="-mx-2 -my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-80"
                  >
                    <span><FilterIcon /></span>
                    <span class="font-medium text-gray-900">
                      Filter by date
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6"> </DisclosurePanel>
              </Disclosure>
            </form>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot> -->

  <section aria-labelledby="filter-heading" class="py-6">
    <div class="flex items-center justify-between">
      <Menu as="div" class="relative inline-block text-left"> </Menu>

      <!-- <button
        type="button"
        class="inline-block text-sm font-medium text-gray-80 sm:hidden"
        @click="open = true"
      >
        Filters
      </button> -->
      <!-- <div class="flex items-center justify-between"> -->
      <Menu as="div" class="relative -mt-4">
        <div class="h-12 border border-gray-30 rounded-md w-40">
          <MenuButton
            class="flex justify-center items-center space-x-2 text-base px-4 py-2.5 font-medium text-gray-80"
          >
            <FilterIcon />
            <p>Filter by date</p>
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
            class="absolute left-0 z-10 mt-0 w-80 origin-top-left rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <div class="px-4">
                  <div class="flex justify-between py-4">
                    <p class="capitalize, font-bold text-lg text-gray-80">
                      Filter by date
                    </p>
                    <button><CloseIcon /></button>
                  </div>

                  <form action="">
                    <div>
                      <label for="Start_date" class="capitalize text-gray-80">
                        Start date</label
                      >
                      <input
                        type="datetime"
                        class="relative w-full h-12 placeholder:pl-12 placeholder:text-gray-50 border border-gray-60 rounded-md mt-3"
                        placeholder="Select date"
                      />
                      <div class="absolute top-28 left-6">
                        <Calendar class="h-6 w-6" />
                      </div>
                    </div>
                    <div class="pt-4">
                      <label for="Start_date" class="capitalize text-gray-80">
                        end date</label
                      >
                      <input
                        type="datetime"
                        class="relative w-full h-12 placeholder:pl-12 placeholder:text-gray-50 border border-gray-60 rounded-md mt-3"
                        placeholder="Select date"
                      />
                      <div class="absolute bottom-20 left-6">
                        <Calendar class="h-6 w-6" />
                      </div>
                    </div>
                    <div class="flex justify-end space-x-2 py-4">
                      <div>
                        <button
                          class="capitalize border border-gray-40 text-gray-70 rounded-md h-8"
                        >
                          <p class="px-2">Cancel</p>
                        </button>
                      </div>
                      <div>
                        <button
                          class="capitalize text-white bg-blue rounded-md h-8"
                        >
                          <p class="px-4">Apply Filter</p>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <!-- </div> -->
  </section>
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
import CloseIcon from "../../icons/CloseIcon.vue";
import Calendar from "../../icons/calendar.vue";

const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
];
// const filters = [
// {
//   id: "category",
//   name: "Category",
//   options: [
//     { value: "tees", label: "Tees" },
//     { value: "crewnecks", label: "Crewnecks" },
//     { value: "hats", label: "Hats" },
//   ],
// },
// {
//   id: "brand",
//   name: "Brand",
//   options: [
//     { value: "clothing-company", label: "Clothing Company" },
//     { value: "fashion-inc", label: "Fashion Inc." },
//     { value: "shoes-n-more", label: "Shoes 'n More" },
//   ],
// },
// {
//   id: "color",
//   name: "Color",
//   options: [
//     { value: "white", label: "White" },
//     { value: "black", label: "Black" },
//     { value: "grey", label: "Grey" },
//   ],
// },
// {
//   id: "sizes",
//   name: "Sizes",
//   options: [
//     { value: "s", label: "S" },
//     { value: "m", label: "M" },
//     { value: "l", label: "L" },
//   ],
// },
// ];

const open = ref(false);
</script>
