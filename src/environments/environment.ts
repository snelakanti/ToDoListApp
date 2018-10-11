// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyADv5Sn1FURbj0PYNVr26iLe03LCFISccM",
    authDomain: "todolistapp-daa7b.firebaseapp.com",
    databaseURL: "https://todolistapp-daa7b.firebaseio.com",
    projectId: "todolistapp-daa7b",
    storageBucket: "todolistapp-daa7b.appspot.com",
    messagingSenderId: "776821098138"
  }
};
