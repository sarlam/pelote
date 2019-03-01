<template>
  <div>
    <f7-list inset>
      <f7-list-item :title="$t('add.q1.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q1">
          <option value="A">{{ $t('add.q1.answers.A') }}</option>
          <option value="B">{{ $t('add.q1.answers.B') }}</option>
          <option value="C">{{ $t('add.q1.answers.C') }}</option>
          <option value="D">{{ $t('add.q1.answers.D') }}</option>
          <option value="E">{{ $t('add.q1.answers.E') }}</option>
        </select>
      </f7-list-item>

      <f7-list-item v-if="form.q1 === 'A'"
                    :title="$t('add.q1.1.A.title')"
                    smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q11">
          <option value="A">{{ $t('add.q1.1.A.answers.A') }}</option>
          <option value="B">{{ $t('add.q1.1.A.answers.B') }}</option>
          <option value="C">{{ $t('add.q1.1.A.answers.C') }}</option>
          <option value="D">{{ $t('add.q1.1.A.answers.D') }}</option>
          <option value="E">{{ $t('add.q1.1.A.answers.E') }}</option>
          <option value="F">{{ $t('add.q1.1.A.answers.F') }}</option>
        </select>
      </f7-list-item>
      <f7-list-item v-if="form.q1 === 'B'"
                    :title="$t('add.q1.1.B.title')"
                    smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q11">
          <option value="A">{{ $t('add.q1.1.B.answers.A') }}</option>
          <option value="B">{{ $t('add.q1.1.B.answers.B') }}</option>
          <option value="C">{{ $t('add.q1.1.B.answers.C') }}</option>
          <option value="D">{{ $t('add.q1.1.B.answers.D') }}</option>
          <option value="E">{{ $t('add.q1.1.B.answers.E') }}</option>
          <option value="F">{{ $t('add.q1.1.B.answers.F') }}</option>
        </select>
      </f7-list-item>
      <f7-list-item v-if="form.q1 === 'C'"
                    :title="$t('add.q1.1.C.title')"
                    smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q11">
          <option value="A">{{ $t('add.q1.1.C.answers.A') }}</option>
          <option value="B">{{ $t('add.q1.1.C.answers.B') }}</option>
          <option value="C">{{ $t('add.q1.1.C.answers.C') }}</option>
        </select>
      </f7-list-item>
      <f7-list-input v-if="form.q1 === 'D'"
                     :value="form.q11"
                     @input="form.q11 = $event.target.value"
                     :placeholder="$t('add.q1.1.D.title')"
                     type="textarea">
      </f7-list-input>
      <f7-list-input v-if="form.q1 === 'E'"
                     :value="form.q11"
                     @input="form.q11 = $event.target.value"
                     :placeholder="$t('add.q1.1.E.title')"
                     type="textarea">
      </f7-list-input>

      <f7-list-item v-if="step > 0"
                    :title="$t('add.q2.title')"
                    smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q2">
          <option value="A">{{ $t('add.q2.answers.A') }}</option>
          <option value="B">{{ $t('add.q2.answers.B') }}</option>
          <option value="C">{{ $t('add.q2.answers.C') }}</option>
        </select>
      </f7-list-item>

    </f7-list>

    <f7-list inset>
      <li>
        <div class="item-content item-input">
          <div class="item-title">
            {{ $t('add.q3.title') }}
          </div>
          <div class="item-inner">
            <div class="item-input-wrap">
              <input type="text" placeholder="Date Time" readonly="readonly" id="demo-picker-date"/>
            </div>
          </div>
        </div>
      </li>

      <f7-list-item v-if="step > 0"
                    :title="$t('add.q4.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q4">
          <option value="A">{{ $t('add.q4.answers.A') }}</option>
          <option value="B">{{ $t('add.q4.answers.B') }}</option>
          <option value="C">{{ $t('add.q4.answers.C') }}</option>
          <option value="D">{{ $t('add.q4.answers.D') }}</option>
        </select>
      </f7-list-item>

      <f7-list-input v-if="form.q4 === 'D'"
                     :value="form.q4Other"
                     @input="form.q4Other = $event.target.value"
                     type="text"
                     :placeholder="$t('global.precise')"></f7-list-input>

    </f7-list>

    <f7-list v-if="step > 1" inset>

      <f7-list-item :title="$t('add.q5.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q5">
          <option value="A">{{ $t('add.q5.answers.A') }}</option>
          <option value="B">{{ $t('add.q5.answers.B') }}</option>
          <option value="C">{{ $t('add.q5.answers.C') }}</option>
          <option value="D">{{ $t('add.q5.answers.D') }}</option>
          <option value="E">{{ $t('add.q5.answers.E') }}</option>
        </select>
      </f7-list-item>

      <f7-list-item :title="$t('add.q6.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q6">
          <option value="A">{{ $t('add.q6.answers.A') }}</option>
          <option value="B">{{ $t('add.q6.answers.B') }}</option>
          <option value="C">{{ $t('add.q6.answers.C') }}</option>
          <option value="D">{{ $t('add.q6.answers.D') }}</option>
          <option value="E">{{ $t('add.q6.answers.E') }}</option>
        </select>
      </f7-list-item>

      <f7-list-item :title="$t('add.q7.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q7">
          <option value="0">{{ $t('global.scaleOnSeven[0]') }}</option>
          <option value="1">{{ $t('global.scaleOnSeven[1]') }}</option>
          <option value="2">{{ $t('global.scaleOnSeven[2]') }}</option>
          <option value="3">{{ $t('global.scaleOnSeven[3]') }}</option>
          <option value="4">{{ $t('global.scaleOnSeven[4]') }}</option>
          <option value="5">{{ $t('global.scaleOnSeven[5]') }}</option>
          <option value="6">{{ $t('global.scaleOnSeven[6]') }}</option>
        </select>
      </f7-list-item>

      <f7-list-item :title="$t('add.q8.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q8">
          <option value="0">{{ $t('global.scaleOnSeven[0]') }}</option>
          <option value="1">{{ $t('global.scaleOnSeven[1]') }}</option>
          <option value="2">{{ $t('global.scaleOnSeven[2]') }}</option>
          <option value="3">{{ $t('global.scaleOnSeven[3]') }}</option>
          <option value="4">{{ $t('global.scaleOnSeven[4]') }}</option>
          <option value="5">{{ $t('global.scaleOnSeven[5]') }}</option>
          <option value="6">{{ $t('global.scaleOnSeven[6]') }}</option>
        </select>
      </f7-list-item>

      <f7-list-item :title="$t('add.q9.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q9">
          <option value="0">{{ $t('global.scaleOnSeven[0]') }}</option>
          <option value="1">{{ $t('global.scaleOnSeven[1]') }}</option>
          <option value="2">{{ $t('global.scaleOnSeven[2]') }}</option>
          <option value="3">{{ $t('global.scaleOnSeven[3]') }}</option>
          <option value="4">{{ $t('global.scaleOnSeven[4]') }}</option>
          <option value="5">{{ $t('global.scaleOnSeven[5]') }}</option>
          <option value="6">{{ $t('global.scaleOnSeven[6]') }}</option>
        </select>
      </f7-list-item>

      <f7-list-item :title="$t('add.q10.title')" smart-select
                    :smart-select-params="{openIn: 'sheet'}">
        <select v-model="form.q10">
          <option value="0">{{ $t('global.scaleOnSeven[0]') }}</option>
          <option value="1">{{ $t('global.scaleOnSeven[1]') }}</option>
          <option value="2">{{ $t('global.scaleOnSeven[2]') }}</option>
          <option value="3">{{ $t('global.scaleOnSeven[3]') }}</option>
          <option value="4">{{ $t('global.scaleOnSeven[4]') }}</option>
          <option value="5">{{ $t('global.scaleOnSeven[5]') }}</option>
          <option value="6">{{ $t('global.scaleOnSeven[6]') }}</option>
        </select>
      </f7-list-item>
    </f7-list>

    <f7-button :disabled="!isValid"
               raised
               fill
               round
               @click="save">
      {{$t('global.add')}}
    </f7-button>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'

