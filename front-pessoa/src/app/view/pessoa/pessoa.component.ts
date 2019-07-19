import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from 'src/app/model/pessoa';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';




@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[];
  form: FormGroup;

  displayedColumns: string[] = ['codigo', 'nome', 'ativo', 'ações'];



  constructor(private pessoaService: PessoaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.loadData();
  }

  loadData() {
    this.pessoaService.getPessoas().subscribe(success => {
      this.pessoas = success;
    });
  }

  private newForm() {
    this.form = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      ativo: new FormControl('', [Validators.required]),
    });
  }

  addEmployee(): void {

  }

  salvar(): void {

  }

  delete(): void {

  }

  edit(): void {

  }

}
