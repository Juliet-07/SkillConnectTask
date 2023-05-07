// import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { Text, View } from 'react-native';

  export default function App() {
    return (
    <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-red-400 text-md font-bold mt-2">
            Open up App.js to start working on your app!
        </Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }

// import tw from 'tailwind-react-native-classnames';
// import React from 'react';
// import {Text, View} from 'react-native';

// const App = () => (
//   <View style={tw`bg-black flex-1`}>
//     <Text style={tw.style('text-red-500 p-4 my-20 font-semibold text-2xl')}>Hello World!</Text>
//   </View>
// );
// export default App;
