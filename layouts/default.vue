<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header,
  }
}
</script>

<style>
html {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>