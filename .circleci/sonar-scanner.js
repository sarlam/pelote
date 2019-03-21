const sonarqubeScanner = require('sonarqube-scanner')
const _ = require('lodash')

const itIsAPR = _.toInteger(process.env.CIRCLE_PR_NUMBER) !== 0

console.log('PR Number from sonar scanner, is it a PR ?', itIsAPR)

const branchSettings = itIsAPR
  ? {
    'sonar.pullrequest.base': 'develop',
    'sonar.pullrequest.branch': process.env.CIRCLE_BRANCH,
    'sonar.pullrequest.provider': 'GitHub',
    'sonar.pullrequest.github.repository': process.env.GITHUB_REPOSITORY,
    'sonar.pullrequest.key': process.env.CIRCLE_PR_NUMBER
  }
  : {
    'sonar.branch.name': process.env.CIRCLE_BRANCH
  }

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
  token: process.env.SONAR_TOKEN,
  options: {
    'sonar.projectKey': 'sarlam_pelote',
    'sonar.organization': 'sarlam-github',
    'sonar.sources': './src',
    'sonar.tests': './tests',
    'sonar.host.url': 'https://sonarcloud.io',
    ...branchSettings
  }
})
