# Create our out directory
rm -rf out
mkdir out
rm -f ./src/web.gr
rm -f ./src/web.gr.wasm
# Generate grain bindings
./wit-bindgen/target/debug/wit-bindgen grain ./src/grainWeb.wit --out-dir ./src
grain format ./src/web.gr -o ./src/web.gr
# Compile grain (Compiles your entry file)
grain compile main.gr --release --use-start-section -o ./out/app.wasm
# Embed wit into module
wasm-tools component embed ./src/grainWeb.wit --world web -o ./out/app.embedded.wasm ./out/app.wasm
# Create our component
wasm-tools component new -o ./out/app.component.wasm --adapt ./adapters/wasi_snapshot_preview1.command.wasm ./out/app.embedded.wasm
# Generate jco bridge
jco transpile ./out/app.component.wasm -o ./dist --map grain:web/dom=./grainDom.js
# Copy grainDom
cp ./src/grainDom.js ./dist/grainDom.js