import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View, ScrollView, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <ScrollView>
      <View className="flex-1 items-center">
        {/* back button view profile */}
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        {/* profile picture */}
        <View className="w-[107px] h-[107px] rounded-full mt-10 bg-blue-300">
          <Image source={require('../assets/profile.png')} />
        </View>
        {/* name and role */}
        <View className="flex flex-col justify-center items-center mt-4">
          <Text className="text-[#000000] font-bold text-xl">
            Samuel Dominic
          </Text>
          <Text className="text-[#000000]/50 text-base">
            Fashion Designer, Male
          </Text>
          <Text className="text-[#000000] text-base font-bold">stars 5.0</Text>
        </View>
        {/* location and contact */}
        <View className="flex flex-col mt-4 bg-red-600">
          <View className="flex flex-row items-center justify-between w-[350px]">
            <View className="flex-row items-center">
              <Icon name="arrowleft" size={20} color="black" className="" />
              <Text>Lagos, Nigeria</Text>
            </View>
            <View className="flex-row items-center">
              <Icon name="arrowleft" size={20} color="black" />
              <Text>+2348139703721</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-[350px] my-4">
            <View className="flex-row items-center">
              <Icon name="arrowleft" size={20} color="black" />
              <Text>samdee@gmail.com</Text>
            </View>
            <View className="flex-row items-center">
              <Text>Experience</Text>
              <Text className="bg-green-300 ml-2">Expert</Text>
            </View>
          </View>
        </View>
        {/* button */}
        <Button
          // onPress={onPressLearnMore}
          title="Send Message"
          color="#841584"
          // className="bg"
        />
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <View className="flex flex-row justify-center items-center mt-10">
          <Icon name="arrowleft" size={30} color="black" className="mr-2" />
          <Text className="text-[#0044c0] text-md font-bold text-2xl 7">
            View Profile
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};
export default App;
