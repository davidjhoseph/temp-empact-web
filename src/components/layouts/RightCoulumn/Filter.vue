<template>
  <Menu as="div" class="relative inline-block text-start">
    <div>
      <MenuButton
        class="inline-flex items-center justify-center w-40 h-12 py-2 text-sm font-semibold capitalize bg-white border gap-x-2 rounded-s-md rounded-e-md pe-3 ps-3 text-gray-70 border-gray-40"
      >
        <FilterIcon /> Filter by date
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute z-20 mt-4 w-82 rounded-s-md rounded-e-md bg-white shadow-lg"
      >
        <div class="flex items-center justify-between pt-2 ps-4 pe-4">
          <div class="font-bold capitalize text-gray-80">Filter by date</div>
          <CloseIcon @click="open = false" class="cursor-pointer" />
        </div>
        <form action="" class="pb-4 ps-4 pe-4">
          <CalendarDate label="start date" class="py-6" />
          <CalendarDate label="end date" />
          <div class="flex justify-end pt-10 space-s-4">
            <div>
              <button
                class="h-8 capitalize border rounded-s-md rounded-e-md border-gray-40 text-gray-70"
              >
                <p class="ps-2 pe-2">cancel</p>
              </button>
            </div>
            <div>
              <button
                class="h-8 text-white capitalize bg-blue rounded-s-md rounded-e-md"
              >
                <button class="ps-3 pe-3" @click="applyFilter">
                  Apply Filter
                </button>
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
const startDate = ref(null);
const endDate = ref(null);
const applyFilter = () => {
  if (startDate === startDate.value) {
    console.log(startDate);

    return contentList.value.filter((content) => {
      content.date === startDate;
    });
  }
};
const contentList = ref([
  {
    id: 1,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 2,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Video",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 3,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 4,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Text",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 5,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 6,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Text",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 7,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Video",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 8,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 9,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 10,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
  {
    id: 11,
    title: "This is the title of the post",
    desc: "Description text just long enough to make this two lines.",
    date: "Mar 20, 2023",
    time: "12:30 PM",
    imageText: "Text",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
]);
</script>
