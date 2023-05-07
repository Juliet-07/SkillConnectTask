/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import App from './src/task';
// import App from './Sample';

AppRegistry.registerComponent(appName, () => App);
