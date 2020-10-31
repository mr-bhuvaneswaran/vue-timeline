<template>
    <article class="main-content">
        <section class="card">

            <header class="card-header">Upcoming Meetings</header>

            <main class="card-content">
                <TimeLine :is-summary = 'true'/>            
            </main>

            <footer class="card-footer">
                <router-link to="/all-meetings" style="text-decoration: none;">
                <span class="footer-text"> View all meetings </span>
                </router-link>
            </footer>
        
        </section>
    </article>
</template>

<script>
import TimeLine from './TimeLine.vue'
import Data from '../data';

export default {
    name: 'DashBoard',
    components: {
        TimeLine
    },
    data: function() {
        return {
            timelineData : Data,
        };
    }
}
</script>

<style scoped>

.main-content{
    display: flex;
    justify-content: center;
}

@media only screen and (min-width: 360px) {
    .card {
        width: 100%
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .card {
        width: 65%
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .card {
        width: 55%
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .card {
        width: 45%
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .card {
        width: 30%
    }
}
/* Extra large devices (large laptops and desktops, 1280px and up) */
@media only screen and (min-width: 1800px) {
    .card {
        width: 25%
    }
}

.card {
    background: white;
    border-radius: 12px;
    box-shadow: 2px 2px #0000000d;
}

.card-header {
    font-size: 16px;
    font-weight: 900;
    text-align: center;
    padding: 16px 16px 0px 16px;
}

.card-title {
    font-size: 14px;
    font-weight: 900;
    margin-top: 16px;
    padding: 0px 16px ;
    overflow-wrap: break-word;
}

.card-footer {
    text-align: center;
    padding-top: 12px;    
    font-weight: 550;
    border-top: 1.5px solid #607d8b2e;
    padding: 16px 0px;
    cursor: pointer;
}

.footer-text {
    font-size: 16px;
    color: #2196F3;
}

.month-date-text {
  background: #00000005;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
}

.month-name{
  overflow: auto;
  background: white;
}

.month-text {
  padding: 12px 16px;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
}
</style>