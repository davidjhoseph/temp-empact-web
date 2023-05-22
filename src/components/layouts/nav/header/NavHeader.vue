<template>
  <div class="flex items-center justify-between px-6 shadow">
    <div class="flex items-center space-x-5">
      <div
        class="border-2 rounded-full h-6 w-6 mt-2 border-gray-60 flex justify-center items-center"
      >
        <Vector class="items-center px-1 h-6 w-6" />
      </div>
      <div class="h-5">
        <a href="#" class="text-gray-60 text-base"> Community</a>
      </div>
      <div class="h-5 w-5 flex justify-center items-center">
        <ArrowRightIcon class="h-3.5 w-3.5 items-center mt-0.5" />
      </div>
      <div class="h-5">
        <a href="" class="text-base text-blue">Content Manager</a>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <div class="text-right">
        <div class="text-black font-medium text-micro">David Carrasco</div>
        <div class="text-gray-60 text-nano">davidcarrasco@mail.com</div>
      </div>
      <div class="w-14 h-14">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="user image"
          class="w-full h-full"
        />
      </div>
      <button>
        <ArrowDownIcon class="w-8 h-8 text-gray-60" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowDownIcon, Vector, ArrowRightIcon } from "../../../icons/AllIcons";
</script>
