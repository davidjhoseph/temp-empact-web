<template>
  <main class="px-4 py-10">
    <div class="sm:px-6 lg:px-6">
      <!-- Your content -->
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-bold text-black">
            10 [Holiday] Gifts for People Who Love Paintings
          </h1>
          <div class="flex items-center mt-4 space-s-4">
            <button class="h-6 rounded-md bg-green-10 text-green-70 w-14">
              <p class="px-2 text-sm text-center">Image</p>
            </button>
            <Ellipse />
            <p class="text-gray-60">March 20, 2023</p>
            <Ellipse />
            <p>12:30 PM</p>
          </div>
        </div>
        <div class="flex space-s-4">
          <button
            class="flex items-center w-auto px-2 border rounded-sm space-s-2 h-7 border-gray-60"
            @click="showModal = !showModal"
          >
            <EditIcon />
            <button class="text-sm text-gray-70">Edit</button>
            <EditContent v-if="showModal" />
          </button>
          <button
            class="flex items-center w-auto px-2 border rounded-sm space-s-2 h-7 border-gray-60"
            @click="openArchive = !openArchive"
          >
            <ArchiveIcon />
            <p class="text-sm text-gray-70">Archive</p>
          </button>
          <ArchiveContent v-if="openArchive" />

          <button
            class="flex items-center w-auto px-2 border rounded-sm space-s-2 h-7 border-red"
            @click="openDelete = !openDelete"
          >
            <DeleteIcon />
            <p class="text-sm text-red">Delete</p>
          </button>
          <DeleteContent v-if="openDelete" />
        </div>
      </div>
      <div class="flex mt-14 space-s-24">
        <div class="w-1/2">
          <p class="text-gray-80">
            Paintings are a form of visual art that have been around for
            centuries, and they continue to be a popular and powerful way of
            expressing ideas, emotions, and experiences. Paintings can vary
            greatly in style, subject matter, and technique, but they all have
            one thing in common: they are created by the application of paint or
            other pigments to a surface such as canvas, paper, or wood.
            Paintings can be realistic or abstract, figurative or landscape,
            still life or portrait, and they can be made using a variety of
            mediums, including oil, acrylic, watercolor, and gouache.
          </p>
          <br />
          <p class="pb-4 mt-4 text-gray-80">
            One of the most fascinating aspects of paintings is the way they can
            communicate complex ideas and emotions through color, composition,
            and form. A well-executed painting can evoke feelings of joy,
            sadness, awe, or contemplation, and it can transport the viewer to
            another time or place. Moreover, paintings can be appreciated on
            many levels, from the purely aesthetic to the intellectual and
            symbolic, making them a rich and rewarding art form for both artists
            and viewers alike.
          </p>
          <hr />
          <div class="flex mt-8 space-s-4">
            <div>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt=""
                class="w-12 h-12 rounded-full"
              />
            </div>
            <div class="grid">
              <div class="text-xs text-gray-60">Posted By</div>
              <div class="text-sm text-gray-80">David Green</div>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div>
            <img src="/images/Rectangle.png" alt="" class="w-full" />
          </div>
          <div class="flex mt-2 space-s-4">
            <img
              v-for="i in 4"
              :key="i"
              src="/images/Rectangle.png"
              alt=""
              class="w-20 h-12 rounded-md"
            />
            <button class="text-gray-60">+ 5 more</button>
          </div>
          <div class="flex justify-between mt-6">
            <div>
              <h2 class="text-xl font-bold text-black">Content Stats</h2>
            </div>
            <div class="flex items-center space-s-2">
              <a
                href="#"
                @click="
                  router.push({
                    path: `/content-management/${id}/statistics`,
                  })
                "
                >Advanced Stats</a
              >
              <ArrowRightIcon />
            </div>
          </div>
          <div class="flex justify-between mt-4 space-s-4">
            <div
              v-for="i in stats"
              :key="i.id"
              class="w-48 rounded-lg h-28 bg-blue-10"
            >
              <div class="flex flex-col items-start justify-center px-3 my-7">
                <h3 class="text-lg text-blue">{{ i.value }}</h3>
                <div class="flex items-center space-s-2">
                  <img :src="`/images/${i.icon}`" alt="" />
                  <p class="text-gray-60">{{ i.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ArrowRightIcon } from "../components/icons/AllIcons";
import EditIcon from "../components/icons/EditIcon.vue";
import ArchiveIcon from "../components/icons/Archive.vue";
import DeleteIcon from "../components/icons/DeleteIcon.vue";
import Ellipse from "../components/icons/Ellipse.vue";
import EditContent from "../components/Modals/EditContent.vue";
import DeleteContent from "../components/Modals/DeleteContent.vue";
import ArchiveContent from "../components/Modals/ArchiveContent.vue";

const router = useRouter();
const route = useRoute();
const showModal = ref(false);
const openDelete = ref(false);
const openArchive = ref(false);
const stats = ref([
  {
    id: 1,
    name: "Views",
    value: "150,397",
    icon: "EyeIcon.svg",
  },
  {
    id: 2,
    name: "Likes",
    value: "150,397",
    icon: "LoveIcon.svg",
  },
  {
    id: 3,
    name: "Shares",
    value: "150,397",
    icon: "ShareIcon.svg",
  },
]);
const id = route.params.id;
</script>
