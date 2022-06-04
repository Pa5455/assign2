<script>
  import {getContext, onMount} from 'svelte'

  const doseService = getContext("DoseService");
  let doseList = [];

  onMount(async () => {
    doseList = await doseService.getDosage();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Amount</th>
    <th>Method</th>
    <th>Sales</th>
    <th>Product</th>
  </thead>
  <tbody>
    {#each doseList as dose}
      <tr>
        <td>
          {dose.amount}
        </td>
        <td>
          {dose.method}
        </td>
        <td>
          {dose.product.brandName}>> {dose.product.typeName}
        </td>
        <td>
          {dose.donor.lastName},  {dose.donor.firstName}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
