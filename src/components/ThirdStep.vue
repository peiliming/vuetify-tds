<template>
  <div id="third-step">

    <div class="amber lighten-3 rounded-lg pa-4">
      <h2>【B-2】オフィスビルの建物の品質について</h2>
      <p>オフィスビルの建物の品質に関して、以下の４つの項目（美観、経年による陳腐化への対応、環境性能、リスクマネジメント）について、設問にある要素の相対的な重要度をご回答ください。最後に各項目の総合的な重要度についてお伺いします。</p>
    </div>

    <div class="form-content" justify="center" align-content="center" v-for="ThirdStepValue in ThirdStepValues" v-bind:key="ThirdStepValue.title">
      <div class="form-heading-top">
        <h3>{{ThirdStepValue.headingTop}}</h3>
        <p>{{ThirdStepValue.heading}}</p>
      </div>
      
      <div class="form-content-detail">
        <h4>{{ThirdStepValue.title}}</h4>

        <validation-provider
            v-slot="{ errors }"
            rules="required"
          >
        <v-radio-group class="form-content-radio" :name="ThirdStepValue.name" v-model="ThirdStepValue.saveValue" color="info">
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
  name: 'thirdStep',
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
