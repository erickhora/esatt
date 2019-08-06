import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Reference } from '../models/reference.model';

@Injectable({ providedIn: 'root' })
export class ReferencesService {
  private references: Reference[] = [];

  constructor(private http: HttpClient) {}

  // POST Uma referência
  postReference(name: string, content: File, creator: string) {
    const referenceData = new FormData();
    referenceData.append('name', name);
    referenceData.append('content', content, name);
    referenceData.append('creator', creator);
    this.http
      .post<{ message: string; reference: Reference }>(
        'http://localhost:3000/api/references',
        referenceData
      )
      .subscribe(responseData => {
        const reference: Reference = {
          id: responseData.reference.id,
          name: responseData.reference.name,
          content: responseData.reference.content,
          creator: responseData.reference.creator
        };
        this.references.push(reference);
      });
  }
}
