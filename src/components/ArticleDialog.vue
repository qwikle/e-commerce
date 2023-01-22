<template>
  <dialog
    :open="props.opened"
    class="w-full h-screen bg-black opacity-80 z-10 absolute top-0"
  >
    <div class="flex justify-center mx-auto border h-1/3 w-1/3 relative my-60">
      <button
        class="w-5 h-5 flex justify-center items-center absolute -top-12 -right-2 group"
        @click="emit('closeModal')"
      >
        <svg
          class="w-5 h-5 fill-white group-hover:fill-[#ff7d1a]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <p class="text-7xl text-white">hello world</p>
    </div>
  </dialog>
</template>
<script setup lang="ts">
const props = defineProps<{
  opened: boolean;
}>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();
</script>
<style scoped></style>
