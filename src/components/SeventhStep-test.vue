<template>
  <div id="sixth-step">
      <v-card-text>
        <v-container>
          <h1>D．総合的な財務的・非財務的要素の重要度</h1>
          <p>オフィスビルに対する投資について、将来のキャッシュフローの安定性に関する考え方をお伺いいたします。</p>

          <v-row justify="center" align-content="center" v-for="SeventhStepValue in SeventhStepValues" v-bind:key="SeventhStepValue.title">
            <h3>{{SeventhStepValue.heading}}</h3>
            <v-col cols="4">
              <h4>{{SeventhStepValue.title}}</h4>
            </v-col>
            <v-col cols="8">
              <v-radio-group row :name="SeventhStepValue.name" v-model="SeventhStepValue.saveValue" color="info">
                <v-radio v-for="radioItem in radioItems" v-bind:key="radioItem.label"
                :label="radioItem.label"
                :value="radioItem.val"
                >
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <p>設問は以上です。アンケートにご回答いただきありがとうございました。</p>
          <br>
          <br>
          <br>
          <br>

          <!-- production entry.1247262667-->
          <div>
            <p>本アンケート調査の結果の概要ご希望の場合はお送りいたしますので、以下欄にチェックを入れてください。</p>
            <v-checkbox
              v-model="form__B6"
              name="entry.366166243"
              value="希望する"
              label="希望する"
              type="checkbox"
              required>
            ></v-checkbox>
          </div>

          <!-- production entry.1308726562-->
          <v-text-field
            v-model="endTime"
            name="entry.2060477936"
            label="終了時刻"
            placeholder="00:00"
            v-show="show"
            required
          ></v-text-field>
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
      type: 'submit',
      show: false
    }
  },
  computed: {
    endTime: {
      get () {
        return this.$store.state.endTime
      },
      set(value) {
        this.$store.commit('setEndTime', {endTime: value})
      }
    },
    SeventhStepValues: {
      get () {
        return this.$store.state.SeventhStepValues
      },
      set(value) {
        this.$store.commit('setSeventhSaveValue', {SeventhStepValues: value})
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
    form__B6: {
      get () {
        return this.$store.state.form__B6
      },
      set(value) {
        this.$store.commit('setFormB6', {form__B6: value})
      }
    }
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
