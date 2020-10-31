<template>
  <section class="timeline-item" :class="[{seperator: index !== 0},
   {cancelled: item.is_cancelled} ]">
    <!-- <div class="editable" v-if="item.isEditable">
        <svg style="fill: #00000087;" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
        <div class="controls">
            <span id="edit" class="control-text">Edit</span>
            <span id="remove" class="control-text">Remove</span>
        </div>
    </div> -->
    <a :href="item.link" class="item-nav" target="_blank">
        <div class="time-content" :class="[{clickable: !item.is_cancelled }, {cancelled: item.is_cancelled}]">
            <div class="time-range">
                <div>{{timeFormatted(item.start.seconds)}}</div>
                <div>{{timeFormatted(item.end.seconds)}}</div>
            </div>
            <div class="color" :class="[priority]">&centerdot;</div>
            <div class="details">
                <div class="meeting-title">{{item.name}}</div>
                <div class="location">{{item.location}}</div>
            </div>
        </div>
    </a>
  </section>
</template>


<script>

import Moment from 'moment'

export default {
  name: 'TimeLineItem',
  props: ['item', 'index'],
  computed: {
    priority: function() {
        return this.item.priority.toLowerCase();
    }
  },
  methods: {
    timeFormatted: function(milliseconds) {
        return Moment.unix(parseInt(milliseconds)).format('LT');
    }
  }
}
</script>

<style scoped>

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
    color: #000;
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
  opacity: 0.5;
}

.completed {
    text-decoration: line-through;
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

.item-nav{
    text-decoration: none;
}
</style>