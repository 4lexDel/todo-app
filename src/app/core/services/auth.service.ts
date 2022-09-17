import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, interval, map, Observable, Subject, take, takeUntil, tap, switchMap, lastValueFrom } from 'rxjs';
import { AuthInformation } from '../models/authInformation.model';
import { LoginResponse } from '../models/loginResponse';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {          //Voir ==> https://openclassrooms.com/fr/courses/7471271-completez-vos-connaissances-sur-angular/7549541-securisez-vos-requetes
    // domainName: string = "https://todo-api.delalex.repl.co/api";
    domainName: string = "https://todo-api.delalex.repl.co/api";
    private token = '';
    private userId = -1;

    constructor(private http: HttpClient, private router: Router) { 
    }

    getDomainName(): string{
        return this.domainName;
    }

    getToken(): string {
        return this.token;
    }

    async login(informations: AuthInformation): Promise<string> {
        // var source$ = this.http.post<LoginResponse>(`${this.domainName}/login`, informations);

        // var response = await lastValueFrom(source$);

        // console.log(response);
        // this.token = response.token;
        // console.log(`Token : ${this.token}`);

        // this.userId = response.userId;
        // console.log(`UserID : ${response.userId}`)

        // if(this.token){
        //     this.router.navigateByUrl('/todo');
        // }
        return new Promise(async(resolve, reject) => {
            var source$ = this.http.post<LoginResponse>(`${this.domainName}/login`, informations).subscribe(
                (response) => {
                    console.log(response.token);
                    this.token = response.token;
                    this.userId = response.userId;
                    this.router.navigateByUrl('/todo');
                    resolve("Success !");
                },
                (err) => {
                    console.log(err.error.error);
                    resolve(err.error.error);
                }
            );
            // const response = await lastValueFrom(source$);
        });
    }

    async register(informations: AuthInformation): Promise<string> {
        return new Promise(async(resolve, reject) => {
        this.http.post<any>(`${this.domainName}/register`, informations).subscribe(
            (response) => {
                console.log(response);
                this.router.navigateByUrl('/auth/login');       
                resolve(response);
            },
            (err) => {
                console.log(err.error.error);
                resolve(err.error.error);
            }
        );
    });
    }

    test(){
        //console.log(this.token);
        //this.authHeader.set("Authorization", `Bearer ${this.token}`);
               
        this.http.get(`${this.domainName}/test`).subscribe((val) => {
            console.log(val);
        }
        );
    }

    logout(){
        this.token = "";
        this.userId = -1;
    }
}
