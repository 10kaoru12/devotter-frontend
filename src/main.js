import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCAlYJWD6Fk1ylcq9QwjAM7bqj7loI2QAU",
  authDomain: "atcontributter.firebaseapp.com",
  databaseURL: "https://atcontributter.firebaseio.com",
  projectId: "atcontributter",
  storageBucket: "atcontributter.appspot.com",
  messagingSenderId: "93599545189",
  appId: "1:93599545189:web:2fdddb474d5da84332938c",
  measurementId: "G-TQBNMQY9XY"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
