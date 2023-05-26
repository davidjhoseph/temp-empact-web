<template>
  <div>
    <div class="flex items-center justify-between px-5 pt-2">
      <div class="space-y-1">
        <h1 class="text-xl font-bold text-black capitalize">
          Customize brand theme
        </h1>
        <p class="text-gray-70">
          Make edits or changes that are consistent with your brand language
        </p>
      </div>

      <button class="bg-blue text-white w-36 rounded-md p-1.5">
        <div class="flex items-center justify-center gap-2">
          <SaveIcon class="w-4 h-4" />
          <p>Save Changes</p>
        </div>
      </button>
    </div>

    <div class="flex gap-3">
      <div class="flex flex-col w-4/6 gap-8 p-5 rounded-md">
        <div class="flex flex-col gap-5 p-5 border rounded-md">
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full"
            >
              <BrandIcon class="w-5 h-5 text-blue" />
            </div>
            <div>
              <h2 class="font-semibold text-black">Brand Logo</h2>
              <p class="text-sm text-gray-60">Change/Upload your brand logo</p>
            </div>
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full cursor-pointer"
            >
              <img
                v-if="previewImage"
                :src="previewImage"
                alt="Preview"
                class="mb-5 border rounded-md w-60 h-60"
              />
              <img
                v-else
                :src="previewImage"
                alt="Preview"
                class="mb-5 border rounded-md w-60 h-60"
              />

              <div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  @change="handleFileUpload"
                />
                <div class="flex gap-3 w-60">
                  <div
                    :class="
                      previewImage
                        ? 'w-2/3 flex justify-center items-center gap-2 text-gray-50 rounded-sm p-1 border border-gray-70 '
                        : `w-2/3 rounded-sm mx-auto flex justify-center items-center gap-2 border border-gray-70 `
                    "
                  >
                    <UploadIcon />
                    <span class="text-gray-50">Select Image</span>
                  </div>
                  <button
                    v-show="previewImage"
                    class="flex items-center justify-center w-1/3 gap-2 p-1 border rounded-sm border-red-70 text-red-50"
                  >
                    <TrashIcon class="w-4 h-4" />
                    <p class="text-sm" @click="deleteFile">Delete</p>
                  </button>
                </div>
              </div>

              <div
                class="flex flex-col items-center justify-center pb-6"
                v-show="previewImage.length == 0"
              >
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"></p>
                <p class="text-xs text-gray-60">JPG, PNG, less than 10MB</p>
              </div>
            </label>
          </div>
        </div>

        <div class="p-5 border rounded-md space-y-7">
          <div class="flex items-center gap-3 pb-2">
            <div
              class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full"
            >
              <ColorsIcon class="w-5 h-5 text-blue" />
            </div>
            <div>
              <h2 class="font-semibold text-black">Colors</h2>
              <p class="text-gray-60">Customize the colors of your brand</p>
            </div>
          </div>
          <div
            v-for="colorConfig in colorConfigs"
            :key="colorConfig.id"
            class="flex gap-5 p-5 border rounded-md"
          >
            <div class="flex flex-col">
              <h3 class="pb-3 text-lg font-bold text-black">
                {{ colorConfig.label }}
              </h3>
              <div
                class="w-32 h-32 border rounded-md"
                :style="{ backgroundColor: colorConfig.color }"
              ></div>
            </div>

            <div class="flex flex-col justify-between">
              <h3 class="mt-9 text-gray-50">Hex color</h3>
              <div>
                <input
                  v-model="colorConfig.input"
                  class="w-56 p-1 border rounded-md"
                  placeholder="Enter a color value (hex, RGB, or HSL)"
                  @input="updateColor(colorConfig)"
                />
              </div>
              <div class="flex gap-2">
                <button
                  class="border text-gray-60 p-1.5 w-1/3 rounded-md"
                  @click="resetColor(colorConfig)"
                >
                  Reset
                </button>
                <button
                  class="border p-1.5 w-2/3 rounded-md bg-blue text-white"
                >
                  Custom Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col w-2/6 gap-8 p-5 mt-3 border rounded-md bg-gray-10 h-1/2"
      >
        <h2 class="text-2xl font-bold text-center text-black">App Preview</h2>
        <div class="mx-auto mt-2">
          <img src="/images/iphone.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, Ref } from "vue";
import UploadIcon from "../components/icons/UploadIcon.vue";
import TrashIcon from "../components/icons/TrashIcon.vue";
import SaveIcon from "../components/icons/SaveIcon.vue";
import { ColorsIcon, BrandIcon } from "../components/icons/AllIcons";

import previewimage from '../../public/images/preview.png'

const previewImage = ref("");

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.value = "";
  }
};

const deleteFile = () => {
  previewImage.value = "";
};

interface ColorConfig {
  id: number;
  label: string;
  input: string;
  color: string;
}

const colorConfigs: Ref<ColorConfig[]> = ref([
  { id: 1, label: "Primary Color", input: "", color: "" },
  { id: 2, label: "Secondary Color", input: "", color: "" },
  { id: 3, label: "Text Color", input: "", color: "" },
]);

const updateColor = (colorConfig: ColorConfig) => {
  const input = colorConfig.input.trim();
  // Check if the input is a valid hex, RGB, or HSL color
  if (
    input.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) ||
    input.match(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/) ||
    input.match(/^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/)
  ) {
    colorConfig.color = input;
  } else {
    colorConfig.color = "";
  }
};

const resetColor = (colorConfig: ColorConfig) => {
  colorConfig.input = "";
  colorConfig.color = "";
};
</script>

<style scoped>
.color-picker__input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
