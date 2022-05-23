import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.less']
})
export class PlatformComponent implements OnInit {
  platforms!: any[]

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        query {
          platform {
            edges {
              node {
                id
                name
              }
            }
          }
        }
        `
      })
      .valueChanges.subscribe((result: any) => {
        this.platforms = result?.data?.platform?.edges;
      })
  }
}
