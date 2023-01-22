<template>
  <div class="lg:flex lg:flex-col lg:gap-y-5 lg:w-1/2 h-full">
    <figure
      @click="toogleDialog()"
      class="w-full flex justify-center hover:cursor-pointer"
    >
      <div class="relative h-full w-full">
        <img :src="state.image" alt="" class="lg:rounded-lg" />
        <button
          class="h-10 w-10 bg-white flex justify-center items-center rounded-full lg:hidden absolute top-1/2 left-5"
        >
          <img src="/images/icon-previous.svg" alt="" />
        </button>
        <button
          class="h-10 w-10 bg-white flex justify-center items-center rounded-full lg:hidden absolute top-1/2 right-5"
        >
          <img src="/images/icon-next.svg" alt="" />
        </button>
      </div>
    </figure>
    <div class="lg:flex w-full gap-x-2 hidden">
      <template v-for="imageArticle in imagesArticles">
        <ThumnailComponent
          :src="imageArticle.thumbnail.src"
          :alt="imageArticle.thumbnail.alt"
          :id="imageArticle.id"
          :active="imageArticle.id === state.currentImage"
          @item-selected="(id) => showImage(id)"
        />
      </template>
    </div>
  </div>
  <ArticleDialog :opened="state.opened" @close-modal="toogleDialog()" />
</template>
<script setup lang="ts">
import ArticleDialog from "@/components/ArticleDialog.vue";
import ThumnailComponent from "@/components/ThumnailComponent.vue";
import imagesArticles from "@/data/images";
import { reactive } from "vue";
const state = reactive({
  opened: false,
  image: "../../images/image-product-1.jpg",
  currentImage: "1",
});

function toogleDialog() {
  state.opened = !state.opened;
}

function showImage(id: string) {
  const src = imagesArticles.find((e) => e.id === id)?.src;
  state.image = src ? src : state.image;
  state.currentImage = id;
}
</script>
<style scoped></style>
