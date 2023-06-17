import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from '@app/pages/contact-page/contact-page.component';
import { ForfaitPageComponent } from '@app/pages/forfait-page/forfait-page.component';
import { InformationsPageComponent } from '@app/pages/informations-page/informations-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { NosSallesPageComponent } from '@app/pages/nos-salles-page/nos-salles-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'informations', component: InformationsPageComponent },
    { path: 'salles', component: NosSallesPageComponent },
    { path: 'material', component: MaterialPageComponent }, // TODO: enlever cette page
    { path: 'forfaits', component: ForfaitPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
