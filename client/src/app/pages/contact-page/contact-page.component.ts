import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements AfterViewInit {
    ngAfterViewInit() {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);
    }
}
