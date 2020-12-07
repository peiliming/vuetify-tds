<template>
<div id="second-step">

  <div class="top-paragrap pl-4 pr-16 pa-4 mb-14">
    <p>これ以降、物件の最有効活用（最も収益性が高く、最も合理的な使用法）の観点から、東京都心5区に立地するオフィスビルに対する投資を検討する業務を担当しているものと想像してください。設問に際しては、列挙されている要素間の相対的な関係で各要素の重要度を評価してください。</p>
    <p>各要素は大まかにオフィスビルとしての①立地、②建物性能、③室内環境の3カテゴリに分けられます。</p>
    <p>それぞれのカテゴリについて、いくつかの項目について重要度をお聞きし、その後に各項目の総合的な重要度についてお伺いします。</p>
  </div>

  <div class="amber lighten-3 rounded-lg pa-4">
    <h2>【B-1】オフィスビルの立地について</h2>
  </div>

  <div class="form-content" justify="center" align-content="center" v-for="SecondStepValue in SecondStepValues" v-bind:key="SecondStepValue.title">
    <div class="form-heading-top">
      <h3>{{SecondStepValue.headingTop}}</h3>
      <p>{{SecondStepValue.heading}}</p>
    </div>
    
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
