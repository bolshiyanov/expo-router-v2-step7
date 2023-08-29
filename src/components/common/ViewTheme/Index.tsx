import { Platform, View  } from "react-native";
import React, { useState, Children, useEffect } from "react";

import Colors from "@/constants/Colors";

const ViewTheme = ({ children }) => { 
  const [colorTheme, setColorTheme] = useState("light");

  useEffect(() => {
    if (Platform.OS === "web") {
      const savedTheme = localStorage.getItem("colorTheme");
      if (savedTheme) {
        setColorTheme(savedTheme);
      }
    }
  }, [colorTheme]);


  return <View style={{ backgroundColor: colorTheme === 'dark' ? 'black' : 'white' }}>{children}</View>;
};

export default ViewTheme;
