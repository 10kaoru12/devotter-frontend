<template>
  <v-container pa-12 fill-height>
    <v-layout align-center text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/thai monk.svg')" class="my-3" contain height="200"></v-img>
        <h1>「Devotter」</h1>
        <h2>
          その精進
          <br />ツイートしませんか
        </h2>
        <br />
        <h5>このアプリケーションは、1日1回AtCoderでのAC数をTwitterにツイートしてくれるアプリケーションです。</h5>
        <br />
        <v-form>
          <v-text-field
            @change="changeField"
            type="text"
            v-model="atcoderId"
            label="AtCoderID"
            required
          ></v-text-field>
        </v-form>
        <v-btn @click="signin" v-bind:disabled="isnull" color="#00acee" rounded>Signin To Twitter</v-btn>
        {{userInfo}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
import axios from "axios";

export default {
  name: "guestUserScreen",
  methods: {
    signin: function() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      // .then(function(result) {
      //   var token = result.credential.accessToken;
      //   var secret = result.credential.secret;
      // });
    },
    changeField: function() {
      !this.atcoderId ? (this.isnull = true) : (this.isnull = false);

    }
  },
  created: function() {
    axios
      .get("https://kenkoooo.com/atcoder/resources/ac.json")
      .then(response => {
        this.userInfo = response;
      })
      .catch(() => {
        this.userInfo = "無効なAtCoderID名です。";
      });
    // eslint-disable-next-line no-console
    console.log(this.userInfo);
  },
  data: function() {
    return {
      atcoderId: "",
      isnull: true,
      userInfo: ""
    };
  }
};
</script>
