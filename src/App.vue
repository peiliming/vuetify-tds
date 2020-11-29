<template>
  <v-app>
    <v-main>
      <validation-observer v-slot="{ invalid }">
        <v-form ref="form" lazy-validation>
          <v-card>
            <v-card-title>オフィスビル品質評価調査</v-card-title>
          </v-card>
          <router-view/>
        </v-form>
        <transition>
          <v-alert
            v-model="alert"
            border="left"
            close-text="Close Alert"
            color="info"
            dark
            dismissible
            v-if="alert"
          >送信しました。
        </v-alert>
        </transition>

        <v-row justify="center">
          <v-col cols=3>
            <v-btn width="180" large @click="navigatePrevious" v-show="!isFirst()">
              戻る
            </v-btn>
          </v-col>

          <v-col cols=3>
            <v-btn width="180" text-align="center" large id="submitButton" @click="navigateNext()" :disabled="invalid">
              {{ nextButtonText() }}
            </v-btn>
          </v-col>
        </v-row>
      </validation-observer>

    </v-main>
  </v-app>
</template>


<script>
import axios from "axios"

export default {
  name: 'App',
  data() {
    return {
      submitProcessing: true,  //送信ボタンフラグ
      alert: false,
      startTime: null,
      startTimeGet: true,
      endTime: null,
      endTimeGet: true,
      invalid: false
    }
  },
  methods: {

    submit: function () {
      if(this.submitProcessing) {
        this.submitProcessing = false

        const formData = new FormData();
        //prod用
        formData.append("entry.405864373", this.$store.state.email)
        formData.append("entry.1989060872", this.$store.state.form__A1a)
        formData.append("entry.1878965843", this.$store.state.form__A1b)
        formData.append("entry.334413620", this.$store.state.form__A1c)
        formData.append("entry.1714591256", this.$store.state.form__A2)
        formData.append("entry.967671219", this.$store.state.form__A3)
        formData.append("entry.504873069", this.$store.state.form__A4)
        formData.append("entry.1387847984", this.startTime)
        formData.append("entry.1308726562", this.endTime)
        formData.append("entry.1317767142", this.$store.state.ipAddress)
        formData.append("entry.1247262667", this.$store.state.form__B6)

        for (let i = 0; i<this.$store.state.SecondStepValues.length;i++) {
          formData.append(this.$store.state.SecondStepValues[i].name, this.$store.state.SecondStepValues[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.ThirdStepValues.length;i++) {
          formData.append(this.$store.state.ThirdStepValues[i].name, this.$store.state.ThirdStepValues[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.FourthStepValues.length;i++) {
          formData.append(this.$store.state.FourthStepValues[i].name, this.$store.state.FourthStepValues[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.FifthStepValues.length;i++) {
          formData.append(this.$store.state.FifthStepValues[i].name, this.$store.state.FifthStepValues[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.FifthStepValuesCalculation.length;i++) {
          formData.append(this.$store.state.FifthStepValuesCalculation[i].name, this.$store.state.FifthStepValuesCalculation[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.FifthStepValuesCalculationSec.length;i++) {
          formData.append(this.$store.state.FifthStepValuesCalculationSec[i].name, this.$store.state.FifthStepValuesCalculationSec[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.SixthStepValues.length;i++) {
          formData.append(this.$store.state.SixthStepValues[i].name, this.$store.state.SixthStepValues[i].saveValue)
        }
        for (let i = 0; i<this.$store.state.SeventhStepValues.length;i++) {
          formData.append(this.$store.state.SeventhStepValues[i].name, this.$store.state.SeventhStepValues[i].saveValue)
        }

        // CORSエラー対策
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        // Googleフォームのaction属性値
        const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdpO8F3_ZyVfYMme7FAANIr6ZeRXssloVediPxJBpmHwgfpgg/formResponse"

        // Ajax POST通信
        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          for (var [key, value] of formData.entries()) {
            console.log(key, value);
          }
          console.log(res)
          this.alert = true

        }).catch((err) => {
            console.log(err)
            alert(err)
        })
      }
    },
    getTime() {
      var d = new Date();
      var hh = d.getHours();
      var mm = d.getMinutes();
      var ss = d.getSeconds();
      if(hh<10) {
        hh = '0'+ hh
      }
      if(mm<10) {
        mm = '0'+ mm
      }
      if(ss<10) {
        ss = '0'+ ss
      }
      var time = hh + ':' + mm + ':' + ss;
      console.log(time)
      return time
    },
    nextButtonText() {
      if(this.$route.name === 'firstStep') {
        if(this.startTimeGet) {
          this.startTime = this.getTime()
          this.startTimeGet = false
        }
      }
      if( this.$route.name === 'seventhStep' ) {
        if(this.endTimeGet) {
          this.endTime = this.getTime()
          this.endTimeGet = false
        }
      }

      if ( this.$route.name === 'firstStep' ||  this.$route.name === 'secondSection' || this.$route.name === 'secondStep' || this.$route.name === 'thirdSection'
      || this.$route.name === 'thirdStep' || this.$route.name === 'fourthStep' || this.$route.name === 'fifthStep' || this.$route.name === 'sixthStep')
      { return '次へ'}
      else if( this.$route.name === 'seventhStep' ){ return '送信'}
      else {return '次へ'}

    },

    isFirst() {
      return this.$route.name === 'topSection';
    },

    navigateNext() {
      if ( this.$route.name === 'firstStep' ){ this.$router.push('/second-section') }
      else if ( this.$route.name === 'secondSection' ) { this.$router.push('/second-step') }
      else if ( this.$route.name === 'secondStep' ) { this.$router.push('/third-section') }
      else if ( this.$route.name === 'thirdSection' ) {this.$router.push('/third-step') }
      else if ( this.$route.name === 'thirdStep' ) {this.$router.push('/fourth-step') }
      else if ( this.$route.name === 'fourthStep' ) {this.$router.push('/fifth-step') }
      else if ( this.$route.name === 'fifthStep' ) {this.$router.push('/sixth-step') }
      else if ( this.$route.name === 'sixthStep' ) {this.$router.push('/seventh-step') }
      else if ( this.$route.name === 'seventhStep' ) { this.submit() }
      else {
        this.$router.push('/first-step')
      }
    },
    navigatePrevious() {
      if (this.$route.name === 'firstStep'){
        this.$router.push('/')
      }
      if (this.$route.name === 'secondSection'){
        this.$router.push('/first-step')
      }
      if (this.$route.name === 'secondStep'){
        this.$router.push('/second-section')
      }
      if (this.$route.name === 'thirdSection'){
        this.$router.push('/second-step')
      }
      if (this.$route.name === 'thirdStep'){
        this.$router.push('/third-section')
      }
      if (this.$route.name === 'fourthStep'){
        this.$router.push('/third-step')
      }
      if (this.$route.name === 'fifthStep'){
        this.$router.push('/fourth-step')
      }
      if (this.$route.name === 'sixthStep'){
        this.$router.push('/fifth-step')
      }
      if (this.$route.name === 'seventhStep'){
        this.$router.push('/sixth-step')
      }
    }
  },
  computed: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s
}
.v-leave-to {
  opacity: 0;
}
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
