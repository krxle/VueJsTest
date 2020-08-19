<template>
  <div>
    <h1>Create car</h1>
    <br>
      
        <select style="width: 50%" v-model="carCreate.mark" class="form-control">
        <label for="mark">Mark</label>
        <optgroup label="All Mark">
        <option
          v-for="(mark, brand) in models" 
          v-bind:key="'mark_selected_' + brand" :value="brand">{{ brand }}</option>
          </optgroup>
      </select>
      
      
      <select style="width: 50%" v-model="carCreate.reference" class="form-control">
        <label for="reference">Reference</label>
        <option
          v-for="(years, reference) in models[carCreate.mark]"
          v-bind:key="'reference_selected_' + reference" :value="reference">{{ reference }}</option>
      </select>
      
      
      <select style="width: 100%" v-model="carCreate.year" class="form-control">
        <label for="year">Year</label>
        <option
          v-for="year in models[carCreate.mark][carCreate.reference]"
          v-bind:key="'year_selected_' + year" :value="year">{{ year }}</option>
      </select>
      
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { hasProto } from "vue-class-component/lib/util";
export default Vue.extend({
  data() {
    return {
      models: {
        All: {
          All:[2020, 2019, 2018, 2017, 2016, 2015]

          
        },
	      "Alfa-Romeo": {
          Any: [2020, 2019, 2018, 2017, 2016, 2015],
          Mito: [2015, 2016, 2017, 2018],
          Giulia: [2019, 2016, 2017, 2018],
          Giulietta: [2019, 2020, 2017, 2018],
        },
        Audi: {
          Any: [2020, 2019, 2018, 2017, 2016, 2015],
          A4: [2015, 2016, 2017, 2018],
          A1: [2019, 2016, 2017, 2018],
          RS6: [2019, 2020, 2017, 2018],
        },
	      BMW: {
          Any: [2020, 2019, 2018, 2017, 2016, 2015],
          "Série 1": [2015, 2016, 2017, 2018],
          I8: [2019, 2016, 2017, 2018],
          "M8 Compétition": [2019, 2020, 2017, 2018],
        },
        "Mercedes-AMG": {
          Any: [2020, 2019, 2018, 2017, 2016, 2015],
          C63S: [2015, 2016, 2017, 2018],
          GL63: [2015, 2020, 2018, 2016],
          ML63: [2019, 2015, 2017, 2018],
          GTR: [2016, 2016, 2020, 2018],
        },
	      Volkswagen: {
          Any: [2020, 2019, 2018, 2017, 2016, 2015],
          Golf: [2015, 2016, 2017, 2018],
          Polo: [2019, 2016, 2017, 2018],
          Passat: [2019, 2020, 2017, 2018],
        },
      },

      carCreate: {
        mark: "All",
        reference: "All",
        year: 2020,
      },
    };
  },

  created() {
    this.carCreate.mark = Object.keys(this.models)[0];
    this.carCreate.reference = Object.keys(this.models)[0];
    this.carCreate.year = Object.keys(this.models)[0];
  },

  mounted() {
    if (localStorage.mark) {
      this.carCreate.mark = localStorage.mark;
    }
    if (localStorage.reference) {
      this.carCreate.reference = localStorage.reference;
    }
    if (localStorage.year) {
      this.carCreate.year = localStorage.year;
    }
  },

  methods: {
    persists() {
        localStorage.mark = this.carCreate.mark
        localStorage.reference = this.carCreate.reference
        localStorage.year = this.carCreate.year
    },
  },
});
</script>


<style lang="scss" scoped>

div {
  display: flex;
  flex-wrap: wrap;
  text-justify: justify;
  justify-content: center;
  background-color: whitesmoke;

  width: 20%;
  height: 100%;
  border: 2px solid;
  border-radius: 10px;
  border-color: #2c3e50;
  padding: 50px;
  margin: 20px;
}


</style>