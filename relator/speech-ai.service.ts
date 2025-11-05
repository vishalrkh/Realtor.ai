import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SpeechAiService {
  constructor(private http: HttpClient) {}

  // Convert speech to text (browser-side)
  getSpeechInput(): Promise<string> {
    return new Promise((resolve, reject) => {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onresult = (event: any) => resolve(event.results[0][0].transcript);
      recognition.onerror = (event: any) => reject(event.error);
      recognition.start();
    });
  }

  // Send transcript + form data for AI prefill
  getAiPrefill(transcript: string, formData: any) {
    return this.http.post('/api/prefill', { transcript, formData });
  }
}