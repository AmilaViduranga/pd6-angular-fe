/**
 * Created by Amila on 6/27/2017.
 */
import { Component, OnInit} from '@angular/core';
import { BankInformations } from '../../../Services/BankInformationService/app.bank.information.service';
import Bank from '../../../Models/AppStateInformations/app.model.bank';
import BankBranches from '../../../Models/AppStateInformations/app.model.branches';
import store from '../../../Models/app.modeldata.store.main';

@Component({
  selector: 'app-bank-info',
  templateUrl: './app.bank.information.component.html',
  styleUrls: ['./app.bank.information.component.css']
})
export class BankInformationComponent implements OnInit {
  bankList: Array<Bank>;
  branches: Array<BankBranches>;
  branchesGratuty: Array<BankBranches>;
  bank: number;
  branch: number;
  bankGratuty: number;
  branchGratuty: number;
  constructor(private bankInfoService: BankInformations) {
    this.bankList = new Array<Bank>();
    this.branches = new Array<BankBranches>();
    this.branchesGratuty = new Array<BankBranches>();
  }

  ngOnInit() {
    this.bank = 0;
    this.branch = 0;
    this.branchGratuty = 0;
    this.bankGratuty = 0;
    this.bankInfoService.getAllBanks().then(result => {
      result['list'].forEach(singleRow => {
        const bank = new Bank();
        bank.name = singleRow.name;
        bank.id = singleRow.id;
        this.bankList.push(bank);
      });
    });
  }

  loadBranches(value) {
    this.branches = [];
    this.bankInfoService.getAllBranches(value).then(result => {
      result['branchs'].forEach(branch => {
        const branchInstance = new BankBranches();
        branchInstance.id = branch.id;
        branchInstance.name = branch.name;
        branchInstance.code = branch.code;
        this.branches.push(branchInstance);
      });
    });
  }

  loadBranchesGratuty(value) {
    this.branchesGratuty = [];
    this.bankInfoService.getAllBranches(value).then(result => {
      result['branchs'].forEach(branch => {
        const branchInstance = new BankBranches();
        branchInstance.id = branch.id;
        branchInstance.name = branch.name;
        branchInstance.code = branch.code;
        this.branchesGratuty.push(branchInstance);
      });
    });
  }
}
