import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Header } from "./header";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div>
      <Header/>
    </div>
  );
}
