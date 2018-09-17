<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex xs6>
        <v-subheader>Prepended icon</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-autocomplete
          :items="states"
          v-model="e1"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="map"
          single-line
        ></v-autocomplete>
      </v-flex>
      <v-flex xs6>
        <v-subheader>Appended icon</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-autocomplete
          :items="states"
          v-model="e2"
          append-outer-icon="map"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const NAME = 'INIT';
export default {
  name: NAME,
  data () {
    return {
      e1: 'Florida',
      e2: 'Texas',
      e3: null,
      e4: null,
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    };
  }
};
</script>

<style scoped lang="scss">
</style>
