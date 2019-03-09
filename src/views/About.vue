<template>
  <f7-page name="about">
    <f7-navbar :title="$t('menu.main.about')" back-link back-link-url="/"></f7-navbar>
    <!-- Page content -->
    <component :is="aboutLang"></component>
  </f7-page>
</template>

<script>
import AboutEN from '@/components/about/AboutEN.vue'
import AboutFR from '@/components/about/AboutFR.vue'

export default {
  name: 'about-page',
  computed: {
    aboutLang () {
      const lang = this.$i18n.locale
      const fallbackLang = this.$i18n.fallbackLocale
      const availableLang = {
        fr: AboutFR,
        en: AboutEN
      }

      return availableLang[lang]
        ? availableLang[lang]
        : availableLang[fallbackLang]
    }
  }
}
</script>
