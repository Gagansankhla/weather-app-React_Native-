import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  const handleLocation = (loc) => {
    console.log("location: ", loc);
  };
  return (
    <View className="flex-1 relative">
      <Text>homescreen</Text>
      <StatusBar style="light" />
      <Image
        blurRadius={12}
        source={require("../assets/cloudy.jpg")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end item-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"white"}
                className="pl-6 h-10 pt-2 flex-1 text-base text-gray-300"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-white top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder = index + 1 != locations.length;
                let borderClass = showBorder
                  ? "border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 " + borderClass
                    }
                  >
                    <MapPinIcon color="black" size="20" />
                    <Text className="text-gray text-lg ml-2">Delhi, India</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <View className="mx-4 flex justify-around flex-1 mb-2">
          <Text className="text-white text-center text-2xl font-bold">
            Delhi,
            <Text className="text-lg font-semibold text-gray"> India</Text>
          </Text>
          <View className="flex-row justify-center">
            <Image
              source={require("../assets/sunny.png")}
              className="w-52 h-52"
            />
          </View>
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23&#176;
            </Text>
            <Text className="text-center text-white text-xl tracking-widest">
              Partly Cloudy
            </Text>
          </View>
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center shadow-2xl">
              <Image
                source={require("../assets/wind.png")}
                className="h-11 w-11"
              />
              <Text className="text-white font-semibold text-base">22km</Text>
            </View>
            <View className="flex-row space-x-2 items-center shadow-2xl">
              <Image
                source={require("../assets/sun.png")}
                className="h-9 w-9"
              />
              <Text className="text-white font-semibold text-base">
                6:30 AM
              </Text>
            </View>
            <View className="flex-row space-x-2 items-center shadow-2xl">
              <Image
                source={require("../assets/humid.png")}
                className="h-8 w-5"
              />
              <Text className="text-white font-semibold text-base">23%</Text>
            </View>
          </View>
        </View>
        <View className="mb-2 space-y-3">
          <View className="flex-row items-center mx-5 space-x-2">
            <CalendarDaysIcon size="22" color="white" />
            <Text className="text-white text-base">Daily Forecast</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/forecast.png")}
                className="h-12 w-12"
              />
              <Text className="text-white">Monday</Text>
              <Text className="text-white text-xl font-semibold">23&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/forecast.png")}
                className="h-12 w-12"
              />
              <Text className="text-white">Tuesday</Text>
              <Text className="text-white text-xl font-semibold">23&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/forecast.png")}
                className="h-12 w-12"
              />
              <Text className="text-white">Wednesday</Text>
              <Text className="text-white text-xl font-semibold">23&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/forecast.png")}
                className="h-12 w-12"
              />
              <Text className="text-white">Thrusday</Text>
              <Text className="text-white text-xl font-semibold">23&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/forecast.png")}
                className="h-12 w-12"
              />
              <Text className="text-white">Friday</Text>
              <Text className="text-white text-xl font-semibold">23&#176;</Text>
            </View>
            <View
              className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/forecast.png")}
                className="h-12 w-12"
              />
              <Text className="text-white">Saturday</Text>
              <Text className="text-white text-xl font-semibold">23&#176;</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
