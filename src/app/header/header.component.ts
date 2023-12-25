import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //userdefined event creation
  //@output-to share data from child to parent
 @Output() onMenuBtnClick = new EventEmitter()
  menubtnclicked(){
    //to occure evnt
    this.onMenuBtnClick.emit()

  }
}
