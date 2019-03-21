import moment from 'moment'

export default ($vue) => {
  const locale = $vue.$i18n.locale
  const $t = $vue.$t.bind($vue)
  const today = new Date()
  const self = $vue

  const months = $t('global.months').split(' ')
  const getTwoDigit = (v) => {
    return v < 10 ? '0' + v : v
  }

  const getMomentFromValues = (values) => {
    const date = {
      en: `${values[2]}-${getTwoDigit(Number(values[0]) + 1)}-${getTwoDigit(values[1])} ${getTwoDigit(values[3])}:${getTwoDigit(values[4])}`,
      fr: `${values[2]}-${getTwoDigit(Number(values[1]) + 1)}-${getTwoDigit(values[0])} ${getTwoDigit(values[3])}:${getTwoDigit(values[4])}`
    }
    return moment(date[locale])
  }

  const AvailableCols = {
    // Months
    months: {

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
    days: {
      values: (function () {
        const val = []
        for (let i = 1; i <= 31; i++) {
          val.push(i)
        }
        return val
      })()
    },
    // Years
    years: {
      values: (function () {
        const arr = []
        for (let i = 2000; i <= today.getFullYear(); i++) {
          arr.push(i)
        }
        return arr
      })()
    },
    // Space divider
    'space-divider': {
      divider: true,
      content: '&nbsp;&nbsp;'
    },
    // Hours
    hours: {
      values: (function () {
        const arr = []
        for (let i = 0; i <= 23; i++) {
          arr.push(i)
        }
        return arr
      })()
    },
    // Divider
    'hours-divider': {
      divider: true,
      content: ':',
      textAlign: 'left'
    },
    // Minutes
    minutes: {
      values: (function () {
        const arr = []
        for (let i = 0; i <= 59; i++) {
          arr.push(i < 10 ? '0' + i : i)
        }
        return arr
      })()
    }
  }

  const initialValues = {
    en: [
      today.getMonth(),
      today.getDate(),
      today.getFullYear(),
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ],
    fr: [
      today.getDate(),
      today.getMonth(),
      today.getFullYear(),
      today.getHours(),
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    ]
  }

  const cols = {
    en: [
      AvailableCols.months,
      AvailableCols.days,
      AvailableCols.years,
      AvailableCols['space-divider'],
      AvailableCols.hours,
      AvailableCols['hours-divider'],
      AvailableCols.minutes
    ],
    fr: [
      AvailableCols.days,
      AvailableCols.months,
      AvailableCols.years,
      AvailableCols['space-divider'],
      AvailableCols.hours,
      AvailableCols['hours-divider'],
      AvailableCols.minutes
    ]
  }

  return {
    inputEl: '#demo-picker-date',
    toolbar: true,
    rotateEffect: true,
    value: initialValues[locale],
    formatValue: function (values) {
      return self.$d(getMomentFromValues(values).toDate(), 'long')
    },
    cols: cols[locale],
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
  }
}
