import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpeechAiService {
  constructor(private http: HttpClient) {}

  getSpeechInput(): Promise<string> {
    return new Promise((resolve, reject) => {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      if (!SpeechRecognition) return reject('SpeechRecognition not supported');
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onresult = (event: any) => resolve(event.results[0][0].transcript);
      recognition.onerror = (event: any) => reject(event.error);
      recognition.start();
    });
  }

  getAiPrefill(transcript: string, formData: any): Observable<any> {
    return this.http.post('/api/prefill', { transcript, formData });
  }
}