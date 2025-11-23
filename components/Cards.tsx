import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

interface Property extends Models.Document {
    image: string;
    rating: number;
    name: string;
    address: string;
    price: number;
}

interface Props {
    item: Property;
    onPress: () => void;
}

export default function FeaturedCards({
    item: { image, rating, name, address, price },
    onPress,
}: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="relative flex flex-col items-start w-60 h-80"
        >
            <Image source={{ uri: image }} className="rounded-2xl size-full" />
            <Image
                source={images.cardGradient}
                className="absolute bottom-0 rounded-2xl size-full"
            />

            <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
                <Image source={icons.star} className="size-3.5" />
                <Text className="ml-1 text-xs font-rubikBold text-primary-300">
                    {rating}
                </Text>
            </View>
            <View className="absolute flex flex-col items-start inset-x-5 bottom-5">
                <Text
                    className="text-xl text-white font-rubikExtraBold"
                    numberOfLines={1}
                >
                    {name}
                </Text>
                <Text
                    className="text-base text-white font-rubik"
                    numberOfLines={1}
                >
                    {address}
                </Text>
                <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-xl text-white font-rubikExtraBold">
                        ${price}
                    </Text>
                    <Image source={icons.heart} className="size-5" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

// Normal card component
export const Card = ({
    item: { image, rating, name, address, price },
    onPress,
}: Props) => {
    return (
        <TouchableOpacity
            className="relative flex-1 w-full px-3 py-4 mt-4 bg-white rounded-lg shadow-lg shadow-black-100/70"
            onPress={onPress}
        >
            <View className="absolute z-50 flex flex-row items-center p-1 px-2 rounded-full top-5 right-5 bg-white/90">
                <Image source={icons.star} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
                    {rating}
                </Text>
            </View>

            <Image source={{ uri: image }} className="w-full h-40 rounded-lg" />

            <View className="flex flex-col mt-2">
                <Text className="text-base font-rubik-bold text-black-300">
                    {name}
                </Text>
                <Text className="text-xs font-rubik text-black-100">
                    {address}
                </Text>

                <View className="flex flex-row items-center justify-between mt-2">
                    <Text className="text-base font-rubik-bold text-primary-300">
                        ${price}
                    </Text>
                    <Image
                        source={icons.heart}
                        className="w-5 h-5 mr-2"
                        tintColor="#191D31"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
