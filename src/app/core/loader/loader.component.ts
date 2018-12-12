import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderState, LoaderService } from './loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  visible = false;

  private loaderStateChanged: Subscription;
  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderStateChanged = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.visible = state.show;
      });
  }

  ngOnDestroy() {
    this.loaderStateChanged.unsubscribe();
  }

}
