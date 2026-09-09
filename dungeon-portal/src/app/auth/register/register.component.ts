import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';
import { ReactiveFormsModule, FormBuilder, Validators,ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ImageCropperComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  registerForm!: FormGroup;
  selectedFile: File | null = null;
  imageChangedEvent: any = '';
  croppedImage: string = '';
  avatarBlob: Blob | null = null;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      ageDisclaimer: [false, [Validators.requiredTrue]],
      termsAccepted: [false, [Validators.requiredTrue]]
    }, {
      validators: [this.passwordMatchValidator, this.minimumAgeValidator(18)]
    });

  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {

    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword');

    if (!confirmPassword) return null;

    if (password !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }

    return null;
  }



  get f() {
    return this.registerForm.controls;
  }
  getControl(name: string): AbstractControl | null {
    return this.registerForm.get(name);
  }

  minimumAgeValidator(minAge: number) {
    return (group: AbstractControl): ValidationErrors | null => {
      const birthDate = group.get('birthDate')?.value;
      if (!birthDate) return null;

      const today = new Date();
      const birth = new Date(birthDate);

      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
      }

      return age < minAge ? { underage: true } : null;
    };
  }


  // siteKey = '6LdjXmosAAAAAPHj-rU-_dGMnFfBq4sU6gcTaWDl';
  // captchaToken: string | null = null;
  // captchaInvalid = false;
  //
  // ngOnInit() {
  //   window.addEventListener('captcha-success', (event: any) => {
  //     this.captchaToken = event.detail;
  //     this.captchaInvalid = false;
  //   });
  // }


  onFileSelected(event: any): void {

    const file = event.target.files[0];

    if (!file) return;

    // 🚫 limite 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert('Immagine troppo grande. Massimo 2MB.');
      return;
    }

    // Solo immagini
    if (!file.type.startsWith('image/')) {
      alert('Seleziona un file immagine valido.');
      return;
    }

    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    console.log('Sto croppando - Entrato');
    console.log('EVENT:', event);

    if (event.blob) {
      console.log('Ho il BLOB');

      this.avatarBlob = event.blob;

      // preview
      const reader = new FileReader();
      reader.onload = () => {
        this.croppedImage = reader.result as string;
        console.log('Cropped:', this.croppedImage);
      };
      console.log('Blob: ', event.blob);
      reader.readAsDataURL(event.blob);
    }
  }


  base64ToBlob(base64: string): Blob {

    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  }

  onRegister() {

    if (this.registerForm.invalid) return;

    const formData = new FormData();

    formData.append('email', this.registerForm.value.email);
    formData.append('nickname', this.registerForm.value.nickname);
    formData.append('password', this.registerForm.value.password);
    formData.append('birthDate', this.registerForm.value.birthDate);

    console.log(this.croppedImage);
    // 🔥 QUI USIAMO L'IMMAGINE CROPPATA
    if (this.croppedImage) {
      const blob = this.base64ToBlob(this.croppedImage);
      formData.append('avatar', blob, 'avatar.png');
    }

    // if (this.captchaToken) {
    //   formData.append('captchaToken', this.captchaToken);
    // }

    this.authService.register(formData).subscribe({
      next: res => {
        console.log('Registrazione OK', res);
      },
      error: err => {
        console.error('Errore registrazione', err);
      }
    });
  }
}
