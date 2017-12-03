import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    template: 
    `
        <ul>
        <li><button routerLink="/home">Home</button></li>
        <li><button routerLink="/transfermoney">Transfer</button></li>
        <li><button routerLink="/records">Records</button></li>
        <li><button routerLink="/home">About</button></li>
        </ul>       
    `
})
export class NavBarComponent {
    constructor() {}
        
    
        
}
