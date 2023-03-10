import { Component, OnInit } from '@angular/core';
import { StrategyMapsService } from '../../../service/strategy-maps/strategy-maps.service';
import { Global } from '../../../api/global';
import { StrategyMaps } from '../../../interface/strategy-maps';
import { first } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  url: string;
  comments: any
  commentPane: boolean = false 
  notifications: number = 0;

 
	
  constructor(
		private strategyMapsService: StrategyMapsService
	) {
		this.url = Global.url;
	}

  ngOnInit(): void {
		this.getComments()
	}
	public getComments() {
		this.strategyMapsService
			.get(this.url)
			.pipe(first())
			.subscribe(response => {
				const parseResponse: StrategyMaps = new Object(response) as StrategyMaps;
				this.comments = parseResponse.comments
        this.notifications = parseResponse.comments.length
				console.log('holaa',parseResponse.comments.length)
			});
	}


  showComment(){
    this.commentPane = !this.commentPane
  }


}
