import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const addUser = createAsyncThunk(
     'user/addUser', 
     async (userData, {rejectWithValue}) => {
          try {
               const responce = await axios.post("http://localhost:3000/users", userData);
               return responce.data;
          } catch (error) {
               return rejectWithValue(error.message);
          }
     }
);

const userSlice = createSlice({
     name: "user",
     initialState: {
          name: "",
          email: "",
          status: "idle",
          error: null 
     },

     reducers: {
          updateName: (state, action) =>{
               state.name = action.payload;
          },
          updateEmail: (state, action) =>{
               state.email = action.payload;
          }
     },
     extraReducers: (builder) =>{
          builder
          .addCase(addUser.pending, (state) =>{
               state.status = "loading";
               state.error = null;
          })
          .addCase(addUser.fulfilled, (state) =>{
               state.status = "succeeded";
               state.name = "";
               state.email = "";
          })

          .addCase(addUser.rejected, (state, action) =>{
               state.status = "failed";
               state.error = action.payload;
          });
     }, 
});

export const { updateName, updateEmail } = userSlice.actions;
export default userSlice.reducer;