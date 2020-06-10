import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var window: any;

class result  {
    answersChecked: any;
    result: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScormStoreService {

    diapos = [
        {text:"",class:"front-page", menu: false, question: false, page: null},
        {text:"Índex",class:"regular", menu: true, question: false, page: null},
        {text:"Objectius de la formació",class:"regular", menu: true, question: false, page: null},
        {text:"Què és el Covid-19?",class:"regular", menu: true, question: false, page: null},
        {text:"Quins símptomes presenta la malaltia?",class:"regular", menu: true, question: false, page: null},
        {text:"Com es transmet?",class:"regular", menu: true, question: false, page: null},
        {text:"Què hem de fer en cas d’estar contagiat o tenir símptomes?",class:"regular", menu: true, question: false, page: null},
        {text:"Grups vulnerables",class:"regular", menu: true, question: false, page: null},
        {text:"Avaluació de riscos laborals específica COVID 19 i pla de contingències",class:"regular", menu: true, question: false, page: null},
        {text:"Bones pràctiques",class:"regular", menu: true, question: false, page: null},
        {text:"Bones pràctiques",class:"regular", menu: true, question: false, page: null},
        {text:"Bones pràctiques",class:"regular", menu: true, question: false, page: null},
        {text:"Bones pràctiques",class:"regular", menu: true, question: false, page: null},
        {text:"Si presentes símptomes mentre estàs treballant",class:"regular", menu: true, question: false, page: null},
        {text:"Quins equips de protecció individual hem d’usar?",class:"regular", menu: true, question: false, page: null},
        {text:"Males pràctiques en l'ús de mascaretes",class:"regular", menu: true, question: false, page: null},
        {text:"Vídeos de Bones Pràctiques",class:"regular", menu: true, question: false, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: true, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’autoavaluació",class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’autoavaluació",class:"regular", menu: true, question: true, page: null},
        {text:"",class:"regular", menu: false, question: false, page: null},
    ];

    indexPantalla = 0;
    
    // To save char in cmi array have [menu, question, learned]
    progress = [];

    results = [];

    cmiStore = {
        progress: [],
        results: []
    }

    constructor() { 
        this.diapos.forEach((element, i) => {
            this.diapos[i].page = i;
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({answersChecked: null, result: false});
            }
        });
        setTimeout(()=> {
            if (window.ScormProcessGetValue("cmi.suspend_data")) {
                this.cmiStore = JSON.parse(window.ScormProcessGetValue("cmi.suspend_data"));
                this.progress = this.cmiStore.progress;
                this.results = this.cmiStore.results;
            } else {
                this.cmiStore = {
                    progress: this.progress,
                    results: this.results
                }
            }
            if(window.ScormProcessGetValue("cmi.core.lesson_location", false)){
                this.indexPantalla = window.ScormProcessGetValue("cmi.core.lesson_location", false);
                this.navTo(this.indexPantalla);
            }

        }, 750);
        console.log(this.results);
    }

    private stateIn: BehaviorSubject<any> = new BehaviorSubject<any>({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});

    state$: Observable<any> = this.stateIn.asObservable();

    getInitialState() {
        return this.diapos.length;
    }

    prevPantalla() {
        this.indexPantalla--;
        this.navToPage();
    }

    nextPantalla() {
        this.indexPantalla++;
        this.progress[this.indexPantalla][2] = true;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        this.navToPage();
    }

    navTo(e) {
        this.indexPantalla = e;
        this.navToPage();
    }

    navToPage() {
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        window.ScormProcessSetValue("cmi.core.lesson_location", (this.indexPantalla).toString());
        if (this.indexPantalla === (this.diapos.length - 1)){
            // reachedEnd = true;
            console.log('finalizado')
            window.ScormProcessSetValue("cmi.core.lesson_status", "completed");
        }
        if (window.ScormProcessGetValue("cmi.core.lesson_status")) {
            console.log(window.ScormProcessGetValue("cmi.core.lesson_status"));
        }
    }

    getResults() {
        return this.results;
    }

    setResults(id, answersChecked, result) {
        this.results[id - 1] = {answersChecked: answersChecked, result: result};
        this.progress[this.indexPantalla][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        this.cmiStore.results = this.results;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / (this.results.length - 1)) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 80){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

    getAswersChecked(id) {
        if(this.results[id - 1] !== null) {
            return this.results[id - 1].answersChecked;
        } else {
            return false
        }
    }

    exit() {
        window.ScormProcessSetValue("cmi.core.exit", "suspend");
        setTimeout(() => {
            top.window.close()
        }, 100);
    }

    passUnit() {
        this.progress[27][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    reset() {
        this.navTo(1);
        this.results = [];
        this.progress = [];
        this.diapos.forEach(element => {
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({answersChecked: null, result: false});
            }
        });
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / (this.results.length - 1)) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 80){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

}