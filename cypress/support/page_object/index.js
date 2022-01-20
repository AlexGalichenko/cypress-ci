const Dashboard = require('./Dashboard')
const Patients = require('./Patients')
module.exports = {
    dashboard: new Dashboard(),
    patients: new Patients()
}