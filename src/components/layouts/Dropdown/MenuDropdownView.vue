<template>
  <div class="grid gap-y-2 bg-white shadow-lg py-4">
    <button class="flex space-s-2 items-center ps-2">
      <EditIcon />
      <button @click="showModal = !showModal" class="text-gray-70 text-sm">
        Edit
      </button>
      <!-- <EditContent v-if="showModal" /> -->
    </button>
    <button
      class="flex space-s-2 items-center ps-2"
      @click="openArchive = !openArchive"
    >
      <ArchiveIcon />
      <p class="text-gray-70 text-sm">Archive</p>
    </button>
    <!-- <ArchiveContent v-if="openArchive" /> -->

    <button
      class="flex space-s-2 items-center px-2"
      @click="openDelete = !openDelete"
    >
      <DeleteIcon />
      <p class="text-red text-sm">Delete</p>
    </button>
    <!-- <DeleteContent v-if="openDelete" /> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import EditIcon from "../../icons/EditIcon.vue";
import ArchiveIcon from "../../icons/Archive.vue";
import DeleteIcon from "../../icons/DeleteIcon.vue";
const showModal = ref(false);
const openDelete = ref(false);
const openArchive = ref(false);
</script>
