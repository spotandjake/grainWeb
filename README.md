# GrainWeb
This is meant to be a web framework for the grain programming language, using the component model.

# Installation
The first step in using the program is to install all the dependencies:
* `yarn` - this project uses yarn v3 as the dependency manager, `npm` will likely work but it is not recommended and you are using it at your own risk.
* `wit-bindgen` - you are going to need to build the [grain wit bindgen branch](https://github.com/grain-lang/wit-bindgen/tree/grain) from source.
  * This will require the rust and cargo tool chains to be installed
  * `git clone https://github.com/grain-lang/wit-bindgen`
  * `cd wit-bindgen`
  * `git checkout grain`
  * `cargo build`
* `wasm-tools` - You will need to install [wasm-tools](https://github.com/bytecodealliance/wasm-tools)
* `jco` - You will need [jco](https://github.com/bytecodealliance/jco) installed.
* `grain` - this project requires the latest version of the grain compiler `v0.6.7`
  
# Running
After you install the tools run the following commands:
```bash
yarn # Installs the projects dependencies
yarn cleanup # Cleans up any existing artifacts
yarn build # Builds the entire project
yarn start # Will rebuild the project and deploy a vite server for testing.
```
you can make any changes you want in `main.gr` for your project, note that you cannot run anything in the top scope of the module everything needs to exist in the `_start` function.


# How it works
This project uses the wasm component model to generate grain bindings to a javascript host interface these bindings can be found in `./src/grainWeb.wit` and the corresponding typescript api can be found in `./grainWeb.ts`. This is still extremely experimental so expect bugs if you try to replicate this project locally.

# Learning
If you want to learn more about [component model](https://github.com/WebAssembly/component-model) there are some resources but as the project is still young documentation is still sparse and tooling is still a little rough, feel free to make an issue if you run into a problem and I can try to debug with you if needed.