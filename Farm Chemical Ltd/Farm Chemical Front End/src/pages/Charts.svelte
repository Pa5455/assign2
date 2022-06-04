<script>
// @ts-nocheck

import homer3 from "/src/assets/homer3.jpeg";
import TitleBar from "../components/TitleBar.svelte";
import MainNavigator from "../components/MainNavigator.svelte";
import Chart from 'svelte-frappe-charts';
import {getContext, onMount} from "svelte";
const doseService = getContext("DoseService");
  
  let data = {
    labels: ["bottle", "drum"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };
  onMount(async () => {
    let doseList = await doseService.getDosage();
    doseList.forEach(dose => {
      if (dose.method == "drum") {
        data.datasets[0].values[0] += dose.amount
      } else if (dose.method == "bottle") {
        data.datasets[0].values[1] += dose.amount
      }
    })
  });
</script>

  
<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Chemical dose Analytics"} title={"Curran Farm Chemicals Ltd"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">Dosage Volume to date</h1>
      <Chart data={data} type="bar"/>
    </div>
    <div class="column has-text-centered">
        <h1 class="title is-4">Dosage: Pie Chart</h1>
        <Chart data={data} type="pie"/>
    </div>
  </div>