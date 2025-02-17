import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@/entities/counter/model/slice/counterSlice";
import { postAPI } from "@/entities/posts";
import { userAPI } from "@/entities/users/models/slice/UserService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }).concat([postAPI.middleware, userAPI.middleware]),
  devTools: {
    name: "ReduxList",
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];
