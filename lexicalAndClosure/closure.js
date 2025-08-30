function name(name) {
    let user="sahil";
    function person() {
        console.log(user);
        return name;
    }
    return person;
}
const newPerson=name("vivek");
console.log(newPerson());
