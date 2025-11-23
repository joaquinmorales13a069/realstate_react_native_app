import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
    const params = useLocalSearchParams<{ filter: string }>();
    const [selectedCategory, setSelectedCategory] = useState(
        params.filter || "All",
    );

    function handleCategoryPress(category: string) {
        if (selectedCategory === category) {
            setSelectedCategory("All");
            router.setParams({ filter: "All" });
            return;
        } else {
            setSelectedCategory(category);
            router.setParams({ filter: category });
        }
    }
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-5 mb-2"
        >
            {categories.map((item, index) => (
                <TouchableOpacity
                    className={`flex flex-col items-start px-4 py-2 mr-4 rounded-full ${selectedCategory === item.category ? "bg-primary-300" : "bg-primary-100 border border-primary-200 "}`}
                    onPress={() => handleCategoryPress(item.category)}
                    key={index}
                >
                    <Text
                        className={`text-sm ${selectedCategory === item.category ? "text-white font-rubikBold mt-0.5" : "text-black-300 font-rubik"}`}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Filters;
