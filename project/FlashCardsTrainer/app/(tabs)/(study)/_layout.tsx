import { Stack } from "expo-router";

export default function StudyLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Study Favorites", // 👈 header title for that screen
        }}
      />
    </Stack>
  );
}
