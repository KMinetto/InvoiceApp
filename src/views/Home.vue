<template>
  <div class="home text-white container mx-auto">
    <!-- Header -->
    <div class="header flex my-16">
      <div class="left flex flex-1 flex-col">
        <h1 class="text-3xl">Factures</h1>
        <span>Il y a au total 4 factures</span>
      </div>
      <div class="right flex flex-1 flex-row justify-end items-center">
        <div @click="toggleFilterMenu" class="relative flex items-center cursor-pointer select-none mr-10">
          <span>Filtrer par statuts </span>
            <fa v-if="!filterMenu" :icon="['fas', 'angle-down']" class="ml-3"></fa>
            <fa v-if="filterMenu" :icon="['fas', 'angle-up']" class="ml-3"></fa>
          <ul v-show="filterMenu" class="filter-menu absolute top-6 list-none">
            <li class="cursor-pointer text-xs py-2.5 px-5 hover:bg-white">Draft</li>
            <li class="cursor-pointer text-xs py-2.5 px-5 hover:bg-white">Pending</li>
            <li class="cursor-pointer text-xs py-2.5 px-5 hover:bg-white">Paid</li>
            <li class="cursor-pointer text-xs py-2.5 px-5 hover:bg-white">Clear Filter</li>
          </ul>
        </div>
        <button @click="newInvoice" class="flex items-center select-none py-2 px-2.5 bg-purple text-base">
          <fa :icon="['fas', 'circle-plus']" class="text-2xl mr-2"></fa>
          New Invoice
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      filterMenu: null
    }
  },
  components: {},
  methods: {
    newInvoice() {

    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
  fa {
    width: 9px;
    height: 5px;
  }

  .filter-menu {
    width: 120px;
    background-color: #1e2139;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    li {
      transition: 0.3s ease-in-out;
      &:hover {
        color: #1e2139;
      }
    }
  }
</style>
