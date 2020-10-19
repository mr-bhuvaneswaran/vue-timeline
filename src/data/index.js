const data = {
    allMeetings: [
        {
            month: "JUNE",
            days: [
                {
                    day: "Mon Jun 1",
                    events: [
                        {
                            start: "9:00a",
                            end: "10:00a",
                            priority: "HIGH",
                            title: "Meeting Title",
                            location : "Building Room Floor 2",
                            isCanceled: true,
                            isEditable: false                        },
                        {
                            start: "10:30a",
                            end: "11:00a",
                            priority: "HIGH",
                            title: "Extended Meeting name",
                            location : "Extended Building Room Floor 2",
                            isCanceled: false,
                            isEditable: false                        },
                        {
                            start: "1:30p",
                            end: "2:30p",
                            priority: "MEDIUM",
                            title: "Meeting name",
                            location : "Building Room Floor 2",
                            isCanceled: false,
                            isEditable: false                        }
                    ] 
                },
                {
                    day: "Wed Jun 3",
                    events: [
                        {
                            start: "7:30a",
                            end: "8:30a",
                            priority: "LOW",
                            title: "Meeting Title",
                            location : "Building Room Floor 2",
                            isCanceled: true,
                            isEditable: false                        },
                        {
                            start: "10:00a",
                            end: "11:00a",
                            priority: "HIGH",
                            title: "Extended Meeting name",
                            location : "Extended Building Room Floor 2",
                            isCanceled: false,
                            isEditable: true                        },
                        {
                            start: "2:30p",
                            end: "3:30p",
                            priority: "LOW",
                            title: "Meeting name",
                            location : "Building Room Floor 2",
                            isCanceled: false,
                            isEditable: false                        }
                    ] 
                },
                {
                    day: "Thurs Jun 4",
                    events: [
                        {
                            start: "7:30a",
                            end: "8:30a",
                            priority: "LOW",
                            title: "Meeting Title",
                            location : "Building Room Floor 2",
                            isCanceled: true,
                            isEditable: false                        },
                        {
                            start: "10:00a",
                            end: "11:00a",
                            priority: "HIGH",
                            title: "Extended Meeting name",
                            location : "Extended Building Room Floor 2",
                            isCanceled: false,
                            isEditable: true                        },
                        {
                            start: "2:30p",
                            end: "3:30p",
                            priority: "LOW",
                            title: "Meeting name",
                            location : "Building Room Floor 2",
                            isCanceled: false,
                            isEditable: false                        }
                    ] 
                },
                {
                    day: "Fri Jun 5",
                    events: [
                        {
                            start: "7:30a",
                            end: "8:30a",
                            priority: "LOW",
                            title: "Meeting Title",
                            location : "Building Room Floor 2",
                            isCanceled: true,
                            isEditable: false                        },
                        {
                            start: "10:00a",
                            end: "11:00a",
                            priority: "HIGH",
                            title: "Extended Meeting name",
                            location : "Extended Building Room Floor 2",
                            isCanceled: false,
                            isEditable: true                        },
                        {
                            start: "2:30p",
                            end: "3:30p",
                            priority: "LOW",
                            title: "Meeting name",
                            location : "Building Room Floor 2",
                            isCanceled: false,
                            isEditable: false                        }
                    ] 
                }
            ]
        }
    ],
    todayMeetings: [
        {
            start: "9:00a",
            end: "10:00a",
            priority: "HIGH",
            title: "Meeting Title",
            location : "Building Room Floor 2",
            isCanceled: true,
            isEditable: false        },
        {
            start: "10:30a",
            end: "11:00a",
            priority: "HIGH",
            title: "Extended Meeting name",
            location : "Extended Building Room Floor 2",
            isCanceled: false,
            isEditable: false        },
        {
            start: "1:30p",
            end: "2:30p",
            priority: "MEDIUM",
            title: "Meeting name",
            location : "Building Room Floor 2",
            isCanceled: false,
            isEditable: false        }
    ] 
};

export default data;