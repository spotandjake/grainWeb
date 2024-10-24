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

# Deriving your own work
Given the current state of component model getting your own project working outside of this is not the most straightforward but here is a small walkthrough:
The first step will be to understand `./build.sh` which handles generating the bindings from `./src/grainWeb.wit`, compiles your `main.gr` file and embeds the component into them, finally it outputs the jco runtime to `./dist` and a bundled version of `./src/grainWeb.ts`. Depending on what you want to build you will have to change various parts of this project.

## Adding bindings
Adding bindings is pretty easy it takes a little bit of [wit knowledge](https://component-model.bytecodealliance.org/design/wit.html) to add new items to the `./src/grainWeb.wit` interface and then just make sure the corresponding items exist in `./src/grainWeb.ts`
## Ditching vite
Ditching vite should be pretty simple just take the files in `./dist/` and bring them over to your project importing them in the manner below:
```js
import { run } from './dist/app.component.js';
run.run();
```
you will need to use some sort of bundler as there is a dependency on `@bytecodealliance/preview2-shim`, you can provide your own wasi bindings to jco as well some documentation on jco can be found [here](https://bytecodealliance.github.io/jco/transpiling.html)
## Program Rules
Component model is still experimental in grain and not really supported as such interacting with it can be a tiny bit weird here are some considerations:
### Compiling
When compiling your grain program you need to compile with `--use-start-section` otherwise your module will not initialize correctly.
### `_start`
You cannot put any initialization code that calls wasi or host functions in the top level of any modules the entry point for your program is the `_start` function, I used a `type Start = () => Void` to ensure I was not accidentally returning any value as well.
### `cabi_realloc`
You need to export the `cabi_realloc` function like so from your main application:
```gr
@unsafe
provide let cabi_realloc = (originalPtr, originalSize, alignment, newSize) => {
  GrainWeb.cabi_realloc(originalPtr, originalSize, alignment, newSize)
}
```
Note instead of just re-exporting the function I cal the internal function from the new one this prevents grain from requiring any special closures or converting it into a regular grain export. 


# Learning Component Model
If you want to learn more about [component model](https://github.com/WebAssembly/component-model) there are some resources but as the project is still young documentation is still sparse and tooling is still a little rough, feel free to make an issue if you run into a problem and I can try to debug with you if needed.


# Inspiration
The dom api is loosely inspired by [tiny-query-dom](https://github.com/nazmul-nhb/tiny-query-dom/tree/main) but with a focus on type safety and usability.


# TODO
+ [x] Get initial component model setup and working for mvp
+ [ ] Write a complete set of dom bindings
+ [ ] Write tests using jest
+ [ ] Write other important web bindings
+ [ ] Write a dynamic dispatch function that allows for accessing anything else
  + This will be unsafe so we will mark it as such
+ [ ] Look into how resources are freed as we pass handles into grain but we don't know when they are lost in grain-land?
+ [ ] Write a bundler or plugin system so that users do not need to worry about the bindings steps:
  + Generate Bindings in a github action
  + Make a plugin (Rollup? webpack? i do not know yet)
  + Use wasm tools js api (if exists??) to 
  + Use jco through js to generate our bindings
  + Use whatever tool im using to bundle everything into a single import