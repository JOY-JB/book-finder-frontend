import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";

interface IUserState {
  user: {
    name: string | null;
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: {
    name: null,
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.user.name = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
