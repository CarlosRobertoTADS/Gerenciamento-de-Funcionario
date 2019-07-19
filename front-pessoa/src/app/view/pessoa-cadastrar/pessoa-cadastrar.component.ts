import { PessoaService } from './../../services/pessoa.service';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastarComponent implements OnInit {
  pessoas: Pessoa[];
  form: FormGroup;

  constructor(private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.newForm();
    this.loadData();
  }

  loadData() {
    this.pessoaService.getPessoas().subscribe(success => {
      this.pessoas = success;
    });
  }

  private newForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      status: new FormControl([Validators.required]),
    });
  }



  save(): void {

    let nome = this.form.get('name').value;
    let stat = this.form.get('status').value;
    console.log(stat);
    let pessoa = [nome, stat];
    this.pessoaService.addPessoa(pessoa).subscribe(success => {

      this.redirecTo();
    }, error => {
      console.log("SaveUpdate.error:" + JSON.stringify(error));

    });
  }

  private redirecTo(): void {
    this.router.navigate(['']);
  }




}
