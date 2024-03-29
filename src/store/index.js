import { createStore } from "vuex";

export default createStore({
  state: {
    invoiceModal: null,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !this.state.invoiceModal
    }
  },
  actions: {},
  modules: {},
});
