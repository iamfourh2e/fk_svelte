<h1>School Dashboard </h1>
<hr/>
<ul>
    {#each schoolData as school (school.id)}
        <Card deleteFn={removeSchool} school={school}/>
    {/each}
    
</ul>

<script lang="ts">
    import type { ISchool } from "$lib/interfaces/interface";
    import { onMount } from "svelte";
    import { SCHOOL_STORES } from "../store/school";
    import Card from "$lib/components/card.svelte";
    let schoolData : ISchool[] = [];
    SCHOOL_STORES.subscribe((val) => {
        schoolData = val;
    })
    function removeSchool(id: number) {
        const filteredSchools = schoolData.filter(e => e.id != id)
        SCHOOL_STORES.set(filteredSchools)
    }
    //onmount -> fetchdata -> display
    onMount(() => {
        let tmpSchoolData : ISchool[] = [
            {
                id: 1,
                name: "Educheck",
                address: "Battambang",
                email: "yimgming77@gmail.com",
                phone: "015427757"

            },
            {
                id: 2,
                name: "ជាស៊ីម",
                address: "Battambang psar ler",
                email: "cheasim77@gmail.com",
                phone: "012111122"

            }
        ]
         SCHOOL_STORES.set(tmpSchoolData)
    })
</script>