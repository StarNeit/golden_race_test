// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  graphAD: 'https://graph.microsoft.com/v1.0/me',
  activeDirectory: {
    clientId: 'c70737a2-3736-40d4-962b-6e27292d72f1',
    authority: 'https://login.microsoftonline.com/organizations',
    redirectUri: 'http://localhost:4200/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
