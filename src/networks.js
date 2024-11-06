'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
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
exports.regtest = {
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
exports.testnet = {
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
exports.btcgoldmain = {
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
exports.btcgoldtest = {
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
exports.btccashmain = {
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
exports.btccashtest = {
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
exports.dogetest = {
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
exports.dogemain = {
  messagePrefix: '\u0019Dogecoin Signed Message:\n',
  bech32: 'dc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};
exports.litetest = {
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
exports.litemain = {
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
exports.dashtest = {
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
exports.dashmain = {
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
exports.zcashmain = {
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
exports.zcashtest = {
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
exports.btcsvmain = {
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
exports.btcsvtest = {
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
exports.btcxmain = {
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
exports.btcxtest = {
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
