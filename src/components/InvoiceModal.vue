<template>
  <div
    @click="checkClick"
    ref="invoice-wrap"
    class="invoice-wrap fixed top-0 left-0 flex flex-col w-full h-screen overflow-scroll bg-transparent"
  >
    <form
      @submit.prevent="submitForm"
      class="invoice-content relative max-w-700 w-full text-white p-14"
    >
      <h1 class="text-3xl mb-12 text-white">New Invoice</h1>
      <!-- Bill From -->
      <div class="bill-from mb-12 flex flex-col">
        <h4 class="text-base text-purple text-xs mb-6">Bill From</h4>
        <div class="input mb-6 flex flex-col">
          <label class="text-xs mb-3" for="billerStreetAddress">Street Address</label>
          <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="billerStreetAddress" id="billerStreetAddress" type="text" required>
        </div>
        <div class="location-details gap-4 flex">
          <div class="input mb-6 flex flex-1 flex-col">
            <label class="text-xs mb-3" for="billerCity">City</label>
            <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="billerCity" id="billerCity" type="text" required>
          </div>
          <div class="input mb-6 flex flex-1 flex-col">
            <label class="text-xs mb-3" for="billerZipCode">Zip Code</label>
            <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="billerZipCode" id="billerZipCode" type="text" required>
          </div>
          <div class="input flex flex-1 flex-col">
            <label class="text-xs mb-3" for="billerCountry">Country</label>
            <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="billerCountry" id="billerCountry" type="text" required>
          </div>
        </div>
      </div>
      <!-- Bill To -->
      <div class="bill-to mb-12 flex flex-col">
        <h4 class="text-base text-purple text-xs mb-6">Bill To</h4>
        <div class="input mb-6 flex flex-col">
          <label class="text-xs mb-3" for="clientName">Client's Name</label>
          <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="clientName" id="clientName" type="text" required>
        </div>
        <div class="input mb-6 flex flex-col">
          <label class="text-xs mb-3" for="clientEmail">Client's Email</label>
          <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="clientEmail" id="clientEmail" type="email" required>
        </div>
        <div class="input mb-6 flex flex-col">
          <label class="text-xs mb-3" for="clientStreetAddress">Client Street Address</label>
          <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="clientStreetAddress" id="clientStreetAddress" type="text" required>
        </div>
        <div class="location-details gap-4 flex">
          <div class="input mb-6 flex flex-1 flex-col">
            <label class="text-xs mb-3" for="clientCity">Client's City</label>
            <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="clientCity" id="clientCity" type="text" required>
          </div>
          <div class="input mb-6 flex flex-1 flex-col">
            <label class="text-xs mb-3" for="clientZipCode">Client's Zip Code</label>
            <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="clientZipCode" id="clientZipCode" type="text" required>
          </div>
          <div class="input mb-6 flex flex-1 flex-col">
            <label class="text-xs mb-3" for="clientCountry">Client's Country</label>
            <input class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" v-model="clientCountry" id="clientCountry" type="text" required>
          </div>
        </div>
      </div>
      <!-- Invoice Work Details -->
      <div class="invoice-work flex flex-col">
        <div class="payment flex gap-6">
          <div class="input mb-6  flex flex-1 flex-col">
            <label for="invoiceDate">Invoice Date</label>
            <input v-model="invoiceDate" class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" id="invoiceDate" type="text" disabled>
          </div>
          <div class="input flex flex-1 flex-col">
            <label for="paymentDueDate">Payment Due</label>
            <input v-model="paymentDueDate" class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" id="paymentDueDate" type="text" required>
          </div>
        </div>
        <div class="input mb-6 flex flex-col">
          <label for="paymentTerms">Payment Terms</label>
          <select
            v-model="paymentTerms"
            class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0"
            id="paymentTerms"
            type="text"
            required>
            <option value="30">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>
        <div class="input mb-6 flex flex-col">
          <label for="productDescription">Product Description</label>
          <input v-model="productDescription" class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" id="productDescription" type="text" required>
        </div>
        <div class="work-items">
          <h3 class="text-lg">Item List</h3>
          <table class="item-list w-full">
            <tr class="table-heading flex gap-4 text-xs mb-4">
              <th class="item-name basis-1/2 text-left">Item Name</th>
              <th class="qty basis-10 text-left">Quantity</th>
              <th class="price basis-1/5 text-left">Price</th>
              <th class="total basis-1/5 self-center text-left">Total</th>
            </tr>
            <tr
              v-for="(item, index) in invoiceItemList"
              :key="index"
              class="table-items relative mb-6 flex gap-4 text-xs"
            >
              <td class="item-name basis-1/2">
                <input v-model="item.itemName" class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" type="text">
              </td>
              <td class="qty basis-10">
                <input v-model="item.quantity" class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" type="text">
              </td>
              <td class="price basis-1/5">
                <input v-model="item.price" class="w-full text-white rounded py-3 px-1 border-0 focus:outline-0" type="text">
              </td>
              <td class="total flex basis-1/5 self-center">
                ${{ item.total = item.quantity * item.price }}
              </td>
              <button
                @click="deleteInvoiceItem(item.id)"
                class="absolute right-0 w-3 h-4"
              >
                <fa :icon="['fas', 'trash']"></fa>
              </button>
            </tr>
          </table>
          <button
            @click="addNewInvoiceItem"
            class="flex justify-center items-center w-full button text-white bg-darkPurple"
          >
            <fa
              class="mr-1"
              :icon="['fas', 'circle-plus']"></fa>
            Add New Item
          </button>
        </div>
      </div>
      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left flex flex-1">
          <button @click="closeInvoice" class="bg-red">Cancel</button>
        </div>
        <div class="right flex flex-1 justify-end">
          <button @click="saveDraft" class="bg-darkPurple">Save Draft</button>
          <button @click="publishInvoice" class="bg-purple">Create Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { uid } from "uid";

export default {
  name: "InvoiceModal",
  data() {
    return {
      dateOptions: { day: "numeric", month: "numeric", year: "numeric" },
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0
    };
  },
  created() {
    // Get current date for invoice date field
    this.invoiceDateUnix = Date.now();
    this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleString("fr-FR", this.dateOptions);
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    closeInvoice() {
      this.TOGGLE_INVOICE()
    },
    addNewInvoiceItem() {
      this.invoiceItemList.push({
        id: uid(),
        itemName: "",
        quantity: "",
        price: 0,
        total: 0,
      });
    },
    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter(item => item.id !== id);
    }
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms));
      this.paymentDueDate = new Date(this.paymentDueDateUnix).toLocaleDateString("fr-FR", this.dateOptions);
    },
  }
};
</script>

<style lang="scss" scoped>
  .invoice-wrap {
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (min-width: 900px) {
      left: 90px;
    }
  }
  .invoice-content {
    background-color: #141625;
    box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    // Bill to / Bill from

    // Invoice work
    fa {
      top: 15px;
    }

  }
  input,
  select {
    background-color: #1e2139;
  }

  .save {
    margin-top: 60px;
  }
</style>
