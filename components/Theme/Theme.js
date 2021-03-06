import React from 'react';
import {
    Text,
    HStack,
    Switch,
    useColorMode,
  } from "native-base";
const Theme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
    );
}

const styles = StyleSheet.create({})

export default Theme;
