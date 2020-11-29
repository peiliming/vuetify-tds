<template>
  <div id="first-step">
      <v-card-text>
        <v-container>
          <h3>ご回答者様のご勤務先のメールアドレスを入力ください ※個人情報保護方針：<a href="https://proptech.plus/privacy/">https://proptech.plus/privacy/</a></h3>

          <!-- production entry.405864373-->
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="メールアドレス"
          >
          <v-text-field
            v-model="email"
            name="entry.405864373"
            label="メールアドレス"
            required
          ></v-text-field>
          <v-alert type="error" v-show="errors.length" class="error_message">
            {{ errors[0] }}
          </v-alert>
          </validation-provider>

            <!-- production entry.1989060872-->
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="「A-1-a」の項目"
            >
            <h3>【A-1-a】ご回答者様の所属されている組織が主に取り扱う業務は以下のいずれに該当するかお答えください</h3>
            <v-radio-group row v-model="form__A1a" name="entry.1989060872" color="info">
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
            <!-- production entry.1878965843-->
            <h3>【A-1-b】ご回答者様の現在の主な担当分野をお答えください</h3>
            <v-radio-group row color="info" v-model="form__A1b" name="entry.1878965843">
              <v-radio
                label="アクイジション"
                value="アクイジション"
              ></v-radio>
              <v-radio
                label="期中運用"
                value="期中運用"
              ></v-radio>
              <v-radio
                @change="radioChange"
                id="radioInput"
                label="その他:"
                value="その他:"
              ></v-radio>
              <v-text-field
                id="test"
                v-model="test"
                :disabled="isDisabled"
                label="その他の場合は入力してください"
                name="entry.1601078361.other_option_response"
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
            <!-- production entry.334413620-->
            <h3>【A-1-c】ご回答者様が過去にご担当された経験のある分野をすべてお答えください（複数回答）</h3>
            <v-radio-group row>
              <v-checkbox
                v-model="form__A1c"
                name="entry.334413620"
                value="アクイジション"
                label="アクイジション"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-checkbox
                v-model="form__A1c"
                name="entry.334413620"
                value="期中運用"
                label="期中運用"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-checkbox
                v-model="form__A1c"
                name="entry.334413620"
                value="その他:"
                label="その他:"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-text-field
                label="その他の場合は入力してください"
                name="entry.1079840559.other_option_response"
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
            <!-- production entry.1714591256-->
            <h3>《A-2ご回答者様がお持ちの資格をすべてお答えください（複数回答）》</h3>
            <v-radio-group row>
              <v-checkbox
                v-model="form__A2"
                name="entry.1714591256"
                value="宅地建物取引士"
                label="宅地建物取引士"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-checkbox
                v-model="form__A2"
                name="entry.1714591256"
                value="不動産証券化マスター"
                label="不動産証券化マスター"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-checkbox
                v-model="form__A2"
                name="entry.1714591256"
                value="不動産鑑定士"
                label="不動産鑑定士"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-checkbox
                v-model="form__A2"
                name="entry.1714591256"
                value="その他:"
                label="その他:"
                type="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                required>
              ></v-checkbox>
              <v-text-field
                label="その他の場合は入力してください"
                name="entry.1714591256.other_option_response"
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
            <!-- production entry.967671219-->
            <h3>
              《A-3ご回答者様の役職を記載してください》
            </h3>
            <v-select
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
            <!-- production entry.504873069-->
            <h3>《A-4現在までに不動産投資関連の業務に従事された経験年数を記入してください》</h3>
            <v-radio-group row v-model="form__A4" name="entry.504873069" color="info">
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
        </v-container>
      </v-card-text>
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
      test: '',
      show: false,
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
    radioChange: function() {
      var radio = document.getElementById('radioInput')
      var test = document.getElementById('test')
      test.disabled = false
      console.log(radio)
      if (radio) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
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
    form__A1c: {
      get () {
        return this.$store.state.form__A1c
      },
      set(value) {
        this.$store.commit('setFormA1c', {form__A1c: value})
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
