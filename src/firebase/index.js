import * as firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);

const dbRef = firebase.database().ref();

export const logsRef = dbRef.child('logs');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
