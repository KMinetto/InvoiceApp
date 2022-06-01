<template>
  <header
    class="flex flex-row lg:flex-col lg:min-h-full lg:min-w-large lg:rounded-tr-large lg:rounded-br-large bg-darkPurple z-[99]"
  >
    <div
      class="flex justify-center rounded-tr-large rounded-br-large lg:w-full p-6 bg-purple"
    >
      <img
        class="w-auto h-7.5"
        src="@/assets/images/file-invoice-dollar-solid.png"
        alt=""
      />
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
header {
  background-color: #1e2139;
}
</style>
