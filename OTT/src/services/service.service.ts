import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user: any;
  url: string;
  constructor(
    public http: HttpClient,
    private config: ConfigService,
  ) { }


  getconfig() {
    return new Promise(resolve => {
      this.http.get(this.config.url + 'getconfig.php').pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  signup(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'signup.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  login(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'login.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Appointment(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'latest_appointment.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Forecast(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'getforecast.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Userdetail(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'getuserdetail.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  profileEdit(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'edit_profile.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  addapoint(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'add_appointment.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  addforecast(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'addforecast.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

 updateforecast(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'editforecast.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Deleteforecast(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'delete_forcast_customer.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  forgotemail(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'forgotpassword.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  addto_do(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'addto_do.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  getbrnds() {
    return new Promise(resolve => {
      this.http.get(this.config.url + 'getbrands.php').pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  getcostomer() {
    return new Promise(resolve => {
      this.http.get(this.config.url + 'getcustomer.php').pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  getto_do(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'getto_do.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  changepswd(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'changepass.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  AppoinmentDelet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'delete_appointment.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  EditAppoint(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'edit_appointment.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  todoDelet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'delete_todo.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Edittodo(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'edit_todo.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  changetatus(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'statuschange.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }



}
