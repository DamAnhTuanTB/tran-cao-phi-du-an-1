import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dự án 1 - Trần Cao Phi" },
    { name: "description", content: "Dự án 1 - Trần Cao Phi" },
  ];
}

export default function Home() {
  return <Welcome />;
}
