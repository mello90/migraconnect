export type Job = {id:number;title:string;company:string;location:string;type:string;remote:boolean;skills:string[];description:string};
export const jobs:Job[]=[
{id:1,title:'Projektassistenz Digitalisierung',company:'Beispielwerk GmbH',location:'Köln',type:'Teilzeit',remote:true,skills:['Organisation','Excel','Kommunikation'],description:'Du unterstützt digitale Projekte, koordinierst Termine und dokumentierst Ergebnisse.'},
{id:2,title:'Mitarbeiterin Kundenservice',company:'Dialoghaus (Demo)',location:'Düsseldorf',type:'Vollzeit',remote:true,skills:['Deutsch B1','Kommunikation','MS Office'],description:'Du beantwortest Anfragen und unterstützt Kundinnen und Kunden.'},
{id:3,title:'Junior UX Research Assistant',company:'Studio Morgen (Demo)',location:'Remote',type:'Teilzeit',remote:true,skills:['Interviews','Recherche','Organisation'],description:'Du hilfst bei Interviews und wertest Erkenntnisse aus.'},
{id:4,title:'Büroorganisation & Empfang',company:'Stadtblick (Demo)',location:'Bochum',type:'Teilzeit',remote:false,skills:['Organisation','Deutsch B1','MS Office'],description:'Du organisierst den Empfang und unterstützt das Büroteam.'},
{id:5,title:'Assistenz im Bildungsbereich',company:'Lernraum (Demo)',location:'Essen',type:'Teilzeit',remote:false,skills:['Kommunikation','Organisation','Sprachen'],description:'Du betreust Kurse und unterstützt Teilnehmende.'}
];
export type Question={q:string;options:string[];correct:number;topic:string;explanation:string};
export const questions:Question[]=[
{q:'Was bedeutet „die Bewerbung“?',options:['Application','Apartment','Appointment','Experience'],correct:0,topic:'Beruf',explanation:'Eine Bewerbung schickst du, wenn du eine Stelle bekommen möchtest.'},
{q:'Welcher Satz ist richtig?',options:['Ich habe gestern gearbeitet.','Ich gestern habe gearbeitet.','Ich habe gearbeitet gestern habe.','Ich arbeiten gestern.'],correct:0,topic:'Grammatik',explanation:'Im Perfekt steht das Partizip meist am Satzende.'},
{q:'Was bedeutet „der Arbeitsvertrag“?',options:['Employment contract','Workplace','Salary','Working hours'],correct:0,topic:'Beruf',explanation:'Im Arbeitsvertrag stehen die Bedingungen deiner Arbeit.'},
{q:'Ergänze: Ich interessiere mich ___ die Stelle.',options:['für','an','mit','zu'],correct:0,topic:'Bewerbung',explanation:'Es heißt: sich interessieren für + Akkusativ.'},
{q:'Was bedeutet „die Erfahrung“?',options:['Experience','Invitation','Education','Permission'],correct:0,topic:'Beruf',explanation:'Berufserfahrung bedeutet Erfahrung aus deiner Arbeit.'},
{q:'Ergänze: Können Sie mir bitte ___?',options:['helfen','hilft','geholfen','helfe'],correct:0,topic:'Alltag',explanation:'Nach „können“ steht der Infinitiv.'},
{q:'Was ist eine „Gehaltsabrechnung“?',options:['Payslip','Job advertisement','Interview','Certificate'],correct:0,topic:'Beruf',explanation:'Sie zeigt dein Gehalt und Abzüge.'},
{q:'Ergänze: Ich freue mich ___ das Gespräch.',options:['auf','mit','aus','von'],correct:0,topic:'Bewerbung',explanation:'Bei einem zukünftigen Ereignis: sich freuen auf.'},
{q:'Was bedeutet „die Weiterbildung“?',options:['Further training','Vacation','Notice period','Contract'],correct:0,topic:'Beruf',explanation:'Eine Weiterbildung hilft dir, zusätzliche Fähigkeiten zu lernen.'},
{q:'Welche Form ist höflich?',options:['Könnten Sie mir das erklären?','Du erklären jetzt!','Erklär!','Ich will Erklärung.'],correct:0,topic:'Alltag',explanation:'„Könnten Sie ...?“ ist eine höfliche Bitte.'}
];
export const interviewQuestions=['Erzählen Sie etwas über sich.','Warum interessieren Sie sich für diese Stelle?','Welche Erfahrungen bringen Sie mit?','Was sind Ihre Stärken?','Haben Sie noch Fragen an uns?'];
