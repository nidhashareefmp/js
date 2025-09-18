function greet(firstname,Lastname,...titles){
   console.log(`Name: ${firstname} ${Lastname}`);
   console.log(`titles: ${titles.join(',')}`);
   
   
}
greet("nidha","shareef", "engineer", "developer", "author")