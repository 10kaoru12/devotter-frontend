<template>
  <v-app>
    <v-content>
      <guestUserScreen />
    </v-content>
  </v-app>
</template>

<script>
import guestUserScreen from "./components/guestUserScreen";

export default {
  name: "App",

  components: {
    guestUserScreen
  },

  data: () => ({
    //
  })
};
</script>
