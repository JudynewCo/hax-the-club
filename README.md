# hax-the-club

## Club membership making screens
- Fork this repo then clone locally and `npm install`
- Take https://github.com/haxtheweb/hax-the-club/blob/main/lib/example-htc-screen.js and copy it into the `lib/` directory with a name that makes sense
- rename the tag / class to match
- import your tag into the `index.html` file at the bottom
- add your tag name to the list, title it, give it an id, start writing content for it and modifying the background color for your square
- Now you should be ready to work on YOUR element style and what not inside your web component!

DDD + Lit web component based on OpenWC toolchain. This is intended to provide the following:
- Look good via DDD, HAX design system
- Simple, easy to read code via Lit
- Great workflow via OpenWC tooling + Vercel for sharing demos
- Simplify contribution to the HAX ecosystem
- Publish and distribute via npmjs.com

## Install dependencies
- `npm install` - installs dependencies so you can work

## Commands
- `npm start` - runs your web component for development, reloading on file changes
- `npm run build` - builds your web component and outputs it in your `dist` directory for placement on web servers in a compiled form. Vercel automatically does this on commit to github.
- `npm run release` - this will build your code, update the version, and publish it to npm for others to use

## Working with your web component
- edit `./hax-the-club.js`
- edit your 'demo' by modifying `./index.html`
- add dependencies using `npm install --save @whatever/repo` or editing `./package.json` directly
- if you must reference additional non-JS files, ensure you use the `new URL('./my-file.jpg', import.meta.url).href` syntax so that it builds correctly
- if you add additional `.js` files / web components then place them under `/lib/`
- to improve HAX wiring edit file in `/lib/hax-the-club.haxProperties.json`
- for i18n / internationalization efforts, see associated language `.json` files in `/locales/` as well as `/lib/` for haxProperties related translation examples.

## Recommended setup
- Load VS code in 1 window to project root
- Browser open
- Right click -> Inspect and open the Console to see error output

## Recommended Integrated Development Environment (IDE)
- [VSCode](https://code.visualstudio.com/Download)

### Plugins

Name: lit-html
Description: Syntax highlighting and IntelliSense for html inside of JavaScript and TypeScript tagged template strings
Publisher: Matt Bierner
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html

Name: lit-plugin
Description: Syntax highlighting, type checking and code completion for lit-html
Publisher: Rune Mehlsen
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin

# Credits
A brighter future dreamed and developed by the Penn State [HAXTheWeb](https://hax.psu.edu/) initative.

Never. Stop. innovating.
## Issue in issue que
https://github.com/haxtheweb/issues/issues/2286
