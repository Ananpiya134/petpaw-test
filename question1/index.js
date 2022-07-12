function greeting (){
    const currentTime = new Date().toLocaleString().split(' ')[1]
    const currentHour = currentTime.split(':')[0]
    if(currentHour >= 6 && currentHour < 13){
        console.log('Good Morning')
    }else if( currentHour >= 13 && currentHour < 18){
        console.log('Good Afternoon')
    }else {
        console.log('Good Evening')
    }
}

greeting()