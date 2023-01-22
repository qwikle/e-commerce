<template>
  <div
    class="group relative hover:cursor-pointer"
    @click="emit('itemSelected', id)"
  >
    <div
      class="bg-white opacity-70 w-full h-full rounded-md absolute group-hover:block"
      :class="active ? 'border-2 border-[#ff7d1a] ' : 'hidden'"
    ></div>
    <img :src="src" :alt="alt" class="rounded-md" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;
  id: number;
  active: boolean;
}>();
const emit = defineEmits<{
  (e: "itemSelected", id: number): void;
}>();
</script>
<style scoped></style>
