# Back-End [Unit 4]
	Heroku: https://water-my-plants-365.herokuapp.com/
	
	POST Register User
	https://water-my-plants-365.herokuapp.com/api/auth/register

	BODY:
	{
	"username": "Homer Simpson",
	"password": "passwordforhomer",
	"phoneNumber": "1234567890"
	}


	POST Login User
	https://water-my-plants-365.herokuapp.com/api/auth/login

	BODY:
	 {
   	 "username": "Homer Simpson",	
   	 "password": "passwordforhomer"
	 }


	Fake user data: 
   
   	{id:1,username:'Homer Simpson', password:passwordforhomer, phone_number:1234567890},
	{id:2, username:'Marge Simpson', password: passwordformarge, phone_number:2345678901},
	{id:3, username:'Bart Simpson', password:passwordforbart, phone_number:3456789012},
	{id:4, username:'Lisa Simpson', password:passwordforlisa, phone_number:4567890123},
	{id:5, username:'Mr.Burns', password: passwordforburns, phone_number:5678901234},
	{id:6, username:'Ned Flanders', password:passwordforned, phone_number:6789012345}
    
    
   	GET plants by user id
   	https://water-my-plants-365.herokuapp.com/api/users/:id/plants
    
   	GET plants by plant id
   	https://water-my-plants-365.herokuapp.com/api/plants/:id
    
     
	PUT update an existing plant by plant id
  	https://water-my-plants-365.herokuapp.com/api/plants/:id
  
 	 BODY:
 	 {
 	 "id": 1,
  	"nickname": "American sheepbush",
 	 "species": "Pentzia incana",
 	 "H2oFrequency": "8 days",
  	"user_id": 1
  	  }
  
  	
    POST add a new plant by user id
    https://water-my-plants-365.herokuapp.com/api/plants
	
  	BODY:
	{
	"nickname": "american ash",
	"species": "Fraxinus excelsior",
	"H2oFrequency": "5 days",
	"user_id": 2
	}
  
  
	DELETE a plant by plant id
 	https://water-my-plants-365.herokuapp.com/api/plants/:id

  

    PUT update the user's phone_number and password
	https://water-my-plants-365.herokuapp.com/users/:id
