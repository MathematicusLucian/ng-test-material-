# Recommendations

I had a quick glance at this technical test before cloning the repo. It appears that the functions generally have a variable (referencing an observable) to be missing, or in some cases, the divisor is wrong, e.g. 17, as opposed to 2. Rather straightforward bugs, though you have shown a good grasp of RxJS, featuring even forkjoins, hot/cold, and so forth. Further, I am impressed by your use of unit tests, including mention of "watch".

The fundamental problem with this technical test is that if anyone is to go to GitHub and select through the UI the url to paste into the CLI (to clone the repo, as per your instructions in the README, below) they will by default copy the Master. Thereupon, I ran your tests, and was initially confused as I found they passed. Looking further, I noticed the two branches.

To achieve a cloning of only the branch wherein there are bugs, one needs a specfic command:

``` git clone --single-branch --branch test/rxjs https://github.com/hevans90/ng-test-material.git ```

I would advise that you hide this repo in entirety (setting it to private) and present the user an alternate wherein there is no other branch (certainly not one with the "answers"), and no commit history asking people not to cheat; you have no means to verify whether they do.

Nonetheless, I will ignore the "answers" and have a look at the functions, leaving some comments.

There is a security concern. Upgrade object-path to version 0.11.5 or later. ``` A prototype pollution vulnerability has been found in object-path <= 0.11.4 affecting the set() method. The vulnerability is limited to the includeInheritedProps mode (if version >= 0.11.0 is used), which has to be explicitly enabled by creating a new instance of object-path and setting the option includeInheritedProps: true, or by using the default withInheritedProps instance. The default operating mode is not affected by the vulnerability if version >= 0.11.0 is used. Any usage of set() in versions < 0.11.0 is vulnerable.``` 

# FrontEndTests

This repo is a piece of learning material aimed at people wanting to explore the Angular framework, and [rxjs](https://github.com/ReactiveX/rxjs).

Ensure you do a `yarn` inside the repo to install all the required dependencies, and that you have an [LTS or greater version of node installed](https://nodejs.org/en/).

## rxjs material

[This folder](https://github.com/hevans90/ng-test-material/tree/master/rxjs-examples) contains a variety of **rxjs** material, consisting of four TypeScript files:

- [basic examples](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/basic-examples.ts): `yarn rxjs-basic`
- [advanced examples](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/transformation-examples.ts) (combination operators): `yarn rxjs-adv`
- [example real-world functions](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/function-examples.ts) that return [Observables](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html), written using a mix of operators
- [unit-tests for these examples](https://github.com/hevans90/ng-test-material/blob/master/rxjs-examples/function-examples.spec.ts), written using [jest-marbles](https://www.npmjs.com/package/jest-marbles): `yarn test-rxjs`

### YOUR TASK (rxjs)

- Open a terminal
- Run the unit tests for the (now broken) rxjs examples `yarn test-rxjs`
- Open an IDE like VSCode and open [this local file](./rxjs-examples/function-examples.ts)
- Fix the functions! Your terminal will be giving you feedback via jest --watch, and will let you know if the functions are working or not. Each function has a hint & a link to the docs for the operator(s) you need to use.

The functions get progressively harder to understand & fix. Try your best.
