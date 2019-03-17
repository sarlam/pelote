<template>
  <f7-block>
    <f7-block v-if="todayIncidents.length === 0">
      {{ $t('timeline.empty') }}
    </f7-block>

    <div v-for="incident in todayIncidents" :key="incident.date" class="timeline-item">
      <div class="timeline-item-date">
        <small>{{$d(incident.mDate, 'long')}}</small>
      </div>
      <div class="timeline-item-divider"></div>
      <div class="timeline-item-content">
        <div class="timeline-item-inner">
          <div class="timeline-item-time">
            {{incident.mDate.getHours()}}:{{incident.mDate.getMinutes()}}
          </div>
          <div class="timeline-item-title">{{$t('add.q1.answers.'+incident.q1)}}</div>
          <div class="timeline-item-subtitle">{{$t('add.q1.answers.'+incident.q2)}}</div>
        </div>
      </div>
    </div>
  </f7-block>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'p-incident-daily-report',
  computed: {
    ...mapGetters(['todayIncidents'])
  }
}
</script>
