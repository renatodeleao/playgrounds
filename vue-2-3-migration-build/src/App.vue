<script>
import AppInputField from './components/AppInputField.vue'

export default {
  name: 'App',
  components: {
    AppInputField
  },
  data: () => ({
    msg: `I am not v-modeled because @vue/compat does not forward $attrs
    correctly when <component :is="someComp" v-bind="$attrs" />`
  })
}
</script>

<template>
  <AppInputField label="My input" v-model="msg" />
  {{ msg }}
  <div class="alert">
    <small>
      Go go <code>vite.config.js</code> and remove <code>@vue/compat</code>
      alias and vue template compiler options from <code>vue()</code> plugin
      and you'll see that <code>msg</code> above is updated correctly when
      typing on input.
    </small>
  </div>
</template>

<style scoped>
.alert {
  background: yellow;
  padding: 16px;
  color: black;
}
</style>
