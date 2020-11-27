<template>
  <v-app>
    <v-main>
      <!--production https://docs.google.com/forms/u/0/d/e/1FAIpQLSdpO8F3_ZyVfYMme7FAANIr6ZeRXssloVediPxJBpmHwgfpgg/formResponse -->
      <!--test https://docs.google.com/forms/d/e/1FAIpQLSfCG2wwK__IZB5F8GkcTnu-k6nFSpZ6ABbPjvaG8bsLyctdjg/formResponse -->
      <v-form ref="form" lazy-validation>
        <v-card>
          <v-card-title>オフィスビル品質評価調査</v-card-title>
        </v-card>
        <router-view/>
      </v-form>
      <Navigation/>
    </v-main>
  </v-app>
</template>


<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  },
  /*
  props: {
    SecondStepVmodel: {
      vModelValue: function () {
        return [
          'form__B1a1', 'form__B1a2', 'form__B1a1'
        ]
      }
    }
  },*/
  data: () => ({
    return: {
    }
  }),

  methods: {
    validate() {
        this.$refs.form.validate()
    },
  }
};
</script>
