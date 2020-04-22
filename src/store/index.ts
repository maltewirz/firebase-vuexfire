import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from '../../firebaseConfig'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

// Required for side-effects
require('firebase/firestore')
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      users: []
  },
  mutations: {
      ...vuexfireMutations
  },
  actions: {
    bindUsers: firestoreAction(({ bindFirestoreRef }) => {
        return bindFirestoreRef('users', db.collection('users'))
    }),
    unbindUsers: firestoreAction(({ unbindFirestoreRef }) => {
        unbindFirestoreRef('users')
    }),
    saveFromDatabase: () => {
        db.collection('users').add({
            first: 'Ada2',
            last: 'Lovelace',
            born: 1815
          })
            .then(function (docRef) {
              console.log('Document written with ID: ', docRef.id)
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
      },
    loadFromDatabase: () => {
        console.log(db.collection('users').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`)
          })
        }))
    }
  },
  modules: {
  }
})
