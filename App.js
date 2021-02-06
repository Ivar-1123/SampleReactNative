import React from 'react'
import { createStackNavigator } from 'react-native'
import { NavigationContainer } from 'react-native';
// Importing components
// import Heading from './Components/heading'

import Home from './screens/home'
import CounterScreen from './screens/counterScreen'

const App = () => {
  return (
    // <Home></Home>
    <CounterScreen />
  )
}

// const styles = StyleSheet.create({

// });

export default App;
