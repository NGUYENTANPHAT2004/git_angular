import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Iproduct } from '../../interface/Product';
import { UserService } from '../user.service';
import { User } from '../../interface/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  productform : FormGroup;
  constructor(private service : UserService,private router: Router,private fb:FormBuilder){
     this.productform = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6)]],
     });
  }
  Onsubmit() :void {
    if(this.productform.valid){
    this.service.UserLogin(this.productform.value as User).subscribe(data=>{
        alert("đăng nhập thành công")
        this.router.navigate(['']);
    }, err => {
      alert(err.error)
    })
    }
  }
}
