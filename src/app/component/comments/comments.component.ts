import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

	public url!: string;
	public genericImage: string = 'https://media.istockphoto.com/id/1273297858/pt/vetorial/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-man-avatar-profile.jpg?s=170x170&k=20&c=eRpUlzBL_K9_gruSyPaH-7xrFxY_VWkfAFURdOhPRVo='

	notifications: string = ''

	@Input() comments: any;

	constructor() { }
 

	ngOnInit(): void {

	}
}

