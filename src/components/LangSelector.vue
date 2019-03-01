<template>
  <f7-list>
    <f7-list-item v-for="lang in availableLang"
                  @click="updateLang(lang)"
                  :key="lang"
                  :title="lang">
      <f7-icon v-if="currentLang === lang" slot="after" f7="check_round"></f7-icon>
    </f7-list-item>
  </f7-list>
</template>

<script>
export default {
  name: 'p-lang-selector',
  created () {
    console.log(this)
  },
  data () {
    return {
      availableLang: ['en', 'fr']
    }
  },
  computed: {
    currentLang () {
      return this.$i18n.locale
    }
  },
  methods: {
    updateLang (lang) {
      if (this.availableLang.includes(lang)) {
        this.$i18n.locale = lang
      }
    }
  }
}
</script>
