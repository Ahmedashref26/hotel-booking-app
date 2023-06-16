<template>
  <Menu class="dropdown relative" as="div">
    <MenuButton class="dropdown-btn w-full text-left gap-4" :class="menuBtnClass" @click="isOpen = !isOpen">
      <Icon :icon="icon" class="dropdown-icon-primary" />
      <div>
        <div class="text-[15px] font-medium leading-tight">{{ selectedField }}</div>
        <div class="text-[13px]" v-if="label">{{ label }}</div>
      </div>
      <Icon icon="zondicons:cheveron-down" class="dropdown-icon-secondary" v-if="isOpen" />
      <Icon icon="zondicons:cheveron-up" class="dropdown-icon-secondary" v-else />
    </MenuButton>
    <MenuItems class="dropdown-menu">
      <MenuItem v-for="(field, idx) in fields" :key="idx" as="li" @click="setSelected(field)"
        class="cursor-pointer hover:text-secondary transition">
      {{ field }}
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref } from 'vue'

const props = defineProps({
  fields: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
  },
  icon: {
    type: String
  },
  menuBtnClass: {
    type: String,
    default: ""
  }
})

const isOpen = ref(false)

const selectedField = ref(props.fields[0])

const setSelected = (selected) => {
  selectedField.value = selected
}
</script>