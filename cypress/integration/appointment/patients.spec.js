const { dashboard, patients } = require('../../support/page_object')
describe('patients', () => {
    beforeEach(() => {
        dashboard.visit()
        dashboard.sidebar.patientsButton.click()
    })
    it('should create a patient', () => {
        patients.addPatientButton.click()
        patients.patientsForm.fill({
            name: 'John Dou',
            mobile: '1111111111',
            email: 'john@test.io',
            symptoms: 'headache',
            bloodGroup: 'AB-'
        })
        patients.patientsForm.submitButton.click()

        patients.patientRow(7)
            .should('contain.text', 'John Dou')
            .and('contain.text', 'AB-')
    })
})