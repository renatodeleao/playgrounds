<script>
export default {
  compatConfig: {
    MODE: 3,
    COMPONENT_V_MODEL: false,
    INSTANCE_LISTENERS: false,
  },
  name: 'AppInput',
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
	<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>