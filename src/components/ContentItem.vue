<template>
  <div
    class="flex flex-col md:flex-row w-full gap-5 md:px-10 md:gap-20"
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
