<template>
  <div id="sixth-step">

    <div class="amber lighten-3 rounded-lg pa-4">
      <h2>【C】将来のキャッシュフローの安定性の評価</h2>
      <p>オフィスビルに対する投資について、将来のキャッシュフローの安定性に関する考え方をお伺いいたします。</p>
    </div>

    <div class="form-content" justify="center" align-content="center" v-for="SixthStepValue in SixthStepValues" v-bind:key="SixthStepValue.title">
      <h3>{{SixthStepValue.headingTop}}</h3>
      <p class="form-content-text-sixth">{{SixthStepValue.heading}}</p>
      <div class="form-content-detail">
        <h4>{{SixthStepValue.title}}</h4>
        <validation-provider
          v-slot="{ errors }"
          rules="required"
        >
        <v-radio-group class="form-content-radio" :name="SixthStepValue.name" v-model="SixthStepValue.saveValue" color="info">
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
