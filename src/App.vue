<template>
  <v-app id="app">
    <v-navigation-drawer app>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar
      color="primary"
      dense
      dark
      app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Shell Dia</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        30º
      </v-btn>
    
    </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer
    app
    dark
    padless>

    <v-card
      class="flex"
      flat
      tile>

      <v-card-text class="py-0 white--text text-center">
        {{ new Date().getFullYear() }} — <strong> DDarkCoder </strong>
      </v-card-text>
    </v-card>
     </v-footer>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  mounted() {
  
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
