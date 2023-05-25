<template>
    <div>
        <div class="flex items-center justify-between">
            <div class="text-black text-body font-bold">Table Title</div>
            <div class="flex items-center space-s-6">
                <div class="border pe-2 rounded">
                    <select class="px-2 bg-transparent text-gray-70 py-1">
                        <option class="text-gray-70">Sort</option>
                    </select>
                </div>
                <BaseInput placeholder="Search" small icon>
                    <template #icon>
			            <SearchIcon class="h-5 w-5 text-gray-70" />
                    </template>
                </BaseInput>
            </div>
        </div>
        <div class="w-full border rounded-tr-md rounded-tl-md border-gray-30 mt-6 overflow-clip">
            <div class="bg-gray-20 py-3 flex items-center">
                <div class="w-10 mt-2 px-4">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div class="text-gray-70 font-medium text-caption flex-1 flex items-center justify-between px-3">
                    <div>Info</div>
                    <ChevronIcon class="w-5 h-5" />
                </div>
                <div class="text-gray-70 font-medium text-caption flex-1 flex items-center justify-between px-3">
                    <div>Email</div>
                    <ChevronIcon class="w-5 h-5" />
                </div>
                <div class="text-gray-70 font-medium text-caption flex-1 flex items-center justify-between px-3">
                    <div>Range</div>
                    <ChevronIcon class="w-5 h-5" />
                </div>
                <div class="text-gray-70 font-medium text-caption flex-1 flex items-center justify-between px-3">
                    <div>Date</div>
                    <ChevronIcon class="w-5 h-5" />
                </div>
                <div class="w-10 mt-2 pe-4">
                    <MoreIcon class="w-5 h-5 text-black" />
                </div>
            </div>
            <div class="py-3 flex items-center">
                <div class="w-10 mt-2 px-4">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div class="flex-1 flex items-center px-3 space-s-3">
                    <div
                        class="h-8 w-8 rounded-full bg-orange-10 flex items-center justify-center text-orange-70 text-micro font-medium">
                        UE</div>
                    <div>
                        <div class="text-black text-caption font-medium">Unai Emry</div>
                        <div class="text-gray-60 text-micro">@Unai</div>
                    </div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 flex px-3">
                    <BaseInfoChip :title="StatusType.APPROVED" color="green" />
                </div>
                <div class="w-10 mt-2 pe-4">
                    <MoreIcon class="w-5 h-5 text-black" />

                </div>
            </div>
            <div class="py-3 flex items-center">
                <div class="w-10 mt-2 px-4">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div class="flex-1 flex items-center px-3 space-s-3">
                    <div
                        class="h-8 w-8 rounded-full bg-orange-10 flex items-center justify-center text-orange-70 text-micro font-medium">
                        UE</div>
                    <div>
                        <div class="text-black text-caption font-medium">Unai Emry</div>
                        <div class="text-gray-60 text-micro">@Unai</div>
                    </div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 flex px-3">
                    <BaseInfoChip :title="StatusType.APPROVED" color="green" />
                </div>
                <div class="w-10 mt-2 pe-4">
                    <MoreIcon class="w-5 h-5 text-black" />

                </div>
            </div>
            <div class="py-3 flex items-center">
                <div class="w-10 mt-2 px-4">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div class="flex-1 flex items-center px-3 space-s-3">
                    <div
                        class="h-8 w-8 rounded-full bg-orange-10 flex items-center justify-center text-orange-70 text-micro font-medium">
                        UE</div>
                    <div>
                        <div class="text-black text-caption font-medium">Unai Emry</div>
                        <div class="text-gray-60 text-micro">@Unai</div>
                    </div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 flex px-3">
                    <BaseInfoChip :title="StatusType.PENDING" color="orange" />
                </div>
                <div class="w-10 mt-2 pe-4">
                    <MoreIcon class="w-5 h-5 text-black" />

                </div>
            </div>
            <div class="py-3 flex items-center">
                <div class="w-10 mt-2 px-4">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div class="flex-1 flex items-center px-3 space-s-3">
                    <div
                        class="h-8 w-8 rounded-full bg-orange-10 flex items-center justify-center text-orange-70 text-micro font-medium">
                        UE</div>
                    <div>
                        <div class="text-black text-caption font-medium">Unai Emry</div>
                        <div class="text-gray-60 text-micro">@Unai</div>
                    </div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 flex px-3">
                    <BaseInfoChip :title="StatusType.APPROVED" color="green" />
                </div>
                <div class="w-10 mt-2 pe-4">
                    <MoreIcon class="w-5 h-5 text-black" />

                </div>
            </div>
            <div class="py-3 flex items-center">
                <div class="w-10 mt-2 px-4">
                    <input type="checkbox" class="w-5 h-5">
                </div>
                <div class="flex-1 flex items-center px-3 space-s-3">
                    <div
                        class="h-8 w-8 rounded-full bg-orange-10 flex items-center justify-center text-orange-70 text-micro font-medium">
                        UE</div>
                    <div>
                        <div class="text-black text-caption font-medium">Unai Emry</div>
                        <div class="text-gray-60 text-micro">@Unai</div>
                    </div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 px-3">
                    <div class="text-caption text-black">unaiemry@gmail.com</div>
                </div>
                <div class="flex-1 flex px-3">
                    <BaseInfoChip :title="StatusType.REJECTED" color="red" />
                </div>
                <div class="w-10 mt-2 pe-4">
                    <MoreIcon class="w-5 h-5 text-black" />
                </div>
            </div>
        </div>
        <div class="mt-6">
            <Pagination/>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue'
import Pagination from './Pagination.vue'
import BaseInfoChip from './BaseInfoChip.vue'
import { ChevronIcon, MoreIcon, SearchIcon } from '../icons/AllIcons'
import { StatusType } from '../../config/types'
</script>