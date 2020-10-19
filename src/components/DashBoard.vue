<template>
    <article class="main-content">
        <section class="card">

            <header class="card-header">Upcoming Meetings</header>
            <header class="card-title">TODAY</header>

            <main class="card-content">

                <section 
                    v-for="(item, index) in todayTasks" 
                    :key="item.start + item.end"
                    class="timeline-item" 
                    :class="[{seperator: index !== 0},
                    {cancelled: item.isCanceled} ]">
                    <div class="editable" v-if="item.isEditable">
                        <svg style="fill: #00000087;" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                        <div class="controls">
                            <span id="edit" class="control-text">Edit</span>
                            <span id="remove" class="control-text">Remove</span>
                        </div>
                    </div>
                    <div class="time-content" :class="{clickable: !item.isCanceled }">
                        <div class="time-range">
                            <div>{{item.start}}</div>
                            <div>{{item.end}}</div>
                        </div>
                        <div class="color" :class="[priority(item)]">&centerdot;</div>
                        <div class="details">
                            <div class="meeting-title">{{item.title}}</div>
                            <div class="location">{{item.location}}</div>
                        </div>
                    </div>
                </section>
            
            </main>

            <footer class="card-footer">
                <!-- <router-link to="/timeline" style="text-decoration: none;"> -->
                <span class="footer-text"> View all meetings </span>
                <!-- </router-link> -->
            </footer>
        
        </section>
    </article>
</template>


<script>
import Data from '../data'

export default {
    name: 'DashBoard',
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
    },
    methods: {
        priority: function(eventItem) {
            return eventItem.priority.toLowerCase()
        }
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

.time-content {
    display: grid;
    grid-template-columns: 21% 14% 65%;
    margin-left: 26px;
}

.seperator {
    border-top: 1.5px solid #607d8b2e;
}

.timeline-item {
    padding: 12px 0px;
}

.time-range{
    font-size: 14px;
    font-weight: 600;
    color: #000000c7;
}

.meeting-title {
    font-weight: 600;
}

.color {
    font-size: 34px;
    font-weight: 900;
    font-family: monospace;
}

.location {
    color: #00000070;
    font-weight: 500;
    font-size: 14px;
}

.cancelled {
  opacity: 0.25;
}

.low {
    color: grey;
}

.medium {
    color: #FFC107;
}

.high {
    color: green;
}

.clickable {
    cursor: pointer;
}

.editable {
    display: flex;
    justify-content: space-between;
    margin: 0px 12px 8px 12px;
}

.control-text {
    font-size: 14px;
    cursor: pointer;
    color: #00000087;
    font-weight: 500;
}

#edit {
    margin-right: 8px;
}

.selected {
    background: #2196f32e;
}

</style>