import { writeFile } from 'fs';

// Configure Angular `environment.ts` file path
const targetDevPath = './src/environments/environment.ts';
const targetProdPath = './src/environments/environment.prod.ts';

// Load node modules
const colors = require('colors');
require('dotenv').config({ path: 'variables.env' });

// `environment.ts` file structure
const envConfigDevFile = `export const environment = {
    production: false,
    firebase: {
      apiKey: "${process.env.API_KEY}",
      authDomain: "${process.env.AUTH_DOMAIN}",
      databaseURL: "${process.env.DB_URL}",
      projectId: "${process.env.PROJECT_ID}",
      storageBucket: "${process.env.STORAGE_BUCKET}",
      messagingSenderId: "${process.env.MSG_SENDER_ID}",
      appId: "${process.env.APP_ID}",
      measurementId: "${process.env.MEASURE_ID}"
    }
  };
`;

const envConfigProdFile = `export const environment = {
    production: true,
    firebase: {
      apiKey: "${process.env.API_KEY}",
      authDomain: "${process.env.AUTH_DOMAIN}",
      databaseURL: "${process.env.DB_URL}",
      projectId: "${process.env.PROJECT_ID}",
      storageBucket: "${process.env.STORAGE_BUCKET}",
      messagingSenderId: "${process.env.MSG_SENDER_ID}",
      appId: "${process.env.APP_ID}",
      measurementId: "${process.env.MEASURE_ID}"
    }
  };
`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigDevFile));

writeFile(targetDevPath, envConfigDevFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetDevPath} \n`));
  }
});

writeFile(targetProdPath, envConfigProdFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetProdPath} \n`));
  }
});