// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
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

export const bitcoin: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};

export const regtest: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const testnet: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const btcgoldmain: Network = {
  messagePrefix: '\x18Bitcoin Gold Signed Message:\n',
  bech32: 'btg',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x26,
  scriptHash: 0x17,
  wif: 0x80,
};

export const btcgoldtest: Network = {
  messagePrefix: '\x18Bitcoin Gold Testnet Signed Message:\n',
  bech32: 'tbtg',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const btccashmain: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};

export const btccashtest: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const dogetest: Network = {
  messagePrefix: '\u0019Dogecoin Testnet Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x71,
  scriptHash: 0xc4,
  wif: 0xf1,
};

export const dogemain: Network = {
  messagePrefix: '\u0019Dogecoin Signed Message:\n',
  bech32: 'dc',
  bip32: {
    public: 0x0488b21e,  // 0x02facafd
    private: 0x0488ade4,  // 0x02fac398
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};

export const litetest: Network = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bech32: 'tltc',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
};

export const litemain: Network = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bech32: 'ltc',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
};

export const dashtest: Network = {
  messagePrefix: '\x19Dash Testnet Signed Message:\n',
  bech32: 'tdash',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x8c,
  scriptHash: 0x13,
  wif: 0xef,
};

export const dashmain: Network = {
  messagePrefix: '\x19Dash Signed Message:\n',
  bech32: 'dash',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0xcc,
};

export const zcashmain: Network = {
  messagePrefix: '\x19Zcash Signed Message:\n',
  bech32: 'zc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1cb8,
  scriptHash: 0x2f,
  wif: 0x80,
};

export const zcashtest: Network = {
  messagePrefix: '\x19Zcash Testnet Signed Message:\n',
  bech32: 'tzc',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const btcsvmain: Network = {
  messagePrefix: '\x18Bitcoin SV Signed Message:\n',
  bech32: 'bsv',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};

export const btcsvtest: Network = {
  messagePrefix: '\x18Bitcoin SV Testnet Signed Message:\n',
  bech32: 'tbsv',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const btcxmain: Network = {
  messagePrefix: '\x18BitcoinX Signed Message:\n',
  bech32: 'btx',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x26,
  scriptHash: 0x17,
  wif: 0x80,
};

export const btcxtest: Network = {
  messagePrefix: '\x18BitcoinX Testnet Signed Message:\n',
  bech32: 'tbtx',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

// export const liquidmain: Network = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bech32: 'ex',
//   bip32: {
//     public: 0x0488b21e,
//     private: 0x0488ade4
//   },
//   pubKeyHash: 0x00,
//   scriptHash: 0x05,
//   wif: 0x80,
//   dustThreshold: 546,
//   feePerKb: 10000,
//   minRelayTxFee: 1000,
//   consensusBranchId: {
//     1: 0x00,
//     2: 0x00,
//     3: 0x5ba81b19,
//     4: 0x76b809bb
//   }
// };

// export const liquidtest: Network = {
//   messagePrefix: '\x18Bitcoin Signed Message:\n',
//   bech32: 'tex',
//   bip32: {
//     public: 0x043587cf,
//     private: 0x04358394
//   },
//   pubKeyHash: 0x6f,
//   scriptHash: 0xc4,
//   wif: 0xef,
//   dustThreshold: 546,
//   feePerKb: 10000,
//   minRelayTxFee: 1000,
//   consensusBranchId: {
//     1: 0x00,
//     2: 0x00,
//     3: 0x5ba81b19,
//     4: 0x76b809bb
//   }
// };

