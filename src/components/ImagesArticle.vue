<template>
  <div class="md:flex md:flex-col md:gap-y-5 md:w-1/2 h-full">
    <figure @click="toogleDialog()" class="w-full flex justify-center">
      <div class="relative h-full w-full">
        <img
          src="../../images/image-product-1.jpg"
          alt=""
          class="md:rounded-lg"
        />
        <button
          class="h-10 w-10 bg-white flex justify-center items-center rounded-full md:hidden absolute top-1/2 left-5"
        >
          <img src="/images/icon-previous.svg" alt="" />
        </button>
        <button
          class="h-10 w-10 bg-white flex justify-center items-center rounded-full md:hidden absolute top-1/2 right-5"
        >
          <img src="/images/icon-next.svg" alt="" />
        </button>
      </div>
    </figure>
    <div class="md:flex w-full gap-x-2 hidden">
      <div class="group relative">
        <div
          class="bg-white opacity-70 w-full h-full rounded-md absolute hidden group-hover:block hover:border-2 hover:rounded-md hover:border-[#f77d1a]"
        ></div>
        <img
          src="../../images/image-product-1-thumbnail.jpg"
          alt=""
          class="rounded-md"
        />
      </div>
      <div class="">
        <img
          src="../../images/image-product-2-thumbnail.jpg"
          alt=""
          class="rounded-md"
        />
      </div>
      <div class="">
        <img
          src="../../images/image-product-3-thumbnail.jpg"
          alt=""
          class="rounded-md"
        />
      </div>
      <div class="">
        <img
          src="../../images/image-product-4-thumbnail.jpg"
          alt=""
          class="rounded-md"
        />
      </div>
    </div>
  </div>
  <ArticleDialog :opened="state.opened" @close-modal="toogleDialog()" />
</template>
<script setup lang="ts">
import ArticleDialog from "@/components/ArticleDialog.vue";
import { reactive } from "vue";
const state = reactive({ opened: false });

function toogleDialog() {
  state.opened = !state.opened;
}
</script>
<style scoped></style>
