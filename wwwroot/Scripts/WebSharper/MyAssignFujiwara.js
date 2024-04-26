(function(Global)
{
 "use strict";
 var MyAssignFujiwara,SetChart1,Client,SC$1,Site,MyAssignFujiwara_Templates,WebSharper,Charting,Renderers,ChartJs,Chart,Arrays,Pervasives,Concurrency,UI,View,TemplateHole,Var$1,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateHoleModule,TextView,TemplateInstance,Client$1,Templates;
 MyAssignFujiwara=Global.MyAssignFujiwara=Global.MyAssignFujiwara||{};
 SetChart1=MyAssignFujiwara.SetChart1=MyAssignFujiwara.SetChart1||{};
 Client=MyAssignFujiwara.Client=MyAssignFujiwara.Client||{};
 SC$1=Global.StartupCode$MyAssignFujiwara$Client=Global.StartupCode$MyAssignFujiwara$Client||{};
 Site=MyAssignFujiwara.Site=MyAssignFujiwara.Site||{};
 MyAssignFujiwara_Templates=Global.MyAssignFujiwara_Templates=Global.MyAssignFujiwara_Templates||{};
 WebSharper=Global.WebSharper;
 Charting=WebSharper&&WebSharper.Charting;
 Renderers=Charting&&Charting.Renderers;
 ChartJs=Renderers&&Renderers.ChartJs;
 Chart=Charting&&Charting.Chart;
 Arrays=WebSharper&&WebSharper.Arrays;
 Pervasives=Charting&&Charting.Pervasives;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 UI=WebSharper&&WebSharper.UI;
 View=UI&&UI.View;
 TemplateHole=UI&&UI.TemplateHole;
 Var$1=UI&&UI.Var$1;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateHoleModule=UI&&UI.TemplateHoleModule;
 TextView=TemplateHoleModule&&TemplateHoleModule.TextView;
 TemplateInstance=Server&&Server.TemplateInstance;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 SetChart1.Charts=function(mg,jg,fg,cg,hg)
 {
  var labels;
  labels=["Math","Java","F-sharp","C-sharp","HTML"];
  return ChartJs.Render(Chart.Combine([Chart.Radar$1(Arrays.zip(labels,[mg,jg,fg,cg,hg])).__WithFillColor(new Pervasives.Color({
   $:0,
   $0:151,
   $1:187,
   $2:205,
   $3:0.2
  })).__WithStrokeColor(new Pervasives.Color({
   $:2,
   $0:"blue"
  })).__WithPointColor(new Pervasives.Color({
   $:2,
   $0:"darkblue"
  })).__WithTitle("Average Grade"),Chart.Radar$1(Arrays.zip(labels,[1,2.5,5,7.5,10])).__WithFillColor(new Pervasives.Color({
   $:0,
   $0:220,
   $1:220,
   $2:220,
   $3:0.2
  })).__WithStrokeColor(new Pervasives.Color({
   $:0,
   $0:255,
   $1:255,
   $2:255,
   $3:0
  })).__WithPointColor(new Pervasives.Color({
   $:0,
   $0:255,
   $1:255,
   $2:255,
   $3:0
  })).__WithTitle("")]),{
   $:1,
   $0:{
    $:0,
    $0:800,
    $1:800
   }
  },null,null);
 };
 Client.Main$67$20=function(v1,v2,v3,v4,v5)
 {
  return function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("mathgrade")).get_View()),function(a)
    {
     Client.MGrade().Set(Global.Number(a));
     return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("javagrade")).get_View()),function(a$1)
     {
      Client.JGrade().Set(Global.Number(a$1));
      return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("fsharpgrade")).get_View()),function(a$2)
      {
       Client.FGrade().Set(Global.Number(a$2));
       return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("csharpgrade")).get_View()),function(a$3)
       {
        Client.CGrade().Set(Global.Number(a$3));
        return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("htmlgrade")).get_View()),function(a$4)
        {
         Client.HGrade().Set(Global.Number(a$4));
         v1.Set(a);
         v2.Set(a$1);
         v3.Set(a$2);
         v4.Set(a$3);
         v5.Set(a$4);
         SetChart1.Charts(Client.MGrade().Get(),Client.JGrade().Get(),Client.FGrade().Get(),Client.CGrade().Get(),Client.HGrade().Get());
         return Concurrency.Zero();
        });
       });
      });
     });
    });
   })),null);
  };
 };
 Client.Main=function()
 {
  var v1,v2,v3,v4,v5,b,R,_this,R$1,_this$1,R$2,_this$2,R$3,_this$3,R$4,_this$4,t,p,i;
  v1=Var$1.Create$1("");
  v2=Var$1.Create$1("");
  v3=Var$1.Create$1("");
  v4=Var$1.Create$1("");
  v5=Var$1.Create$1("");
  return(b=(R=v5.get_View(),(_this=(R$1=v4.get_View(),(_this$1=(R$2=v3.get_View(),(_this$2=(R$3=v2.get_View(),(_this$3=(R$4=v1.get_View(),(_this$4=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"onsend",function()
  {
   return t.i;
  },function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("mathgrade")).get_View()),function(a)
    {
     Client.MGrade().Set(Global.Number(a));
     return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("javagrade")).get_View()),function(a$1)
     {
      Client.JGrade().Set(Global.Number(a$1));
      return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("fsharpgrade")).get_View()),function(a$2)
      {
       Client.FGrade().Set(Global.Number(a$2));
       return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("csharpgrade")).get_View()),function(a$3)
       {
        Client.CGrade().Set(Global.Number(a$3));
        return Concurrency.Bind(View.GetAsync(TemplateHole.Value(e.Vars.Hole("htmlgrade")).get_View()),function(a$4)
        {
         Client.HGrade().Set(Global.Number(a$4));
         v1.Set(a);
         v2.Set(a$1);
         v3.Set(a$2);
         v4.Set(a$3);
         v5.Set(a$4);
         SetChart1.Charts(Client.MGrade().Get(),Client.JGrade().Get(),Client.FGrade().Get(),Client.CGrade().Get(),Client.HGrade().Get());
         return Concurrency.Zero();
        });
       });
      });
     });
    });
   })),null);
  })),t)),(_this$4.h.push(new TextView.New("response1",R$4)),_this$4))),(_this$3.h.push(new TextView.New("response2",R$3)),_this$3))),(_this$2.h.push(new TextView.New("response3",R$2)),_this$2))),(_this$1.h.push(new TextView.New("response4",R$1)),_this$1))),(_this.h.push(new TextView.New("response5",R)),_this))),(p=Handler.CompleteHoles(b.k,b.h,[["mathgrade",0,null],["javagrade",0,null],["fsharpgrade",0,null],["csharpgrade",0,null],["htmlgrade",0,null]]),(i=new TemplateInstance.New(p[1],MyAssignFujiwara_Templates.mainform(p[0])),b.i=i,i))).get_Doc();
 };
 Client.HGrade=function()
 {
  SC$1.$cctor();
  return SC$1.HGrade;
 };
 Client.set_HGrade=function($1)
 {
  SC$1.$cctor();
  SC$1.HGrade=$1;
 };
 Client.CGrade=function()
 {
  SC$1.$cctor();
  return SC$1.CGrade;
 };
 Client.set_CGrade=function($1)
 {
  SC$1.$cctor();
  SC$1.CGrade=$1;
 };
 Client.FGrade=function()
 {
  SC$1.$cctor();
  return SC$1.FGrade;
 };
 Client.set_FGrade=function($1)
 {
  SC$1.$cctor();
  SC$1.FGrade=$1;
 };
 Client.JGrade=function()
 {
  SC$1.$cctor();
  return SC$1.JGrade;
 };
 Client.set_JGrade=function($1)
 {
  SC$1.$cctor();
  SC$1.JGrade=$1;
 };
 Client.MGrade=function()
 {
  SC$1.$cctor();
  return SC$1.MGrade;
 };
 Client.set_MGrade=function($1)
 {
  SC$1.$cctor();
  SC$1.MGrade=$1;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.MGrade=Var$1.Create$1(6);
  SC$1.JGrade=Var$1.Create$1(6);
  SC$1.FGrade=Var$1.Create$1(7);
  SC$1.CGrade=Var$1.Create$1(6);
  SC$1.HGrade=Var$1.Create$1(7.5);
 };
 Site.HomePage$55$28=function()
 {
  return SetChart1.Charts(6,6,6,6,6);
 };
 MyAssignFujiwara_Templates.mainform=function(h)
 {
  Templates.LoadLocalTemplates("main");
  return h?Templates.NamedTemplate("main",{
   $:1,
   $0:"mainform"
  },h):void 0;
 };
}(self));
