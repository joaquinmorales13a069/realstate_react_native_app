import {Href, Link, router, useLocalSearchParams} from "expo-router";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Search from "@/components/Search";
import FeaturedCards, {Card} from "@/components/Cards";
import Filters from "@/components/Filters";
import {useAppwrite} from "@/libs/useAppwrite";
import {getLatestProperties, getProperties} from "@/libs/appwrite";
import {useEffect} from "react";
import NoResults from "@/components/NoResults";
import icons from "@/constants/icons";

export default function Explore() {
    const params = useLocalSearchParams<{ query?: string; filter?: string }>();

    const {
        data: properties,
        loading,
        refetch,
    } = useAppwrite({
        fn: getProperties,
        params: {filter: params.filter!, query: params.query!, limit: 20},
        skip: true,
    });

    const handleCardPress = (id: string) => {
        router.push(`/property/${id}` as Href);
    };

    useEffect(() => {
        refetch({filter: params.filter!, query: params.query!, limit: 20});
    }, [params.filter, params.query]);

    return (
        <SafeAreaView className={"h-full bg-white"}>
            <FlatList
                data={properties}
                renderItem={({item}) => (
                    <Card
                        item={item}
                        onPress={() => {
                            handleCardPress(item.$id);
                        }}
                    />
                )}
                keyExtractor={(item) => item.$id}
                numColumns={2}
                contentContainerClassName="pb-32"
                columnWrapperClassName="flex gap-5 px-5"
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    loading ? (
                        <ActivityIndicator
                            size={"large"}
                            className="mt-5 text-primary-300"
                        />
                    ) : (
                        <NoResults/>
                    )
                }
                ListHeaderComponent={
                    <View className={'px-5'}>
                        <View className={'flex flex-row items-center justify-between mt-5'}>
                            <TouchableOpacity onPress={() => router.back()} className={'flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center'}>
                                <Image source={icons.backArrow} className={'size-5'}/>
                            </TouchableOpacity>
                            <Text className={'text-base mr-2 text-center font-rubikMedium text-black-300'}>Search for your Ideal Home</Text>
                            <Image source={icons.bell} className={'size-5'}/>
                        </View>
                        <Search />
                        <View className={'mt-5'}>
                            <Filters />
                            <Text className={'text-xl font-rubikBold text-black-300 mt-5'}>Found {properties?.length} Properties</Text>
                        </View>
                    </View>
                }
            />
        </SafeAreaView>
    );
}
