import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class AppareilService {
    appareilSubject!: Subject<any[]>;

    private appareils = [
        {
            id: 1,
            name: "Télévisionn",
            sousTitre: "Card subtitle",
            status: "allumé",
            description: "Télévisionn Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 2,
            name: "Machine à laver",
            sousTitre: "Card subtitle",
            status: "eteint",
            description: "Machine à laver Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 3,
            name: "Cuisinière",
            sousTitre: "Card subtitle",
            status: "allumé",
            description: "Cuisinière Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ];
    constructor() {
        console.log("-------- constructor ---------- ");
        this.appareilSubject = new Subject();
        console.log("-------- fin constructor ---------- ");

    }
    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

    allumerAppareil(index: number) {
        this.appareils[index].status = "allumé";
        this.emitAppareilSubject();
    }

    etteindreAppareil(index: number) {
        this.appareils[index].status = "eteint";
        this.emitAppareilSubject();
    }

    allumerAppareils() {
        this.appareils.forEach(appareil => appareil.status = "allumé");
        this.emitAppareilSubject();
    }

    etteindreAppareils() {
        this.appareils.forEach(appareil => appareil.status = "eteint");
        this.emitAppareilSubject();
    }

    findAppareilById(id: number) {
        return this.appareils.find(appareil => appareil.id == id);
    }

    addAppareil(appareil: { id: number; name: string; sousTitre: string; status: string; description: string }) {
        appareil.id = this.appareils[this.appareils.length - 1].id + 1;
        this.appareils.push(appareil);
        this.emitAppareilSubject();
    }
}