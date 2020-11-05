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
  },
  {
  "name": "First Meeting",
  "start": {
    "seconds": "1610585454"
  },
  "end": {
    "seconds": "1610595054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": false
},
{
  "name": "second meeting Meeting",
  "start": {
    "seconds": "1610596054"
  },
  "end": {
    "seconds": "1610599054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": false
},
{
  "name": "Third meeting Meeting",
  "start": {
    "seconds": "1610630454"
  },
  "end": {
    "seconds": "1610650054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": true
},
{
  "name": "Fourth meeting Meeting",
  "start": {
    "seconds": "1610690454"
  },
  "end": {
    "seconds": "1610700054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": true
},
{
  "name": "Fifth meeting Meeting",
  "start": {
    "seconds": "1610720454"
  },
  "end": {
    "seconds": "1610730054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": true
},
{
  "name": "sixth meeting Meeting",
  "start": {
    "seconds": "1610740454"
  },
  "end": {
    "seconds": "1610750054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": true
},
{
  "name": "seventh meeting Meeting",
  "start": {
    "seconds": "1610780054"
  },
  "end": {
    "seconds": "1610790054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": true
},
{
  "name": "Eighth Meeting",
  "start": {
    "seconds": "1610800454"
  },
  "end": {
    "seconds": "1610830054"
  },
  "location": "Microsoft Teams Meeting",
  "link": "https://www.microsoft.com/",
  "priority": "normal",
  "is_cancelled": true
},
{
  "name": "Nineth Meeting",
  "start": {
    "seconds": "1610850454"
  },
  "end": {
    "seconds": "1610870054"
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