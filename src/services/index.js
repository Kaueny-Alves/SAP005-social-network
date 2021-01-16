import { onNavigate } from '../utils/history.js';

export const createUser = (email, password, name, lastName, talents = 'cantar') => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      const user = firebase.auth.currentUser;
      cred.user.updateProfile({ displayName: `${name}${' '}${lastName} ` });
      firebase
        .firestore()
        .collection('Usuarios')
        .doc(user)
        .set({ name, lastName, talents });
      alert('Usuário cadastrado com sucesso');
      onNavigate('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim', errorMessage, errorCode);
      if (errorCode === 'auth/email-already-in-use') {
        return alert('Email e-mail já cadastrado');
      }
      if (errorCode === 'auth/weak-password') {
        return alert('A senha deve ter no minimo 6 caracteres');
      }

      return `Codigo de error: ${errorCode}`;
    });
};

export const userLogin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.alert('usuário Logado com sucesso');
      onNavigate('/feed');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim', errorMessage, errorCode);
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email') {
        return alert('Email ou Senha incorreta!');
      }

      return `Codigo de error: ${errorCode}`;
    });
};

export const gmailLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user, 'Usuário Logado com o google com sucesso', token);
      return (user, token);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log('deu ruim,Usuário não foi logado', errorCode, errorMessage, email, credential);
    });
};

export const userLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('usuário deslogado com sucesso');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim, usuário continua logado', errorMessage, errorCode);
    });
};

export const getPosts = () => (
  firebase
    .firestore()
    .collection('Posts')
    .get()
    .then((result) => result.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })))
);

export const getUsers = () => {
  const dbUsers = firebase.firestore().collection('Usuarios').get();

  dbUsers.then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      return doc.data();
    });
  });
};

export const createPost = (post) => {
  const db = firebase.firestore();
  db.collection('Posts')
    .add({
      uidPost: firebase.auth().currentUser.uid,
      user: firebase.auth().currentUser.displayName,
      post,
      likes: [],
      comments: [],
    }).then(
      console.log('post criado com sucesso'),

    )
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('deu ruim, post não foi criado.', errorMessage, errorCode);
    });
};

export const deletePost = (doc) => {
  firebase.firestore().collection('Posts').doc(doc).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
