<template>
  <div
    class="flex flex-col lg:flex-row w-full gap-5 lg:px-10 lg:gap-20"
  >
    <ImagesArticle />
    <DescriptionArticle />
  </div>
</template>
<script setup lang="ts">
import ImagesArticle from "@/components/ImagesArticle.vue";
import DescriptionArticle from "@/components/DescriptionArticle.vue";
</script>
<style scoped></style>
