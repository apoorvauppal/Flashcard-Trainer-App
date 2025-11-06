import { Stack } from "expo-router";
import { FlashProvider } from "../src/contexts/FlashContext";

export default function RootLayout() {
  return (
    <FlashProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FlashProvider>
  );
}
