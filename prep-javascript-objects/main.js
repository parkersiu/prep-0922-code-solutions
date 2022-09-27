const person = {
  firstName: 'Parker',
  lastName: 'Siu',
  hobby: 'Music'
};
console.log('Person:', person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'Lending';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'Analyst';
console.log('The person\'s previous job is:', person.previousJob);
console.log('The completed person object:', person);
