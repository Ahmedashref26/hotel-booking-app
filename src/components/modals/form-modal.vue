<template>
  <BaseModal :show="show" @close="emit('close')">
    <div class="p-8 flex flex-col gap-4">
      <div class="group relative  w-full">
        <label for="name"
          class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-secondary">Full
          Name</label>
        <input id="name" type="text" v-model="form.name"
          class="peer h-10 w-full rounded-md bg-gray-200 px-4  font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-secondary" />
      </div>
      <div class="group relative  w-full">
        <label for="email"
          class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-secondary">Email</label>
        <input id="email" type="text" v-model="form.email"
          class="peer h-10 w-full rounded-md bg-gray-200 px-4  font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-secondary" />
      </div>
      <div class="group relative  w-full">
        <label for="1"
          class="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-secondary">Phone
          Number</label>
        <vue-tel-input v-model="form.phoneNumber" mode="international"
          class="peer h-10 w-full rounded-md  px-4 font-normal outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-secondary"
          validCharactersOnly autoDefaultCountry :inputOptions="options"
          :dropdownOptions="telDropOptions"></vue-tel-input>
      </div>
      <button class="bg-red-400 text-white px-4 py-3 rounded-lg transition w-full" @click="doSubmit">Submit</button>
    </div>
  </BaseModal>
</template>
<script setup>
import { ref } from 'vue';
import BaseModal from './base-modal.vue'
import { useBookingStore } from '@/store'
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()
const emit = defineEmits(['close'])

const { bookAHotel } = useBookingStore()

const form = ref({
  name: "",
  email: "",
  phoneNumber: ""
})
const options = { placeholder: "Enter Your Phone Number", showDialCode: false };
const telDropOptions = {
  showFlags: true,
};

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  }
})

const isFormValid = () => {
  for (const field in form.value) {
    if (form.value[field].length === 0) {
      notify({ type: "error", text: "Please fill all fields" });
      return false
    }
  }
  return true
}

const doSubmit = () => {
  if (isFormValid()) {
    bookAHotel(props.id, form.value)
    notify({ type: "success", text: "Thank you for booking with Us" });
    form.value = {
      name: "",
      email: "",
      phoneNumber: ""
    }
    emit('close')
  }
}
</script>

<style>
.vue-tel-input {
  direction: ltr !important;
  height: 38px;
  outline: none !important;
  box-shadow: none !important;
}
</style>