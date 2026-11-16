#!/usr/bin/env bash
mkdir -p public/chains
base="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains"
fetch() {
  if curl -fsSL "$base/$2/info/logo.png" -o "public/chains/$1.png"; then
    echo "ok   $1"
  else
    echo "MISS $1"; rm -f "public/chains/$1.png"
  fi
}
fetch ethereum ethereum
fetch solana solana
fetch arbitrum arbitrum
fetch base base
fetch optimism optimism
fetch bnb smartchain
fetch avalanche avalanchec
fetch mantle mantle
fetch sei sei
