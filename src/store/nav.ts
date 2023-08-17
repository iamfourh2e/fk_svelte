import type { IMenu } from "$lib/interfaces/interface";
import { writable } from "svelte/store";
//data , date, string, number, array,function
let MenuData: IMenu[] = [
    {
        itemName: "Home",
        itemLink: "/",
        icon: "home",
        class: "text-red-500"
    },
    {
        itemName: "Product",
        itemLink: "/product",
        class: "text-red-500"
    },
    {
        itemName: "About",
        itemLink: "/about",
        class: "text-blue"
    }
]

export const MENU = writable(MenuData);