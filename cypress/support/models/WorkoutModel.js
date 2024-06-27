import { generatorValueUtils } from '../utils/GeneratorValueUtils'

class WorkoutModel {
    date = generatorValueUtils.generateShortDateName()
    timeOfDayField = generatorValueUtils.generateTimeName()
    workoutNameField = generatorValueUtils.makeTitle("AQA ")
    workoutDescriptionField = "AQA Test"
    distanceField = generatorValueUtils.generateRandomNumberFrom1To99()
    durationField = generatorValueUtils.generateRandomNumberFrom1To99()
    paceField = generatorValueUtils.generateTimeName()
    placeField = generatorValueUtils.generateRandomNumberFrom1To99()
    ageGroupPlaceField = generatorValueUtils.generateRandomNumberFrom1To99()
}

export const workoutModel = new WorkoutModel()