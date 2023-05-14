import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})
export class PublicHomeComponent implements OnInit {

  ngOnInit(): void {
    const l = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, neque eum consequatur odit, nihil suscipit corporis atque voluptate fugiat provident nam nobis amet mollitia quaerat facere in officiis praesentium deserunt?`;
    console.log(l.length);
  }

}
