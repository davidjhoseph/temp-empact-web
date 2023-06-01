import { defineStore } from "pinia";

interface Colors {
  primary: string;
  secondary: string;
  text: string;
}
const defaultColors: Colors = {
  primary: "#2C79EC",
  secondary: "#FFF",
  text: "#020D1C",
};

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

    resetColor(type: "primary" | "secondary" | "text") {
      this.colors[type] = defaultColors[type];
    },
  },
});
