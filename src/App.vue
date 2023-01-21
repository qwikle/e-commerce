<script setup lang="ts"></script>
import RouterView from 'route'
<template>
  <header
    class="h-16 md:h-28 flex md:mx-20 md:justify-between justify-around items-center z-10 sticky top-0 bg-white md:border-b-2"
  >
    <div class="flex items-center md:gap-10 gap-1 h-full">
      <button class="w-8 h-8 md:hidden">
        <img src="../images/icon-menu.svg" alt="icon menu button" />
      </button>
      <img src="../../images/logo.svg" alt="sneakers logo" />
      <ul class="md:flex gap-4 hidden text-slate-500 h-full items-center">
        <li class="h-full flex items-center group">
          <a
            href="#"
            class="group-hover:border-b-2 group-hover:border-[#ff7d1a]"
            >Collections</a
          >
        </li>
        <li class="h-full flex items-center"><a href="#">Men</a></li>
        <li class="h-full flex items-center"><a href="#">About</a></li>
        <li class="h-full flex items-center"><a href="#">Women</a></li>
        <li class="h-full flex items-center"><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="flex gap-3">
      <button class="w-8 h-8">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill-rule="nonzero"
            class="fill-slate-500"
          />
        </svg>
      </button>
      <button class="w-8 h-8 focus:ring-2 focus:ring-[#ff7d1a] rounded-full">
        <img src="../images/image-avatar.png" alt="avatar image" />
      </button>
    </div>
  </header>
  <main class="md:mt-20 md:mx-20">
    <router-view />
  </main>
</template>

<style scoped></style>
