import firebase from 'firebase';

const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      // fake reject
      // reject(new Error('Custom error'));

      // fake resolve
      setTimeout(() => {
        const u = firebase.auth().currentUser;
        resolve({
          id: u.uid,
          name: u.displayName,
          email: u.email,
          photUrl: u.photoURL,
        });
      }, 500);
    });
  },
};

export default userApi;
