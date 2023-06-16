<template>
  <section class="h-full max-h-[640px] mb-8 xl:mb-24">
    <div class="flex flex-col lg:flex-row">
      <div
        class="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px0">
        <h1 class="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
          <span class="text-secondary">Discover</span> your perfect getaway
        </h1>
        <p class="max-w-[480px] mb-8">Unwind in luxurious
          accommodations, plan memorable adventures, and create lifelong memories. With our hotel booking service, finding
          your dream destination has never been easier. Explore a world of exceptional hospitality and book your
          extraordinary stay today.</p>
      </div>
      <div class="hidden flex-1 lg:flex justify-end items-end">
        <img src="@/assets/images/banner5.jpg" alt="Hero Img" class="rounded-tl-[6rem]">
      </div>
    </div>
    <Search />
  </section>
</template>

<script setup>
import Search from '@/components/search/search'
</script>
