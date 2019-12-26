<template>
  <v-container>
    <v-layout text-center wrap justify-center>
      <v-flex xs12>
        <v-img :src="require('../assets/thai monk.svg')" class="my-3" contain height="200"></v-img>
        <v-btn>Signin Twitter</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    //
  })
};
</script>
