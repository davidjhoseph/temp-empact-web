<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10 w-full" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300 all"
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
          class="flex items-end justify-end p-4 text-center sm:items-center sm:p-0"
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
              class="relative transform overflow-hidden bg-white px-4 pb-4 text-start shadow-xl transition-all sm:w-full sm:max-w-xl sm:p-6 sm:h-screen"
            >
              <div>
                <div class="">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-80 capitalize"
                  >
                    <div class="flex justify-between">
                      <div class="text-black-DEFAULT text-xl">
                        Create new content
                      </div>
                      <div>
                        <CloseIcon
                          @click="open = false"
                          class="cursor-pointer"
                        />
                      </div></div
                  ></DialogTitle>
                  <div class="">
                    <p class="text-sm capitalize text-gray-60">Description</p>
                    <form action="" class="pt-4">
                      <div class="grid gap-y-6">
                        <div>
                          <label for="title" class="text-black-DEFAULT text-sm"
                            >Title</label
                          >
                          <input
                            type="text"
                            name=""
                            id=""
                            class="w-full focus:outline-none border border-gray-40 placeholder:text-gray-70 placeholder:ps-3 rounded-md h-12"
                            placeholder="Enter a title"
                          />
                        </div>
                        <div class="">
                          <label for="description" class="capitalize text-black"
                            >content description</label
                          >
                          <textarea
                            name=""
                            id=""
                            cols=""
                            rows=""
                            class="w-full h-96 border border-gray-40 rounded-md focus:outline-none placeholder:text-gray-70 placeholder:ps-3 placeholder:pt-2"
                            placeholder="Enter details of this post"
                          ></textarea>
                        </div>
                        <div>
                          <label for="media-type" class="capitalize text-black"
                            >Media type</label
                          >
                          <select
                            name=""
                            id=""
                            class="border border-gray-40 w-full h-12 rounded-md focus:outline-none"
                          >
                            <option value=""></option>
                          </select>
                        </div>
                        <div>
                          <label for="media-url" class="text-black capitalize"
                            >Media URL</label
                          >
                          <input
                            type="text"
                            name=""
                            id=""
                            class="w-full focus:outline-none border border-gray-40 rounded-md placeholder:text-gray-70 placeholder:ps-3 placeholder:pt-2 h-12"
                            placeholder="Paste URL to the media file"
                          />
                        </div>
                        <div>
                          <label for="upload-file" class="text-black capitalize"
                            >upload a file</label
                          >
                          <div class="flex space-s-2">
                            <input
                              id="file"
                              type="file"
                              ref="file"
                              hidden
                              @change="handleUploadFile"
                            />
                            <button
                              @click.prevent="attachFile"
                              class="w-full focus:outline-none bg-gray-10 rounded-md placeholder:text-gray-70 placeholder:ps-3 placeholder:pt-2 h-32"
                            >
                              <div
                                class="flex space-s-2 items-center justify-center pe-2 ps-2 py-1"
                              >
                                <SelectFileIcon />
                                <p class="text-sm text-blue">select File</p>
                              </div>
                              <p class="text-gray-60 text-xs">
                                JPG, PNG, less than 10MB
                              </p>
                            </button>
                          </div>
                        </div>
                        <div class="flex justify-between">
                          <div>
                            <button
                              class="text-gray-70 border rounded-s-md round-e-md h-8 border-gray-40"
                            >
                              <p class="pe-2 ps-2">Cancel</p>
                            </button>
                          </div>
                          <div class="flex space-s-2">
                            <div>
                              <button
                                class="text-gray-70 border rounded-md h-8 border-gray-40"
                              >
                                <div class="flex space-s-2 items-center">
                                  <SaveIcon class="ms-3" />
                                  <p class="px-2 capitalize text-gray-70">
                                    Save as Draft
                                  </p>
                                </div>
                              </button>
                            </div>
                            <div>
                              <button class="bg-blue text-white h-8 rounded-md">
                                <p class="px-2 capitalize text-white">
                                  publish content
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
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import CloseIcon from "../icons/CloseIcon.vue";
import SelectFileIcon from "../icons/SelectFileIcon.vue";
import SaveIcon from "../icons/SaveIcon.vue";
const selectedFile = ref(null);

const open = ref(true);
function attachFile() {
  document.getElementById("file")?.click();
}
const handleUploadFile = (e: any) => {
  selectedFile.value = e.target.files[0];
  console.log(selectedFile);
  return selectedFile;
};
</script>
