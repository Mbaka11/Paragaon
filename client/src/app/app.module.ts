import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayAreaComponent } from '@app/components/play-area/play-area.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { AppRoutingModule } from '@app/modules/app-routing.module';
import { AppMaterialModule } from '@app/modules/material.module';
import { AppComponent } from '@app/pages/app/app.component';
import { InformationsPageComponent } from '@app/pages/informations-page/informations-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { ForfaitOneComponent } from './components/forfait-one/forfait-one.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { ForfaitPageComponent } from './pages/forfait-page/forfait-page.component';
import { NosSallesPageComponent } from './pages/nos-salles-page/nos-salles-page.component';
import { ForfaitTwoComponent } from './components/forfait-two/forfait-two.component';
import { ForfaitThreeComponent } from './components/forfait-three/forfait-three.component';
import { ForfaitFourComponent } from './components/forfait-four/forfait-four.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

/**
 * Main module that is used in main.ts.
 * All automatically generated components will appear in this module.
 * Please do not move this module in the module folder.
 * Otherwise Angular Cli will not know in which module to put new component
 */
@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        MaterialPageComponent,
        PlayAreaComponent,
        SidebarComponent,
        HeadbarComponent,
        BottomBarComponent,
        InformationsPageComponent,
        NosSallesPageComponent,
        ForfaitPageComponent,
        ForfaitOneComponent,
        ForfaitTwoComponent,
        ForfaitThreeComponent,
        ForfaitFourComponent,
        ContactPageComponent,
    ],
    imports: [AppMaterialModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
