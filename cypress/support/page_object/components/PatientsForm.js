class PatientsForm {
    get name() { return cy.get('input[name=Name]') }
    get mobile() { return cy.get('#PatientMobile') }
    get email() { return cy.get('input[name=Email]') }
    get symptoms() { return cy.get('input[name=Symptoms]') }
    get bloodGroup() { return cy.get('#BloodGroup > .e-float-input') }
    get submitButton() { return cy.get('.new-patient-dialog button.e-primary') }
    bloodGroupOption(group) { return cy.get(`[data-value="${group}"]`) }

    fill(options) {
        if (options.name) {
            this.name.type(options.name)
        }
        if (options.mobile) {
            this.mobile.type(options.mobile)
        }
        if (options.email) {
            this.email.type(options.email)
        }
        if (options.symptoms) {
            this.symptoms.type(options.symptoms)
        }
        if (options.bloodGroup) {
            this.bloodGroup.click()
            this.bloodGroupOption(options.bloodGroup).click()
        }
    }
}

module.exports = PatientsForm;