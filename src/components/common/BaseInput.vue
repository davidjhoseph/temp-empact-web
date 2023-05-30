<template>
  <div>
    <BaseLabel :labelFor="id" :required="required" :text="label" v-if="label" />
    <div v-if="description" class="text-caption description text-gray-60">
      {{ description }}
    </div>
    <div class="relative inline-block w-full">
      <div
        v-if="icon"
        class="absolute top-0 bottom-0 left-0 flex items-center h-full px-2 my-auto rounded-r-lg">
        <slot name="icon" />
      </div>
      <input
        v-if="type !== 'date'"
        ref="baseInput"
        :name="name"
        v-bind="$attrs"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        @input="changeInput($event)"
        :class="[{ 'ps-9': icon }, small ? 'py-1' : 'py-2']"
        class="w-full px-3 border rounded outline-none text-caption placeholder:text-gray-70 border-gray-40 bg-gray-10 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-80 text-gray-70" />
      <input
        v-else
        ref="baseInput"
        :name="name"
        v-bind="$attrs"
        :type="inputType"
        :value="value"
        :max="max"
        :min="min"
        @input="changeInput($event)"
        :class="[{ 'ps-9': icon }, small ? 'py-1' : 'py-2']"
        class="w-full px-3 border rounded-lg outline-none text-caption placeholder:text-gray-70 border-gray-40 bg-gray-10 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-transparent disabled:cursor-not-allowed disabled:border-gray-50 disabled:bg-gray-30 disabled:text-gray-80 text-gray-70" />
      <!-- <button
        type="button"
        class="absolute top-0 bottom-0 right-0 h-full px-2 my-auto rounded-r-lg"
        v-if="type == 'password'"
        @click="showPassword = !showPassword"
      >
        <EyeOffIcon v-if="showPassword" class="w-5 h-5 text-gray-50" />
        <EyeIcon v-else class="w-5 h-5 text-gray-50" />
      </button> -->
      <!-- eslint-disable-next-line -->
      <button
        type="button"
        class="absolute top-0 bottom-0 right-0 h-full px-2 my-auto rounded-r-lg"
        v-if="type == 'date'"
        @click="showPicker()">
        <CalendarIcon class="w-5 h-5 text-gray-50" />
      </button>
    </div>
    <HelpText
      type="error"
      :text="errorMessage"
      v-if="errorMessage"
      class="mt-1" />
  </div>
</template>

<script setup lang="ts">
import type { HTMLInputTypeAttribute } from "../../config/types.js";
import { computed, type PropType, ref, toRef } from "vue";
import { useField } from "vee-validate";
import HelpText from "./HelpText.vue";
import BaseLabel from "./BaseLabel.vue";
import { CalendarIcon, SearchIcon } from "../../components/icons/AllIcons";

const baseInput = ref<HTMLInputElement | null>(null);

const showPicker = () => {
  // using any because of some weird behavior with HTMLInputElement type
  (baseInput.value as HTMLInputElement | any)?.showPicker();
};

const props = defineProps({
  type: {
    type: String as PropType<HTMLInputTypeAttribute>,
    default: "text",
  },
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },

  label: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  max: {
    type: Date as PropType<HTMLInputTypeAttribute | any>,
    required: false,
  },
  min: {
    type: Date as PropType<HTMLInputTypeAttribute | any>,
    required: false,
  },
  name: {
    type: String,
    default: "name",
  },
  modelValue: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
});

const showPassword = ref(false);
const inputType = computed(() => {
  if (props.type == "password") {
    if (showPassword.value) {
      return "text";
    } else {
      return "password";
    }
  }

  return props.type;
});

const emit = defineEmits(["update:modelValue"]);

const changeInput = (ev: Event) => {
  if (ev.target instanceof HTMLInputElement) {
    emit("update:modelValue", ev?.target?.value);
  }
};

const name = toRef(props, "name");

const { value, errorMessage } = useField(name, undefined, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  validateOnMount: false,
});
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.description {
  margin-top: -5px !important;
}
</style>
