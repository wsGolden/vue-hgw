<template>
  <div id="app">

    <router-view/>
    <app-footer-wrap></app-footer-wrap>
  </div>
</template>

<script>

import AppFooterWrap from './components/common/Footer-wrap'
export default {
  name: 'App',
  components:{
    AppFooterWrap
  }
}
</script>

<style>
/*@import './stylesheets/_reset.scss';*/
@import './stylesheets/_common.scss';
@import './stylesheets/_reset1.scss';
</style>
