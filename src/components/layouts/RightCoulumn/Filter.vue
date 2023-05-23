<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold capitalize border border-gray-40 h-12"
      >
        <FilterIcon /> Filter by date
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
      <MenuItems class="absolute z-10 mt-4 w-80 rounded-md bg-white shadow-lg">
        <div class="flex items-center justify-between px-4 py-2">
          <div class="capitalize font-bold text-gray-80">Filter by date</div>
          <CloseIcon @click="open" class="cursor-pointer" />
        </div>
        <form action="" class="px-4 pb-4">
          <div class="pt-4">
            <div class="pb-2">
              <label
                for="Start date"
                class="capitalize text-black-DEFAULT text-sm"
                >Start Date</label
              >
            </div>
            <input
              type="datetime"
              class="border border-gray-40 relative h-10 w-full rounded-md pt-2"
              @click="open = !open"
            />
            <!-- <div v-if="open" class="absolute"><CalendarDate /></div> -->
            <div class="absolute text-gray-70 left-8 top-24">
              <div class="flex space-x-4 items-center">
                <Calendar class="" />
                <div>Start</div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <div class="pb-2">
              <label
                for="end-date"
                class="capitalize text-black-DEFAULT text-sm"
                >end date</label
              >
            </div>
            <input
              type="datetime"
              class="border border-gray-40 relative h-10 w-full rounded-md pt-2"
            />
            <div class="absolute text-gray-70 left-8 bottom-24">
              <div class="flex space-x-4 items-center">
                <Calendar class="" />
                <div>Start</div>
              </div>
            </div>
          </div>
          <div class="pt-10 flex justify-end space-x-4">
            <div>
              <button
                class="rounded-md border border-gray-40 h-8 capitalize text-gray-70"
              >
                <p class="px-2">cancel</p>
              </button>
            </div>
            <div>
              <button class="bg-blue text-white rounded-md h-8 capitalize">
                <p class="px-3">Apply Filter</p>
              </button>
            </div>
          </div>
        </form>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import Calendar from "../../icons/calendar.vue";
import FilterIcon from "../../icons/FilterIcon.vue";
import CloseIcon from "../../icons/CloseIcon.vue";
import CalendarDate from "../RightCoulumn/Calendar.vue";
const open = ref(false);
</script>
