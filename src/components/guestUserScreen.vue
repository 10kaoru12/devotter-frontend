<template>
  <v-container pa-12 fill-height>
    <v-layout align-center text-center wrap>
      <v-flex xs12>
        <v-alert v-model="alert" type="error" dismissible>無効なAtCoderIDです。</v-alert>
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
            color="green"
            required
          ></v-text-field>
        </v-form>
        <v-btn @click="signin" v-bind:disabled="isnull" color="#00acee" rounded>Signin To Twitter</v-btn>
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
      axios
        .get(this.userApi + this.atcoderId)
        .then(response => {
          this.userInfo = response;
          const provider = new firebase.auth.TwitterAuthProvider();
          firebase.auth().signInWithPopup(provider);
          // .then(function(result) {
          //   var token = result.credential.accessToken;
          //   var secret = result.credential.secret;
          // });
        })
        .catch(() => {
          this.alert=true;
          this.userInfo = "無効なAtCoderID名です。";
        });
    },
    changeField: function() {
      !this.atcoderId ? (this.isnull = true) : (this.isnull = false);
    }
  },
  data: function() {
    return {
      atcoderId: "",
      isnull: true,
      userInfo: "",
      userApi: "https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=",
      alert: false
    };
  }
};
</script>
