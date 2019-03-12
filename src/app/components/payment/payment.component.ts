import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  @ViewChild('form') form: ElementRef;

  mobile: any;
  email: any;
  firstName:any;
  lastName:any;
  paymentForm: FormGroup;
  eventData: any;
  key: any;
  txnid: any;
  amount: number;
  productinfo: any;
  firstname: any;
  phone: any;
  surl: any;
  furl: any;
  hash: any;
  url: any;
  MERCHANT_KEY: any;
  hash_string: any;
  posted = {
    amount: 0,
    firstname: '',
    email: '',
    phone: '',
    productinfo: '',
    surl: '',
    furl: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    udf1: '',
    udf2: '',
    udf3: '',
    udf4: '',
    udf5: '',
    PG: ''
  };

  constructor(private authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {
    let ipData: any;
    this.eventData = JSON.parse(localStorage.getItem('festPaymentDeatils'));
    this.authenticationService.getIP()
      .subscribe(data => {
        ipData = JSON.stringify(data);
        localStorage.setItem('ip', ipData);
      });
  }


  ngOnInit() {
  }


  onKeyDown(e) {
    var charCode = (e.which) ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    } else {
      if (this.mobile != undefined && (this.mobile.trim()).length > 9) {
        return false;
      }
      else {
        return true;
      }

    }
  }

  validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.email).toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  confirm() {
    if (this.mobile != undefined && this.email != undefined && this.firstName != undefined && this.lastName != undefined) {
      let credentials = {
        mobile: this.mobile,
        email: this.email,
        firstName:this.firstName,
        lastName:this.lastName
      }
      if (this.validateEmail()) {
        this.authenticationService.paymentDeatailsUser(credentials).subscribe(data => {
          if (data[0]) {
            this.MERCHANT_KEY = data[0].MERCHANT_KEY,
              this.hash_string = data[0].hash_string,
              this.hash = data[0].hashh,
              this.posted = data[0].posted,
              this.txnid = data[0].txnid,
              this.posted.amount =data[0].posted.amount,
              this.posted.firstname = data[0].posted.firstname,
              this.posted.email = data[0].posted.email,
              this.posted.phone = data[0].posted.contact,
              this.posted.productinfo = data[0].posted.productinfo,
              this.posted.surl = data[0].posted.surl,
              this.posted.furl = data[0].posted.furl,
              this.posted.lastname = data[0].posted.lastname,
              this.posted.address1 = data[0].posted.address1,
              this.posted.address2 = data[0].posted.address2,
              this.posted.city = data[0].posted.city,
              this.posted.state = data[0].posted.state,
              this.posted.country = data[0].posted.country,
              this.posted.zipcode = data[0].posted.zipcode,
              this.posted.udf1 = data[0].posted.udf1,
              this.posted.udf2 = data[0].posted.udf2,
              this.posted.udf3 = data[0].posted.udf3,
              this.posted.udf4 = data[0].posted.udf4,
              this.posted.udf5 = data[0].posted.udf5,
              this.posted.PG = data[0].posted.PG,
              setTimeout(() => {
                this.submitForm();
                debugger
              }, 1000);
          }
          else {
            alert('payment is unSuccessfull');
          }
        });
      } else {
        alert("Please give right email Address");
      }

    } else {
      alert("Please give  proper value");
    }

  }
  cancel() {
    this.router.navigate(['userdashboard'])
  }
 
  submitForm() {
    this.form.nativeElement.submit();
  }

}


