# DDD Perth Website

The DDD Perth website is deployed to https://dddperth.com and is built using [Next.js](https://github.com/zeit/next.js/).

## Getting started

* Checkout repository on your machine - ensure you have Node.js and Yarn installed
* Run `yarn` in the repository root (to restore npm packages)
* Run `yarn run dev` to start a local dev environment that watches for changes and supports Hot Module Replacement / Hot Reloading
* Use Visual Studio Code as the prefered dev environment - breakpoint debugging should work and you should be able to run the "Start Dev Webserver" task to get it to run the dev environment

## Building the code for prod release

* Checkout code
* Run `yarn`
* Run `yarn build`
* Grab the `.next` directory and deploy to the destination
* Run `yarn` in the deploy folder and deploy all files from there alongside the `.next` directory (the web.config file is targeted towards Azure Web Apps)

## Code organisation

* `/` - Usual array of .json and other config files for a JavaScript / TypeScript project
  * `/.vscode` - VS Code config files including tasks, launch/debugging settings and extension recommendations
  * `/components` - Reusable UI components used within pages
    * `/components/global` - UI components that make up the global layout of the site
    * `/components/utils` - Utility functions
  * `/config` - Configuration of the conference-specific data
  * `/deploy` - Files used to deploy the app to Azure Web Apps
  * `/layouts` - Page layouts
  * `/pages` - The pages themselves, these turn into URLs as per Next.js convention
  * `/static` - Static assets
  * `/styles` - Stylesheets

## Re-purposing for another conference

To re-purpose for another conference:

1. Update the files in the `config` directory
2. Update `$primaryColour` in `styles/colours-and-fonts.scss` (and other styles as you desire)
3. Update the images in the `static` directory and sub directories
4. Update `pages/about.tsx`, `pages/cfp.tsx` and `pages/agenda/*.tsx` with content specific to your conference

If you want to make tweaks to the pages then inspect the files in the `pages` directory and modify from there.
