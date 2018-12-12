import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoaderService } from '../core/loader/loader.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  isClassVisible: Boolean = false;
  isSubmitted: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private af: AngularFireDatabase,
    private loaderService: LoaderService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      comment: ['']
    });
  }

  onSubmit() {
    this.isClassVisible = true;
    const { name, email, subject, message, comment } = this.form.value;
    const date = Date();
    const formRequest = { name, email, subject, message, date };
    // honeypot field must be empty
    if ('' === comment) {
      this.af.list('/messages').push(formRequest);
    }

    this.form.reset();
    this.isSubmitted = true;
  }

  ngOnInit() {
  }


  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
