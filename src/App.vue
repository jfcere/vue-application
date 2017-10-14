<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <span>Menu</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <template v-for="item in items">
          <v-list-tile :href="item.href" :to="{ name: item.href }">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-content>
    </main>
    <v-footer color="blue" app>
      <span class="white--text">&copy; 2017 - github.com/jfcere</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      items: [
        {
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home'
        },
        {
          href: 'helloWorld',
          router: true,
          title: 'Hello World',
          icon: 'extension'
        }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
