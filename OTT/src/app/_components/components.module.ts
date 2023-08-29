import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component'

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class ComponentsModule { }
