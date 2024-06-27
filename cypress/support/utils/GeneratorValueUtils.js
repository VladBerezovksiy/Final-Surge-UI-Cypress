class GeneratorValueUtils {

    makeTitle(base) {
        return base + new Date().toISOString();
    }

    generateDateName() {
        let date = new Date();
        return date.toLocaleDateString('en-GB'); // format dd/MM/yyyy
    }

    generateShortDateName() {
        let date = new Date();
        return date.toLocaleDateString('en-US'); // format M/d/yyyy
    }

    generateTimeName() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    generateRandomNumberFrom1To99() {
        return 1 + Math.floor(Math.random() * 99);
    }

    generateRandomNumberFrom1To9() {
        return 1 + Math.floor(Math.random() * 9);
    }

    generateRandomNumberFrom100To150() {
        return 100 + Math.floor(Math.random() * 51); // 100-150
    }

    generateRandomNumberFrom1To20() {
        return 1 + Math.floor(Math.random() * 20);
    }

    generateRandomNumber21To50() {
        return 21 + Math.floor(Math.random() * 30); // 21-50
    }

}

export const generatorValueUtils = new GeneratorValueUtils()