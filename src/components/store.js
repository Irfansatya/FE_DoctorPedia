// src/store.js
import { createSignal } from 'solid-js';

export const [username, setUsername] = createSignal("Guest");

// store.js
import { createStore } from "solid-js/store";

const [user, setUser] = createStore({ role: null, userName: null });

export { user, setUser };
