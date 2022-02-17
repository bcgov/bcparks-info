import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoggerService } from './logger.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public isMS: boolean //IE, edge, etc

  apiPath: string;
  env: 'local' | 'dev' | 'test' | 'prod';

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private logger: LoggerService
  ) {
    this.apiPath = this.configService.config['API_LOCATION']
      + this.configService.config['API_PATH'];
    this.env = this.configService.config['ENVIRONMENT'];
  }

  public getEnvironment(): string {
    return this.env;
  }

  handleError(error: any): Observable<never> {
    let errorMessage = 'Unknown Server Error';

    if (error) {
      if (error.message) {
        if (error.error) {
          errorMessage = `${error.message} - ${error.error.message}`;
        } else {
          errorMessage = error.message;
        }
      } else if (error.status) {
        errorMessage = `${error.status} - ${error.statusText}`;
      }
    }

    this.logger.log(`Server Error: ${errorMessage}`);
    return throwError(error);
  }

  get(pk: any, queryParamsObject: any = null): Promise<any> {
    const queryString = this.generateQueryString(queryParamsObject);
    return this.http.get<any>(`${this.apiPath}/${pk}?${queryString}`, {}).toPromise();
  }

  put(pk: any, obj: any, queryParamsObject = null): Promise<any> {
    const queryString = this.generateQueryString(queryParamsObject);
    // This is not a mistake, we use post to edit in AWS.
    return this.http.post<any>(`${this.apiPath}/${pk}?${queryString}`, obj, {}).toPromise();
  }

  post(pk: any, obj: any, queryParamsObject = null): Promise<any> {
    const queryString = this.generateQueryString(queryParamsObject);
    return this.http.post<any>(`${this.apiPath}/${pk}?${queryString}`, obj, {}).toPromise();
  }

  delete(pk: any, queryParamsObject: any): Promise<any> {
    const queryString = this.generateQueryString(queryParamsObject);
    return this.http.delete<any>(`${this.apiPath}/${pk}?${queryString}`, {}).toPromise();
  }

  private generateQueryString(queryParamsObject: any) {
    let queryString = '';
    if (queryParamsObject) {
      for (const key of Object.keys(queryParamsObject)) {
        queryString += `&${key}=${queryParamsObject[key]}`;
      }
      queryString = queryString.substring(1);
    }
    return queryString;
  }
}
