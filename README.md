# checked-log-manage-system

> log manage system for upyun

## Basic

#### Basic Tech

Programming Language:

1. Javascript
2. Shell Script

Js Framework:

1. Vue 2
2. VueX
3. Vue-router
4. Vue-electron
5. Element UI

##Backlog

Want to create a mac app for Check.fm to manage its download logs in upyun.

It will have **Three** main functions.

1. Log Import. *Need to divide to three parts.*
2. Log Data Table. Can Divide to Two parts.
3. Log Data Report

#### TODO

- [ ] Log Import(2/3): Js downloads log files according to data from step 1.
- [ ] Log Import(3/3): Js calls shell scripts to unzip log files, save to database.
- [ ] Log Data Table: To decide which Fields of Log need to be display in data table
- [ ] Log Data Table: Implement a pagable data table
- [ ] Log Data Report: To decide which data of Log needs to be counted
- [ ] Log Data Report: Implement Reports by Echarts.js

#### DOING

- [ ] Log Import(1/ 3): Import UI implement. Using Step component.

#### DONE

- [x] Project init.

### #

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# run webpack in production
npm run pack
```
More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
