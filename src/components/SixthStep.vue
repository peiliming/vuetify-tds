<template>
  <div id="sixth-step">
      <v-card-text>
        <v-container>
          <h1>C．将来のキャッシュフローの安定性の評価</h1>
          <p>オフィスビルに対する投資について、将来のキャッシュフローの安定性に関する考え方をお伺いいたします。</p>

          <v-row justify="center" align-content="center" v-for="SixthStepValue in SixthStepValues" v-bind:key="SixthStepValue.title">
            <h2>{{SixthStepValue.headingTop}}</h2>
            <h3>{{SixthStepValue.heading}}</h3>
            <v-col cols="4">
              <h4>{{SixthStepValue.title}}</h4>
            </v-col>
            <v-col cols="8">
              <validation-provider
                v-slot="{ errors }"
                rules="required"
              >
              <v-radio-group row :name="SixthStepValue.name" v-model="SixthStepValue.saveValue" color="info">
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
        <!--  <div>
          <h3>《B-4 【B-4-b】オフィスビルの品質に関する総合的な重要度 上記の要素の重要度を合計100％となるよう配分してご回答ください。
          <br><small>下記の3項目は合計100になるよう、数字を入力してください。</small></h3>
          <v-text-field
            v-model="form__B4b1"
            name="entry"
            label="立地"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4b2"
            name="entry"
            label="建物品質"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4b3"
            name="entry"
            label="室内環境（ワークスペース・執務環境）の品質"
            required
          ></v-text-field>
          </div>
          -->
        </v-container>
      </v-card-text>
  </div>

</template>

<script>
export default {
  name: 'fifthStep',
  components: {
  },
  data() {
    return {

    }
  },
  computed: {
    SixthStepValues: {
      get () {
        return this.$store.state.SixthStepValues
      },
      set(value) {
        this.$store.commit('setSixthSaveValue', {SixthStepValues: value})
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
