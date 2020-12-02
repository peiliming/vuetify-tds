<template>
<div id="second-step">

  <div class="form-content" justify="center" align-content="center" v-for="SecondStepValue in SecondStepValues" v-bind:key="SecondStepValue.title">
    <p class="form-content-text">{{SecondStepValue.heading}}</p>

    <div class="form-content-detail">
      <h4>{{SecondStepValue.title}}</h4>
      <validation-provider
        v-slot="{ errors }"
        rules="required"
      >
      <v-radio-group class="form-content-radio" :name="SecondStepValue.name" v-model="SecondStepValue.saveValue" color="info">
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
  methods: {
    validateField() {
            // Validate the field
            return this.$refs.myinput.validate();
        }
  },
  computed: {
    SecondStepValues: {
      get () {
        return this.$store.state.SecondStepValues
      },
      set(value) {
        this.$store.commit('setSecondSaveValue', {SecondStepValues: value})
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
