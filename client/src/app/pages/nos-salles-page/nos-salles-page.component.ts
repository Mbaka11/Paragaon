import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nos-salles-page',
    templateUrl: './nos-salles-page.component.html',
    styleUrls: ['./nos-salles-page.component.scss'],
})
export class NosSallesPageComponent implements OnInit {
    imagePaths: string[] = [];
    constructor() {}

    ngOnInit(): void {
        const imageFileNames = [];

        for (let i = 1; i <= 17; i++) {
            const imageName = `IMG_${i}.jpeg`;
            imageFileNames.push(imageName);
        }
        this.imagePaths = imageFileNames.map((fileName) => `../../../assets/images/salle/${fileName}`);
    }
}
