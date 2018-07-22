import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public resOut: Observable<any>;
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();

  constructor( private http: HttpClient) { }

  public notifyOther(data: any) {
    if(data) {
      this.notify.next(data);
    }
  }
 
  getDetails(key: String, pathFlow: any, urlParam: string): Observable<any> {

    let callUrl = '/assets/';
    
    return  (key === 'LOB' ? this.http.get(callUrl+'lob.json')            : 
            (key === 'MNEMONIC' ? this.http.get(callUrl+'mnemonic.json')  :
            (key === 'DATABASE' ? this.http.get(callUrl+'database.json')  :
            (key === 'INSTANCE' ? this.http.get(callUrl+'instance.json')  :
            this.http.get(callUrl+'lob.json')
    ))));
                    

    // switch(key) {
    //   case 'LOb':
    //     this.resOut = this.http.get(callUrl+'lob.json');
    //   break;
    //   case 'MNEMONIC':
    //     this.resOut = this.http.get(callUrl+'mnemonic.json');  
    //   break;
    //   case 'DATABASE':
    //     this.resOut = this.http.get(callUrl+'database.json');
    //   break;
    //   case 'INSTANCE':
    //     this.resOut = this.http.get(callUrl+'instance.json');
    //   break;
    //   default:
    //   break;
    // }

    //  return this.resOut;
  
    // return this.http.get(callUrl+'lob.json');

  }
  

}
