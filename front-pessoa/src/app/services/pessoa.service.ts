import { API } from './../model/ConfigService';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pessoa } from '../model/pessoa';





@Injectable({
  providedIn: 'root'
})


export class PessoaService {

  private url = `${API}/service/pessoa`;



  constructor(private http: HttpClient) {

  }



  /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.url}`);
  }

  /**ADICIONA UMA NOVA PESSOA */
  addPessoa(pessoa: Pessoa[]): Observable<any> {

    return this.http.post<any>(this.url, pessoa);
  }
  /**EXCLUI UMA PESSOA */
  excluirPessoa(codigo: number): Observable<any> {

    return this.http.delete(this.url + codigo);
  }

  /**CONSULTA UMA PESSOA PELO CÓDIGO */
  getPessoa(codigo: number) {

    return this.http.get(this.url + codigo);
  }

  /**ATUALIZA INFORMAÇÕES DA PESSOA */
  atualizarPessoa(pessoa: Pessoa): Observable<any> {

    return this.http.put<Pessoa>(this.url, pessoa);

  }
}
