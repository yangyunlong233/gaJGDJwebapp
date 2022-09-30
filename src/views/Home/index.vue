<template>
  <div id="Home" class="home">
    <topCover />
    <mainNav />
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
export default {
  name: 'Home',
  components: {
    topCover,
    mainNav
  }
}
</script>

<style lang="scss">

</style>
