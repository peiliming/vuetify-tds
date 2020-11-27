<template>
<div id="first-step">
  <v-app>
    <v-card-text>
      <v-container>
        <h3>【B-1-a】エリア オフィスビルの立地するエリア（サブマーケット）の品質に関して、以下の各要素がどの程度重要であるかをお答えください。</h3>
<!--
        <v-row justify="center" align-content="center">
          <v-col cols="4">
            <h4>エリア内におけるオフィスビルの立地の良さ</h4>
          </v-col>
          <v-col cols="8">
            <v-radio-group row v-model="form__B1a1" name="entry.733430279" color="info">
              <v-radio v-for="item in radioItems" v-bind:key="item.label"
              :label="item.label"
              :value="item.val">
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row justify="center" align-content="center">
          <v-col cols="4">
            <h4>エリア内において競合となる新規供給が少ないこと</h4>
          </v-col>
          <v-col cols="8">
            <v-radio-group row v-model="form__B1a2" name="entry.938279484" color="info">
              <v-radio v-for="item in radioItems" v-bind:key="item.label"
              :label="item.label"
              :value="item.val">
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>-->

        <v-row justify="center" align-content="center" v-for="radioGroupItem in radioGroupItems" v-bind:key="radioGroupItem.title">
          <v-col cols="4">
            <h4>{{radioGroupItem.title}}</h4>
          </v-col>
          <v-col cols="8">
            <v-radio-group row :name="radioGroupItem.name" color="info">
              <v-radio v-for="item in radioItems" v-bind:key="item.label"
              :label="item.label"
              :value="item.val">
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>


  <label for="form__B1a3">エリアおよび住所が表すブランド力</label>
  <input type="radio" name="form__B1a3" v-model="form__B1a3" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1a3" v-model="form__B1a3" value="やや重要" />やや重要
  <input type="radio" name="form__B1a3" v-model="form__B1a3" value="重要" />重要
  <input type="radio" name="form__B1a3" v-model="form__B1a3" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1a3" v-model="form__B1a3" value="極めて重要" />極めて重要



<div>
  <h3>【B-1-b】周辺環境 オフィスビルの周辺環境の品質に関して、以下の各要素がどの程度重要であるかをお答えください。</h3>
  <label for="form__B1b1">空気質が良いこと（大気が汚染されていないこと）</label>
  <input type="radio" name="form__B1b1" v-model="form__B1b1" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1b1" v-model="form__B1b1" value="やや重要" />やや重要
  <input type="radio" name="form__B1b1" v-model="form__B1b1" value="重要" />重要
  <input type="radio" name="form__B1b1" v-model="form__B1b1" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1b1" v-model="form__B1b1" value="極めて重要" />極めて重要

  <label for="form__B1b2">治安が良いこと</label>
  <input type="radio" name="form__B1b2" v-model="form__B1b2" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1b2" v-model="form__B1b2" value="やや重要" />やや重要
  <input type="radio" name="form__B1b2" v-model="form__B1b2" value="重要" />重要
  <input type="radio" name="form__B1b2" v-model="form__B1b2" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1b2" v-model="form__B1b2" value="極めて重要" />極めて重要

  <label for="form__B1a3">騒音が少ないこと</label>
  <input type="radio" name="form__B1b3" v-model="form__B1b3" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1b3" v-model="form__B1b3" value="やや重要" />やや重要
  <input type="radio" name="form__B1b3" v-model="form__B1b3" value="重要" />重要
  <input type="radio" name="form__B1b3" v-model="form__B1b3" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1b3" v-model="form__B1b3" value="極めて重要" />極めて重要

  <label for="form__B1a4">自然災害（洪水、地震など）の発生リスクが低いこと</label>
  <input type="radio" name="form__B1b4" v-model="form__B1b4" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1b4" v-model="form__B1b4" value="やや重要" />やや重要
  <input type="radio" name="form__B1b4" v-model="form__B1b4" value="重要" />重要
  <input type="radio" name="form__B1b4" v-model="form__B1b4" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1b4" v-model="form__B1b4" value="極めて重要" />極めて重要

  <label for="form__B1a5">現在または将来の気候変動に対する脆弱性が低いこと</label>
  <input type="radio" name="form__B1b5" v-model="form__B1b5" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1b5" v-model="form__B1b5" value="やや重要" />やや重要
  <input type="radio" name="form__B1b5" v-model="form__B1b5" value="重要" />重要
  <input type="radio" name="form__B1b5" v-model="form__B1b5" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1b5" v-model="form__B1b5" value="極めて重要" />極めて重要

  <label for="form__B1a6">産業に起因する事故・災害（例：周辺の化学工場からの有害物質の漏出等）のリスクが低いこと</label>
  <input type="radio" name="form__B1b6" v-model="form__B1b6" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1b6" v-model="form__B1b6" value="やや重要" />やや重要
  <input type="radio" name="form__B1b6" v-model="form__B1b6" value="重要" />重要
  <input type="radio" name="form__B1b6" v-model="form__B1b6" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1b6" v-model="form__B1b6" value="極めて重要" />極めて重要

