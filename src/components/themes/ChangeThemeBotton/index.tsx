import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/components/utils/hooks/redux";
import { themeChangeAction } from "@/store/reducers/ThemeSlice";
import Colors from '../../../constants/Colors'; 

import {
  StyleSheet,
  Platform,
  View,
  Pressable,
} from "react-native";

import { TabBarIcon } from "@/components/tab-bar-icon";

const ChangeThemeButton = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;

  useEffect(() => {
    if (Platform.OS === "web") {
      const savedTheme = localStorage.getItem("colorTheme");
      if (savedTheme) {
        dispatch(themeChangeAction(savedTheme)); // Dispatch the saved theme from local storage
      }
    }
  }, [dispatch]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(themeChangeAction(newTheme));

    if (Platform.OS === "web") {
      localStorage.setItem("colorTheme", newTheme);
    }
  };

  return (
    <View
      style={[
        { position: "absolute", top: 15, right: 15, height: 40, width: 40 },
        Platform.select({
          ios: { top: 55, right: 20, height: 25, width: 25 },
        }),

      ]}
    >
      <Pressable onPress={toggleTheme}>
        {({ pressed, hovered }) => (
          <TabBarIcon
            color={selectedTheme.iconColors }
            style={[
              {
                paddingHorizontal: 8,
              },
              Platform.select({
                web: {
                  transform: hovered ? [{ scale: 1.1 }] : [{ scale: 1 }],
                },
              }),
              pressed && {
                transform: [{ scale: 0.9 }],
                opacity: 0.8,
              },
            ]}
            name={theme === "dark" ? "sun" : "moon"}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
});

export default ChangeThemeButton;
