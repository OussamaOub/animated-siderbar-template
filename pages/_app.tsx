import AppLayout from "@/components/AppLayout";
import SideBarProvider from "@/components/SideBarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SideBarProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </SideBarProvider>
  );
}
