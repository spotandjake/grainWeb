bash build.sh
bash test.sh
rm ./test/dist -f
cp -r ./dist/ ./test/dist/
cd test
yarn start