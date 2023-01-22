<template>
  <div class="group relative hover:cursor-pointer">
    <div
      class="bg-white opacity-70 w-full h-full rounded-md absolute hidden group-hover:block"
    ></div>
    <img :src="src" :alt="alt" class="rounded-md" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;
}>();
</script>
<style scoped></style>
