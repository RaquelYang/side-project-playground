import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'side-project-playground';

    ngOnInit(): void {
        const a = 123;
        const ab = 123;
    }
}
