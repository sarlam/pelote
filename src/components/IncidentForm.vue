<template>
  <div>
    <f7-list no-hairlines-md>
      <f7-list-item title="kind of incident" smart-select :smart-select-params="{openIn: 'sheet'}">
        <select
          v-model="q1"
          name="question-1">
          <option value="A">Traditional gender role prejudice and stereotyping</option>
          <option value="B">Demeaning and derogatory comments and behaviors</option>
          <option value="C">Sexual objectification</option>
          <option value="D">Homophobia</option>
          <option value="E">Other</option>
        </select>
      </f7-list-item>


      <f7-list-item
        title="Tradi"
        v-if="q1 === 'A'"></f7-list-item>


      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
        clear-button
      ></f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        clear-button
      ></f7-list-input>

      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="Your e-mail"
        clear-button
      ></f7-list-input>

      <f7-list-input
        label="URL"
        type="url"
        placeholder="URL"
        clear-button
      ></f7-list-input>
    </f7-list>
  </div>
</template>

<script>
  export default {
    name: 'p-incident-form',
    data() {
      return {
        q1: null
      }
    }
  }
</script>
