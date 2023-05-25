<template>
  <div>
    <label
      :for="props.label"
      class="capitalize text-black-DEFAULT background-none"
      >{{ props.label }}</label
    >
    <VueDatePicker
      v-model="date"
      placeholder="Select date"
      class="placeholder:ps-3 placeholder:text-gray-70 rounded-none pt-2"
    ></VueDatePicker>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const props = defineProps({
  label: String,
});
const date = ref();
</script>
