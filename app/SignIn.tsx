import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/libs/appwrite";
import { useGlobalContext } from "@/libs/globalProvider";
import { Redirect } from "expo-router";

export default function SignIn() {
    const { refetch, loading, isLoggedIn } = useGlobalContext();

    if (!loading && isLoggedIn) {
        return <Redirect href={'/'} />;
    }

    const handleLogin = async () => {
        const result = await login();

        if (result) {
            refetch();
        } else {
            Alert.alert("Login failed", "Unable to login. Please try again.");
        }
    };
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

                    <TouchableOpacity
                        onPress={handleLogin}
                        className="w-full py-4 mt-5 bg-white rounded-full shadow-md shadow-zinc-300"
                    >
                        <View className="flex flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                            <Text className="ml-2 text-lg font-rubikMedium text-black-300">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
