<template>
  <section
    class="flex flex-col lg:w-1/2 gap-5 mx-5 lg:mx-0 lg:justify-evenly mb-10 lg:mb-0"
  >
    <h1
      class="text-[#ff7d1a] font-bold uppercase tracking-widest text-sm lg:text-md"
    >
      sneaker company
    </h1>
    <h2 class="font-bold text-3xl capitalize leading-none lg:text-4xl">
      fall limited edition sneakers
    </h2>
    <p class="text-[#68707d] lg:text-lg">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sale, they'il withstand everything the
      weather can offer.
    </p>
    <ItemPrice />
    <div class="flex flex-col gap-3 lg:flex-row">
      <QuantityInput />
      <AddButton />
    </div>
  </section>
</template>
<script setup lang="ts">
import ItemPrice from "@/components/ItemPrice.vue";
import QuantityInput from "@/components/QuantityInput.vue";
import AddButton from "@/components/AddButton.vue";
</script>
<style scoped></style>
