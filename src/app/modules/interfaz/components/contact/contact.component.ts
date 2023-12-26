import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public form: FormGroup = this.fb.group({

    name: ['', Validators.required],
    to_name: ['Luz Duhalde'], // Not required
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required] ],
    subject: ['', Validators.required],
    message: ['', Validators.required]

  });


  constructor(private fb: FormBuilder) { }



  send() {
    if (this.form.valid) {
      emailjs.init("ns70nfeFVJxf0LIqz");
      emailjs.send("service_q1cuu0a", "template_di6h9rb", {
        from_name: this.form.value?.name,
        to_name: "Luz Duhalde",
        from_email: this.form.value?.email,
        from_phone: this.form.value?.phone,
        subject: this.form.value?.subject,
        message: this.form.value?.message,
        reply_to: "ccanas.hz@gmail.com"
      });

      alert("El Mensaje ha sido enviado");
      this.form.reset();
    } else {
      alert("Por favor, completa todos los campos obligatorios.");
    }
  }


}



// emailjs.send("service_q1cuu0a","template_di6h9rb",{
//   from_name: "Cristobal",
//   to_name: "Luz Duhalde",
//   from_email: "asd@gmail.com",
//   from_phone: "56950428203",
//   subject: "Asunto",
//   message: "Mensaje largo",
//   reply_to: "ccanas.hz@gmail.com",
//   });