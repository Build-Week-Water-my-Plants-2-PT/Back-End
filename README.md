# Back-End [Unit 4]

POST Register User
https://water-my-plants-365.herokuapp.com/api/auth/register

BODY

{
    "username": "Homer Simpson",
    "password": "passwordforhomer",
    "phoneNumber": "1234567890"
}


POST Login User
https://water-my-plants-365.herokuapp.com/api/auth/login

BODY
 
 {
    "username": "Homer Simpson",
    "password": "passwordforhomer"
}


Fake user data: 
   
   { username:'Homer Simpson', password:passwordforhomer', phone_number:1234567890},
    
    { username:'Marge Simpson', password: passwordformarge, phone_number:2345678901},
    
    { username:'Bart Simpson', password:passwordforbart, phone_number:3456789012},
   
    { username:'Lisa Simpson', password:passwordforlisa phone_number:4567890123},
    
    { username:'Mr.Burns', password: passwordforburns, phone_number:5678901234},
    
    { username:'Ned Flanders', password:passwordforned', phone_number:6789012345}
