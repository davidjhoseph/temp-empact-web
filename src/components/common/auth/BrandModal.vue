<template>
  <div
    class="relative z-[9999999999999]"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="open">
    <div
      class="fixed inset-0 transition-opacity bg-opacity-75 bg-gray-80"
      @click="closeModal"></div>

    <div class="fixed inset-0 z-[9999999999999] overflow-y-auto">
      <div class="flex items-center justify-center min-h-full p-4 text-center">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white w-[36rem] p-6 text-left shadow-xl transition-all">
          <div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <h3
                  class="text-base font-semibold leading-6 text-black"
                  id="modal-title">
                  Your Community Brands
                </h3>
                <span>
                  <CloseIcon @click="closeModal" class="cursor-pointer" />
                </span>
              </div>

              <div class="mt-2">
                <p class="text-gray-500">
                  Select the brand you want to manage now
                </p>
              </div>

              <div>
                <BaseInput
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Search for a brand"
                  icon
                  v-model="searchQuery">
                  <template #icon>
                    <SearchIcon class="w-5 h-5 text-gray-70" />
                  </template>
                </BaseInput>
              </div>
            </div>
          </div>
          <template v-if="brands?.length">
            <template v-if="filteredBrands.length">
              <div class="p-3 overflow-y-scroll h-96 hide">
                <h3 class="my-5 font-bold text-black">
                  {{ filteredBrands.length }}
                  {{ filteredBrands.length > 1 ? "brands" : "brand" }}
                </h3>
                <div class="grid grid-cols-3 gap-6">
                  <div
                    class="w-40 h-40 bg-white border-2 rounded-md shadow-md cursor-pointer hover:shadow-lg"
                    :class="{'border-blue-30' : selectedBrandId === brand.id}"
                    v-for="brand in filteredBrands"
                    :key="brand.id"
                    @click="handleBrandSelection(brand)"
                    >
                    <div class="w-full h-2/3">
                      <img
                        :src="brand.brand.brand_logo"
                        alt="brand logo"
                        class="object-contain w-full h-full" />
                    </div>
                    <div class="text-sm text-center">{{ brand.brand.actualName }}</div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="py-6">Brand not found for that search</div>
            </template>
          </template>
          <template v-else>
            <div class="py-6">No Managed Brands for you yet!</div>
          </template>
          <div class="flex gap-2 mt-5 ms-auto w-44">
            <BaseButton
              class="w-1/2 border border-gray-50 bg-inherit"
              @click="closeModal">
              <p class="text-black">Close</p>
            </BaseButton>
            <BaseButton
              class="w-1/2"
              :disabled="selectedBrandId === null"
              @click="gotoDashboard">Continue</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ROUTES } from "../../../router/routes";
import BaseButton from "../BaseButton.vue";
import BaseInput from "../BaseInput.vue";
import SearchIcon from "../../icons/SearchIcon.vue";
import CloseIcon from "../../icons/CloseIcon.vue";
import { useAuthStore } from "../../../store/auth";
import { ManagedBrand } from "../../../config/types";
import toast from "../../../helpers/toast";

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const emit = defineEmits(["closeModal"]);

const authStore = useAuthStore();

const searchQuery = ref("");

const selectedBrandId = ref<number | null>(null);

const handleBrandSelection = (brand: ManagedBrand) => {
  selectedBrandId.value = selectedBrandId.value === brand.id ? null : brand.id;
};

const brands = computed(() => authStore.managedBrands);

const filteredBrands = computed(() => {
  const gottenBrands = brands.value?.filter((brand: ManagedBrand) => {
    return brand.brand.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
  if (!gottenBrands?.length) return [];
  return gottenBrands;
});

const closeModal = () => {
  emit("closeModal");
};

const gotoDashboard = () => {
  const brand = brands.value?.filter(
    (brand: ManagedBrand) => brand.id === selectedBrandId.value
  )[0];
  console.log(brand);
  if (!brand) {
    toast.error("Please select a brand to continue!");
    return;
  }
  authStore.selectBrand(brand.brand);
  router.push({ name: ROUTES.HOME });
  closeModal();
};
</script>

<style scoped>
.hide::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
</style>
