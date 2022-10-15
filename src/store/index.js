import { createStore } from "vuex";
import { auth } from "./auth.module";
import {over} from "./over"

export const store = createStore({
  modules: {
    auth,
    over
  },
});
