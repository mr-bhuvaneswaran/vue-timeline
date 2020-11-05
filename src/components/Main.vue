<template>
    <article class="main-content">
        <section class="card">

            <header class="card-header">Upcoming Meetings</header>

            <main class="card-content">
                <section class="timeline-item" 
                 v-for="(item, index)  in timelineData" 
                 :class="[{seperator: index !== 0 && !(index == 0 || getDate(timelineData[index -1].start.seconds) !== getDate(item.start.seconds))} ]"
                :key="item.start.seconds + item.name">

                    <div class="month-text" v-if="!isSummary && 
                    (index == 0 || getMonth(timelineData[index -1].start.seconds) !== getMonth(item.start.seconds))"> 
                        {{getMonth(item.start.seconds)}}
                    </div> 

                    <div class="month-date-text"
                        v-if="index == 0 || getDate(timelineData[index -1].start.seconds) !== getDate(item.start.seconds)">
                        {{getDate(item.start.seconds)}}
                    </div>

                    <a :href="item.link" class="item-nav" target="_blank">
                        <div class="time-content" :class="[{clickable: !item.is_cancelled }, {cancelled: item.is_cancelled}]">
                            <div class="time-range">
                                <div>{{timeFormatted(item.start.seconds)}}</div>
                                <div>{{timeFormatted(item.end.seconds)}}</div>
                            </div>
                            <div class="color" :class="[item.priority.toLowerCase()]">&centerdot;</div>
                            <div class="details">
                                <div class="meeting-title">{{item.name}}</div>
                                <div class="location">{{item.location}}</div>
                            </div>
                        </div>
                    </a>
                </section>
            </main>

            <footer class="card-footer" v-if="isSummary" @click="isSummary = !isSummary;loadMeetings()">
                <span class="footer-text"> View all meetings </span>
            </footer>
        
        </section>
    </article>
</template>

<script>
import Data from '../data';
import Moment from 'moment'

export default {
    name: 'Main',
    data: function() {
        return {
            timelineData : Data.todayMeetings(),
            isSummary: true,
            currentMonth: null
        };
    },
    methods: {
        timeFormatted: function(milliseconds) {
            return Moment.unix(parseInt(milliseconds)).format('LT');
        },
        getMonth: function(seconds) {
            return Moment.unix(parseInt(seconds)).format('MMMM');
        },
        getDate: function(seconds) {
            const currentDate = Moment.unix(parseInt(seconds)).format('ddd MMM DD');
            const today = Moment().format('ddd MMM DD')
            return currentDate == today ? 'TODAY' : currentDate;
        },
        loadMeetings: function() {
            const currentDate = Moment.now();
            const endDate = Moment().add(30, 'days').unix()
            this.timelineData.push(...Data.getMeetings(currentDate, endDate, this.timelineData.length, 5))
        },
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow && !this.isSummary) {
                    this.loadMeetings()
                }
            }
        }
    },
    mounted () {
        this.scroll()
    }
}
</script>

<style lang="scss">
@import "../styles/_settings.spacing.scss";
@import "../styles/_settings.font.scss";
@import "../styles/_settings.color.scss";

.main-content{
    display: flex;
    justify-content: center;
}

.card {
    width: 30%;
    background: map-get($color-map, 'white');
    border-radius: $space-s;
    box-shadow: $space-xxs $space-xxs #0000000d;
}

.card-header {
    font-size: $font-size-m;
    font-weight: 900;
    text-align: center;
    padding: $space-l $space-l 0 $space-l;
}

.card-title {
    font-size: ($space-m + $space-xxs);
    font-weight: 900;
    margin-top: $space-l;
    padding: 0 $space-l;
    overflow-wrap: break-word;
}

.card-footer {
    text-align: center;
    padding-top: $space-m;    
    font-weight: $font-weight-bold;
    border-top: $space-xxs solid #607d8b2e;
    padding: $space-l 0;
    cursor: pointer;
}

.footer-text {
    font-size: $space-l;
    color: #2196F3;
}

.month-date-text {
    background: #00000005;
    padding: $space-s $space-l;
    font-size: ($space-m + $space-xxs);
    font-weight: $font-weight-bold;
    margin-bottom: $space-m;
}

.month-name{
  overflow: auto;
  background: map-get($color-map, 'white');
}

.month-text {
  padding: $space-m $space-l;
  font-size: ($space-m + $space-xxs);
  font-weight: $font-weight-bold;
}

.cancelled {
  opacity: 0.5;
}

.low {
    color: grey;
}

.normal {
    color: #FFC107;
}

.high {
    color: green;
}

.clickable {
    cursor: pointer;
}

.item-nav{
    text-decoration: none;
}

.time-content {
    display: grid;
    grid-template-columns: 21% 14% 65%;
    margin-left: ($space-xl + $space-xxs);
}

.seperator {
    border-top: $space-xxs solid #607d8b2e;
}

.timeline-item {
    padding: $space-m 0;
}

.time-range{
    font-size: ($space-m + $space-xxs);
    font-weight: $font-weight-bold;
    color: #000000c7;
}

.meeting-title {
    font-weight: $font-weight-bold;
    color: #000;
}

.color {
    font-size: ($space-xxl + $space-xxs);
    font-weight: 900;
    font-family: monospace;
}

.location {
    color: #00000070;
    font-weight: $font-weight-semibold;
    font-size: ($space-m + $space-xxs);
}
</style>