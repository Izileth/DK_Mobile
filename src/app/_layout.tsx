// app/_layout.tsx
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react";

export default function RootLayout() {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});