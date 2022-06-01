<!--suppress ALL -->
<template>
  <div>
    <div
      v-if="!mobile"
      class="app flex flex-col lg:flex-row bg-darkPurple min-h-screen"
    >
      <Navigation></Navigation>
      <div class="app-content relative flex flex-1">
        <router-view></router-view>
      </div>
    </div>
    <div
      v-else
      class="mobile-message text-center text-white flex flex-col justify-center align-middle h-screen bg-darkPurple"
    >
      <h2 class="text-2xl font-bold">
        Désolé, cette application n'est pas supporté sur mobile.
      </h2>
      <p class="mt-4">
        Pour utiliser cette application, vous devriez utiliser un ordinateur.
      </p>
    </div>
  </div>
</template>

<script>
import "./assets/tailwind.css";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  data() {
    return {
      mobile: null,
    };
  },
  components: {
    Navigation,
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

.app {
  background-color: #141625;
  .app-content {
    padding: 0 20px;
  }
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 8px;
  color: #fefefe;
}

// Status button Styling

.status-button {
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;
}

.paid {
  &::before {
    background-color: #33d69f;
  }
  background-color: rgba(51, 214, 160, 0.1);
}

.pending {
  &::before {
    background-color: #ff8f00;
  }
  background-color: rgba(255, 145, 0, 0.1);
}

.draft {
  &::before {
    background-color: #dfe3fa;
  }
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
