# Installing
This document describes the installation steps for this project:

## Yarn
```sh
corepack enable
```
## Rust Toolchain
```sh
curl https://sh.rustup.rs -sSf | sh
```
## WitBindgen
```sh
git clone https://github.com/grain-lang/wit-bindgen/tree/main # Clone the wit-bindgen repo
cd wit-bindgen
git checkout grain # Checkout the grain branch
cargo build # Build the package
```
## WasmTools
```sh
cargo install --locked wasm-tools
```
## JCO
```sh
npm install @bytecodealliance/jco
```