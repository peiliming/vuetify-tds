<template>
  <div id="first-step">

    <div class="amber lighten-3 rounded-lg pa-4">
      <h2>【A】ご回答者様についてお答えください</h2>
    </div>

    <div class="form-content">
      <h3>ご回答者様のご勤務先のメールアドレスを入力ください <span class="annotation pl-6">※個人情報保護方針：<a href="https://proptech.plus/privacy/">https://proptech.plus/privacy/</a></span></h3>

      <div class="form-content-detail">
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="メールアドレス"
        >
        <v-text-field
          v-model="email"
          label="メールアドレス"
          required
        ></v-text-field>
        <v-alert type="error" v-show="errors.length" class="error_message">
          {{ errors[0] }}
        </v-alert>
        </validation-provider>
      </div>


      <div class="form-heading-top">
        <h3>【A-1】ご回答者様について</h3>
      </div>

      <div class="form-content-detail">
        <h4>【A-1-a】ご回答者様の所属されている組織が主に取り扱う業務は以下のいずれに該当するかお答えください</h4>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="「A-1-a」の項目"
        >

        <v-radio-group class="form-content-radio" v-model="form__A1a" color="info">
          <v-radio
            label="J-REITの運用"
            value="J-REITの運用"
          ></v-radio>
          <v-radio
            label="私募REITの運用"
            value="私募REITの運用"
          ></v-radio>
          <v-radio
            label="その他"
            value="その他"
          ></v-radio>
        </v-radio-group>
        <v-alert type="error" v-show="errors.length" class="error_message">
          {{ errors[0] }}
        </v-alert>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="「A-1-b」の項目"
        >
        <h3>【A-1-b】ご回答者様の現在の主な担当分野をお答えください</h3>
        <v-radio-group class="form-content-radio" color="info" v-model="form__A1b">
          <v-radio
            label="アクイジション"
            value="アクイジション"
          ></v-radio>
          <v-radio
            label="期中運用"
            value="期中運用"
          ></v-radio>
          <v-radio
            id="radio-button"
            @change="radioButton"
            label="その他:"
            value="その他:"
          ></v-radio>
          <v-text-field
            v-model="form__A1bOther"
            :disabled= '!A1bEnabled'
            label="その他の場合は入力してください"
            required
          ></v-text-field>
        </v-radio-group>
        <v-alert type="error" v-show="errors.length" class="error_message">
          {{ errors[0] }}
        </v-alert>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="「A-1-c」の項目"
        >

        <h4>【A-1-c】ご回答者様が過去にご担当された経験のある分野をすべてお答えください（複数回答）</h4>
        <v-radio-group class="form-content-radio">
          <v-checkbox
            v-model="form__A1c"
            value="アクイジション"
            label="アクイジション"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-checkbox
            v-model="form__A1c"
            value="期中運用"
            label="期中運用"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-checkbox
            v-model="enabled"
            value="その他:"
            label="その他:"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-text-field
            v-model="form__A1cOther"
            :disabled="!enabled"
            label="その他の場合は入力してください"
            required
          ></v-text-field>
        </v-radio-group>
        <v-alert type="error" v-show="errors.length" class="error_message">
          {{ errors[0] }}
        </v-alert>
        </validation-provider>


        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="「A-2」の項目"
        >

        <h4>【A-2】ご回答者様がお持ちの資格をすべてお答えください（複数回答）</h4>
        <v-radio-group class="form-content-radio">
          <v-checkbox
            v-model="form__A2"
            value="宅地建物取引士"
            label="宅地建物取引士"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-checkbox
            v-model="form__A2"
            value="不動産証券化マスター"
            label="不動産証券化マスター"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-checkbox
            v-model="form__A2"
            value="不動産鑑定士"
            label="不動産鑑定士"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-checkbox
            v-model="A2Enabled"
            value="その他:"
            label="その他:"
            hide-details
            :rules="[v => !!v || 'You must agree to continue!']"
            required>
          ></v-checkbox>
          <v-text-field
            :disabled="!A2Enabled"
            v-model="form__A2Other"
            label="その他の場合は入力してください"
            required
          ></v-text-field>
          </v-radio-group>
          <v-alert type="error" v-show="errors.length" class="error_message">
            {{ errors[0] }}
          </v-alert>
          </validation-provider>


        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="「A-3」の項目"
        >

        <h4>【A-3】ご回答者様の役職を記載してください</h4>
        <v-select
          class="form-content-radio"
          v-model="form__A3"
          name="entry.967671219"
          :items="items"
          label="選択"
          data-vv-name="選択"
          :rules="[v => !!v || 'Item is required']"
          required
        ></v-select>
        <v-alert type="error" v-show="errors.length" class="error_message">
          {{ errors[0] }}
        </v-alert>
        </validation-provider>


        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="「A-4」の項目"
        >

        <h4>【A-4】現在までに不動産投資関連の業務に従事された経験年数を記入してください</h4>
        <v-radio-group class="form-content-radio" v-model="form__A4" color="info">
          <v-radio
            label="5年未満"
            value="5年未満"
            :rules="[v => !!v || 'You must agree to continue!']"
          ></v-radio>
          <v-radio
            label="5年〜10年"
            value="5年〜10年"
            :rules="[v => !!v || 'You must agree to continue!']"
          ></v-radio>
          <v-radio
            label="10年から15年"
            value="10年から15年"
            :rules="[v => !!v || 'You must agree to continue!']"
          ></v-radio>
          <v-radio
            label="15年から20年"
            value="15年から20年"
            :rules="[v => !!v || 'You must agree to continue!']"
          ></v-radio>
          <v-radio
            label="20年から30年"
            value="20年から30年"
            :rules="[v => !!v || 'You must agree to continue!']"
          ></v-radio>
          <v-radio
            label="30年以上"
            value="30年以上"
            :rules="[v => !!v || 'You must agree to continue!']"
          ></v-radio>
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
import axios from "axios"

