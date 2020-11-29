<template>
  <div id="fourth-step">
      <v-card-text>
        <v-container>
          <p>オフィスビルの室内環境（ワークスペース／執務環境）に関して、以下の４つの項目（柔軟性、快適性、通信環境、共用スペース）について、設問にある要素の相対的な重要度をご回答ください。最後に各項目の総合的な重要度についてお伺いします。</p>
          <v-row justify="center" align-content="center" v-for="FourthStepValue in FourthStepValues" v-bind:key="FourthStepValue.title">
            <h3>{{FourthStepValue.heading}}</h3>
            <v-col cols="4">
              <h4>{{FourthStepValue.title}}</h4>
            </v-col>
            <v-col cols="8">
              <validation-provider
                v-slot="{ errors }"
                rules="required"
              >
              <v-radio-group row :name="FourthStepValue.name" v-model="FourthStepValue.saveValue" color="info">
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
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
  </div>

</template>

<script>
export default {
  name: 'fourthStep',
  components: {
  },
  data() {
    return {

    }
  },
  computed: {
    FourthStepValues: {
      get () {
        return this.$store.state.FourthStepValues
      },
      set(value) {
        this.$store.commit('setFourthSaveValue', {FourthStepValues: value})
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
