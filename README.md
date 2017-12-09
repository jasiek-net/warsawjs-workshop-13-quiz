# warsawjs-workshop-13
Quiz game prepared for #VueJS workshops

## Plan
**`single-file` - single file app**
* question card
* question list
* progress bar (semantic-ui component)

**`modules` - vue-cli**
* `vue init webpack quiz`
* `npm install semantic-ui-vue --save`
* `npm install semantic-ui-css --save`
* npm & webpack
* split to modules

**`routing` - vue router**
* `npm install vue-router --save`
* outer layout
* routes: intro, game, settings

**`network` - fetching questions** 
* `npm install axios --save`
* loading indicator

## Vue.js features
**Template syntax**
* `{{ msg }}` - interpolation
* `v-bind`, `:` - one way binding
* `v-model` - two-way (inputs etc.)
* `v-html` - parse html
* `v-if, v-else`, `v-show` - conditionals
* `v-for` - render in loop
* `v-on`, `@` - events 
* `v-once` - render once
* `v-cloak` - blank page before render

**Components**
* data
* props
* methods
* computed
* lifecycle
* $on(eventName)
* $emit(eventName)
* nested components

**Router**
* router-view
* router-link
* $router.push('/')
* nested routes

## Other
**Tools**
* vue-cli
* vue dev-tools
* npm & webpack

**Credits**
* [OpentDB](https://opentdb.com/api.php?amount=5&type=boolean) - API with questions
* [Semantic UI](https://semantic-ui-vue.github.io/) - libs with styles & vue components
* [Milionare Quiz](https://github.com/Valian/warsawjs-workshop-12-quiz) - repo from previus workshop
