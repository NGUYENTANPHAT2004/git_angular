import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iproduct } from '../../interface/Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
Products : Iproduct[] = [];
productId?: string;
  productform : FormGroup;
  constructor(private service : ProductService,private router: Router,private fb:FormBuilder,private  route : ActivatedRoute){
     this.productform = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      image: ['',[Validators.required]],
      price: ['',[Validators.required,Validators.min(1)]],
      desc: ['',[Validators.required]],
      quality: ['',[Validators.required,Validators.min(1)]]
     });
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.service.Get_Product_By_ID(this.productId).subscribe(product => {
        this.productform.setValue({
          name: product.name,
          quality: product.quality,
          price: product.price,
          desc: product.desc,
          image : product.image
        });
      });
    }
  }
  Onsubmit():void{
    if(this.productform.valid && this.productId){
     this.service.Update_Product(this.productId,this.productform.value as Iproduct).subscribe(data=>{
       alert("sửa thành công");
       this.router.navigate([''])
     })
    }
  }
}
