
import { isEmpty } from 'lodash'

// Gather nyc coverage reports
import istanbul from 'istanbul-lib-coverage'

const map = istanbul.createCoverageMap({})

const NYC_OUTPUT = 'part_coverage/out.json'

before(() => {
  cy.readFile(NYC_OUTPUT).then(storedIstanbulMap => {
    if (!isEmpty(storedIstanbulMap)) {
      map.merge(storedIstanbulMap)
    }
  })
})

Cypress.on('window:before:unload', e => {
  const coverage = e.currentTarget.__coverage__

  if (coverage) {
    map.merge(coverage)
  }
})

after(() => {
  cy.window().then(win => {
    const coverage = win.__coverage__

    if (coverage) {
      map.merge(coverage)
    }

    cy.writeFile(NYC_OUTPUT, JSON.stringify(map))
  })
})
