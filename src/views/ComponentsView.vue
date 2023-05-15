<template>
    <div class="flex p-10">
        <div class="flex-1 space-y-6 px-6">
            <div>
                <div class="text-header6">Table</div>
                <BaseTable/>

            </div>
            <div class="space-y-2">
                <div class="text-header6">Typography</div>
                <div class="text-nano">We are happy to be here</div>
                <div class="text-micro">We are happy to be here</div>
                <div class="text-caption">We are happy to be here</div>
                <div class="text-header6">We are happy to be here</div>
                <div class="text-header5">We are happy to be here</div>
                <div class="text-header4">We are happy to be here</div>
                <div class="text-header3">We are happy to be here</div>
                <div class="text-header2">We are happy to be here</div>
                <div class="text-header1">We are happy to be here</div>
            </div>
        </div>
        <div class="flex-1 px-6 space-y-4">
            <BaseButton>Hello</BaseButton>
            <div>
                <BaseInput type="email" label="Email Address" icon>
                    <template #icon>
                        <MailIcon class="h-5 w-5 text-gray-70" />
                    </template>
                </BaseInput>
            </div>
            <div>
                <BaseInput type="password" label="Password" icon>
                    <template #icon>
                        <LockIcon class="h-5 w-5 text-gray-70" />
                    </template>
                </BaseInput>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/common/BaseButton.vue"
import BaseTable from "../components/common/BaseTable.vue"
import BaseInput from "../components/common/BaseInput.vue"
import {LockIcon, MailIcon} from "../components/icons/AllIcons";

// import CollapsedPrimarySidebar from "../components/layouts/nav/sidebar/CollapsedPrimarySidebar.vue"
// import FullPrimarySidebar from "../components/layouts/nav/sidebar/FullPrimarySidebar.vue"
import SecondarySidebar from "../components/layouts/nav/sidebar/SecondarySidebar.vue"
import NavHeader from "../components/layouts/nav/header/NavHeader.vue"
</script>