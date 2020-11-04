<template>

  <article class="main-content">
      
    <header class="header-card">
      <router-link to="/">
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg>
      </router-link>
      <div class="header-text">Upcoming meetings</div>
    </header>

    <TimeLine />

  </article>

</template>

<script>
import TimeLine from './TimeLine.vue'

export default {
  name: 'AllMeetings',
    components: {
        TimeLine
    }
}

</script>

<style scoped>
.nav-icon {
  fill: #0d0e0e75;
  cursor: pointer;
}

.header-card {
    background: white;
    box-shadow: 2px 2px #0000000d;
    padding: 8px 16px;
    display: grid;
    grid-template-columns: 10% 90%;
    border-bottom: 4px solid #00000014;
}

.header-text {
  font-size: 16px;
  font-weight: 800;
  text-align: center;
}

.main-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30vw;
    margin: auto;
}

</style>