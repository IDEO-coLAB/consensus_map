<template>
  <div class="layout">
    <div class="vue-logo">
      <img src="./assets/vue-logo.png" alt="vue">
    </div>
    <v-header></v-header>
    <div class="vue-views">
      <transition name="fade" mode="out-in">
        <!-- used with preserve component state or avoid re-rendering. -->
        <!-- see: https://vuejs.org/v2/api/#keep-alive -->
        <keep-alive v-if="$route.meta && $route.meta.keepAlive !== false">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
        <!--<keep-alive>
          <router-view></router-view>
        </keep-alive>-->
      </transition>
    </div>
  </div>
</template>
<script>
  // import logo from './assets/vue-logo.png'
  // import store from '../../store'
  import _ from 'lodash'

  // import VHeader from '@/components/VHeader'
  import { mapState } from 'vuex'
  import * as mutationTypes from '../../store/mutation-types'
  import * as actionTypes from '../../store/action-types'
  import VHeader from '../../components/VHeader'

  export default {
    data() {
      return {
        // logo
      }
    },
    computed: mapState([
      'breadcrumbs'
    ]),
    mounted() {
      this.$store.dispatch(actionTypes.LOAD_NETWORKS)

      this.$router.afterEach((to, from) => {
        const prevBreadcrumb = _.head(this.breadcrumbs)
        const startBreadcrumb = _.last(this.breadcrumbs)

        const fromBreadcrumb = from.meta.breadcrumb
        const toBreadcrumb = to.meta.breadcrumb

        // TOC wipes breadcrumbs
        // TODO: handle more cleanly
        if (!fromBreadcrumb || !toBreadcrumb) {
          this.$store.commit(mutationTypes.CLEAR_BREADCRUMBS)
          return
        }

        // If there is no previous breadcrumb, add it
        if (_.isNil(prevBreadcrumb)) {
          this.$store.commit(mutationTypes.ADD_BREADCRUMB, fromBreadcrumb)
          return
        }

        // If user immediately navigates back the page that was their
        // previous breadcrumb, remove the previous breadcrumb
        const toWasPrev = prevBreadcrumb &&
          prevBreadcrumb.id === toBreadcrumb.id
        if (toWasPrev) {
          this.$store.commit(mutationTypes.REMOVE_BREADCRUMB, toBreadcrumb)
          return
        }

        // If user navigates to the page that was their starting
        // point, remove all breadcrumbs and start anew
        const toWasStart = startBreadcrumb &&
          startBreadcrumb.id === toBreadcrumb.id
        if (toWasStart) {
          this.$store.commit(mutationTypes.CLEAR_BREADCRUMBS, toBreadcrumb)
          return
        }

        // TODO: handling for deeper areas
        // const fromIndex = _.findIndex(this.breadcrumbs, (b) => {
        //   return b.id === toBreadcrumb.id
        // })
        // console.log('FROM INDEX:', fromIndex)
        // if (fromIndex > -1) {
        //   _.times(fromIndex, (index) => {
        //     const crumb = this.$store.breadcrumbs[index]
        //     console.log('REMOVING IN ITERATOR:', crumb)
        //     this.$store.commit(mutationTypes.REMOVE_BREADCRUMB, crumb)
        //   })
        //   return
        // }

        this.$store.commit(mutationTypes.ADD_BREADCRUMB, fromBreadcrumb)
      })
    },
    components: {
      VHeader
    }
  }
</script>

<style src="./MainLayout.scss" lang="scss"></style>
