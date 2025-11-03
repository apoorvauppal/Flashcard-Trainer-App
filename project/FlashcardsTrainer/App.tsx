import { Slot } from "expo-router";
import { FlashProvider } from "./src/contexts/FlashContext";

// The root of your app — Expo Router handles navigation automatically
export default function App() {
  return (
    <FlashProvider>
      <Slot />
    </FlashProvider>
  );
}
