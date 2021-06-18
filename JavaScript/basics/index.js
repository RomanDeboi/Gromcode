function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Enter value!', 0);
    };
}

let accumulator = new Accumulator(5);