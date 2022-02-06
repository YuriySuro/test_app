import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/useSlice";

export default configureStore({
    reducer: {
        user: userReducer
    }
});