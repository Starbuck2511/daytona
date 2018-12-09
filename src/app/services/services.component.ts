import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../core/loader/loader.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderService.hide();
    });
  }

  ngOnDestroy() {
    this.loaderService.show();
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
