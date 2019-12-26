<template>
  <v-container fluid fill-height>
    <v-layout align-center text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/thai monk.svg')" class="my-3" contain height="200"></v-img>
        <h1>
          「Devotter」
          <br />その精進
          <br />ツイートしませんか
        </h1>
        <br />
        <h5>
          このアプリケーションは、1日1回AtCoderでのAC数を
          <br />Twitterにツイートしてくれるアプリケーションです。
        </h5>
        <br />
        <v-btn @click="signin" color="#00acee">Signin Twitter</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import firebase from 'firebase';

export default {
  name: "guestUserScreen",
  methods: {
    signin: function() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>
