import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule]

@NgModule({
  declarations: [],
  exports: modules,
})
export class MaterialModule {}
