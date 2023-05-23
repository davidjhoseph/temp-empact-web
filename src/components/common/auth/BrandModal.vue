<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="open"
  >
    <div
      class="fixed inset-0 bg-gray-80 bg-opacity-75 transition-opacity"
      @click="closeModal"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4 text-center">
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
                    <SearchIcon class="h-5 w-5 text-gray-70" />
                  </template>
                </BaseInput>
              </div>
            </div>
          </div>

          <div class="overflow-y-scroll p-3 h-96 hide">
            <h3 class="my-5 text-black font-bold">
              {{ brands.length }} brands
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
                  @change="handleBrandSelection(brand.id)"
                  class="hidden peer"
                />
                <label
                  :for="brand.id.toString()"
                  class="flex flex-col items-center justify-center w-full p-5 border border-1 rounded-lg cursor-pointer peer-checked:border-blue-30 gap-2"
                >
                  <div>
                    <img
                      :src="brand.logoUrl"
                      alt="brand logo"
                      class="w-full h-full"
                    />
                  </div>
                  <p class="text-sm">{{ brand.name }}</p>
                </label>
              </li>
            </ul>
          </div>

          <div class="flex mt-5 ml-auto w-44 gap-2">
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

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const emit = defineEmits(["closeModal"]);

interface Brands {
  id: number;
  name: string;
  logoUrl: string;
}

const searchQuery = ref("");

const selectedBrandId = ref<number | null>(null);

const handleBrandSelection = (brandId: number) => {
  console.log(brandId);
  selectedBrandId.value = selectedBrandId.value === brandId ? null : brandId;
};

const brands: Brands[] = reactive<Brands[]>([
  {
    id: 1,
    name: "McDonald's",
    logoUrl: "/src/assets/mac.png",
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    logoUrl: "/src/assets/benz.png",
  },

  {
    id: 3,
    name: "Coca-Cola",
    logoUrl: "/src/assets/coke.png",
  },

  {
    id: 4,
    name: "Domino's",
    logoUrl: "/src/assets/dominos.png",
  },
  {
    id: 5,
    name: "Starbucks",
    logoUrl: "/src/assets/starbucks.png",
  },
  {
    id: 6,
    name: "Adidas",
    logoUrl: "/src/assets/adidas.png",
  },
  {
    id: 7,
    name: "Mercedes-Benz",
    logoUrl: "/src/assets/mac.png",
  },
  {
    id: 8,
    name: "Mercedes-Benz",
    logoUrl: "/src/assets/mac.png",
  },
  {
    id: 9,
    name: "Mercedes-Benz",
    logoUrl: "/src/assets/mac.png",
  },
]);

const filteredBrands = computed(() => {
  return brands.filter((brand) => {
    return brand.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const closeModal = () => {
  emit("closeModal");
};

const gotoDashboard = () => {
  router.push({ name: ROUTES.HOME_DASHBOARD });
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
