import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-total-mentors:not(1)',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './total-mentors.component.html',
    styleUrl: './total-mentors.component.scss'
})
export class TotalMentorsComponent {}