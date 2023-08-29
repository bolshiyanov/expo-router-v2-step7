import { setupStore } from "@/store/store";
import { Provider } from "react-redux";

import Head from "expo-router/head";
import { ResponsiveNavigator } from "@/components/navigator";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import ChangeThemeButton from "@/components/themes/ChangeThemeBotton";

const store = setupStore();

export const unstable_settings = {
  initialRouteName: "index",
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <Head>
        <title>React static site and web</title>
        <meta
          name="description"
          content="Builder Apps for Crafting Static Websites for Google and Other Social Networks, as well as a Mobile App for iOS and Android"
        />
      </Head>
      <ResponsiveNavigator />
      <ChangeThemeButton />
    </Provider>
  );
}
