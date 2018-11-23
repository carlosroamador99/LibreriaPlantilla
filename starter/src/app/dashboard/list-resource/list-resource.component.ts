import { Component, OnInit } from '@angular/core';
import { RecursosService } from 'src/app/service/recursos.service';
import { ResourceResponse } from 'src/app/interfaces/resource-response.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss']
})
export class ListResourceComponent implements OnInit {
  rows=[];
  dataSource: ResourceResponse[];

  constructor(private recursoService:RecursosService, private titleService: Title) { }

  ngOnInit() {
    this.getResources();
    this.titleService.setTitle('Aportaciones');
  }

  getResources(){
    this.recursoService.getAllRecursos().subscribe( recursos => {
      this.dataSource = recursos;
    }, error => {
      console.log(error);
    });
  }


}
