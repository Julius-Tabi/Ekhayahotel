import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';
import { Directive,Input } from '@angular/core';

@Directive({
    selector: '[isLessthanCheckin]',
    providers:[{provide: NG_VALIDATORS, useExisting:'EndDateValidatorDirective',multi:true}],

})

export class EndDateValidatorDirective implements Validators
{
    @Input('isLessthanCheckin') shouldbeless:any;
    validate(control: AbstractControl): { [key: string]: any } | null{
        console.log(this.shouldbeless);
        console.log(control.value);
        const sdate = new Date(this.shouldbeless);
        const edate = new Date(control.value);
        
        console.log((sdate > edate) ? { 'StartDateIsMore': true } : null);
        return (sdate > edate) ? { 'StartDateIsMore': true } : null;
    
    }

}