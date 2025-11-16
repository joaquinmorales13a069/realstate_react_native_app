import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

interface AppwriteConfig {
    platform: string;
    endpoint: string | undefined;
    projectId: string | undefined;
}

// Core Appwrite identifiers that Expo injects at build time
export const config: AppwriteConfig = {
    platform: "com.jmc.restateapp",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

// Shared Appwrite client instance configured for the Expo app
export const client = new Client()
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform);

// Generate avatar based on user first and last name initials
export const avatar = new Avatars(client);

export const account = new Account(client);

export async function login() {
    try {
        // Appwrite sends users back to this deep link after OAuth completes
        const redirectUri = Linking.createURL("/");

        // Kick off the OAuth flow and obtain the browser URL to visit
        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUri,
        );

        if (!response) {
            throw new Error("Failed to create OAuth2 token");
        }

        // Open the returned URL inside an in-app browser session
        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri,
        );

        if (browserResult.type !== "success") {
            throw new Error("Authentication cancelled");
        }

        // The redirected URL contains short-lived credentials to finish login
        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();

        if (!secret || !userId) {
            throw new Error("Missing authentication parameters");
        }

        // Exchange the temporary credentials for a persistent Appwrite session
        const session = await account.createSession(userId, secret);

        if (!session) {
            throw new Error("Failed to create session");
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function logout() {
    try {
        // "current" tells Appwrite to invalidate whichever session issued the call
        await account.deleteSession("current");
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();

        if (response.$id) {
            // Generate a placeholder avatar using the user's initials
            const userAvatar = avatar.getInitials(response.name);

            return { ...response, avatar: userAvatar.toString() };
        }
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}
