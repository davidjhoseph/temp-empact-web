<template>
  <div class="px-6 py-10 w-full overflow-y-auto">
    <div v-if="getContentList()">
      <component :is="tabs[currentTab as keyof typeof tabs]"></component>
    </div>
    <div class="flex justify-center items-center h-96" v-else>
      <div class="items-center">
        <p class="text-base text-black text-center">No Content Yet</p>
        <br />
        <p class="text-gray-60 text-center">
          <small>You haven’t created any content yet</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import GridContentView from "../../GridContentView.vue";
import ListContentView from "../../ListContentView.vue";
const contentList = reactive([
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
    imageText: "Image",
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
    imageText: "Image",
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
    imageText: "Image",
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
    imageText: "Image",
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
    imageText: "Image",
    image: "image.png",
    likes: "500",
    favourite: "5,126",
    view: false,
  },
]);
const getContentList = () => {
  if (contentList.length > 0) {
    return contentList;
  } else if ((contentList.length = 0)) {
    return;
  }
};
const tabs = reactive({
  GridContentView,
  ListContentView,
});
const currentTab = ref("ListContentView");
</script>
<style>
.active {
  color: #2c79ec !important;
}
</style>
