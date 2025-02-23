import Vue from 'vue';
import VueFire from "vuefire";
import firebase from 'firebase/app';
import 'firebase/firestore';

import App from './App.vue';
import router from './router';
import "./firebaseConfig";


Vue.use(VueFire);

Vue.config.productionTip = false;

export const db = firebase.firestore();

let app;

//Wrap app creation in onAuthStateChanged or page reloads dont work
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
        el: '#app',
        router,
        render: h => h(App),
        isHidden: false,
        isHidden2: false

    })
  }
})
