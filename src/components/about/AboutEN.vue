<template>
  <f7-block>
    <h1>Présentation</h1>
    <p>
      Sexism is a phenomenon underlying inequalities between men and women and violence towards
      women. Among the forms taken by sexism, ordinary/everyday sexism has impacts on self-esteem,
      anxiety level and overall well-being.
    </p>
    <p>
      To fight against the effects of this everyday/ordinary sexism, this application aims to :
    </p>
    <ul>
      <li>Provide a simple view of the level of exposure</li>
      <li>
        Share the reviews in order to obtain social support, and allow others to become aware of
        the phenomenon and thus act against it
      </li>
      <li>
        Contribute to research by authorizing the transmission of these data to researchers.
      </li>
    </ul>

    <h1>Infos</h1>
    <h2>Version {{ info.version }}</h2>
    <h2>License</h2>
    <p>This application is released under <b>GPLv3</b> license. There is no warranty.</p>
    <p>The source code of this application is available on <a href="#" @click="openGithub">github - {{ info.repository }}</a></p>

    <license></license>
  </f7-block>
</template>

<script>
import info from '../../../package.json'
import License from './License.vue'

export default {
  components: {
    license: License
  },
  data: () => ({
    info
  }),
  methods: {
    openGithub () {
      window.open(this.info.repository, '_system')
    }
  }
}
</script>
