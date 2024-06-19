import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from '../../interface/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  Products : Iproduct[] = [];
  constructor(private service :ProductService){}
  ngOnInit(): void {
  this.fetch();
  }
  fetch () : void {
   this.service.Get_All_Products().subscribe(data =>{
    this.Products = data;
   })
  }
  delete(id:string) : void {
    if(confirm("bạn có muốn xóa")){
    this.service.Delete_Product(id).subscribe(data =>{
      alert("xóa thành công")
      this.fetch();
    })
  }
  }
}
