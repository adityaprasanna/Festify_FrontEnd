import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})


export class RegistrationComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  loading = false;
  
  public version = VERSION.full;
  mydataURL: any;
 
  constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      org_category: ['', [Validators.required]],
      org_id: ['', [Validators.required]],
      org_password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      image: new FormControl(null, [Validators.required]),
      address: ['', [Validators.required]],
      description: ['', [Validators.required]],
      website: ['', [Validators.required]],
      main_coordinator_name: ['', [Validators.required]],
      main_coordinator_phone: ['', [Validators.required,Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      main_coordinator_email: ['', [Validators.required]],
      sub_coordinator_name: ['', [Validators.required]],
      sub_coordinator_phone: ['', [Validators.required,Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      sub_coordinator_email: ['', [Validators.required]],
      // team: ['', [Validators.required]],
      // manager_name: ['', [Validators.required]],
      // manager_phone: ['', [Validators.required,Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
      recaptchaReactive: new FormControl(null,[Validators.required])
    });
  }

  // convenience getter for easy access to form fields
  get r() { 
    return this.registerForm.controls; 
  }

  onPaymentSubmit(){}

  fileChange(e) {
    var myCanvas = <HTMLCanvasElement> document.getElementById('mycanvas');
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.onload = function(){
        myCanvas.width = img.width;
        myCanvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        //console.log(myCanvas.toDataURL('image/jpeg'));
     };
    
     img.src = URL.createObjectURL(e.target.files[0]);
     var dataURL = myCanvas.toDataURL('image/jpeg');
     dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

 

  onRegistrationSubmit() {
    this.submitted = true;
    var myCanvas = <HTMLCanvasElement> document.getElementById('mycanvas');
    this.mydataURL=myCanvas.toDataURL('image/jpeg');
    for (let item in this.registerForm.value) {
      if (item == "image") {
        this.registerForm.value[item] = this.mydataURL;
      }
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      // alert("Please enter 10 digit mobile no and Filled all values properly");
      return;
    } else {
      this.appService.createOrganization(this.registerForm)
      .subscribe(data => {
        console.log(data, this.registerForm.value);
          if (data) {
            // this.router.navigate(['home']);
            // 1st solution
            // alert('You are registered! Please login to continue now. ');
            // $('#myModal2').modal('show');
            const postParams = {
              value: {
                email: this.registerForm.value.org_id,
                password: this.registerForm.value.org_password
              }
            };
            this.appService.organizationLogin(postParams).subscribe(
              resp => {
                if (resp) {
                  sessionStorage.setItem('currentUserId', JSON.stringify(postParams.value));
                  sessionStorage.setItem('currentUser', JSON.stringify(resp));
                  this.router.navigate(['orgdashboard']);
                }
              });
          } else {
            // alert('Registration Successful');
            this.router.navigate(['organization-dashboard']);
            this.registerForm.reset();
          }
        });
    }
  }
}

