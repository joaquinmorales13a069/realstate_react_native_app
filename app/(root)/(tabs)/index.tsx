import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome To Realstate</Text>
      <Link href={'/SignIn'}>Sign In</Link>
      <Link href={'/Explore'}>Explore</Link>
      <Link href={'/Profile'}>Profile</Link>
      <Link href={'/properties/1'}>Property 1</Link>
    </View>
  );
}