export default {
  name: 'firstStep',
  components: {
  },
  data() {
    return {
      isDisabled: true,
      show: false,
      A1bEnabled: false,
      enabled: false,
      A2Enabled: false,
      items: [
        '経営層・役員クラス',
        '部長クラス',
        '課長クラス',
        '係長・主任クラス',
        '一般社員クラス',
        'その他専門職・特別職等'
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    radioButton: function() {
      var button = document.getElementById('radio-button')
      if(button.checked) {
        console.log(button)
      } else {
        this.A1bEnabled = false
      }
      this.A1bEnabled = true
    }

  },
  mounted() {
    axios.get('https://bwbwepmxj5.execute-api.ap-northeast-1.amazonaws.com/production/sourceip/')
  //  .then(response => console.log(response.data.ip))
    .then(response => this.ipAddress = response.data.ip)
    .catch(response => console.log(response))
  },
  computed: {
    startTime: {
      get () {
        return this.$store.state.startTime
      },
      set(value) {
        this.$store.commit('setStartTime', {startTime: value})
      }
    },
    email: {
      get () {
        return this.$store.state.email
      },
      set(value) {
        this.$store.commit('setEmail', {email: value})
      }
    },
    ipAddress: {
      get () {
        return this.$store.state.ipAddress
      },
      set(value) {
        this.$store.commit('setIP', {ipAddress: value})
      }
    },
    form__A1a: {
      get () {
        return this.$store.state.form__A1a
      },
      set(value) {
        this.$store.commit('setFormA1a', {form__A1a: value})
      }
    },
    form__A1b: {
      get () {
        return this.$store.state.form__A1b
      },
      set(value) {
        this.$store.commit('setFormA1b', {form__A1b: value})
      }
    },
    form__A1bOther: {
      get () {
        return this.$store.state.form__A1bOther
      },
      set(value) {
        this.$store.commit('setFormA1bOther', {form__A1bOther: value})
      }
    },
    form__A1c: {
      get () {
        return this.$store.state.form__A1c
      },
      set(value) {
        this.$store.commit('setFormA1c', {form__A1c: value})
      }
    },
    form__A1cOther: {
      get () {
        return this.$store.state.form__A1cOther
      },
      set(value) {
        this.$store.commit('setFormA1cOther', {form__A1cOther: value})
      }
    },
    form__A2: {
      get () {
        return this.$store.state.form__A2
      },
      set(value) {
        this.$store.commit('setFormA2', {form__A2: value})
      }
    },
    form__A2Other: {
      get () {
        return this.$store.state.form__A2Other
      },
      set(value) {
        this.$store.commit('setFormA2Other', {form__A2Other: value})
      }
    },
    form__A3: {
      get () {
        return this.$store.state.form__A3
      },
      set(value) {
        this.$store.commit('setFormA3', {form__A3: value})
      }
    },
    form__A4: {
      get () {
        return this.$store.state.form__A4
      },
      set(value) {
        this.$store.commit('setFormA4', {form__A4: value})
      }
    }
  }
}
</script>
