// import Moment from 'moment'

const DataRepo = {};

const data = [
  {
    "name": "First Meeting",
    "start": {
      "seconds": "1604150054"
    },
    "end": {
      "seconds": "1604153654"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": false
  },
{
    "name": "second meeting Meeting",
    "start": {
      "seconds": "1604153654"
    },
    "end": {
      "seconds": "1604157254"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": false
  },
{
    "name": "Third meeting Meeting",
    "start": {
      "seconds": "1604157254"
    },
    "end": {
      "seconds": "1604160854"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Fourth meeting Meeting",
    "start": {
      "seconds": "1604204054"
    },
    "end": {
      "seconds": "1604207654"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Fifth meeting Meeting",
    "start": {
      "seconds": "1604218454"
    },
    "end": {
      "seconds": "1604222054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "sixth meeting Meeting",
    "start": {
      "seconds": "1604308454"
    },
    "end": {
      "seconds": "1604312054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "seventh meeting Meeting",
    "start": {
      "seconds": "1604398454"
    },
    "end": {
      "seconds": "1604402054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Eighth Meeting",
    "start": {
      "seconds": "1604488454"
    },
    "end": {
      "seconds": "1604492054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Nineth Meeting",
    "start": {
      "seconds": "1604578454"
    },
    "end": {
      "seconds": "1604582054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  }
 
];

// function formatJson() {
//   let monthMap = {};
//   data.filter(a => (Moment().diff(Moment.unix(parseInt(a.start.seconds)), 'days') <= 0) || (Moment.unix(parseInt(a.start.seconds)).format("ddd MMM DD") === Moment().format("ddd MMM DD"))).sort((a,b) => parseInt(a.start.seconds) - parseInt(b.start.seconds)).forEach(event => {
//   let unixTime = Moment.unix(event.start.seconds);
//   if(monthMap[unixTime.format('MMMM')]){
//       if(monthMap[unixTime.format('MMMM')][unixTime.format('ddd MMM DD')]) {
//       monthMap[unixTime.format('MMMM')][unixTime.format('ddd MMM DD')].push({ type: 'EVENT', value: event});
//       } else {
//       monthMap[unixTime.format('MMMM')][unixTime.format('ddd MMM DD')] = [{ type: 'EVENT', value: event}];
//       }
//   } else {
//       monthMap[unixTime.format('MMMM')] = {
//       [unixTime.format('ddd MMM DD')]: [{ type: 'EVENT', value: event}]
//       }
//   }
//   });
//   let dataList = [];
//   let today = Moment().format('ddd MMM DD');
//   Object.keys(monthMap).forEach(key => {
//     let days = monthMap[key];
//     dataList.push({ type: 'MONTH', value: key});
//     Object.keys(days).forEach(day => {
//       dataList.push({type: 'DAY', value: day==today ? 'TODAY': day});
//       dataList.push(...days[day])
//     });
//   });
//   return dataList;
// }



DataRepo.todayMeetings = () => {
  return data.slice(0, 3);
}

DataRepo.allMeetings = () => {

}

export default DataRepo;