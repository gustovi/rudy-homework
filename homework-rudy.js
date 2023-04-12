// // Cerințe:
// //1. Creați o clasă care să conțină informații despre căței: nume, rasă, culoarea părului, anul nașterii,
//  vaccinuri și dacă are pașaport sau nu. Creați o metodă care afișează toate aceste informații într-un
//   format care să fie citit ușor de către doctor (exemplu: Rudy este un câine de rasă spitz finlandez,
//      are culoarea albă, vârsta de 3 ani, are voie să iasă din Moldova și are 3 vaccinuri).
// // 2.Creați o metodă care calculează vârsta lui Rudy și afișați-o în mesaj.
// //3. Rudy a primit recent un vaccin pentru hepatită canină. Adăugați acest vaccin în istoricul medical.
//  Creați o metodă pentru a adăuga vaccinuri în clasa Cățel. De asemenea, creați o clasă pentru vaccin 
//  și instanțiați un obiect pentru fiecare vaccin nou.
// //4. Afișați un mesaj corespunzător dacă Rudy are voie sau nu să iasă din Moldova (dacă are pașaport).
// //5. Carolina a uitat când i-a făcut celelalte vaccinuri lui Rudy și acum știe că trebuie să pună în 
// istoric data fiecărui vaccin. Actualizați obiectul pentru a conține această informație și creați o 
// funcție care afișează istoricul vaccinării. Dacă nu există niciun vaccin, să se afișeze “Rudy nu a făcut niciun vaccin până acum”.
// //6. Instanțiați obiecte pentru încă doi căței.

// // Note:
// // Vaccinurile trebuie instanțiate dintr-o clasă separată “Vaccin” și stocate într-o proprietate de tip array din clasa “Cățel”
// // Folosiți oricare metodă din cele trei pentru a defini clasele.
// // Clasa “Cățel” va conține trei metode: descriere, adăugare vaccin și istoric vaccinare.

//cerinta num 1 sa facem o clasa care sa contina informatiile despre catel.
class Catel {
    constructor(nume, rasa, culoarea, anulNasterii, vaccinuri, pasaport) {
        this.nume = nume;
        this.rasa = rasa;
        this.culoarea = culoarea;
        this.anulNasterii = anulNasterii;
        this.vaccinuri = vaccinuri;
        this.pasaport = pasaport;
        this.istoricVaccinare = [];
    }
    

    datePasaport() {
        return this.pasaport == true ? 'are pasport' : 'nu are pasaport'
    }
    areVaccin() {
        return this.vaccinuri == true ? 'are vaccinuri' : 'nu are vaccinuri'
    }
    //cerinta 5: sa punem in istoric data cu fiecare vaccin 

    adaugaVaccin(vaccin) {
        this.vaccinuri = true || this.vaccinuri;
        const data = new Date();
        const dataVaccin = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
        this.istoricVaccinare.push({ vaccin: vaccin, data: dataVaccin });
    }

    istoric() {
        if (this.vaccinuri) {
            console.log(`Istoricul de vaccinare pentru ${this.nume}:`);
            this.istoricVaccinare.forEach(vaccin => console.log(`- Vaccinul ${vaccin.vaccin} a fost administrat in data de ${vaccin.data}`));
        } else {
            console.log(`${this.nume} nu a făcut niciun vaccin până acum.`);
        }
    }
}
// 6: sa adaugam inca doi catei


const catelRudy = new Catel('Rudy', 'pomeranian', 'brown', 2022, true, true);
const catelBax = new Catel('Bax', 'golden-retriver', 'golden', 2021, true, true);
const catelRex = new Catel('Rex', 'german', 'black', 2023, true, false);
console.log(`sumary: ${catelRudy.nume} este un câine de rasă ${catelRudy.rasa}, are culoarea ${catelRudy.culoarea}, anul nasterii: ${catelRudy.anulNasterii}, are voie să iasă din Moldova deoarece ${catelRudy.datePasaport()} și  ${catelRudy.areVaccin()}.`);
console.log(`sumary: ${catelBax.nume} este un câine de rasă ${catelBax.rasa}, are culoarea ${catelBax.culoarea}, anul nasterii: ${catelBax.anulNasterii}, are voie să iasă din Moldova deoarece ${catelBax.datePasaport()} și  ${catelBax.areVaccin()}.`);
console.log(`sumary: ${catelRex.nume} este un câine de rasă ${catelRex.rasa}, are culoarea ${catelRex.culoarea}, anul nasterii: ${catelRex.anulNasterii}, are voie să iasă din Moldova deoarece ${catelRex.datePasaport()} și  ${catelRex.areVaccin()}.`);
catelRudy.istoric();
catelBax.istoric();
catelRex.istoric();

//cerinta num 2: sa calculam vrsta
const calculVirsta = (anulNasterii) => {
    const dataCurenta = new Date();
    const anulCurent = dataCurenta.getFullYear();
    const virsta = anulCurent - anulNasterii;
    return virsta;
}
console.log(`${catelRudy.nume} are ${calculVirsta(catelRudy.anulNasterii)} ani.`);
console.log(`${catelBax.nume} are ${calculVirsta(catelBax.anulNasterii)} ani.`);
console.log(`${catelRex.nume} are ${calculVirsta(catelRex.anulNasterii)} ani.`);

// cerinta 3: sa adaugam vaccinul de hepatita.
class VaccinuriPrimite {
    constructor(vaccinHepatita, vaccinDhppil, vaccinAntirabic) {
        this.vaccinHepatita = vaccinHepatita;
        this.vaccinDhppil = vaccinDhppil;
        this.vaccinAntirabic = vaccinAntirabic;
    }

    areVaccinHepatita() {
        return this.vaccinHepatita ? 'are vaccin de hepatita' : 'nu are vaccin de hepatita';
    }

    areVaccinDhppil() {
        return this.vaccinDhppil ? 'are vaccin de Dhppil' : 'nu are vaccin de Dhppil';
    }

    areVaccinAntirabic() {
        return this.vaccinAntirabic ? 'are vaccin antirabic' : 'nu are vaccin antirabic';
    }
}

const vaccinuriRudy = new VaccinuriPrimite(true, true, true);
const vaccinuriBax = new VaccinuriPrimite(true, true, true);
const vaccinuriRex = new VaccinuriPrimite(true, true, true);

console.log(`${catelRudy.nume} ${vaccinuriRudy.areVaccinHepatita()}, ${vaccinuriRudy.areVaccinDhppil()}, și ${vaccinuriRudy.areVaccinAntirabic()}.`);
console.log(`${catelBax.nume} ${vaccinuriBax.areVaccinHepatita()}, ${vaccinuriBax.areVaccinDhppil()}, și ${vaccinuriBax.areVaccinAntirabic()}.`);
console.log(`${catelRex.nume} ${vaccinuriRex.areVaccinHepatita()}, ${vaccinuriRex.areVaccinDhppil()}, și ${vaccinuriRex.areVaccinAntirabic()}.`);
//cerinta 4:  rudy are voie sau nu sa iasa din Moldova 

console.log(`are voie să iasă din Moldova deoarece ${catelRudy.datePasaport()}`);
console.log(`are voie să iasă din Moldova deoarece ${catelBax.datePasaport()}`);
console.log(`are voie să iasă din Moldova deoarece ${catelRex.datePasaport()}`);

