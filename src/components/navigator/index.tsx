import { Icon, IconName } from "@/components/icon";
import { makeIcon, TabBarIcon } from "@/components/tab-bar-icon";
import { TabbedNavigator } from "@/components/tab-slot";
import { Pressable, StyleSheet } from "@bacons/react-views";
import { Link } from "expo-router";
import React from "react";
import {
  Platform,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";

import { useAppSelector } from "@/components/utils/hooks/redux";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cns } from "../utils/cns";

import Colors from '../../constants/Colors'; 
import cssStyles from "@/styles/root-layout.module.scss";

function HeaderLogo() {
  const isLargeHorizontal = useWidth(980);
  const isSmallHorizontal = useWidth(768);

  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Link
      style={[
        { paddingVertical: 20, alignItems: "flex-start" },
        Platform.select({
          default: isSmallHorizontal &&
            !isLargeHorizontal && {
              paddingTop: 0,
              minHeight: 96,
              marginTop: 12,
              paddingBottom: 23,
              height: 96,
              
            },
          web: cns(cssStyles.headerLink),
        }),
      ]}
      href="/"
      asChild
    >
      <Pressable>
        {({ hovered }) => (
          <Text
            style={[
              jsStyles.headerLogo,
              {
                backgroundColor: hovered ? "rgba(0, 0, 0, 0.1)" : "transparent",
              },
            ]}
          >
            <Icon
              style={Platform.select({
                default: !isLargeHorizontal && { display: "none" },
                web: cns(cssStyles.wideVisible),
              })}
              name="logo"
              fill={selectedTheme.iconColors}
            />
            <Icon
              style={Platform.select({
                default: isLargeHorizontal && { display: "none" },
                web: cns(cssStyles.wideHidden),
              })}
              name="logo-small"
              fill={selectedTheme.iconColors}
            />
          </Text>
        )}
      </Pressable>
    </Link>
  );
}

function useWidth(size) {
  if (typeof window === "undefined") {
    return true;
  }
  const { width } = useWindowDimensions();
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return false;
  }
  return width >= size;
}

function SideBar({ visible }) {
  const isLarge = useWidth(980);

  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;

  

  return (
    <View
      style={[
        jsStyles.sideBar,

        ...Platform.select({
          default: [
            !visible && {
              display: "none",
            },
            isLarge && {
              minWidth: NAV_MEDIUM_WIDTH,
              
            },
          ],

          web: [cns(cssStyles.largeVisible, cssStyles.sideBar)],
        }),
      ]}
    >
      <View
  style={[
    jsStyles.sidebarInner,
    ...Platform.select({
      default: [
        isLarge &&
          ({
            width: NAV_MEDIUM_WIDTH,
            minWidth: NAV_MEDIUM_WIDTH,
            alignItems: "flex-start",
          } as const),
      ],
      web: [cns(cssStyles.sideBarInner)],
    }),
    { backgroundColor: selectedTheme.backgroundNav },
    { borderRightColor: selectedTheme.borderLine } // Add the background color here
  ]}
>
      
        <View
          style={[
            jsStyles.sidebarInner2,
            Platform.select({
              default: !isLarge && {
                alignItems: "center",
              },
              web: cns(cssStyles.sideBarHeader),
            }),
            { borderRightColor: selectedTheme.borderLine }
          ]}
        >
          <HeaderLogo />

          <View style={{ gap: 4, flex: 1 , }}>
            <SideBarTabItem name="index" icon={makeIcon("home") }>
              Home
            </SideBarTabItem>
            <SideBarTabItem name="search" icon={makeIcon("search")}>
              Search
            </SideBarTabItem>
            <SideBarTabItem name="explore" icon={makeIcon("explore")}>
              Explore
            </SideBarTabItem>
          </View>
          {/* Divider */}
          <View>
            <SideBarTabItem name="auth" icon={makeIcon("more")}>
            SignIn
            </SideBarTabItem>
          </View>
        </View>
      </View>
    </View>
  );
}

function TabBar({ visible }) {

  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;


  return (
    <View
      style={[
        {
          paddingBottom: useSafeAreaInsets().bottom,
        },
        Platform.select({
          default: {
            display: visible ? "flex" : "none",
          },
          web: cns(cssStyles.smallVisible),
        }),
        { backgroundColor: selectedTheme.backgroundNav }
      ]}
    >
      <View style={[jsStyles.nav, { borderTopColor: selectedTheme.borderLine }]}>
        {[
          { name: "index", id: "index", icon: "home" },
          { name: "explore", id: "explore", icon: "explore" },
          { name: "search", id: "search", icon: "search" },
          { name: "auth", id: "auth", icon: "more" },
        ].map((tab, i) => (
          <TabBarItem key={i} name={tab.name} id={tab.id}>
            {({ focused, pressed, hovered }) => (
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
                name={tab.icon as IconName}
                focused={focused}
                
              />
            )}
          </TabBarItem>
        ))}
      </View>
    </View>
  );
}

