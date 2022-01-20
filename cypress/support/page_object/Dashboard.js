const Base = require('./Base')
class Dashboard extends Base {
    visit() {
        cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
    }
}

module.exports = Dashboard;