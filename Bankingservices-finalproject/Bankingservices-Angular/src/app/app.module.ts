import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';
import { ViewComponent } from './view/view.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    WithdrawlComponent,
    ViewComponent,
    ViewdataComponent,
    DeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
