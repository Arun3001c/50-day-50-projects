const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {return n > 15; });
    
 console.log(filteredArray)

 const array1 = [1, 2, 3, 4];
 const initialValue = 0;
 const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
 console.log(sumWithInitial);

 
         
 const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 const announcements = finalParticipants.map(member => {
          return member + ' joined the contest.';
         })
 console.log(announcements);