import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpendingdApi {
    apiUrl = 'https://covid19checking.com/api/';

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    //DebtCharge

    getAllDebtCharges(): Observable<any> {
        return this.http.get<any>(this.apiUrl + 'DebtCharge');
    }

    getDebtCharge(id: number): Observable<any> {
        return this.http.get<any>(this.apiUrl + 'DebtCharge/detail/' + id);
    }

    externalLogin(provider: string, token: string) {
        return this.http.post(this.apiUrl + 'Account/ExteralLogin', { provider: provider, token: token });
    }

}