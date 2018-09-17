<template>
  <v-app>
    <div class="main">
      <transition :name="transitionName" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: null
    };
  }
};
</script>

<style lang="scss">
@import '../src/assets/scss/index.scss';
</style>
