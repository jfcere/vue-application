<template>
  <v-layout>
    <v-flex>
      <h3 xs12>Home</h3>
      <v-card xs12>
        <v-card-media src="static/md-bg01.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div>{{ text }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Feels good to be home!',
      text: 'Using Vue.js with Vuetify.js can make a sweet single application with Material Design specifications.'
    }
  }
}
</script>
