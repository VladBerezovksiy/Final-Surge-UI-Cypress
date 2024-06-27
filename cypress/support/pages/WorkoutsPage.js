class Workouts {

    elementsAddWorkout = {
        dateField: ()=> cy.get(`#WorkoutDate`),
        timeOfDayField: ()=> cy.get(`#WorkoutTime`),
        workoutNameField: ()=> cy.get(`#Name`),
        workoutDescriptionField: ()=> cy.get(`#Desc`),
        distanceCheckbox: ()=> cy.get(`#PlannedWorkout`),

        basicWorkoutTab: ()=> cy.xpath(`//*[@id='tBasic']/parent::li`),
        distanceField: ()=> cy.get(`#Distance`),
        distanceDropDown: ()=> cy.get(`#DistType`),
        durationField: ()=> cy.get(`#Duration`),
        paceField: ()=> cy.get(`#Pace`),
        paceDropDown: ()=> cy.get(`#PaceType`),
        raceCheckbox: ()=> cy.get(`#IsRace`),
        placeField: ()=> cy.get(`#OverallPlace`),
        ageGroupPlaceField: ()=> cy.get(`#AgeGroupPlace`),
        howIFeltRadioButton: ()=> cy.get(`#hf_great`),
        perceivedEffortDropdown: ()=> cy.get(`#PerEffort`),
        addWorkoutSubmitButton: ()=> cy.get(`#saveButton`)
    }

    selectActivityType(nameType, nameActivity) {
        cy.xpath(`//div[@id="blog_accordion_left"]/div[contains(.,'${nameType}')]`).within((e)=>{
            cy.get(e).click()
            cy.xpath(`//ul/li[contains(.,'${nameActivity}')]`).click()
        })
        cy.contains(`Add New Workout`)
    }

    fillForm(date, timeOfDay, nameWorkout, descriptionWorkout, distance, distanceOption, duration, paceOption, pace, place, ageGroupPlace, perceivedEffortOption) {
        this.elementsAddWorkout.dateField().then((e)=>{
            cy.get(e).clear()
            cy.get(e).type(date)
        })
        this.elementsAddWorkout.timeOfDayField().then((e)=>{
            cy.get(e).clear()
            cy.get(e).type(timeOfDay)
        })
        this.elementsAddWorkout.workoutNameField().then((e)=>{
            cy.get(e).clear()
            cy.get(e).type(nameWorkout)
        })
        this.elementsAddWorkout.workoutDescriptionField().then((e)=>{
            cy.get(e).clear()
            cy.get(e).type(descriptionWorkout)
        })
        this.elementsAddWorkout.distanceCheckbox().check()

        this.elementsAddWorkout.basicWorkoutTab()
            .should('have.class', 'active')
            .then((isActive) => {
                if (isActive) {
                    this.elementsAddWorkout.distanceField().then((e)=>{
                        cy.get(e).clear()
                        cy.get(e).type(distance)
                    })
                    this.elementsAddWorkout.distanceDropDown().select(distanceOption)
                    this.elementsAddWorkout.durationField().then((e)=>{
                        cy.get(e).clear()
                        cy.get(e).type(duration)
                    })
                    this.elementsAddWorkout.paceDropDown().select(paceOption)
                    this.elementsAddWorkout.paceField().then((e)=>{
                        cy.get(e).clear()
                        cy.get(e).type(pace)
                    })
                    this.elementsAddWorkout.raceCheckbox().check()
                    this.elementsAddWorkout.placeField().then((e)=>{
                        cy.get(e).clear()
                        cy.get(e).type(place)
                    })
                    this.elementsAddWorkout.ageGroupPlaceField().then((e)=>{
                        cy.get(e).clear()
                        cy.get(e).type(ageGroupPlace)
                    })
                } else {
                    this.elementsAddWorkout.basicWorkoutTab().click()
                }
            })

        this.elementsAddWorkout.howIFeltRadioButton().click()
        this.elementsAddWorkout.perceivedEffortDropdown().select(perceivedEffortOption)
        this.elementsAddWorkout.addWorkoutSubmitButton().click()

        cy.contains('Workout Details')
    }

}

export const workoutsPage = new Workouts()