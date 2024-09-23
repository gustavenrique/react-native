import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="Telas/Cadastro" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
