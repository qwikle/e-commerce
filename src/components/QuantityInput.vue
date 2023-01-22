<template>
  <div class="relative lg:w-1/3">
    <input
      class="bg-slate-100 border-none rounded-lg w-full shadow-sm h-14 text-center font-bold"
      type="text"
      value="0"
    />
    <button
      class="w-4 h-4 absolute left-4 flex justify-center items-center inset-y-5"
    >
      <img src="../../images/icon-minus.svg" alt="" class="w-full" />
    </button>
    <button
      class="w-4 h-4 absolute right-4 flex justify-center items-center inset-y-5"
    >
      <img src="../../images/icon-plus.svg" alt="" class="w-full" />
    </button>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
