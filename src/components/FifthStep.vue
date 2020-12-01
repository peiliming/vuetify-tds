<template>
  <div id="fifth-step">

    <p>《B-4 全体評価》これまでお聞きしたオフィスビルの品質の3つの要素（立地、建物品質、室内環境）について、総合的な重要度をお聞きします。</p>

    <div class="py-3" justify="center" align-content="center" v-for="FifthStepValue in FifthStepValues" v-bind:key="FifthStepValue.title">

        <h4>{{FifthStepValue.title}}</h4>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
        >
        <v-radio-group row :name="FifthStepValue.name" v-model="FifthStepValue.saveValue" color="info">
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

    <div v-for="Detail in FifthStepValuesCalculation" v-bind:key="Detail.title">
    <h3>{{Detail.heading}}
    <small>{{Detail.notes}}</small></h3>
    <validation-provider
      v-slot="{ errors }"
      rules="numeric"
      name="こちら"
    >
    <v-text-field
      class="test"
      id="sss"
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
    <v-text-field
      label="合計"
      id="zf"
      v-model="sumValue"
      required
    ></v-text-field>

    <div v-for="Detail in FifthStepValuesCalculationSec" v-bind:key="Detail.title">
    <h3>{{Detail.heading}}
    <small>{{Detail.notes}}</small></h3>
    <validation-provider
      v-slot="{ errors }"
      rules="numeric"
      name="こちら"
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
    sumValue: function(){
        var valueArr = document.getElementById("sss")
        console.log(valueArr)
    //    var sumValue=0;
  /*      for (var i=0;i<valueArr.length;i++ )
        {
          sumValue +=parseInt(valueArr[i].value);
          console.log(valueArr[i])
          console.log(valueArr.length+'111')
        }
      //  document.getElementById("zf").value=sumValue;
      console.log(sumValue)
      return sumValue  */
      return valueArr
    }
  }
}
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
