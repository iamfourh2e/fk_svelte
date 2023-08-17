<div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

<li>
    {school.id}.{school.name} 
    <br/>
    {school.email}
    <button style="cursor: pointer;color:red" on:click={() => deleteFn(school.id)}>Delete</button>
</li>

<script lang="ts">
    import type { ISchool } from "$lib/interfaces/interface";
    export  let school: ISchool, deleteFn: (id:number) => void
</script>