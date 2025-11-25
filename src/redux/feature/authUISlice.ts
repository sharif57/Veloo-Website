// import { createSlice } from "@reduxjs/toolkit";

// const authUISlice = createSlice({
//   name: "authUI",
//   initialState: {
//     email: "",
//   },
//   reducers: {
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//   },
// });

// export const { setEmail } = authUISlice.actions;
// export default authUISlice.reducer;   
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface AuthUIState {
//   verifyEmail: string | null;
//   token: string | null;
// }

// const initialState: AuthUIState = {
//   verifyEmail: null,
//   token: null,
// };

// const authUISlice = createSlice({
//   name: "authUI",
//   initialState,
//   reducers: {
//     setVerifyEmail: (state, action: PayloadAction<string>) => {
//       state.verifyEmail = action.payload;
//     },
//     setToken: (state, action: PayloadAction<string>) => {
//       state.verifyEmail = action.payload;
//     },
//     aiResponse: (state, action: PayloadAction<string>) => {
//       state.verifyEmail = action.payload;
//     },
//     clearVerifyEmail: (state) => {
//       state.verifyEmail = null;
//     },
//   },
// });

// export const { setVerifyEmail, setToken, clearVerifyEmail, aiResponse } = authUISlice.actions;
// export default authUISlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUIState {
  verifyEmail: string | null;
  token: string | null;
  aiResponse: any | null; // <-- Add this
}

const initialState: AuthUIState = {
  verifyEmail: null,
  token: null,
  aiResponse: null, // <-- Add this
};

const authUISlice = createSlice({
  name: "authUI",
  initialState,
  reducers: {
    setVerifyEmail: (state, action: PayloadAction<string>) => {
      state.verifyEmail = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload; // FIXED
    },
    aiResponse: (state, action: PayloadAction<any>) => {
      state.aiResponse = action.payload; // FIXED
    },
    clearVerifyEmail: (state) => {
      state.verifyEmail = null;
    },
  },
});

export const { setVerifyEmail, setToken, clearVerifyEmail, aiResponse } =
  authUISlice.actions;

export default authUISlice.reducer;
