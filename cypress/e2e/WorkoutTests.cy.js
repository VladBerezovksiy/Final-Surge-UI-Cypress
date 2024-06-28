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
        workoutsPage.selectActivityTypeInAddWorkout('Run', 'Hills')
        workoutsPage.fillForm(workoutModel.date, workoutModel.timeOfDayField, workoutModel.workoutNameField,
            workoutModel.workoutDescriptionField, workoutModel.distanceField, 'km', workoutModel.durationField,
            'min/km', workoutModel.paceField, workoutModel.placeField, workoutModel.ageGroupPlaceField, '2 (Light)')
    })

    it('View Calendar', () => {
        basePage.openPageFromHeader('Workouts', 'View Calendar')
        workoutsPage.checkCalenderFunctionallity(workoutModel.date, workoutModel.timeOfDayField, 'Run', workoutModel.workoutNameField,
            workoutModel.workoutDescriptionField, workoutModel.distanceField, 'km', workoutModel.durationField,
            'min/km', workoutModel.paceField, workoutModel.placeField, workoutModel.ageGroupPlaceField, 'Normal', '3 (Light)')
        workoutsPage.checkAcvtivityisAddedInCalendar()
    })

})