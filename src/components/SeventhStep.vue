<template>
  <div id="seventh-step">

    <div class="amber lighten-3 rounded-lg pa-4 mb-6">
      <h2>【D】総合的な財務的・非財務的要素の重要度</h2>
      <p>オフィスビルに対する投資について、将来のキャッシュフローの安定性に関する考え方をお伺いいたします。</p>
    </div>

    <div class="form-content" justify="center" align-content="center" v-for="SeventhStepValue in SeventhStepValues" v-bind:key="SeventhStepValue.title">
      <div class="form-heading-top">
        <h3>{{SeventhStepValue.headingTop}}</h3>
        <p>{{SeventhStepValue.heading}}</p>
      </div>
      
      <div class="form-content-detail">
        <h4>{{SeventhStepValue.title}}</h4>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
        >
        <v-radio-group class="form-content-radio" :name="SeventhStepValue.name" v-model="SeventhStepValue.saveValue" color="info">
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


<div class="top-paragrap pl-4 pr-16 pt-8 pa-4 mb-16 mt-14">
    <p>設問は以上です。アンケートにご回答いただきありがとうございました。</p>
    <br>

      <p>本アンケート調査の結果の概要ご希望の場合はお送りいたしますので、以下欄にチェックを入れてください。</p>
      <v-checkbox
        v-model="form__B6"
        name="entry.1247262667"
        value="希望する"
        label="希望する"
        type="checkbox"
        required>
      ></v-checkbox>
    </div>

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
