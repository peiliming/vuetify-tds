<template>
  <div id="third-step">

    <div class="py-3" justify="center" align-content="center" v-for="ThirdStepValue in ThirdStepValues" v-bind:key="ThirdStepValue.title">
      <p class="text-subtitle-1">{{ThirdStepValue.heading}}</p>

        <h4>{{ThirdStepValue.title}}</h4>

        <validation-provider
            v-slot="{ errors }"
            rules="required"
          >
        <v-radio-group row :name="ThirdStepValue.name" v-model="ThirdStepValue.saveValue" color="info">
          <v-radio v-for="radioItem in radioItems" v-bind:key="radioItem.label"
          :label="radioItem.label"
          :value="radioItem.val"
          >
          </v-radio>
        </v-radio-group>
        <v-alert type="error" v-show="errors.length" class="error_message">
          {{ errors[0] }}
        </v-alert>
        </validation-provider>

    </div>

  </div>
</template>

<script>
export default {
  name: 'secondStep',
  components: {
  },
  data() {
    return {

    }
  },
  computed: {
    ThirdStepValues: {
      get () {
        return this.$store.state.ThirdStepValues
      },
      set(value) {
        this.$store.commit('setThirdSaveValue', {ThirdStepValues: value})
      }
    },
    radioItems: {
      get () {
        return this.$store.state.radioItems
      },
      set(value) {
        this.$store.commit('setRadioItem', {radioItems: value})
      }
    },
  }
}
// entry.2115424323
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
