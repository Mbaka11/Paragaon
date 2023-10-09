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
        this.changeHoverButton(1);
    }
    changeForfait2() {
        this.isForfait1 = false;
        this.isForfait2 = true;
        this.isForfait3 = false;
        this.isForfait4 = false;
        this.changeHoverButton(2);
    }
    changeForfait3() {
        this.isForfait1 = false;
        this.isForfait2 = false;
        this.isForfait3 = true;
        this.isForfait4 = false;
        this.changeHoverButton(3);
    }
    changeForfait4() {
        this.isForfait1 = false;
        this.isForfait2 = false;
        this.isForfait3 = false;
        this.isForfait4 = true;
        this.changeHoverButton(4);
    }

    changeHoverButton(btnNumber: number) {
        const element = document.getElementById(`btn-${btnNumber}`);
        element?.classList.add('btn-hover');

        for (let i = 1; i < 5; i++) {
            if (i !== btnNumber) {
                const otherElement = document.getElementById(`btn-${i}`);
                otherElement?.classList.remove('btn-hover');
            }
        }
    }
}
