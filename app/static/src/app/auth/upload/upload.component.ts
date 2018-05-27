import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
const URL = 'http://localhost:5000/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  constructor(private loginService: LoginService, private http: HttpClient, private el: ElementRef) { }

  par_seq_list:any[]=[];
  msg: string;

  ngOnInit() {
    this.call_initially();
  }

  call_initially(){
    console.log("hello: ");
    this.loginService.get_data_for_upload().then((user) => {
      console.log(user["data"]+" "+user['max_ser']);
      for (var i=0;i<user["data"].length;i++){
        var tmp=[];
        tmp.push(user["data"][i]);
        tmp.push(user["max_ser"][i]);
        this.par_seq_list.push(tmp);
      }
      console.log(this.par_seq_list);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fill_field(){
    console.log("kalsjda");
    let inputE5: HTMLInputElement = this.el.nativeElement.querySelector('#parent');
    console.log(inputE5.value);
    let idx =0;
    for(var i=0;i<this.par_seq_list.length;i++){
      if(this.par_seq_list[i][0] == inputE5.value) {
        idx = i;
        console.log(i);
        break;
      }
    }
    var max_seq = +this.par_seq_list[idx][1];
    console.log(max_seq);
    this.msg = ""+(max_seq+1);
  }

  upload() {
    alert("ajsd");
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#fileupload');
    let inputE2: HTMLInputElement = this.el.nativeElement.querySelector('#itemName');
    let inputE3: HTMLInputElement = this.el.nativeElement.querySelector('#description');
    let inputE4: HTMLInputElement = this.el.nativeElement.querySelector('#category');
    let inputE5: HTMLInputElement = this.el.nativeElement.querySelector('#parent');
    let inputE6: HTMLInputElement = this.el.nativeElement.querySelector('#seq');
    let inputE7: HTMLInputElement = this.el.nativeElement.querySelector('#author');

    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
        formData.append('item_raw', inputEl.files.item(0));
        formData.append('name',inputE2.value);
        formData.append('description',inputE3.value);
        formData.append('category',inputE4.value);
        formData.append('parent',inputE5.value);
        formData.append('seq',inputE6.value);
        formData.append('author',inputE7.value);

        this.http.post(URL,formData).map((res: Response)=>res.json()).subscribe(
          (success)=>{
              console.log(success);
          },
          (error)=>{
            console.log(error);
          }
        );
      }
  }

}
