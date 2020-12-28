import { STORAGE_KEY } from './mutations';

export default function localStoragePlugin(store) {
  // called when the store is initialized
  store.subscribe((muatation, { todos }) => {
    // called after every mutation.
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  });
}
