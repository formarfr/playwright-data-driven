export class TestData {
    scenarios = [
        {
            link: "Web Application",
            card: "Implement user authentication",
            expectedColumn: 'To Do',
            expectedTags: [ "Feature", "High Priority" ]
        },
        {
            link: "Web Application",
            card: "Fix navigation bug",
            expectedColumn: 'To Do',
            expectedTags: [ "Bug" ]
        },
        {
            link: "Web Application",
            card: "Design system updates",
            expectedColumn: 'In Progress',
            expectedTags: [ "Design" ]
        },
        {
            link: "Mobile Application",
            card: "Push notification system",
            expectedColumn: 'To Do',
            expectedTags: [ "Feature" ]
        },
        {
            link: "Mobile Application",
            card: "Offline mode",
            expectedColumn: 'In Progress',
            expectedTags: [ "Feature", "High Priority" ]
        },
        {
            link: "Mobile Application",
            card: "App icon design",
            expectedColumn: 'Done',
            expectedTags: [ "Design" ]
        },
    ]

    username = process.env.USER!;
    password = process.env.PASSWORD!;
}
