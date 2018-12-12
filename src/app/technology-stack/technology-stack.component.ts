import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css']
})
export class TechnologyStackComponent implements OnInit, OnDestroy {

  timeoutId: any;

  // array with texts to type in typewriter
  dataText = [
    'Angular.',
    'Ionic.',
    'React.',
    'Typescript.',
    'Vanilla JS.',
    'git.',
    'svn.',
    'MySQL.',
    'MariaDB.',
    'Oracle.',
    'MongoDB.',
    'Jenkins.',
    'Ansible.',
    'Vagrant.',
    'Docker.',
    'PHP5 PHP7.',
    'Symfony.',
    'Composer.',
    'NodeJS.',
    'npm.',
    'gulp.',
    'Webpack.',
  ];

  constructor() {
  }

  ngOnInit() {
    // start the text animation
    this.timeoutId = setTimeout(() => {
      this.startTextAnimation(0);
    }, 3000
    );
  }

  // start a typewriter animation for a text in the this.dataText array
  startTextAnimation(i) {
    if ('undefined' === typeof this.dataText[i]) {
      this.timeoutId = setTimeout(() => {
        this.startTextAnimation(0);
      }, 5000);
    }
    // check if this.dataText[i] exists
    if ('undefined' !== typeof this.dataText[i] && 'undefined' !== typeof this.dataText[i].length) {
      // text exists start typewriter animation
      this.typeWriter(this.dataText[i], 0, () => {
        // after callback (and whole text has been animated), start next text
        this.startTextAnimation(i + 1);
      });
    }
  }

  // keeps calling itself until the text is finished
  typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if ('undefined' !== typeof text && i < (text.length)) {
      // add next character to h1
      document.querySelector('h1.text-animation').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      this.timeoutId = setTimeout(() => {
        this.typeWriter(text, i + 1, fnCallback);
      }, 90);
    } else if (typeof fnCallback === 'function') {
      // call callback after timeout
      this.timeoutId = setTimeout(fnCallback, 1250);
    }
  }

  stopTextAnimations() {
    for (let i = 0; i < this.timeoutId + 100; i++) {
      clearTimeout(i);
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  ngOnDestroy() {
    this.stopTextAnimations();
  }

}
