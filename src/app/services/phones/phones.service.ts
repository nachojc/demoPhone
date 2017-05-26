import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Phone } from './phone';



@Injectable()
export class PhoneService {
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private URL = "http://localhost:4001/api/v1/phones/";

	constructor(private http: Http) { }

	getPhones(): Promise<Phone[]> {
		return this.http.get(this.URL)
			.toPromise()
			.then(response => response.json() as Phone[])
			.catch(this.errorService);
	}

getPhone(id:number): Promise<Phone> {
		return this.http.get(`${this.URL}${id}`)
			.toPromise()
			.then(response => response.json() as Phone)
			.catch(this.errorService);
	}


	private errorService(error: any): Promise<any> {

		return Promise.reject(error.message || error);
	}

}