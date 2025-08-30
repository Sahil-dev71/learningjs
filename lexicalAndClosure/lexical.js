function user(rollNo) {
    let name="sahil";
    console.log(innerUser());
    // console.log(friend);
    
    function innerUser(){
        let friend="rahul";
        console.log(name);
        console.log(rollNo);
        return friend;
    }    
}
user(34);