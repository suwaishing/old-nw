# Project NW (Old state)

Simple, minimalist Net worth and Salary calculator specify in Viet Nam \(Originate from [Project-Nw](https://github.com/rozetta1125/project-nw)\)  
Demo: https://suwaishing.github.io/old-nw/

## Tech used
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3
- [FusionCharts](https://www.fusioncharts.com/) to illustrate figure on chart
- [Pagepiling](https://github.com/alvarotrigo/pagePiling.js#pagepilingjs) for slider \(\*\)
- [@ngx-translate](https://github.com/ngx-translate/core) for multiple languages support
- JQuery and Bootstrap 4 for styling and animations

## What we learn
- Basic Angular 2+ such as reactive and template driven form, routing, lazyloading and other basic concepts
- Retrieve user input and return as usefull information in the form of graphs or tables
- Some elemental in designing
- Understand the math of those calculators
## For running local
- Run `npm i` for install modules.
- Run `npm start` to build the project. 
## Notes
 \(\*\) This project removed some CSS in _node_modules\/pagepiling.js\/jquery.pagepiling.css_ as below
 ```
html,body {
  overflow: hidden;
  margin: 0;
  padding: 0;

  /*Avoid flicker on slides transitions for mobile phones #336 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
 ```
