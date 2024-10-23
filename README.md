# Cleanup last build
```sh
rm *.wasm
rm output -rf
```
# Generate Grain Bindings
```sh
./wit-bindgen/target/debug/wit-bindgen grain host.wit
```
# Compile Our Grain Program
```sh
grain compile main.gr --release --use-start-section -o main.wasm
```
# Embed wit interface into module
```sh
wasm-tools component embed ./host.wit --world host -o main.embedded.wasm main.wasm
```
# Create Our Component
```sh
wasm-tools component new -o main.component.wasm --adapt ./adapters/wasi_snapshot_preview1.wasm main.embedded.wasm
```
# Generate JCO side
```sh
jco transpile main.component.wasm -o output --map example:host/bindings=../bindings.js
```