</div>

<div>
  <h3>【B-1-c】交通利便性 オフィスビルの交通利便性に関して、以下の各要素がどの程度重要であるかをお答えください。</h3>
  <label for="form__B1c1">公共交通機関（駅）との距離が近いこと</label>
  <input type="radio" name="form__B1c1" v-model="form__B1c1" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1c1" v-model="form__B1c1" value="やや重要" />やや重要
  <input type="radio" name="form__B1c1" v-model="form__B1c1" value="重要" />重要
  <input type="radio" name="form__B1c1" v-model="form__B1c1" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1c1" v-model="form__B1c1" value="極めて重要" />極めて重要

  <label for="form__B1c2">業務リソース（労働力、顧客、その他のサービスなど）にアクセスしやすいこと</label>
  <input type="radio" name="form__B1c2" v-model="form__B1c2" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1c2" v-model="form__B1c2" value="やや重要" />やや重要
  <input type="radio" name="form__B1c2" v-model="form__B1c2" value="重要" />重要
  <input type="radio" name="form__B1c2" v-model="form__B1c2" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1c2" v-model="form__B1c2" value="極めて重要" />極めて重要

  <label for="form__B1c3">公共交通機関（駅）との距離が近いこと</label>
  <input type="radio" name="form__B1c3" v-model="form__B1c3" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1c3" v-model="form__B1c3" value="やや重要" />やや重要
  <input type="radio" name="form__B1c3" v-model="form__B1c3" value="重要" />重要
  <input type="radio" name="form__B1c3" v-model="form__B1c3" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1c3" v-model="form__B1c3" value="極めて重要" />極めて重要

  <label for="form__B1c4">公共交通機関（駅）との距離が近いこと</label>
  <input type="radio" name="form__B1c4" v-model="form__B1c4" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1c4" v-model="form__B1c4" value="やや重要" />やや重要
  <input type="radio" name="form__B1c4" v-model="form__B1c4" value="重要" />重要
  <input type="radio" name="form__B1c4" v-model="form__B1c4" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1c4" v-model="form__B1c4" value="極めて重要" />極めて重要

</div>


  <h3>【B-1-d】立地に関する 総合的な重要度オフィスビルの立地の全体的な品質を評価する際に、総合的な重要度をお答えください。</h3>
  <label for="form__B1d1">エリア</label>
  <input type="radio" name="form__B1d1" v-model="form__B1d1" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1d1" v-model="form__B1d1" value="やや重要" />やや重要
  <input type="radio" name="form__B1d1" v-model="form__B1d1" value="重要" />重要
  <input type="radio" name="form__B1d1" v-model="form__B1d1" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1d1" v-model="form__B1d1" value="極めて重要" />極めて重要

  <label for="form__B1d2">周辺環境</label>
  <input type="radio" name="form__B1d2" v-model="form__B1d2" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1d2" v-model="form__B1d2" value="やや重要" />やや重要
  <input type="radio" name="form__B1d2" v-model="form__B1d2" value="重要" />重要
  <input type="radio" name="form__B1d2" v-model="form__B1d2" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1d2" v-model="form__B1d2" value="極めて重要" />極めて重要

  <label for="form__B1d3">交通利便性</label>
  <input type="radio" name="form__B1d3" v-model="form__B1d3" value="あまり重要ではない" />あまり重要ではない
  <input type="radio" name="form__B1d3" v-model="form__B1d3" value="やや重要" />やや重要
  <input type="radio" name="form__B1d3" v-model="form__B1d3" value="重要" />重要
  <input type="radio" name="form__B1d3" v-model="form__B1d3" value="非常に重要" />非常に重要
  <input type="radio" name="form__B1d3" v-model="form__B1d3" value="極めて重要" />極めて重要

      </v-container>
    </v-card-text>
  </v-app>
