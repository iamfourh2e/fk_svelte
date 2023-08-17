<script lang="ts">
    import type { IMenu } from "$lib/interfaces/interface";
    import { MENU } from "../../store/nav";
    let menus: IMenu[] = []
    function menuFn(val: IMenu[]) {
        menus = val;
    }
    MENU.subscribe(menuFn)
</script>


<ul>
    {#each menus as menu}
        <li ><a class={menu.class} href={menu.itemLink}>{menu.itemName}</a></li>
    {/each}
</ul>


<style>
    ul {
        display: flex;
        
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ul > li > a {

        padding:5px 5px;
        text-decoration: none;
        color: #fff;
        background-color: none;
    }
    ul > li > a.text-red-500 {
        color: red;
    }
    ul > li > a.text-blue {
        color: blue;
    }
</style>