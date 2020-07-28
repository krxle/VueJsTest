

class Car {

    constructor(reference, year, finition, hp, price) {

        this.reference = reference
        this.year = year
        this.finition = finition
        this.hp = hp
        this.price = price

    }

    setReference(reference) {
        this.reference = reference
    }

    setYear(year) {
        this.year = year
    }

    setFinition(finition) {
        this.finition = finition
    }

    setHp(hp) {
        this.hp = hp
    }

    setPrice(price) {
        this.price = price
    }

    getImage() {

    }

    getReference() {
        return this.reference
    }

    getYear() {
        return this.year
    }

    getFinition() {
        return this.finition
    }

    getHp() {
        return this.hp
    }

    getPrice() {
        return this.price
    }
}

export default Car