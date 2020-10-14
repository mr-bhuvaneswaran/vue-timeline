<template>
    <article class="main-content">
        <section class="card">

            <header class="card-header">Upcoming Meetings</header>
            <header class="card-title">TODAY</header>

            <main class="card-content">
                <TimeLineItem 
                    v-for="(item, index) in todayTasks" 
                    :key="item.start + item.end"
                    :item="item"
                    :index="index"
                />
            </main>

            <footer class="card-footer">
                <router-link to="/timeline" style="text-decoration: none;">
                <span class="footer-text"> View all meetings </span>
                </router-link>
            </footer>
        
        </section>
    </article>
</template>


<script>
import TimeLineItem from './TimeLineItem.vue'
import Data from '../data'

export default {
    name: 'DashBoard',
    components: {
        TimeLineItem
    },
    data: function() {
        return {
            timelineData : Data,
            todayLimit: 3
        };
    },
    computed : {
        todayTasks: function () {
            let eventSize = this.timelineData.todayMeetings.length;
            return this.timelineData.todayMeetings.slice(0, this.todayLimit > eventSize ? eventSize : this.todayLimit )
        }
    }
}
</script>

<style scoped>

.main-content{
    display: flex;
    justify-content: center;
}

.card {
    background: white;
    border-radius: 12px;
    box-shadow: 2px 2px #0000000d;
    width: 25vw;
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
</style>