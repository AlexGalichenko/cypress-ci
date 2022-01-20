const Base = require('./Base')
const PatientsForm = require('./components/PatientsForm')
class Patients extends Base {
    patientsForm = new PatientsForm()
    get addPatientButton() { return cy.get('.patient-operations > .e-control') }
    patientRow(index) { return cy.get(`tr[aria-rowindex="${index}"]`) }
}

module.exports = Patients;