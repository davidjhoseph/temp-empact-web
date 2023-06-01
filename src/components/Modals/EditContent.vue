<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translat e-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden bg-white px-4 pb-6 pt-5 text-start shadow-xl transition-all sm:w-full sm:max-w-xl sm:p-6 sm:h-screen"
            >
              <div>
                <div class="">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-80 capitalize"
                  >
                    <div class="flex justify-between">
                      <div class="text-black text-xl">Edit content</div>
                      <div>
                        <CloseIcon
                          @click="open = false"
                          class="cursor-pointer"
                        />
                      </div></div
                  ></DialogTitle>
                  <div class="">
                    <!-- <p class="text-sm capitalize text-gray-60">Description</p> -->
                    <form action="" class="pt-4">
                      <div class="grid gap-y-6">
                        <div>
                          <div class="mb-2">
                            <label for="title" class="text-black text-sm pb-2"
                              >Title</label
                            >
                          </div>
                          <input
                            type="text"
                            name=""
                            id=""
                            class="w-full focus:outline-none border border-gray-40 ps-4 placeholder:text-gray-70 placeholder:ps-2 rounded-md h-12"
                            placeholder="Enter a title"
                          />
                        </div>
                        <div class="">
                          <div class="mb-2">
                            <label
                              for="description"
                              class="capitalize text-black pb-2"
                              >content description</label
                            >
                          </div>
                          <textarea
                            name=""
                            id=""
                            cols=""
                            rows=""
                            class="w-full h-80 border border-gray-40 rounded-md pt-2 ps-4 focus:outline-none placeholder:text-gray-70 placeholder:ps-2 placeholder:pt-32"
                            placeholder="Enter details of this post"
                          ></textarea>
                        </div>
                        <div>
                          <div class="mb-2">
                            <label
                              for="media-type"
                              class="capitalize text-black pb-2"
                              >Media type</label
                            >
                          </div>
                          <select
                            name=""
                            id=""
                            class="border border-gray-40 w-full h-12 rounded-md focus:outline-none"
                          >
                            <option value=""></option>
                          </select>
                        </div>
                        <div>
                          <div class="mb-2">
                            <label for="media-url" class="text-black capitalize"
                              >Media URL</label
                            >
                          </div>
                          <input
                            type="text"
                            name=""
                            id=""
                            class="w-full focus:outline-none border border-gray-40 ps-4 rounded-md placeholder:text-gray-70 placeholder:ps-2 placeholder:pt-2 h-12"
                            placeholder="Paste URL to the media file"
                          />
                        </div>
                        <div>
                          <label for="upload-file" class="text-black capitalize"
                            >upload a file</label
                          >
                          <div
                            v-if="selectedFile"
                            class="flex space-s-2 mt-2 h-36 w-full bg-gray-20 rounded-md"
                          >
                            <input
                              id="file"
                              type="file"
                              ref="file"
                              hidden
                              @change="handleFileUpload"
                            />
                            <button
                              @click.prevent="attachFile"
                              class="w-full focus:outline-none rounded-md h-40"
                            >
                              <div
                                class="flex justify-between px-3 -mt-10 mb-4"
                              >
                                <div class="text-black-DEFAULT font-normal">
                                  {{ fileName }}
                                </div>
                                <div
                                  class="text-green font-normal text-sm"
                                  v-if="selectedFile"
                                >
                                  uploaded
                                </div>
                              </div>
                              <div
                                class="flex space-s-2 items-center px-3 py-1"
                              >
                                <UploadIcon class="text-blue" />
                                <p class="text-sm text-blue">
                                  select a different file
                                </p>
                              </div>
                              <div
                                class="text-gray-60 font-normal text-start ps-3"
                              >
                                JPG, PNG, less than 10MB
                              </div>
                            </button>
                          </div>
                          <div v-else class="flex space-s-2 bg mt-2">
                            <input
                              id="file"
                              type="file"
                              ref="file"
                              hidden
                              @change="handleFileUpload"
                            />
                            <button
                              @click.prevent="attachFile"
                              class="w-full focus:outline-none rounded-md h-40"
                            >
                              <div
                                class="flex space-s-2 items-center justify-center px-2 py-1"
                              >
                                <EditIcon class="text-gray-10" />
                                <p class="text-sm text-gray-10">select File</p>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div class="flex justify-between">
                          <div>
                            <button
                              class="text-gray-70 border rounded-md h-8 border-gray-40"
                            >
                              <p class="px-2">Cancel</p>
                            </button>
                          </div>
                          <div class="flex space-s-2">
                            <div>
                              <button
                                class="text-gray-70 border rounded-md h-8 border-red"
                              >
                                <p class="px-2 capitalize text-red">
                                  Delete Post
                                </p>
                              </button>
                            </div>
                            <div>
                              <button
                                class="bg-gray-20 text-gray-40 h-8 rounded-md"
                                disabled
                              >
                                <p class="px-2 capitalize text-white">
                                  save changes
                                </p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import CloseIcon from "../icons/CloseIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import UploadIcon from "../icons/UploadIcon.vue";
const selectedFile = ref(null);
const fileName = ref("");

const open = ref(true);
function attachFile() {
  document.getElementById("file")?.click();
}

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      selectedFile.value = reader.result as null;
      fileName.value = file.name;
      console.log(fileName);
    };
    reader.readAsDataURL(file);
  } else {
    selectedFile.value = null;
  }
};
const getfileName = computed(() => {});
</script>
<style scoped>
.bg {
  background-image: url("/images/Rectangle.png");
  background-size: cover;
}
</style>
