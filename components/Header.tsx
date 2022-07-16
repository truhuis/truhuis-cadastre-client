import { ConnectButton } from "web3uikit";

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    );
}
