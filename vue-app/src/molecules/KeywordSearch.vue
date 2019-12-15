<template>
  <form class="form-inline">
    <Input />
    <Button>Pesquisar</Button>
  </form>
</template>

<script>
import Input from '../atoms/Input.vue';
import Button from '../atoms/Button.vue';

export default {
  name: 'KeywordSearch',
  components: { Input, Button },
};
</script>

<style scoped>

</style>
