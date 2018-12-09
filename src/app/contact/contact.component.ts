import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../core/loader/loader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

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
