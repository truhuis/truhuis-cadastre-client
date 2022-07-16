import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import { NotificationProvider } from "web3uikit";

const APP_ID: string = process.env.NEXT_PUBLIC_MORALIS_APP_ID || "";
const SERVER_URL: string = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL || "";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL} initializeOnMount={true}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    );
}

export default MyApp;
