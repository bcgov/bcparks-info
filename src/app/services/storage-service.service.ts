import { EventEmitter } from '@angular/core';

/**
 * An object containing a single key value pair.
 *
 * @export
 * @interface IStateItem
 */
export interface IStateItem {
  [key: string]: any;
}

export class StorageService {
  public stateChange: EventEmitter<object> = new EventEmitter();

  private currentState: object;

  constructor() {
    this.currentState = {};
  }

  /**
   * Get the entire store state.
   *
   * @type {object}
   * @memberof StorageService
   */
  get state(): object {
    return this.currentState;
  }

  /**
   *  Set the entire store state.  WIll override any existing store state.
   *
   * @memberof StorageService
   */
  set state(state: object) {
    this.currentState = state;
    this.stateChange.emit(this.currentState);
  }

  /**
   * Add an item to the store.  WIll override an existing item with the same key.
   *
   * @param {IStateItem} item
   * @memberof StorageService
   */
  setItem(item: IStateItem) {
    this.currentState = { ...this.currentState, ...item };
    this.stateChange.emit(this.currentState);
  }

  /**
   * Get an item from the store.
   *
   * @param {string} itemKey
   * @returns {*}
   * @memberof StorageService
   */
  getItem(itemKey: string): any {
    return this.currentState[itemKey];
  }

  /**
   * remove an item from the store.
   *
   * @param {string} itemKey
   * @memberof StorageService
   */
  removeItem(itemKey: string) {
    delete this.currentState[itemKey];
    this.stateChange.emit(this.currentState);
  }
}
