import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

import { first } from 'rxjs';
import { Global } from 'src/app/api/global';
import { Objective, Perspective, StrategyMaps } from 'src/app/interface/strategy-maps';
import { DecimalPipe, NgFor } from '@angular/common';
import { StrategyMapsService } from '../../../service/strategy-maps/strategy-maps.service';

@Component({
	selector: 'app-perspectives',
	templateUrl: './perspectives.component.html',
	styleUrls: ['./perspectives.component.scss']
})
export class PerspectivesComponent implements OnInit {

	public url!: string;
	public page = 1;
	public pageSize = 2
	public collectionSize: number = 0

	perspectives: Perspective[] = []

	constructor(
		private strategyMapsService: StrategyMapsService
	) {
		this.url = Global.url;
	}
	ngOnInit() {
		this.getPerspective()
	}

	public getPerspective() {
		this.strategyMapsService
			.get(this.url)
			.pipe(first())
			.subscribe(response => {
				const parseResponse: StrategyMaps = new Object(response) as StrategyMaps;
				this.perspectives = parseResponse.perspectives
				this.collectionSize = parseResponse.perspectives.length
				console.log(this.perspectives)
			});
	}

}
