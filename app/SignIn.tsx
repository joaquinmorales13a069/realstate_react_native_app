import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

export default function SignIn() {
    const handleLogin = () => {};
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerClassName="h-full">
                <Image
                    source={images.onboarding}
                    className="w-full h-4/6"
                    resizeMode="contain"
                />

                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-100">
                        Welcome to ReState
                    </Text>
                    <Text className="mt-2 text-3xl text-center font-rubikBold text-black-300">
                        Let&apos;s Get you Closer to {"\n"}
                        <Text className="text-primary-300">
                            Your Ideal Home
                        </Text>
                    </Text>
                    <Text className="mt-12 text-lg text-center font-rubik text-black-200">
                        Login to ReState with Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className="w-full py-4 mt-5 bg-white rounded-full shadow-md shadow-zinc-300">
                      <View className="flex flex-row items-center justify-center">
                        <Image source={icons.google} className="w-6 h-6" resizeMode="contain"/>
                        <Text className="ml-2 text-lg font-rubikMedium text-black-300">Continue with Google</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
