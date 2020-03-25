import firebase from 'firebase';

export function buildFirebase() {
  if (firebase.apps.length === 0) {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyCK4txQNunXrmfWdHtGJz2wAdFuG4aeOV8",
      authDomain: "codenationtrivia2020.firebaseapp.com",
      databaseURL: "https://codenationtrivia2020.firebaseio.com",
      projectId: "codenationtrivia2020",
      storageBucket: "codenationtrivia2020.appspot.com",
      messagingSenderId: "114921016465",
      appId: "1:114921016465:web:c3b899873761f7d441c330",
      measurementId: "G-TV8D2G83BB",
    });
    return firebase.database(app);
  } else {
    return firebase.apps[0].database();
  }
}

export function getRandomQuestion(questions) {
  var keys = Object.keys(questions)
  const randomIndex = Math.floor(Math.random() * keys.length);
  return questions[keys[randomIndex]];
}
