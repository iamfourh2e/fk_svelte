import { writable } from "svelte/store";
import type { ISchool } from "$lib/interfaces/interface";

export const SCHOOL_STORES = writable<ISchool[]>([]);