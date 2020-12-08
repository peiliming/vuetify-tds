<template>
  <div id="fifth-step">

    <div class="amber lighten-3 rounded-lg pa-4">
      <h2>【B-4】全体評価</h2>
      <p>これまでお聞きしたオフィスビルの品質の3つの要素（立地、建物品質、室内環境）について、総合的な重要度をお聞きします。</p>
    </div>
    
    <div class="form-content" justify="center" align-content="center" v-for="FifthStepValue in FifthStepValues" v-bind:key="FifthStepValue.title">
      
      <div class="form-heading-top">
        <h3>{{FifthStepValue.headingTop}}</h3>
        <p>{{FifthStepValue.heading}}</p>
      </div>
      <div class="form-content-detail">
        <h4>{{FifthStepValue.title}}</h4>
        <validation-provider
          v-slot="{ errors }"
          rules="required"
        >
        <v-radio-group class="form-content-radio" :name="FifthStepValue.name" v-model="FifthStepValue.saveValue" color="info">
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

      <div class="form-content" v-for="Detail in FifthStepValuesCalculation" v-bind:key="Detail.title">
        <div class="form-heading-top">
          <h3>{{Detail.headingTop}}</h3>
          <p>{{Detail.heading}}</p>
          <p class="annotation note">{{Detail.notes}}</p>
        </div>
        
        <div class="form-content-input-detail">
          <validation-provider
            v-slot="{ errors }"
            rules="numeric"
            name="入力内容"
          >
          <v-text-field
            v-model="Detail.saveValue"
            :name="Detail.name"
            :label="Detail.label"
            required
          ></v-text-field>
          <v-alert type="error" v-show="errors.length" class="error_message">
            {{ errors[0] }}
          </v-alert>
          </validation-provider>
        </div>
      </div>
      <v-text-field
      v-model="sumValueB4b"
      v-show="show"
      required
      ></v-text-field>


      <div class="form-content" v-for="Detail in FifthStepValuesCalculationSec" v-bind:key="Detail.title">
        <div class="form-heading-top">
          <h3>{{Detail.headingTop}}</h3>
          <p>{{Detail.heading}}</p>
          <p class="annotation note">{{Detail.notes}}</p>
        </div>
        <div class="form-content-input-detail">
          <validation-provider
            v-slot="{ errors }"
            rules="numeric"
            name="入力内容"
          >
          <v-text-field
            v-model="Detail.saveValue"
            :name="Detail.name"
            :label="Detail.label"
            required
          ></v-text-field>
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
  name: 'fifthStep',
  components: {
  },
  data() {
    return {
      show: false
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
    sumValueB4b: function(){
      let sum = 0
      for(const Detail of this.FifthStepValuesCalculation) {
        sum += +Detail.saveValue
      }
      if(sum > 100) {
        alert('合計値が100%を超えないでください')
      }
      return sum
    },
    sumValueB4c: function(){
      let sum = 0
      for(const Detail of this.FifthStepValuesCalculationSec) {
        sum += +Detail.saveValue
      }
      if(sum > 100) {
        alert('合計値が100%を超えないでください')
      }
      return sum
    }
  }
}
</script>