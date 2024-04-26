namespace MyAssignFujiwara

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server
open WebSharper.Charting

type EndPoint =
    | [<EndPoint "/">] Home
    | [<EndPoint "/about">] About

module Templating =
    open WebSharper.UI.Html

    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
            let isActive = if endpoint = act then "nav-link active" else "nav-link"
            li [attr.``class`` "nav-item"] [
                a [
                    attr.``class`` isActive
                    attr.href (ctx.Link act)
                ] [text txt]
            ]
        [
            "Home" => EndPoint.Home
            "About" => EndPoint.About
        ]

    let Main ctx action (title: string) (body: Doc list) =
        Content.Page(
            Templates.MainTemplate()
                .Title(title)
                .MenuBar(MenuBar ctx action)
                .Body(body)
                .Doc()
        )




module Site =
    open WebSharper.JavaScript
    open WebSharper.UI.Server
    open WebSharper.UI.Html

    open type WebSharper.UI.ClientServer

    let HomePage ctx =
        Templating.Main ctx EndPoint.Home "Home" [
            h1 [] [text "UNIVERSITY GRADES"]
            div [] [client (Client.Main())]
            h2 [] [text "YOUR GRADES CHART"]
            div [] [client (SetChart1.Charts(6,6,6,6,6))]  // Ç±Ç±ÇèCê≥
        ]

    let AboutPage ctx =
        Templating.Main ctx EndPoint.About "About" [
             h1 [] [text "About Subjects"]
             h2 [] [text "Math"]
             p [] [text "Mathematics is a necessary skill to strengthen your programming skills. It is also necessary for AI development. In this class, you will learn:"]
             ul [] [
                li [] [text "Matrices"]
                li [] [text "Differentials"]
                li [] [text "Integrals"]
             ]
             p [] [text "This class will be assessed by two exams."]

             h2 [] [text "Java"]
             p [] [text "Java is a great first programming language for beginners. In this class, you will learn:"]
             ul [] [
                li [] [text "Coding Basics"]
                li [] [text "Algorithms"]
                li [] [text "Functions"]
             ]
             p [] [text "This class will be assessed by two exams."]

             h2 [] [text "F sharp"]
             p [] [text "F# is your first functional programming language.. In this class, you will learn:"]
             ul [] [
                li [] [text "Coding Basics"]
                li [] [text "Algorithms"]
                li [] [text "Functions"]
             ]
             p [] [text "This class will be assessed by two exams."]

             h2 [] [text "C sharp"]
             p [] [text "C# will be taught in the second semester for basics and in the third semester for advanced applications.. In this class, you will learn:"]
             ul [] [
                li [] [text "Coding Basics"]
                li [] [text "Algorithms"]
                li [] [text "Functions"]
             ]
             p [] [text "This class will be assessed by two exams."]

             h2 [] [text "HTML"]
             p [] [text "HTML is a class that teaches you the coding skills you need to create web pages. In this class, you will learn:"]
             ul [] [
                li [] [text "Basics of HTML tags"]
                li [] [text "Overview of HTML5"]
                li [] [text "Basics of CSS"]
             ]
             p [] [text "This class will be assessed by two exams."]
        ]



    [<Website>]
    let Main =
        Application.MultiPage (fun ctx endpoint ->
            match endpoint with
            | EndPoint.Home -> HomePage ctx
            | EndPoint.About -> AboutPage ctx
        )