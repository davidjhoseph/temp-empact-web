<template>
  <div
    class="relative z-[9999999999999]"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="open"
  >
    <div
      class="fixed inset-0 transition-opacity bg-opacity-75 bg-gray-80"
      @click="closeModal"
    ></div>

    <div class="fixed inset-0 z-[9999999999999] overflow-y-auto">
      <div class="flex items-center justify-center min-h-full p-4 text-center">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white w-[36rem] p-6 text-left shadow-xl transition-all"
        >
          <div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <h3
                  class="text-base font-semibold leading-6 text-black"
                  id="modal-title"
                >
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
                  v-model="searchQuery"
                >
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
                    {{ filteredBrands.length }} {{ filteredBrands.length > 1 ? 'brands' : 'brand' }}
                  </h3>
                  <ul class="grid w-full gap-6 md:grid-cols-3">
                    <li
                      v-for="brand in filteredBrands"
                      :key="brand.id"
                      class="hover:shadow-lg"
                    >
                      <input
                        type="checkbox"
                        :id="brand.id.toString()"
                        :value="brand.id"
                        :checked="selectedBrandId === brand.id"
                        @change="handleBrandSelection(brand)"
                        class="hidden peer"
                      />
                      <label
                        :for="brand.id.toString()"
                        class="flex flex-col items-center justify-center w-full gap-2 p-5 border rounded-lg cursor-pointer border-1 peer-checked:border-blue-30"
                      >
                        <div>
                          <img
                            :src="brand.brand.brand_logo"
                            alt="brand logo"
                            class="w-full h-full"
                          />
                        </div>
                        <p class="text-sm">{{ brand.brand.actualName }}</p>
                      </label>
                    </li>
                  </ul>
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
              @click="closeModal"
            >
              <p class="text-black">Close</p>
            </BaseButton>
            <BaseButton
              class="w-1/2"
              :disabled="selectedBrandId === null"
              @click="gotoDashboard"
              >Continue</BaseButton
            >
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

// const brands: Brands[] = reactive<Brands[]>([
//   {
//     id: 1,
//     name: "McDonald's",
//     logoUrl: "/images/mac.png",
//   },
//   {
//     id: 2,
//     name: "Mercedes-Benz",
//     logoUrl: "/images/benz.png",
//   },

//   {
//     id: 3,
//     name: "Coca-Cola",
//     logoUrl: "/images/coke.png",
//   },

//   {
//     id: 4,
//     name: "Domino's",
//     logoUrl: "/images/dominos.png",
//   },
//   {
//     id: 5,
//     name: "Starbucks",
//     logoUrl: "/images/starbucks.png",
//   },
//   {
//     id: 6,
//     name: "Adidas",
//     logoUrl: "/images/adidas.png",
//   },
//   {
//     id: 7,
//     name: "Mercedes-Benz",
//     logoUrl: "/images/mac.png",
//   },
//   {
//     id: 8,
//     name: "Mercedes-Benz",
//     logoUrl: "/images/mac.png",
//   },
//   {
//     id: 9,
//     name: "Mercedes-Benz",
//     logoUrl: "/images/mac.png",
//   },
// ]);

const filteredBrands = computed(() => {
  const gottenBrands = brands.value?.filter((brand: ManagedBrand) => {
    return brand.brand.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
  if(!gottenBrands?.length) return [];
  return gottenBrands;
});

const closeModal = () => {
  emit("closeModal");
};

const gotoDashboard = () => {
  const brand = brands.value?.filter((brand: ManagedBrand) => brand.id === selectedBrandId.value)[0];
  console.log(brand);
  if(!brand){
    toast.error('Please select a brand to continue!');
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
