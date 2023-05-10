import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View, ScrollView, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Work from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'react-native-linear-gradient';

const App = () => {
  return (
    <ScrollView>
      <View className="flex-1 items-center">
        {/* back button view profile */}
        <View className="w-[342px] flex flex-row justify-center items-center mt-10">
          <View className="relative right-24">
            <Icon name="arrowleft" size={30} color="black" />
          </View>
          <Text className="text-[#0044c0] font-carlito font-bold text-2xl">
            View Profile
          </Text>
        </View>
        {/* profile picture */}
        <View className="w-[107px] h-[107px] rounded-full mt-8 bg-blue-300">
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
          <View className="flex-row items-center">
            <MaterialIcons name="star-rate" size={10} color="#968702" />
            <MaterialIcons name="star-rate" size={10} color="#968702" />
            <MaterialIcons name="star-rate" size={10} color="#968702" />
            <MaterialIcons name="star-rate" size={10} color="#968702" />
            <MaterialIcons name="star-rate" size={10} color="#968702" />
            <Text className="font-bold text-black ml-2">5.0</Text>
          </View>
        </View>
        {/* location and contact */}
        <View className="flex flex-col mt-4">
          <View className="flex flex-row items-center justify-between w-[350px] text-black/50">
            <View className="flex-row items-center">
              <Location
                name="location"
                size={20}
                color="#0044C0"
                className=""
              />
              <Text>Lagos, Nigeria</Text>
            </View>
            <View className="flex-row items-center">
              <Feather name="phone" size={20} color="#0044C0" />
              <Text>+2348139703721</Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between w-[350px] my-4">
            <View className="flex-row items-center">
              <MaterialIcons name="mail-outline" size={20} color="#0044C0" />
              <Text className="ml-1">samdee@gmail.com</Text>
            </View>
            <View className="flex-row items-center">
              <Text>Experience</Text>
              <Text className="bg-blue-200 ml-2 rounded w-[52px] h-[20px] px-1 text-black">
                Expert
              </Text>
            </View>
          </View>
        </View>
        {/* button */}
        <View className="w-[342px] h-10 rounded bg-[#0044c0]/100 flex-row items-center justify-center">
          <Feather name="cloud-snow" size={20} color="white" />
          <Text className="text-white font-semibold ml-2">Send Message</Text>
        </View>
        {/* dividers */}
        <View className="w-[342px] border border-[#000000]/10 my-5"></View>
        <View className="w-[342px]">
          <Text className="font-bold text-[#0044C0] my-2">
            Join Date:<Text className="ml-1 text-black">19th August, 2021</Text>
          </Text>
          <Text className="font-bold text-[#0044C0]">
            Completed Jobs:
            <Text className="ml-1 text-black">300</Text>
          </Text>
          <Text className="font-bold text-[#0044C0] my-2">
            Last Seen:<Text className="ml-1 text-black">4 hours ago</Text>
          </Text>
        </View>
        <View className="w-[342px] border border-[#000000]/10 my-5"></View>
        {/* summary */}
        <View className="w-[342px] h-[188px] rounded-xl border border-[#0044c0]/20">
          <View className="flex-row items-center m-4">
            <Image source={require('../assets/Vector.png')} />
            <Text className="text-black font-bold ml-4">Summary</Text>
          </View>
          <View className="w-[342px] border border-[#0044c0]/20 mb-4"></View>
          <View className="w-[302px] h-[97px] mx-5">
            <Text className="text-xs">
              There has been a password update on your account. Kindly reach out
              to us immediately if this isn't your doing. There has been a
              password update on your account. Kindly reach out to us
              immediately if this isn't your doing. There has been a password
              update on your account. Kindly reach out to us immediately if this
              isn't your doing.{' '}
            </Text>
          </View>
        </View>
        {/* work experience */}
        <View className="w-[342px] h-[225px] rounded-xl border border-[#0044c0]/20 my-6">
          <View className="flex-row items-center m-4">
            <Image source={require('../assets/briefcase.png')} />
            <Text className="text-black font-bold ml-4">Work Experience</Text>
          </View>
          <View className="w-[342px] border border-[#0044c0]/20 mb-4"></View>
          <View className="w-[302px] mx-5">
            <View className="flex-row">
              <View className="w-10 h-10 bg-[#0044c0]/10 rounded-md flex items-center justify-center mr-4">
                <Text className="font-bold text-[#0044c0] text-xl">S</Text>
              </View>
              <View>
                <Text className="font-semibold text-[#0044c0] text-base">
                  CEO/Founder
                </Text>
                <Text className="text-black font-semibold">
                  Samdom Fashion House
                </Text>
                <Text>June 2018 - Present</Text>
              </View>
            </View>
            <View className="flex-row mt-5">
              <View className="w-10 h-10 bg-[#0044c0]/10 rounded-md flex items-center justify-center mr-4">
                <Text className="font-bold text-[#0044c0] text-xl">M</Text>
              </View>
              <View>
                <Text className="font-semibold text-[#0044c0] text-base">
                  Tailoring Apprentice
                </Text>
                <Text className="text-black font-semibold">
                  Maydan Tailoring House
                </Text>
                <Text>June 2011 - May 2018</Text>
              </View>
            </View>
          </View>
        </View>
        {/* skills */}
        <View className="w-[342px] h-[179px] rounded-xl border border-[#0044c0]/20">
          <View className="flex-row items-center m-4">
            <MaterialIcons name="insert-chart" size={20} color="#0044c0" />
            <Text className="text-black font-bold ml-4">Skills</Text>
          </View>
          <View className="w-[342px] border border-[#0044c0]/20 mb-4"></View>
          <View className="w-[302px] mx-5">
            <View className="flex-row">
              <View className="w-[93px] h-[34px] items-center justify-center mr-4 border border-[#0044c0] rounded-[20px]">
                <Text className="text-black">Fitting</Text>
              </View>
              <View className="w-[93px] h-[34px] items-center justify-center border border-[#0044c0] rounded-[20px]">
                <Text className="text-black">Sewing</Text>
              </View>
            </View>
            <View className="flex-row">
              <View className="w-[153px] h-[34px] items-center justify-center mr-4 mt-3 border border-[#0044c0] rounded-[20px]">
                <Text className="text-black">Measurement Taking</Text>
              </View>
              <View className="w-[118px] h-[34px] items-center justify-center mt-3 border border-[#0044c0] rounded-[20px]">
                <Text className="text-black">Amendment</Text>
              </View>
            </View>
          </View>
        </View>
        {/* portfolio */}
        <View className="w-[342px] h-[237px] rounded-xl border border-[#0044c0]/20 my-6">
          <View className="flex-row items-center m-4">
            <Image source={require('../assets/Vector.png')} />
            <Text className="text-black font-bold ml-4">Job Portfolio</Text>
          </View>
          <View className="w-[342px] border border-[#0044c0]/20 mb-4"></View>
          <View className="w-[302px] mx-5 mt-4 flex-row">
            <View className="w-[93px] h-[108px]">
              <Image
                source={require('../assets/ankara.png')}
                className="rounded"
              />
              <Text className="text-black">Ankara Gown</Text>
            </View>
            <View className=" h-[109px] mx-3">
              <Image
                source={require('../assets/suit.png')}
                className="rounded"
              />
              <Text className="text-black">3-Piece Suit</Text>
            </View>
            <View className="w-[95px] h-[122px]">
              <Image
                source={require('../assets/jumpsuit.png')}
                className="rounded"
              />
              <Text className="text-black">Jumpsuit Dress</Text>
            </View>
          </View>
        </View>
        {/* ratings */}
        <View className="w-[342px] h-[331px] rounded-xl border border-[#0044c0]/20 mb-6">
          <View className="flex-row items-center justify-between m-4">
            <View className="flex-row items-center">
              <MaterialIcons name="star" size={20} color="#0044c0" />
              <Text className="text-black font-bold ml-4">
                Ratings and Reviews (8)
              </Text>
            </View>
            <Text className="text-black underline">See More</Text>
          </View>
          <View className="w-[342px] border border-[#0044c0]/20 mb-4"></View>
          <View className="flex-row items-center justify-between my-2 mx-4">
            <View className="flex-row items-center">
              <Image source={require('../assets/rate.png')} />
              <View className="ml-2">
                <Text className="text-black font-bold">Allen Daniels</Text>
                <View className="flex-row items-center">
                  <MaterialIcons name="star-rate" size={10} color="#968702" />
                  <MaterialIcons name="star-rate" size={10} color="#968702" />
                  <MaterialIcons name="star-rate" size={10} color="#968702" />
                  <MaterialIcons name="star-rate" size={10} color="#968702" />
                  <MaterialIcons name="star-rate" size={10} color="#968702" />
                  <Text className="font-bold text-black">5.0</Text>
                </View>
              </View>
            </View>
            <Text className="text-black">17 Hours Ago</Text>
          </View>
          <View className="w-[302px] h-[97px] mx-5">
            <Text className="text-xs">
              There has been a password update on your account. Kindly reach out
              to us immediately if this isn't your doing. There has been a
              password update on your account. Kindly reach out to us
              immediately if this isn't your doing. There has been a password
              update on your account. Kindly reach out to us immediately if this
              isn't your doing.{' '}
            </Text>
            <View className="w-[283px] border border-[#0044c0]/20 my-4"></View>
          </View>
          <View className="w-[311px] h-[61px] rounded-xl border border-[#0044c0] flex items-center justify-center mt-8 mb-4 mx-5">
            <Text className="text-[#0044c0] font-semibold">Write a Review</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};
export default App;
