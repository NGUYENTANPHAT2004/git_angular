import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iproduct } from '../../interface/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  Products : Iproduct[] = [];
  productform : FormGroup;
  constructor(private service : ProductService,private router: Router,private fb:FormBuilder){
     this.productform = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      image: ['',[Validators.required]],
      price: ['',[Validators.required,Validators.min(1)]],
      desc: ['',[Validators.required]],
      quality: ['',[Validators.required,Validators.min(1)]]
     });
  }
  Onsubmit():void{
    if(this.productform.valid){
     this.service.add_Product(this.productform.value as Iproduct).subscribe(data=>{
       this.Products.push(data);
       alert("thêm thành công");
       this.router.navigate([''])
     })
    }
  }
}
