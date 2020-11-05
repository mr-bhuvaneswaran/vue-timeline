const DataRepo = {};

const data = [
  {
    "name": "First Meeting",
    "start": {
      "seconds": "1604578454"
    },
    "end": {
      "seconds": "1604582054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": false
  },
{
    "name": "second meeting Meeting",
    "start": {
      "seconds": "1604588454"
    },
    "end": {
      "seconds": "1604592054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": false
  },
{
    "name": "Third meeting Meeting",
    "start": {
      "seconds": "1604598454"
    },
    "end": {
      "seconds": "1604602054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Fourth meeting Meeting",
    "start": {
      "seconds": "1604888454"
    },
    "end": {
      "seconds": "1604882054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Fifth meeting Meeting",
    "start": {
      "seconds": "1604978454"
    },
    "end": {
      "seconds": "1604992054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "sixth meeting Meeting",
    "start": {
      "seconds": "1605978454"
    },
    "end": {
      "seconds": "160622054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "seventh meeting Meeting",
    "start": {
      "seconds": "1607078454"
    },
    "end": {
      "seconds": "1607782054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Eighth Meeting",
    "start": {
      "seconds": "1609578454"
    },
    "end": {
      "seconds": "1609582054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  },
{
    "name": "Nineth Meeting",
    "start": {
      "seconds": "1610578454"
    },
    "end": {
      "seconds": "1610582054"
    },
    "location": "Microsoft Teams Meeting",
    "link": "https://www.microsoft.com/",
    "priority": "normal",
    "is_cancelled": true
  }
 
];


DataRepo.todayMeetings = () => {
  return data.slice(0, 3);
}

DataRepo.getMeetings = (startDate, endDate, skip, top) => {
  return skip >= data.length ? [] : data.slice(skip, Math.min(skip+top, data.length) );
}

export default DataRepo;