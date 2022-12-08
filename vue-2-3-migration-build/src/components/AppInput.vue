<script>
export default {
  name: 'AppInput',
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
	<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>