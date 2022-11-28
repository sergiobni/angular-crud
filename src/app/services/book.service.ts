import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

const baseUrl = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  // getAll(): Observable<Book>[] {
  //   return this.http.get<Book[]>(baseUrl);
  // }
  // get(id: any): Observable<Book>[] {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
  // create(data: any): Observable<any>[] {
  //   return this.http.post(baseUrl, data);
  // }
  // update(id: any): Observable<any>[] {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // delete(id: any): Observable<any>[] {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  // deleteAll(): Observable<any>[] {
  //   return this.http.delete(baseUrl);
  // }
  // findBytitle(title: any): Observable<Book>[] {
  //   return this.http.get<Book[]>(`${baseUrl}?title=${title}`);
  // }
}
