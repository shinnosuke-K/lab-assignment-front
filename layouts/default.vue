<template>
  <div>
    <LoginedHeader />
    <Nuxt />
  </div>
</template>

<script>
import LoginedHeader from '@/components/LoginedHeader'

export default {
  components: {
    LoginedHeader,
  }
}
</script>

<style>
html {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 62.5%;
}

body {
  margin: 0px;
}

</style>