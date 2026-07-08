import type { Route } from "./+types/home";
import WelcomeScreen from "../screens/WelcomeScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sailor Prep | Merchant Navy Study Companion" },
    { name: "description", content: "The comprehensive study companion for merchant navy professionals." },
  ];
}

export default function Home() {
  return <WelcomeScreen />;
}
