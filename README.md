# \<kwc-icons\>

All Kano icons, broken up by category Edit

## Installation
Clone this repository.
Run `bower i`

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test --skip-plugin junit-reporter
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Adding new icons

1. Go to [SVG-edit](https://svg-edit.github.io/svgedit/releases/svg-edit-2.8.1/svg-editor.html)
2. Click on top left "SVG-edit" icon and then on "document properties"
3. Set canvas dimensions to 64x64px
4. Import your SVG
5. Resize and center align (if you click on the svg shape you will have an alignment tool on the toolbar)
6. Get the `<path>` or the entire `<g>` by clicking on the icon next to the "SVG-edit" (the one that will show you the svg source code)
7. Add you your icon list stripping any `stroke`, `id` or anything else that is not needed.
