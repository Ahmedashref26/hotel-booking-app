<template>
  <transition name="fade">
    <div v-if="show">
      <div @click="emit('close')" class="absolute bg-black opacity-70 inset-0 z-[50] h-[103%]"></div>
      <div
        class="w-full max-w-lg p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] mx-auto my-auto rounded-xl shadow-lg bg-white">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script setup>
const emit = defineEmits(['close'])

defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>