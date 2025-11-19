import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);

    const debouncedSearch = useDebouncedCallback(
        (text: string) => router.setParams({ query: text }),
        500
    );

    const handleSearch = (text: string) => {
        setSearch(text);
        debouncedSearch(text);
    };

    return (
        <View
            className={
                "flex flex-row justify-between items-center px-4 py-2 mt-5 w-full rounded-lg border bg-accent-100 border-primary-100"
            }
        >
            <View
                className={
                    "flex z-50 flex-row flex-1 justify-start items-center"
                }
            >
                <Image source={icons.search} className={"size-5"} />
                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder={"Search for Anything"}
                    className={"flex-1 ml-2 text-sm font-rubik text-black-300"}
                />
            </View>
            <TouchableOpacity>
                <Image source={icons.filter} className={"size-5"} />
            </TouchableOpacity>
        </View>
    );
}
