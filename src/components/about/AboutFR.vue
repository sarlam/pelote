<template>
  <f7-block>
    <h1>Présentation</h1>
    <p>
      Le sexisme est un phénomène sous jacent aux inégalités entre les hommes
      et les femmes et aux violences dirigées vers les femmes. Parmi les formes
      que prend le sexisme, le sexisme ordinaire prenant place au quotidien a
      des répercussions sur l’estime de soi, le niveau d’anxiété et le bien-être
      général.
    </p>
    <p>
      Pour lutter contre les effets de ce sexisme ordinaire, cette application vise à :

    </p>
    <ul>
      <li>Permettre aux femmes et aux hommes de prendre conscience de son niveau d’exposition;</li>
      <li>Partager afin d’obtenir du soutien moral, de permettre à d’autres de prendre conscience du
        phénomène et ainsi agir contre le sexisme ordinaire;
      </li>
      <li>Contribuer à la recherche en autorisant la transmission de ces données auprès de
        chercheur.e.s.
      </li>
    </ul>

    <p>
      Cette appli vous permet donc :
    </p>
    <ul>
      <li>d’enregistrer/consigner/répertorier</li>
      <li>de visualiser simplement</li>
      <li>de partager avec vos proches</li>
      <li>de rendre accessibles à des fins de recherche</li>
      <li>les manifestations de sexisme ordinaire dont vous êtes la cible ou dont vous êtes témoin.</li>
    </ul>

    <h1>Infos</h1>
    <h2>Version {{ info.version }}</h2>
    <h2>License</h2>
    <p>Cette application vous est distribue sous license <b @click="openLicense">GPLv3</b>, elle vous ai fourni sans aucune forme de garantie.</p>
    <p>Vous pouvez a tout moment acceder au code source de cette application sur <a href="#" @click="openGithub">github - {{ info.repository }}</a></p>

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
