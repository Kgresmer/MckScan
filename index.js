/**
 * @format
 */

import {AppRegistry, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

TextInput.defaultProps.selectionColor = 'white';

AppRegistry.registerComponent(appName, () => App);
