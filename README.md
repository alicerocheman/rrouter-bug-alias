# Bug report

I'm using React Router as a...
framework

## Reproduction

https://github.com/alicerocheman/rrouter-bug-alias
clone, install and run "yarn dev"

this repo has very few changes after "npx create-react-router@latest":

created app/constants/config.ts
created app/utils/safeLog.ts
imported app/utils/safeLog in the app/routes.ts file.
optionnally:

add alias to vite.config.ts

## System Info

System:
    OS: macOS 15.1.1
    CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
    Memory: 40.73 MB / 16.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 20.16.0 - ~/.nvm/versions/node/v20.16.0/bin/node
    Yarn: 1.22.22 - /usr/local/bin/yarn
    npm: 10.8.1 - ~/.nvm/versions/node/v20.16.0/bin/npm
    pnpm: 9.15.3 - ~/.nvm/versions/node/v20.16.0/bin/pnpm
  Browsers:
    Chrome: 131.0.6778.206
    Safari: 18.1.1
  npmPackages:
    @react-router/dev: ^7.1.1 => 7.1.1 
    @react-router/node: ^7.1.1 => 7.1.1 
    @react-router/serve: ^7.1.1 => 7.1.1 
    react-router: ^7.1.1 => 7.1.1 
    vite: ^5.4.11 => 5.4.11

## Used Package Manager

yarn

## Expected Behavior

the app works, even when the "~" alias is used in "app/routes.ts" or in one of its imports

## Actual Behavior

if the "~" alias is used in "routes.ts" or in one of its imports, "yarn dev" fails like this:

[15:20:12] yarn dev
yarn run v1.22.22
$ react-router dev
Error: Route config in "routes.ts" is invalid.

```
Error: Failed to load url ~/utils/safeLog (resolved id: ~/utils/safeLog) in /Users/***/***/rrouter-bug-repro/app/routes.ts. Does the file exist?
    at loadAndTransform (file:///***/rrouter-bug-repro/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:51920:17)
    at createConfigLoader (/***/rrouter-bug-repro/node_modules/@react-router/dev/dist/vite.js:462:11)
    at config (/***/rrouter-bug-repro/node_modules/@react-router/dev/dist/vite.js:1699:35)
    at runConfigHook (file:///***/rrouter-bug-repro/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:66720:19)
    at resolveConfig (file:///***/rrouter-bug-repro/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:66169:12)
    at _createServer (file:///***/rrouter-bug-repro/node_modules/vite/dist/node/chunks/dep-CB_7IfJ-.js:62758:18)
    at dev (/***/rrouter-bug-repro/node_modules/@react-router/dev/dist/cli/index.js:1288:16)
    at dev2 (/***/rrouter-bug-repro/node_modules/@react-router/dev/dist/cli/index.js:1459:3)
    at run2 (/***/rrouter-bug-repro/node_modules/@react-router/dev/dist/cli/index.js:1720:7)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

if i import "./utils/safeLog" with a relative path, it still fails because "./utils/safeLog" also uses the alias.

The same behavior happens whether or not i set the alias in the vite.config file.
