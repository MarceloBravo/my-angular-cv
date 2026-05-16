import { Injectable } from '@angular/core';
import { CredentialInterface } from '../../interface/credential-interface';
// @ts-ignore
import { credentials } from '../../data/credentials';

@Injectable({
  providedIn: 'root',
})
export class Credentials {
  
  getCredentials(): CredentialInterface[] {
    return credentials;
  }
}