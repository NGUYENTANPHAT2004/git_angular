import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Iproduct } from '../../interface/Product';
import { UserService } from '../user.service';
import { User } from '../../interface/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  productform : FormGroup;
  constructor(private service : UserService,private router: Router,private fb:FormBuilder){
     this.productform = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6)]],
     });
  }
  Onsubmit() :void {
    if(this.productform.valid){
    this.service.RegisterUser(this.productform.value as User).subscribe(data=>{
        alert("đăng kí thành công")
        this.router.navigate(['login']);
    }, err => {
      alert(err.error)
    })
    }
  }
}
