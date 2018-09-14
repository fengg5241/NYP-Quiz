import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://5b953c0f4f35ad001474dbe3.mockapi.io/book').subscribe(data => {
      this.books = data;
    });
  }

  doNav(){
    alert(1);
  }

  selectedCategory='';
  categories:Object[] = [{id:1,name:"easy"},{id:2,name:"middle"},{id:3,name:"hard"}]

  getSelectedCategory(){
    alert(this.selectedCategory);

  }

}