import { mapMutations } from 'vuex'

function getDefaultData () {
  return {
    step: 0,
    form: {
      q1: null,
      q11: null, // TODO: ugly should change that !!! 1-1
      q2: null,
      q3: null,
      q4: null,
      q4Other: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      q10: null
    }
  }
}

export default {
  name: 'p-incident-form',
  mounted () {
    const self = this
    const months = this.$t('global.months').split(' ')
    const getTwoDigit = (v) => {
      return v < 10 ? '0' + v : v
    }

    const getMomentFromValues = (values) => {
      const date = `${values[2]}-${getTwoDigit(Number(values[0]) + 1)}-${getTwoDigit(values[1])} ${getTwoDigit(values[3])}:${getTwoDigit(values[4])}`
      return moment(date)
    }

    const today = new Date()
    const initialValues = [
      today.getMonth(),
      today.getDate(),
      today.getFullYear(),
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ]
    this.$f7.picker.create({
      inputEl: '#demo-picker-date',
      toolbar: true,
      rotateEffect: true,
      value: initialValues,
      formatValue: function (values) {
        return self.$d(getMomentFromValues(values).toDate(), 'long')
      },
      cols: [
        // Months
        {

          values: (function () {
            const val = []
            for (let i = 0; i <= today.getMonth(); i++) {
              val.push(i)
            }
            return val
          })(),
          displayValues: months,
          textAlign: 'left'
        },
        // Days
        {
          values: (function () {
            const val = []
            for (let i = 1; i <= 31; i++) {
              val.push(i)
            }
            return val
          })()
        },
        // Years
        {
          values: (function () {
            const arr = []
            for (let i = 2000; i <= today.getFullYear(); i++) {
              arr.push(i)
            }
            return arr
          })()
        },
        // Space divider
        {
          divider: true,
          content: '&nbsp;&nbsp;'
        },
        // Hours
        {
          values: (function () {
            const arr = []
            for (let i = 0; i <= 23; i++) {
              arr.push(i)
            }
            return arr
          })()
        },
        // Divider
        {
          divider: true,
          content: ':',
          textAlign: 'left'
        },
        // Minutes
        {
          values: (function () {
            const arr = []
            for (let i = 0; i <= 59; i++) {
              arr.push(i < 10 ? '0' + i : i)
            }
            return arr
          })()
        }
      ],
      on: {
        change: function (picker, values, displayValues) {
          const daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate()
          self.form.q3 = getMomentFromValues(values).format()
          if (values[1] > daysInMonth) {
            picker.cols[1].setValue(daysInMonth)
          }
          if (getMomentFromValues(values).isAfter(moment().add('5', 'minutes'), 'minutes')) {
            picker.cols[0].setValue(initialValues[0])
            picker.cols[1].setValue(initialValues[1])
            picker.cols[2].setValue(initialValues[2])
            // divider
            picker.cols[4].setValue(initialValues[3])
            // divider
            picker.cols[6].setValue(initialValues[4])
          }
        }
      }
    })
  },
  data: getDefaultData,
  watch: {
    'form.q1' () {
      // TODO reset the select of the second question properly !
      this.form.q11 = null
    },
    form: {
      handler () {
        const getStep = (form) => {
          const keys = Object.keys(form).filter(k => k !== 'q4Other' && k !== 'q11' && k !== 'q3')
          for (let i = 8; i > 0; i--) {
            if (this.form[keys[i - 1]] !== null) return i
          }
          return 0
        }
        this.step = getStep(this.form)
      },
      deep: true
    }
  },
  computed: {
    itHappenThisHour () {
      return moment(this.form.q3).isSame(moment(), 'hours')
    },
    isValid () {
      const { q1, q2, q3, q11 } = this.form
      if (_.isNull(q1)) return false

      if (q1 === 'A' || q1 === 'B' || q1 === 'C') {
        if (_.isNull(q11)) return false
      }

      if (_.isNull(q2)) return false

      return !_.isNull(q3);
    },
    newIncident () {
      const { q1, q11, q2, q3, q4, q4Other, q5, q6, q7, q8, q9, q10 } = this.form
      const newIncident = {
        q1,
        q2,
        date: q3,
        'q1-1': q11
      }

      // TODO : refactor ! ugly !
      if (!_.isNull(q4)) {
        if (q4 === 'D' && !_.isEmpty(q4Other)) {
          newIncident.q4 = q4Other
        } else {
          newIncident.q4 = q4
        }
      }

      if (!_.isNull(q5)) newIncident.q5 = q5
      if (!_.isNull(q6)) newIncident.q6 = q6
      if (!_.isNull(q7)) newIncident.q7 = q7
      if (!_.isNull(q8)) newIncident.q8 = q8
      if (!_.isNull(q9)) newIncident.q9 = q9
      if (!_.isNull(q10)) newIncident.q10 = q10

      return newIncident
    }
  },
  methods: {
    ...mapMutations({ addIncident: 'ADD_INCIDENT' }),
    save () {
      this.addIncident(this.newIncident)
      this.$f7router.navigate('/')
    }
  }
}
</script>
