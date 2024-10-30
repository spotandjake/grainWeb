# Create our out directory
rm -rf dist
rm -rf out
mkdir out
# Generate grain bindings
../wit-bindgen/target/debug/wit-bindgen grain ./console.wit --out-dir ./out
# Compile grain (Compiles your entry file)
grain compile main.gr --release --use-start-section -o ./out/app.wasm
# Embed wit into module
wasm-tools component embed ./console.wit --world console-test -o ./out/app.embedded.wasm ./out/app.wasm
# Create our component
wasm-tools component new -o ./out/app.component.wasm --adapt ../adapters/wasi_snapshot_preview1.command.wasm ./out/app.embedded.wasm
# Generate jco bridge
jco transpile ./out/app.component.wasm -o ./dist --no-nodejs-compat --no-typescript
# Use rollup to bundle our library and copy
cd ../
rm -rf ./example/dist/
cp -r ./consoleTest/dist/ ./example/dist/
cd example
yarn dev