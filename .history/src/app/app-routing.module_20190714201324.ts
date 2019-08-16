import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "lazymodule" },
  {
    path: "lazymodule",
    loadChildren: "./lazy.module#LazyModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
