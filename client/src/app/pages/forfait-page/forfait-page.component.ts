import { Component } from '@angular/core';

@Component({
    selector: 'app-forfait-page',
    templateUrl: './forfait-page.component.html',
    styleUrls: ['./forfait-page.component.scss'],
})
export class ForfaitPageComponent {
    isForfait1 = true;
    isForfait2 = false;
    isForfait3 = false;
    isForfait4 = false;

    changeForfait1() {
        this.isForfait1 = true;
        this.isForfait2 = false;
        this.isForfait3 = false;
        this.isForfait4 = false;
    }
    changeForfait2() {
        this.isForfait1 = false;
        this.isForfait2 = true;
        this.isForfait3 = false;
        this.isForfait4 = false;
    }
    changeForfait3() {
        this.isForfait1 = false;
        this.isForfait2 = false;
        this.isForfait3 = true;
        this.isForfait4 = false;
    }
    changeForfait4() {
        this.isForfait1 = false;
        this.isForfait2 = false;
        this.isForfait3 = false;
        this.isForfait4 = true;
    }
}
