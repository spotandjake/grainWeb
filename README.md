# GrainWeb
This is meant to be a web framework for the grain programming language, using the component model.

# Testing
Currently as im just testing the component model do the following to run:
```bash
bash ./build.sh
cd test
yarn start
```

# Scripts
* `./build.sh` - This is the main build script
* `./cleanup.sh` - This script cleans up all of the generated resources
* `./test.sh` - This script copies the build module into the example directory after building
* `./vite.sh` - This starts the vite server in the example directory
* `run.sh` - This script builds the project and then copies the output to the example directory.