import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers", 
     async (args, {rejectWithValue }) => {
     try {
          const response = await fetch ("https://api.github.com/users");
          if (!response.ok) {
               return rejectWithValue(`Error: ${response.status} ${response.statusText}`);
          }
          const result = await response.json();
          return result;
     } catch (error) {
      return rejectWithValue(`Oops! Found an error while fetching users: ${error.message}`);
    }
});


const gitUsersSlice = createSlice({
     name: "gitUser",

     initialState: {
          users: [],
          loading: false,
          error: null,
     },


     extraReducers: (builder) => {
          builder
               .addCase(getAllData.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(getAllData.fulfilled, (state, action) => {
                    state.loading = false;
                    state.users = action.payload;
               })

               .addCase(getAllData.rejected, (state, action) => {
                    state.loading = false;
                    state.users = action.payload || "Something Went Wrong";
               });
     },
});

export default gitUsersSlice.reducer;