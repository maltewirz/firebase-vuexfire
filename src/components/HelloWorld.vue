<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
<button @click="loadFromDatabase">Load</button>
<button @click="saveFromDatabase">Save</button>
<button @click="bindUsers">bindUsers</button>
<button @click="unbindUsers">unbindUsers</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Action('loadFromDatabase') loadFromDatabase:any
  @Action('saveFromDatabase') saveFromDatabase:any
  @Action('bindUsers') bindUsers:any
  @Action('unbindUsers') unbindUsers:any
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
