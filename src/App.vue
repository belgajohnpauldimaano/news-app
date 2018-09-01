<template>
  <v-app>
    <v-toolbar
      app
      color="blue darken-4"
      dark
    >
      <v-toolbar-title color="x" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <ArticlesPage/>
    <v-footer :fixed="true" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import ArticlesPage from './pages/ArticlesPage'
export default {
  name: 'app',
  components: {
    ArticlesPage
  },
  data () {
    return {
      title: "News"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
