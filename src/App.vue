<template>
  <router-view />
  <notifications />
</template>
<script setup>
import { useBookingStore } from '@/store'
import { onMounted } from 'vue'

const { findUser } = useBookingStore()

onMounted(() => {
  findUser()
})
</script>
<style lang="scss"></style>
