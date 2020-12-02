<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>
          <validation-observer v-slot="{ invalid }">

            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>オフィスビル品質評価調査</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form ref="form" lazy-validation>

                  <router-view/>

                  <v-card-actions>
                    <v-btn large @click="navigatePrevious" v-show="!isFirst()">戻る</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text-align="center" large id="submitButton" @click="navigateNext()" :disabled="invalid">{{ nextButtonText() }}</v-btn>
                  </v-card-actions>
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
              </v-card-text>

            </v-card>
          </validation-observer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios"
//import Vue from 'vue'
//import { VueReCaptcha } from 'vue-recaptcha-v3'
//Vue.use(VueReCaptcha, { siteKey: '6LfJ_O4ZAAAAAAvk4F_xjPowZtGeLkGynHigESiC' })
export default {
  name: 'Home',
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
        this.submitProcessing = false  //送信ボタン一回だけ
      /* form本体actionを使う場合の処理
      var typeChange = document.getElementById("submitButton").setAttribute('type', 'submit')
      return typeChange
      */
        const formData = new FormData();
        // dev用
        formData.append("entry.2115424323", this.$store.state.email)
        formData.append("entry.1039878880", this.$store.state.form__A1a)
        formData.append("entry.1601078361", this.$store.state.form__A1b)
        formData.append("entry.239857830", this.$store.state.form__A1bOther)

        formData.append("entry.1079840559", this.$store.state.form__A1c[0])
        formData.append("entry.1079840559", this.$store.state.form__A1c[1])
        formData.append("entry.1334640711", this.$store.state.form__A1cOther)

        formData.append("entry.994087084", this.$store.state.form__A2[0])
        formData.append("entry.994087084", this.$store.state.form__A2[1])
        formData.append("entry.994087084", this.$store.state.form__A2[2])
        formData.append("entry.2063324862", this.$store.state.form__A2Other)

        formData.append("entry.265022917", this.$store.state.form__A3)
        formData.append("entry.802469403", this.$store.state.form__A4)
        formData.append("entry.892247121", this.startTime)
        formData.append("entry.2060477936", this.endTime)
        formData.append("entry.378388197", this.$store.state.ipAddress)
        formData.append("entry.366166243", this.$store.state.form__B6)
        formData.append("entry.1601078361.other_option_response", this.$store.state.test)

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
        const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfCG2wwK__IZB5F8GkcTnu-k6nFSpZ6ABbPjvaG8bsLyctdjg/formResponse"

        // Ajax POST通信
        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // フォーム非表示
          //this.showForm = false;
         // console.log(formData)
          for (var [key, value] of formData.entries()) {
            console.log(key, value);
          }
          console.log(res)
          this.alert = true
          this.invalid=false

        }).catch((err) => {
            console.log(err)
            alert(err)
        })
        // フォーム非表示
      //  this.showForm = false;
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
