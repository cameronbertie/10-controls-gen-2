import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: "light",
  },
  reducers: {
    darkMode: state => {
      state.theme = "dark";
    },
    lightMode: state => {
      state.theme = "light";
    },
  },
});

localStorage.setItem("theme", JSON.stringify(state.theme.theme))

export const { darkMode, lightMode } = themeSlice.actions;

// Selectors
export const selectTheme = (state) => state.theme.theme;


export default themeSlice.reducer;
