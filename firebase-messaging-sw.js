// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBQJ0qjzjnmWpgTLFh0Q_xEVzzy-spVfp4",
  authDomain: "daycare-f895d.firebaseapp.com",
  projectId: "daycare-f895d",
  storageBucket: "daycare-f895d.appspot.com",
  messagingSenderId: "898229872640",
  appId: "1:898229872640:web:385475234ff6b73c6390e5",
  measurementId: "G-470P1VBDLB"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
