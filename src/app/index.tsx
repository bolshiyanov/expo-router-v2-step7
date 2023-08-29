import { useAppSelector } from "@/components/utils/hooks/redux";
import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from '../constants/Colors'; 

export default function Page() {
  const theme = useAppSelector(state => state.themeSlice.theme);

  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;

  return (
    <>
      <View style={[styles.container, { backgroundColor: selectedTheme.background }]}>
        <View style={styles.main}>
          <Text style={[styles.title, { color: selectedTheme.text }]}>Home</Text>
          <Text style={[styles.subtitle, { color: selectedTheme.subTitle }]}>
            It is {Platform.OS} and my theme is {theme}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
