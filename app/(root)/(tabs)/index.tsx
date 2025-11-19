import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import FeaturedCards, { Card } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
    return (
        <SafeAreaView className={"h-full bg-white"}>
            <View className={"px-5"}>
                <View
                    className={
                        "flex flex-row justify-between items-center mt-5"
                    }
                >
                    <View className={"flex flex-row items-center"}>
                        <Image
                            source={images.avatar}
                            className={"rounded-full size-12"}
                        />
                        <View
                            className={
                                "flex flex-col justify-center items-start ml-2"
                            }
                        >
                            <Text
                                className={"text-xs font-rubik text-black-100"}
                            >
                                Good Morning
                            </Text>
                            <Text
                                className={
                                    "text-base font-rubikMedium text-black-300"
                                }
                            >
                                Joaquin
                            </Text>
                        </View>
                    </View>
                    <Image source={icons.bell} className={"size-6"} />
                </View>
                <Search />

                <View className="my-5">
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-xl font-rubikBold text-black-300">
                            Featured
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-base font-rubikBold text-primary-300">
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row gap-5 mt-2">
                        <FeaturedCards />
                        <FeaturedCards />
                    </View>
                </View>
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-xl font-rubikBold text-black-300">
                        Our Recommendation
                    </Text>
                    <TouchableOpacity>
                        <Text className="text-base font-rubikBold text-primary-300">
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <Filters />
                <View className="flex flex-row gap-5 mt-5">
                    <Card />
                    <Card />
                </View>
            </View>
        </SafeAreaView>
    );
}
