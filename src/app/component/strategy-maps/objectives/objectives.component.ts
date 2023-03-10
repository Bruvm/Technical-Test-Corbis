import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { first } from 'rxjs';
import { Global } from 'src/app/api/global';
import { StrategyMaps, Objective } from 'src/app/interface/strategy-maps';
import { StrategyMapsService } from '../../../service/strategy-maps/strategy-maps.service';


@Component({
	selector: 'app-objectives',
	templateUrl: './objectives.component.html',
	styleUrls: ['./objectives.component.scss'],
	
})

export class ObjectivesComponent implements OnInit {
	public url!: string;
	public page = 1;
	public pageSize = 3
	public collectionSize: number = 0


	objectives: Objective[] = []

	constructor(
		private strategyMapsService: StrategyMapsService
	) {
		this.url = Global.url;
	}
	ngOnInit() {
		this.getObjectives()
	}

	public getObjectives() {
		this.strategyMapsService
			.get(this.url)
			.pipe(first())
			.subscribe(response  => {
				const parseResponse: StrategyMaps = new Object(response) as StrategyMaps;
				this.objectives = parseResponse.objectives
				this.collectionSize = parseResponse.objectives.length
			});
	}



}



