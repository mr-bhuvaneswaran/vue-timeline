<template>

  <div class="month-name">

    <section v-for="(event, index) in filteredData" :key="event.type + JSON.stringify(event.value)"> 

      <div class="month-text" v-if="event.type === 'MONTH'"> 
        {{event.value}}
      </div> 

      <div class="month-date-text" v-if="event.type === 'DAY'">
        {{event.value}}
      </div>

      <TimeLineItem class="meeting-item"
        v-if="event.type === 'EVENT'"
        :item="event.value"
        :index="index"/>

    </section>

    <footer class="card-footer" v-if="!isSummary && eventLimit <= this.timelineData.length" @click="eventLimit+=5">
      <span class="footer-text"> See more </span>
    </footer>

  </div>

</template>


<script>
import TimeLineItem from './TimeLineItem.vue'
import Data from '../data'

export default {
  name: 'TimeLine',
    components: {
        TimeLineItem
    },
    props: ['isSummary'],
    data: function() {
      let eventLimit = 5;
      if(this.isSummary == true) {
        eventLimit = 3;
      }
      return {
          timelineData : Data,
          eventLimit
      };
    },
    computed: {
      filteredData: function() {
        let counter = 0;
        let index = 0;
        for (const item of this.timelineData) {
          index++;
          if(item.type === 'EVENT') counter++;
          if(counter == this.eventLimit) {
            break;
          }
        }
        return this.timelineData.slice(0, index)
      }
    }
  }
</script>

<style scoped>

.month-date-text {
  background: #00000005;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 600;
}

.month-name{
  background: white;
}

.month-text {
  padding: 12px 14px;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
}

.card-footer {
    text-align: center;
    padding-top: 12px;    
    font-weight: 550;
    border-top: 1.5px solid #607d8b2e;
    padding: 16px 0px;
    cursor: pointer;
    background-color: white;
}

.footer-text {
    font-size: 16px;
    color: #2196F3;
}
</style>