import firebase from 'firebase'
export const state = () => ({
    user: null
})
export const mutations = {
  setUser (state, payload) {
      state.user = payload
    }
}

export const actions = {
  signUserUp ({commit}, payload) {
      
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            
            // commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserInGoogle ({commit}) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          user => {
            const newUser = {
              id: user.user.uid,
              name: user.user.displayName,
              email: user.user.email,
              photoUrl: user.user.photoURL
            }
            //console.log(newUser)
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    // signUserInFacebook ({commit}) {
    //   
    //   commit('clearError')
    //   firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //     .then(
    //       user => {
    //         
    //         const newUser = {
    //           id: user.uid,
    //           name: user.displayName,
    //           email: user.email,
    //           photoUrl: user.photoURL
    //         }
    //         commit('setUser', newUser)
    //       }
    //     )
    //     .catch(
    //       error => {
    //         
    //         commit('setError', error)
    //         console.log(error)
    //       }
    //     )
    // // },
    // signUserInGithub ({commit}) {
    //   
    //   commit('clearError')
    //   firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
    //     .then(
    //       user => {
    //         
    //         const newUser = {
    //           id: user.uid,
    //           name: user.displayName,
    //           email: user.email,
    //           photoUrl: user.photoURL
    //         }
    //         commit('setUser', newUser)
    //       }
    //     )
    //     .catch(
    //       error => {
    //         
    //         commit('setError', error)
    //         console.log(error)
    //       }
    //     )
    // },
   
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    resetPasswordWithEmail ({ commit }, payload) {
      const { email } = payload
      .auth().sendPasswordResetEmail(email)
      .then(
        () => {
          console.log('Email Sent')
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
}
export const getters = {
  getUser: (state) => {
      return state.user
    }
}
// export const getters = {
//   getName: (state) => {
//     return state.mistica.name
//   }
// }