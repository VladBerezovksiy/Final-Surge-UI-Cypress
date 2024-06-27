import testData from '../fixtures/TestData.json'

import { basePage } from '../support/pages/BasePage'
import { workoutsPage } from '../support/pages/WorkoutsPage'
import { workoutModel } from '../support/models/WorkoutModel'


describe('Workout Tests', () => {

    beforeEach(() => {
        cy.login(testData.email, testData.password, testData.messages.accountLogin)
    })

    it('Add Workout', () => {
        basePage.openPageFromHeader('Workouts', 'Add Workout')
        workoutsPage.selectActivityType('Run', 'Hills')
        workoutsPage.fillForm(workoutModel.date, workoutModel.timeOfDayField, workoutModel.workoutNameField, 
            workoutModel.workoutDescriptionField, workoutModel.distanceField, 'km', workoutModel.durationField,
            'min/km', workoutModel.paceField, workoutModel.placeField, workoutModel.ageGroupPlaceField, '2 (Light)')
    })

})