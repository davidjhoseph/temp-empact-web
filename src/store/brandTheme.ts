import { defineStore } from "pinia";

interface Colors {
  primary: string;
  secondary: string;
  text: string;
}

export const useBrandTheme = defineStore({
  id: "brandTheme",
  persist: true,

  state: () => ({
    colors: {
      primary: "#de6900",
      secondary: "#890a00",
      text: "#ab0099",
    },
  }),

  getters: {
    brandColors: (state) => {
      return state.colors;
    },
  },

  actions: {
    updateColor(color: string, type: "primary" | "secondary" | "text") {
      this.colors[type] = color;
    },
  },
});
