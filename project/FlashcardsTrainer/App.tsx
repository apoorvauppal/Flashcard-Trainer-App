import { Slot } from "expo-router";
import { FlashProvider } from "./src/contexts/FlashContext";

// The root of your app — Expo Router handles navigation automatically
export default function App() {
  return (
    <FlashProvider>
      {/* Slot is a placeholder where all your route content (tabs, modals, etc.) will render */}
      <Slot />
    </FlashProvider>
  );
}
