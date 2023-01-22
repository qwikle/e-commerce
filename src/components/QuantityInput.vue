<template>
  <div class="relative lg:w-1/3">
    <input
      class="bg-slate-100 border-none rounded-lg w-full shadow-sm h-14 text-center font-bold"
      type="text"
      :value="state.quantity"
      disabled
    />
    <button
      class="w-4 h-4 absolute left-4 flex justify-center items-center inset-y-5"
      @click="removeItem"
    >
      <img src="../../images/icon-minus.svg" alt="" class="w-full" />
    </button>
    <button
      class="w-4 h-4 absolute right-4 flex justify-center items-center inset-y-5"
      @click="addItem"
    >
      <img src="../../images/icon-plus.svg" alt="" class="w-full" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({ quantity: 0 });
function addItem() {
  state.quantity++;
}

function removeItem() {
  state.quantity == 0 ? 0 : state.quantity--;
}
</script>
<style scoped></style>
