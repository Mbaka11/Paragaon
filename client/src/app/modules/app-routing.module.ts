import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForfaitPageComponent } from '@app/pages/forfait-page/forfait-page.component';
import { MainPageComponent } from '@app/pages/main-page/main-page.component';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    { path: 'material', component: MaterialPageComponent }, // TODO: enlever cette page
    { path: 'forfaits', component: ForfaitPageComponent },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
