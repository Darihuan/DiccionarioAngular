import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {isLogged, Token, User} from "../../dictionaryAdmin/model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private usersApi: String;
  private islogged: boolean = false;


  constructor(private http: HttpClient) {
    this.usersApi = environment.usersApi;
  }

  public register(user: User): Observable<Token> {

    return this.http.post<Token>(this.usersApi + "register", user);

  }

  public login(user: User): Observable<Token> {

    return this.http.post<Token>(this.usersApi + "login", user);

  }

  public isLogged(token: Token): Observable<isLogged> {
    let jwt = "Bearer " + token.token;
    return this.http.get<isLogged>(this.usersApi + "isLogged", {headers:{'authorization':jwt}});

  }
}
