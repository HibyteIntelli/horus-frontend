import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./app/components/home-page/home-page.component";
import {DashboardPageComponent} from "./app/components/dashboard-page/dashboard-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'dashboard', component: DashboardPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
