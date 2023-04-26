import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type AuthState = {
  isAuth: boolean;
  isLoading: boolean;
  error: boolean;
  token: string | null;
};

let currentToken =
  localStorage.getItem("token") === null
    ? ""
    : JSON.parse(localStorage.getItem("token") || "");

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: false,
  token: currentToken,
};

export const initialApp = createAsyncThunk(
  "tasks/initialApp",
  async function (obj, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("http://localhost:5000/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        let errorResul = await response
          .json()
          .then((data) => console.log(data));
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // addNewTask(state, action) {
    //   state.list.push(action.payload);
    // },
    setValidAuth(state, action) {},
    setError(state, action) {},
    resetError(state) {
      state.error = false;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initialApp.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(initialApp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.error = false;
        state.isLoading = false;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      })
      .addCase(initialApp.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
        state.token = null;
        console.log(state.error);
      });
  },
});

export const { resetError, logout } = authSlice.actions;

export default authSlice.reducer;
