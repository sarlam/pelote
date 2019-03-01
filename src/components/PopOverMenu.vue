<template>
  <f7-popover class="popover-menu">
    <f7-list>
      <f7-list-item link="/about/" popover-close :title="$t('menu.main.about')"></f7-list-item>

      <f7-list-item accordion-item :title="$t('menu.main.language')" :after="currentLang">

        <f7-accordion-content>
          <p-lang-selector></p-lang-selector>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
  </f7-popover>
</template>

<script>
import PLangSelector from './LangSelector'

export default {
  name: 'p-pop-over-menu',
  components: { PLangSelector },
  computed: {
    currentLang () {
      return this.$i18n.locale.toUpperCase()
    }
  }
}
</script>