</div>


  
</template>

<script>
export default {
  name: 'secondStep',
  components: {
  },
  props: ['vModelValue'],
  data() {
    return {
      radioGroupItems: [
        {title: 'エリア内におけるオフィスビルの立地の良さ', name: 'entry.733430279'},
        {title: 'エリア内において競合となる新規供給が少ないこと', name: 'entry.938279484'},
        {title: 'エリアおよび住所が表すブランド力', name: 'entry.2108801391'}
      ],
      radioItems: [
        {label: 'あまり重要ではない', val:'あまり重要ではない'},
        {label: 'やや重要', val:'やや重要'},
        {label: '重要', val:'重要'},
        {label: '非常に重要	', val:'非常に重要'},
        {label: '極めて重要', val:'極めて重要'}
      ]
    }
  },
  computed: {
    form__B1a1: {
      get () {
        return this.$store.state.form__B1a1
      },
      set(value) {
        this.$store.commit('setFormB1a1', {form__B1a1: value})
      }
    },
    form__B1a2: {
      get () {
        return this.$store.state.form__B1a2
      },
      set(value) {
        this.$store.commit('setFormB1a2', {form__B1a2: value})
      }
    },
    form__B1a3: {
      get () {
        return this.$store.state.form__B1a3
      },
      set(value) {
        this.$store.commit('setFormB1a3', {form__B1a3: value})
      }
    },
    form__B1b1: {
      get () {
        return this.$store.state.form__B1b1
      },
      set(value) {
        this.$store.commit('setFormB1b1', {form__B1b1: value})
      }
    },
    form__B1b2: {
      get () {
        return this.$store.state.form__B1b2
      },
      set(value) {
        this.$store.commit('setFormB1b2', {form__B1b2: value})
      }
    },
    form__B1b3: {
      get () {
        return this.$store.state.form__B1b3
      },
      set(value) {
        this.$store.commit('setFormB1b3', {form__B1b3: value})
      }
    },
    form__B1b4: {
      get () {
        return this.$store.state.form__B1b4
      },
      set(value) {
        this.$store.commit('setFormB1b4', {form__B1b4: value})
      }
    },
    form__B1b5: {
      get () {
        return this.$store.state.form__B1b5
      },
      set(value) {
        this.$store.commit('setFormB1b5', {form__B1b5: value})
      }
    },
    form__B1b6: {
      get () {
        return this.$store.state.form__B1b6
      },
      set(value) {
        this.$store.commit('setFormB1b6', {form__B1b6: value})
      }
    },
    form__B1c1: {
      get () {
        return this.$store.state.form__B1c1
      },
      set(value) {
        this.$store.commit('setFormB1c1', {form__B1c1: value})
      }
    },
    form__B1c2: {
      get () {
        return this.$store.state.form__B1c2
      },
      set(value) {
        this.$store.commit('setFormB1c2', {form__B1c2: value})
      }
    },
    form__B1c3: {
      get () {
        return this.$store.state.form__B1c3
      },
      set(value) {
        this.$store.commit('setFormB1c3', {form__B1c3: value})
      }
    },
    form__B1c4: {
      get () {
        return this.$store.state.form__B1c4
      },
      set(value) {
        this.$store.commit('setFormB1c4', {form__B1c4: value})
      }
    },
    form__B1d1: {
      get () {
        return this.$store.state.form__B1d1
      },
      set(value) {
        this.$store.commit('setFormB1d1', {form__B1d1: value})
      }
    },
    form__B1d2: {
      get () {
        return this.$store.state.form__B1d2
      },
      set(value) {
        this.$store.commit('setFormB1d2', {form__B1d2: value})
      }
    },
    form__B1d3: {
      get () {
        return this.$store.state.form__B1d3
      },
      set(value) {
        this.$store.commit('setFormB1d3', {form__B1d3: value})
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
