import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { RecipesRoutingModule } from "../recipes/recipes-routing.module";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: 
    [
        LoadingSpinnerComponent,
        AlertComponent,
        DropdownDirective
    ], 
    imports: 
    [
        CommonModule
    ],
    exports:
    [
        LoadingSpinnerComponent,
        AlertComponent,
        DropdownDirective,
        CommonModule,
    ]
})
export class SharedModule { }