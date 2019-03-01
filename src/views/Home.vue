<template>
  <f7-page :page-content="false" name="home">
    <!-- Page content -->
    <f7-navbar>
      <f7-nav-title>Pelote</f7-nav-title>
      <f7-nav-right>
        <f7-link iconF7="icon-bars" popover-open=".popover-menu"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-toolbar tabbar bottom>
      <f7-link tab-link route-tab-id="tab-daily" href="/" iconF7="calendar_today"></f7-link>
      <f7-link tab-link route-tab-id="tab-add" href="/add/" iconF7="add_round_fill"></f7-link>
      <f7-link tab-link route-tab-id="tab-graph" href="/graph/"
               iconF7="graph_square_fill"></f7-link>
    </f7-toolbar>

    <f7-tabs routable swipable>
      <f7-tab class="page-content" id="tab-daily"></f7-tab>
      <f7-tab class="page-content" id="tab-add"></f7-tab>
      <f7-tab class="page-content" id="tab-graph"></f7-tab>
    </f7-tabs>

    <p-pop-over-menu></p-pop-over-menu>
  </f7-page>
</template>

<script>
import PPopOverMenu from '../components/PopOverMenu'
export default {
  name: 'home',
  components: { PPopOverMenu }
}
</script>

<style>
  .md .toolbar a.icon-only {
    flex-shrink: 1 !important;
  }
</style>