function useIsTabSelected(name: string): boolean {
  const { navigation } = TabbedNavigator.useContext();

  const state = navigation.getState();
  const current = state.routes.find((route, i) => state.index === i);

  return current?.name === name;
}

function TabBarItem({
  children,
  name,
  style,
  id,
}: {
  children?: any;
  name: string;
  style?: ViewStyle;
  id: string;
}) {
  const focused = useIsTabSelected(id);

  


  if (name.startsWith("/") || name.startsWith(".")) {
    return (
      <Link href={name} asChild style={style}>
        <Pressable>{(props) => children({ ...props, focused })}</Pressable>
      </Link>
    );
  }

  return (
    <TabbedNavigator.Link name={id} asChild style={style}>
      <Pressable>{(props) => children({ ...props, focused })}</Pressable>
    </TabbedNavigator.Link>
  );
}

function SideBarTabItem({
  children,
  icon,
  name,
}: {
  children: string;
  icon: (props: { focused?: boolean; color: string }) => JSX.Element;
  name: string;
}) {
  const isLarge = useWidth(980);

  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;
  
  return (
    <TabBarItem
      name={name}
      id={name}
      // accessibilityHasPopup="menu"
      style={{
        paddingVertical: 4,
        width: "100%",
      }}
    >
      {({ focused, hovered }) => (
        <View
          style={[
            {
              padding: 12,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 999,
            },
            hovered && {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          ]}
        >
          <View
            style={[
              {
                transitionTimingFunction: "cubic-bezier(0.17, 0.17, 0, 1)",
              },
              hovered && {
                transform: [{ scale: 1.1 }],
              },
            ]}
          >
            {icon({
              focused,
              color: selectedTheme.iconColors,
            })}
          </View>

          <Text
            style={[
              {
                color: selectedTheme.text,
                fontSize: 16,
                marginLeft: 16,
                marginRight: 16,
                lineHeight: 24,
              },
              Platform.select({
                default: {
                  display: isLarge ? "flex" : "none",
                },
                web: cns(cssStyles.sideBarTabItemText),
              }),
              focused && {
                fontWeight: "bold",
              },
            ]}
          >
            {children}
          </Text>
        </View>
      )}
    </TabBarItem>
  );
}

export function ResponsiveNavigator() {
  const isRowLayout = useWidth(768);

  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;
  
  
  return (
    <TabbedNavigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: selectedTheme.iconColors,
      }}
    >
      <View
    
        style={[
          jsStyles.flex1,
          Platform.select({
            default: {
              flexDirection: isRowLayout ? "row" : "column"
            },
            web: cns(cssStyles.container),
          }),
        ]}
      >
        <SideBar visible={isRowLayout} />
        <AppHeader visible={!isRowLayout} />
        <TabbedNavigator.Slot />
        <TabBar visible={!isRowLayout} />
      </View>
    </TabbedNavigator>
  );
}

function AppHeader({ visible }) {
  const { top } = useSafeAreaInsets();
  const height = 60 + top;

  const theme = useAppSelector(state => state.themeSlice.theme);
  const selectedTheme = theme === 'dark' ? Colors.dark : Colors.light;

  return (
    <>
      <View style={{ height }} />
      <View
        style={[
          Platform.select({
            default: !visible && {
              display: "none",
            },
            web: cns(cssStyles.smallVisible),
          }),
          { height, paddingTop: top },
          jsStyles.appHeader, 
          { backgroundColor: selectedTheme.backgroundNav },
          { borderBottomColor: selectedTheme.borderLine }
        ]}
      >
        <Icon name="logo" fill={selectedTheme.iconColors} />
      </View>
    </>
  );
}

const ColorsNav = {
  lightGray: "rgba(230, 230, 230, 1)",
  dark: "rgba(230, 230, 230, 1)",
};

const NAV_MEDIUM_WIDTH = 244;

const jsStyles = StyleSheet.create({

  
  sideBar: {
    minWidth: 72,
    width: 72,
  },
  sidebarInner: {
    position: Platform.select({ web: "fixed", default: "absolute" }),
    height: "100%",
    maxHeight: "100%",
    alignItems: "stretch",
    borderRightWidth: 1,
    // borderRightColor: ColorsNav.lightGray,
    minWidth: 72,
    width: 72,
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  flex1: { flex: 1 },
  appHeader: {
    zIndex: 10,
    backgroundColor: "white",
    position: Platform.select({ web: "fixed", default: "absolute" }),
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyConteborderBottomColornt: "space-between",
    borderBottomWidth: 1,
    //: ColorsNav.lightGray,
  },
  sidebarInner2: {
    flex: 1,
    alignItems: "stretch",
    height: "100%",
    justifyContent: "space-between",
  },
  headerLogo: {
    margin: 0,
    display: "flex",
    // flex: 1,
    alignItems: "center",
    padding: 12,
    marginVertical: 4,
    borderRadius: 4,
  },
  nav: {
    flexDirection: "row",
    borderTopWidth: 1,
    //borderTopColor: ColorsNav.lightGray,
    justifyContent: "space-around",
    alignItems: "center",
    height: 49,
    paddingHorizontal: 16,
  },
});
