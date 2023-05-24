<template>
  <main class="px-4 py-10">
    <div class="sm:px-6 lg:px-6">
      <!-- Your content -->
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-bold text-black">
            10 [Holiday] Gifts for People Who Love Paintings
          </h1>
          <div class="flex items-center mt-4 space-x-4">
            <button class="h-6 rounded-md bg-green-10 text-green-70 w-14">
              <p class="px-2 text-sm text-center">Image</p>
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
          <ArchiveContent v-if="openArchive" />

          <button
            class="flex space-x-2 items-center h-7 w-auto border rounded-sm border-red px-2"
            @click="openDelete = !openDelete"
          >
            <DeleteIcon />
            <p class="text-red text-sm">Delete</p>
          </button>
          <DeleteContent v-if="openDelete" />
        </div>
      </div>
      <div class="flex mt-14 space-x-72">
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
          <div class="flex mt-8 space-x-4">
            <div>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt=""
                class="w-12 h-12 rounded-full"
              />
            </div>
            <div class="grid">
              <div class="text-gray-60 text-xs">Posted By</div>
              <div class="text-gray-80 text-sm">David Green</div>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div>
            <img src="/images/Rectangle.png" alt="" class="w-full" />
          </div>
          <div class="flex mt-2 space-x-4">
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
            <div class="flex items-center space-x-2">
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
          <div class="flex justify-between mt-4">
            <div
              v-for="i in 3"
              :key="i"
              class="w-48 rounded-lg h-28 bg-blue-10"
            >
              <div class="flex flex-col items-center justify-center px-3 my-7">
                <h3 class="text-lg text-blue">150,397</h3>
                <div class="flex items-center space-x-2">
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
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ArrowRightIcon } from "../components/icons/AllIcons";
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
const showModal = ref(false);
const openDelete = ref(false);
const openArchive = ref(false);
const id = route.params.id;
</script>
