import { concat, forkJoin, merge, Observable } from 'rxjs';
import { distinct, filter, map, mergeMap, switchMap } from 'rxjs/operators';

/**
 * Should return a concatenated observable of two sources
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/concat
 */
export const concatExample = (obs1: Observable<any>, obs2: Observable<any>) =>

  // This will fail to concat observables 1 and 2 because it only features the second
  // concat(obs2);

  //Adding first observable
  concat(obs1, obs2);

/**
 * Should return a forkJoined observable of two sources
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin
 */
export const forkJoinExample = (obs1: Observable<any>, obs2: Observable<any>) =>

  // This will fail to join anything, because it only features one observable as a parameter for the forkjoin
  // forkJoin([obs1]);

  // Adding an extra parameter: the second observable
  forkJoin([obs1, obs2]);

/**
 * Should return a mapped observable of payloads multiplied by 2
 * https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
 */
export const mapExample = (obs1: Observable<number>) =>

  // As the comment above states, the payloads should be multiplied by 2, not 4
  // obs1.pipe(map(val => val * 4));

  // multiplied by 2
  obs1.pipe(map(val => val * 2));

/**
 * Should return a filtered observable of payloads divisible by 2
 * https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter
 */
export const filterExample = (obs1: Observable<number>) =>

// As the comment above states, the payloads should be divisible by 2, not 17
  // obs1.pipe(filter(val => val % 17 === 0));

  // divisable by 2
  obs1.pipe(filter(val => val % 2 === 0));

/**
 * Should return a merged observable of two sources
 * https://www.learnrxjs.io/learn-rxjs/operators/combination/merge
 */
export const mergeExample = (obs1: Observable<any>, obs2: Observable<any>) =>

  // This won't yield the required result because it divides the payload of the second observable by 2
  // merge(obs1, obs2.pipe(map(payload => payload / 2)));

  // Remove the division of the second observable's paylod
  merge(obs1, obs2);

/**
 * Should return a merge-mapped stream of inner & outer sources.
 * The inner observable should multiply it's values by emissions from the outer.
 * https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap
 */
export const mergeMapExample = (
  outer: Observable<any>,
  inner: Observable<any>
) => 

  // This provides a merge-mapped stream of inner sources & the integer 5, as opposed to inner & outer sources.
  // It doesn't feature  multiplication
  // outer.pipe(mergeMap(outerEmission => inner.pipe(map(val => val + 5))));

  // Replace 5 with outer sources, and include multiplication
  outer.pipe(mergeMap(outerEmission => inner.pipe(map(val => val * + outerEmission))));

/**
 * Should return a switch-mapped stream of inner & outer observables
 * https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
 */
export const switchMapExample = (
  outer: Observable<any>,
  inner: Observable<any>
) =>
  outer.pipe(
    distinct(),
    switchMap(outerEmission => inner)
  );
