<template>
  <router-view></router-view>
</template>

<script>
import "./assets/tailwind.css";

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

$white-color: #fefefe;
$draft-color: #dfe3fa;
$dark-purple: #252945;
$red: #ec5757;
$purple: #7c5dfa;
$green: #33d69f;
$orange: #ff8f00;

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border: none;
  border-radius: 30px;
  font-size: 12px;
  margin-right: 8px;
  color: $white-color;
}

.dark-purple {
  background-color: $dark-purple;
}
.purple {
  background-color: $purple;
}
.red {
  background-color: $red;
}
.orange {
  background-color: $orange;
}
.green {
  background-color: $green;
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
    background-color: $green;
  }
  color: $green;
  background-color: rgba(51, 214, 160, 0.1);
}

.pending {
  &::before {
    background-color: $orange;
  }
  color: $orange;
  background-color: rgba(255, 145, 0, 0.1);
}

.draft {
  &::before {
    background-color: $draft-color;
  }
  color: $draft-color;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>
