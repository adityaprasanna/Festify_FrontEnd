import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AuthenticationService} from 'src/app/authentication.service';
import {Router} from '@angular/router';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})


export class PaymentComponent implements OnInit {

  @ViewChild('form') form: ElementRef;

  mobile: any;
  email: any;
  firstName: any;
  lastName: any;
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
  paymentHandler: object;
  festDetails: any;
  currentfestID: any;
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
    this.festDetails = JSON.parse(localStorage.getItem('festDetails'));
    this.currentfestID = JSON.parse(localStorage.getItem('festID')) - 1;
    this.authenticationService.getIP()
      .subscribe(data => {
        ipData = JSON.stringify(data);
        localStorage.setItem('ip', ipData);
      });

    // var response = {
    //   PG_TYPE: "AXISPG"
    // addedon: "2019-03-23 00:36:01"
    // address1: ""
    // address2: ""
    // amount: "250.00"
    // amount_split: "{"PAYU":"250.0"}"
    // bank_ref_num: "484457"
    // bankcode: "VISA"
    // cardhash: "This field is no longer supported in postback params."
    // cardnum: "401200XXXXXX1112"
    // city: ""
    // country: ""
    // discount: "0.00"
    // email: "swapnilaryan.nitdgp@gmail.com"
    // encryptedPaymentId: "A2A0F445FF61EE88667914758753F4E7"
    // error: "E000"
    // error_Message: "No Error"
    // field1: "484457"
    // field2: "475464"
    // field3: "20190323"
    // field4: "MC"
    // field5: "720909193015"
    // field6: "00"
    // field7: "0"
    // field8: "3DS"
    // field9: " Verification of Secure Hash Failed: E700 -- Approved -- Transaction Successful -- Unable to be determined--E000"
    // firstname: "Swapnil "
    // furl: "https://www.festify.in/django/api/payment/Failure/"
    // hash: "f851b245c11cbe41aff9afbfda77760100c8bf48ef881d8d8d85db2e5a5aa1eed869147a846e617abfb502f8a3119d0d2cc8d88a67f37f4e43365c3ba92d0fd2"
    // isConsentPayment: "0"
    // key: "mEbZSxM6"
    // lastname: ""
    // mihpayid: "296949"
    // mode: "CC"
    // name_on_card: "test"
    // net_amount_debit: "250"
    // payuMoneyId: "551522"
    // phone: "09593307321"
    // productinfo: "Ticket Price"
    // state: ""
    // status: "success"
    // surl: "https://www.festify.in/django/api/payment/Success/"
    // txnMessage: "Transaction Successful"
    // txnStatus: "SUCCESS"
    // txnid: "3eb5e2c42f63d88b228bae3d0924c8bf"
    // udf1: ""
    // udf2: ""
    // udf3: ""
    // udf4: ""
    // udf5: ""
    // udf6: ""
    // udf7: ""
    // udf8: ""
    // udf9: ""
    // udf10: ""
    // unmappedstatus: "captured"
    // zipcode: ""}

    this.paymentHandler = {
      responseHandler: (resp) => {
        console.log('bolt---------------', resp);
        // navigate(['/festDetails', id]);
        const successData = {
          fname: resp.response.firstname,
          lname: resp.response.lastname,
          email: resp.response.email,
          phone: resp.response.phone,
          fest: this.festDetails[this.currentfestID].fest_name,
          event: this.eventData.event_name,
          price: resp.response.net_amount_debit,
          tid: resp.response.txnid
        };
        this.router.navigate(['/success/', JSON.stringify(successData)]);
        // your payment response Code goes here, BOLT is the response object
      },
      catchException: (err) => {
        console.log('bolt+++++++', err);
        // the code you use to handle the integration errors goes here
      }
    };
  }


  ngOnInit() {
  }


  onKeyDown(e) {
    const charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    } else {
      if (this.mobile != undefined && (this.mobile.trim()).length > 9) {
        return false;
      } else {
        return true;
      }

    }
  }

  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.email).toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  confirm(profile: string) {
    if (this.mobile != undefined && this.email != undefined && this.firstName != undefined && this.lastName != undefined) {
      const credentials = {
        mobile: this.mobile,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName
      };
      if (this.validateEmail()) {
        this.authenticationService.paymentDeatailsUser(credentials).subscribe(data => {
          if (data[0]) {
            this.MERCHANT_KEY = data[0].MERCHANT_KEY;
            this.hash_string = data[0].hash_string;
            this.hash = data[0].hashh;
            this.posted = data[0].posted;
            this.txnid = data[0].txnid;
            this.posted.amount = data[0].posted.amount;
            this.posted.firstname = data[0].posted.firstname;
            this.posted.email = data[0].posted.email;
            this.posted.phone = data[0].posted.contact;
            this.posted.productinfo = data[0].posted.productinfo;
            this.posted.surl = data[0].posted.surl;
            this.posted.furl = data[0].posted.furl;
            this.posted.lastname = data[0].posted.lastname;
            this.posted.address1 = data[0].posted.address1;
            this.posted.address2 = data[0].posted.address2;
            this.posted.city = data[0].posted.city;
            this.posted.state = data[0].posted.state;
            this.posted.country = data[0].posted.country;
            this.posted.zipcode = data[0].posted.zipcode;
            this.posted.udf1 = data[0].posted.udf1;
            this.posted.udf2 = data[0].posted.udf2;
            this.posted.udf3 = data[0].posted.udf3;
            this.posted.udf4 = data[0].posted.udf4;
            this.posted.udf5 = data[0].posted.udf5;
            this.posted.PG = data[0].posted.PG;

            //   setTimeout(() => {
            //     this.submitForm();
            // }, 1000);
            //data[0].posted.amount,
            const boltRequestData = {
              key: data[0].MERCHANT_KEY,
              txnid: data[0].txnid,
              hash: data[0].hashh,
              amount: 100,
              firstname: data[0].posted.firstname,
              email: data[0].posted.email,
              phone: data[0].posted.contact,
              productinfo: data[0].posted.productinfo,
              surl : data[0].posted.surl,
              furl: data[0].posted.furl
            };

            if (window['bolt']) {
              window['bolt'].launch(boltRequestData, this.paymentHandler);
            } else {
              alert('Payment intiation error, please try agiain!');
            }

          } else {
            alert('payment is unSuccessfull');
          }
        });
      } else {
        alert('Please give right email Address');
      }

    } else {
      alert('Please give  proper value');
    }

  }

  cancel() {
    this.router.navigate(['userdashboard']);
  }

  submitForm() {
    this.form.nativeElement.submit();
  }

}


