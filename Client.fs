namespace MyAssignFujiwara

open WebSharper
open WebSharper.UI
open WebSharper.UI.Templating
open WebSharper.UI.Notation
open WebSharper.Charting
open WebSharper.UI.Client
open WebSharper.JavaScript
open WebSharper.UI.Html
open WebSharper.Sitelets
open WebSharper.UI.Server
open type WebSharper.UI.ClientServer


[<JavaScript>]
module Templates =

    type MainTemplate = Templating.Template<"Main.html", ClientLoad.FromDocument, ServerLoad.WhenChanged>

[<JavaScript>]
module SetChart1 =
    let Charts(mg:float, jg:float, fg:float, cg:float, hg:float) =
         // チャートを描画するためのコードを追加
         
        let labels =    // この行で新しい束縛labelsを定義します。
            [| "Math"; "Java"; "F-sharp"; "C-sharp"; "HTML" |]   // ここでlabelsの定義が終了します。
        let dataset1 = [|mg; jg; fg; cg; hg|]    // この行で新しい束縛dataset1を定義します。
        let dataset2 = [|1.0; 2.5; 5.0; 7.5; 10.0|]
        let chart =
            Chart.Combine [
                Chart.Radar(Array.zip labels dataset1)
                    .WithFillColor(Color.Rgba(151, 187, 205, 0.2))
                    .WithStrokeColor(Color.Name "blue")
                    .WithPointColor(Color.Name "darkblue")
                    .WithTitle("Average Grade")

                Chart.Radar(Array.zip labels dataset2) //This number is used to anchor the scale.
                    .WithFillColor(Color.Rgba(220, 220, 220, 0.2))
                    .WithStrokeColor(Color.Rgba(255, 255, 255, 0.0)) // tramsparemt
                    .WithPointColor(Color.Rgba(255, 255, 255, 0.0))
                    .WithTitle("")
            ]

        Renderers.ChartJs.Render(chart, Size = Size(800, 800)) // ここでchartMain関数の定義が終了します。


[<JavaScript>]
module Client =
    let mutable MGrade = Var.Create 6.0 // MathGradeの値を保持するための新しい変数を作成
    let mutable JGrade = Var.Create 6.0 
    let mutable FGrade = Var.Create 7.0 
    let mutable CGrade = Var.Create 6.0 
    let mutable HGrade = Var.Create 7.5
    

    
    let Main () =
        let v1 = Var.Create ""
        let v2 = Var.Create ""
        let v3 = Var.Create ""
        let v4 = Var.Create ""
        let v5 = Var.Create ""


        Templates.MainTemplate.MainForm()
            .OnSend(fun e ->
                async {
                    
                    let! resMath = e.Vars.MathGrade.View |> View.GetAsync
                    //let! out = name 
                    //MGrade := resMath
                    MGrade.Value <- float resMath
                    let! resJava = e.Vars.JavaGrade.View |> View.GetAsync
                    //let! out = name 
                    JGrade.Value <- float resJava                    
                    let! resFsharp = e.Vars.FsharpGrade.View |> View.GetAsync
                    //let! out = name 
                    FGrade.Value <- float resFsharp                    
                    let! resCsharp = e.Vars.CsharpGrade.View |> View.GetAsync
                    //let! out = name 
                    CGrade.Value <- float resCsharp                    
                    let! resHTML = e.Vars.HTMLGrade.View |> View.GetAsync
                    //let! out = name 
                    HGrade.Value <- float resHTML

                    // Propagate the result to the UI via `v`
                    v1 := resMath
                    v2 := resJava
                    v3 := resFsharp
                    v4 := resCsharp
                    v5 := resHTML
                    
                    SetChart1.Charts(float MGrade.Value, float JGrade.Value, float FGrade.Value, float CGrade.Value, float HGrade.Value) |> ignore

                }
                |> Async.StartImmediate
               
            )
            .Response1(v1.View) // ここでMathGradeの値を取得します
            .Response2(v2.View) // ここでJaveGradeの値を取得します
            .Response3(v3.View) // ここでFsharpGradeの値を取得します
            .Response4(v4.View) // ここでCsharpGradeの値を取得します
            .Response5(v5.View) // ここでHTMLGradeの値を取得します
            //.OnSend(fun e -> SetChart1.Charts(float MGrade.value, JGrade, FGrade, CGrade, HGrade))
            .Doc()
             

            
            

(*
[<JavaScript>]
module SetChart1 =
    let Charts() =
         // チャートを描画するためのコードを追加
         
        let labels =    // この行で新しい束縛labelsを定義します。
            [| "Math"; "Java"; "F-sharp"; "C-sharp"; "HTML" |]   // ここでlabelsの定義が終了します。
        let dataset1 = [|float Client.MGrade.Value; float Client.JGrade.Value; float Client.FGrade.Value; float Client.CGrade.Value; float Client.HGrade.Value|]    // この行で新しい束縛dataset1を定義します。
        let dataset2 = [|75.0; 75.0; 75.0; 81.0; 56.0|]
        let chart =
            Chart.Combine [
                Chart.Radar(Array.zip labels dataset1)
                    .WithFillColor(Color.Rgba(151, 187, 205, 0.2))
                    .WithStrokeColor(Color.Name "blue")
                    .WithPointColor(Color.Name "darkblue")
                    .WithTitle("You")

                Chart.Radar(Array.zip labels dataset2)
                    .WithFillColor(Color.Rgba(220, 220, 220, 0.2))
                    .WithStrokeColor(Color.Name "green")
                    .WithPointColor(Color.Name "darkgreen")
                    .WithTitle("Average value")
            ]

        Renderers.ChartJs.Render(chart, Size = Size(800, 800)) // ここでchartMain関数の定義が終了します。
*)


