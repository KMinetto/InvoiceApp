import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Import icons needed here
// import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import "./assets/tailwind.css";

// Add icons here
library.add(fas);
createApp(App).component("fa", FontAwesomeIcon).mount("#app");
