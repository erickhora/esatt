import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-history',
  templateUrl: './latest-history.component.html',
  styleUrls: ['./latest-history.component.css']
})
export class LatestHistoryComponent implements OnInit {
  orcamentos = [
    {
      id: 1,
      user: 'id do usuário',
      name: 'Orçamento 1',
      items: [],
      reference: 'SINAPI',
      lastModified: '25/04/2019'
    },
    {
      id: 2,
      user: 'id do usuário',
      name: 'Orçamento 2',
      items: [],
      reference: 'TCPO',
      lastModified: '20/04/2019'
    },
    {
      id: 3,
      user: 'id do usuário',
      name: 'Orçamento 3',
      items: [],
      reference: 'Próprio',
      lastModified: '15/04/2019'
    },
    {
      id: 4,
      user: 'id do usuário',
      name: 'Orçamento 4',
      items: [],
      reference: 'Customizado',
      lastModified: '10/03/2019'
    }
  ];

  filteredOrcamento = '';

  constructor() { }

  ngOnInit() {
  }

}
