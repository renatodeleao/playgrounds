<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  compatConfig: {
    MODE: 3,
    COMPONENT_V_MODEL: false,
    INSTANCE_LISTENERS: false,
  },
  name: "AppInputField",
  components: {
    AppInput: defineAsyncComponent(() => import('./AppInput.vue')),
  },
  inheritAttrs: false,
  props: {
    label: String,
  },
  computed: {
    curComponent() {
      // in real-world this would be dynamically set
      return 'AppInput'
    }
  }
});
</script>

<template>
  <div class="app-input-field">
    <label class="app-input-field__label">
      {{ label }}
    </label>
    <div class="app-input-field__wrapper">
      <component :is="curComponent" v-bind="$attrs" />
    </div>
  </div>
</template>