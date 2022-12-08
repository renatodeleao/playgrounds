<script>
import { defineComponent } from "vue";
import AppInput from './AppInput.vue'

export default defineComponent({
  name: "AppInputField",
  components: {
    AppInput,
  },
  inheritAttrs: false,
  props: {
    label: String,
  }
});
</script>

<template>
  <div class="app-input-field">
    <label class="app-input-field__label" :for="uid">
      {{ label }}
    </label>
    <div class="app-input-field__wrapper">
      <app-input v-bind="$attrs" />
    </div>
  </div>
</template>