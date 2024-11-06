export interface Network {
    messagePrefix: string;
    bech32: string;
    bip32: Bip32;
    pubKeyHash: number;
    scriptHash: number;
    wif: number;
}
interface Bip32 {
    public: number;
    private: number;
}
export declare const bitcoin: Network;
export declare const regtest: Network;
export declare const testnet: Network;
export declare const btcgoldmain: Network;
export declare const btcgoldtest: Network;
export declare const btccashmain: Network;
export declare const btccashtest: Network;
export declare const dogetest: Network;
export declare const dogemain: Network;
export declare const litetest: Network;
export declare const litemain: Network;
export declare const dashtest: Network;
export declare const dashmain: Network;
export declare const zcashmain: Network;
export declare const zcashtest: Network;
export declare const btcsvmain: Network;
export declare const btcsvtest: Network;
export declare const btcxmain: Network;
export declare const btcxtest: Network;
export {};
