<template>
  <div id="fifth-step">
      <v-card-text>
        <v-container>
          <p>《B-4 全体評価》これまでお聞きしたオフィスビルの品質の3つの要素（立地、建物品質、室内環境）について、総合的な重要度をお聞きします。</p>
          <v-row justify="center" align-content="center" v-for="FifthStepValue in FifthStepValues" v-bind:key="FifthStepValue.title">
            <!--<h3>{{FifthStepValue.heading}}</h3>-->
            <v-col cols="4">
              <h4>{{FifthStepValue.title}}</h4>
            </v-col>
            <v-col cols="8">
              <v-radio-group row :name="FifthStepValue.name" v-model="FifthStepValue.saveValue" color="info">
                <v-radio v-for="radioItem in radioItems" v-bind:key="radioItem.label"
                :label="radioItem.label"
                :value="radioItem.val"
                >
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

<!--
          <div v-for="Detail in FifthStepValuesCalculation" v-bind:key="Detail.title">
          <h3>{{Detail.heading}}
          <small>{{Detail.notes}}</small></h3>
          <v-text-field
            v-model="Detail.saveValue"
            :name="Detail.name"
            :label="Detail.label"
            required
          ></v-text-field>
          </div>
          -->

<!--
          <div v-for="Detail in FifthStepValuesCalculationSec" v-bind:key="Detail.title">
          <h3>{{Detail.heading}}
          <small>{{Detail.notes}}</small></h3>
          <v-text-field
            v-model="Detail.saveValue"
            :name="Detail.name"
            :label="Detail.label"
            required
          ></v-text-field>
          </div>
-->

          <div>
          <h3>《B-4【B-4-b】オフィスビルの品質に関する総合的な重要度 上記の要素の重要度を合計100％となるよう配分してご回答ください。
          <br><small>下記の3項目は合計100になるよう、数字を入力してください。</small></h3>
          <v-text-field
            v-model="form__B4b1"
            name="entry.825663094"
            label="立地"
            required
          ></v-text-field>
          {{form__B4b1}}

          <v-text-field
            v-model="form__B4b2"
            name="entry.1973628894"
            label="建物品質"
            required
          ></v-text-field>
          {{form__B4b2}}

          <v-text-field
            v-model="form__B4b3"
            name="entry.787843107"
            label="室内環境（ワークスペース・執務環境）の品質"
            required
          ></v-text-field>
          {{form__B4b3}}
          </div>

<!--
          <h3>【B-4-c】関係者の意見の重要度 評価をするには、さまざまな関係者に相談する必要がありますが、以下に挙げる関係者の意見の重要度をどのようにお考えですか。合計100％となるようご回答ください。
          <br><small>下記の6項目は合計100になるよう、数字を入力してください。</small></h3>
          <v-text-field
            v-model="form__B4c1"
            name="entry.1766423286"
            label="不動産専門家"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4c2"
            name="entry.321275289"
            label="不動産専門家"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4c3"
            name="entry.1528538602"
            label="不動産専門家"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4c5"
            name="entry.289566251"
            label="不動産専門家"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4c5"
            name="entry.1255742850"
            label="不動産専門家"
            required
          ></v-text-field>

          <v-text-field
            v-model="form__B4c6"
            name="entry.1860173626"
            label="不動産専門家"
            required
          ></v-text-field>

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
    FifthStepValues: {
      get () {
        return this.$store.state.FifthStepValues
      },
      set(value) {
        this.$store.commit('setFifthSaveValue', {FifthStepValues: value})
      }
    },
    FifthStepValuesCalculation: {
      get () {
        return this.$store.state.FifthStepValuesCalculation
      },
      set(value) {
        this.$store.commit('setFifthSaveValueCalculation', {FifthStepValuesCalculation: value})
      }
    },
    FifthStepValuesCalculationSec: {
      get () {
        return this.$store.state.FifthStepValuesCalculationSec
      },
      set(value) {
        this.$store.commit('setFifthSaveValueCalculationSec', {FifthStepValuesCalculationSec: value})
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
    form__B4b1: {
      get () {
        return this.$store.state.form__B4b1
      },
      set(value) {
        this.$store.commit('setFormB4b1', {form__B4b1: value})
      }
    },
    form__B4b2: {
      get () {
        return this.$store.state.form__B4b2
      },
      set(value) {
        this.$store.commit('setFormB4b2', {form__B4b2: value})
      }
    },
    form__B4b3: {
      get () {
        return this.$store.state.form__B4b3
      },
      set(value) {
        this.$store.commit('setFormB4b3', {form__B4b3: value})
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
