import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
    onPress: () => void;
}

export default function FeaturedCards({ onPress }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex relative flex-col items-start w-60 h-80"
        >
            <Image source={images.japan} className="rounded-2xl size-full" />
            <Image
                source={images.cardGradient}
                className="absolute bottom-0 rounded-2xl size-full"
            />

            <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
                <Image source={icons.star} className="size-3.5" />
                <Text className="ml-1 text-xs font-rubikBold text-primary-300">
                    4.4
                </Text>
            </View>
            <View className="flex absolute inset-x-5 bottom-5 flex-col items-start">
                <Text
                    className="text-xl text-white font-rubikExtraBold"
                    numberOfLines={1}
                >
                    Mordern Apartment
                </Text>
                <Text
                    className="text-base text-white font-rubik"
                    numberOfLines={1}
                >
                    22 W 34th St, New York, NY
                </Text>
                <View className="flex flex-row justify-between items-center w-full">
                    <Text className="text-xl text-white font-rubikExtraBold">
                        $2,500
                    </Text>
                    <Image source={icons.heart} className="size-5" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

// Normal card component
export const Card = ({ onPress }: Props) => {
    return (
        <TouchableOpacity
            className="relative flex-1 px-3 py-4 mt-4 w-full bg-white rounded-lg shadow-lg shadow-black-100/70"
            onPress={onPress}
        >
            <View className="flex absolute top-5 right-5 z-50 flex-row items-center p-1 px-2 rounded-full bg-white/90">
                <Image source={icons.star} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
                    4.4
                </Text>
            </View>

            <Image
                source={images.newYork}
                className="w-full h-40 rounded-lg"
            />

            <View className="flex flex-col mt-2">
                <Text className="text-base font-rubik-bold text-black-300">
                    Modern Apartment
                </Text>
                <Text className="text-xs font-rubik text-black-100">
                    22 W 34th St, New York, NY
                </Text>

                <View className="flex flex-row justify-between items-center mt-2">
                    <Text className="text-base font-rubik-bold text-primary-300">
                        $2,500
                    </Text>
                    <Image
                        source={icons.heart}
                        className="mr-2 w-5 h-5"
                        tintColor="#191D31"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
