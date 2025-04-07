import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "@danielmoncada/angular-datetime-picker";

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
} )
export class AppComponent {
  public datesOnlyModel: Date[] = [ new Date(), new Date() ];
  public myForm = new FormGroup( {
    datesOnlyFormControl: new FormControl( [ null, null ] ),
    datesWithModelAndFormControl: new FormControl( [ null, null ] )
  } )
  public title = 'date-time-picker-issue';
}
