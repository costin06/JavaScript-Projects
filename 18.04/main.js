
function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
      };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    if(this.interests.length>2)
    {
        for(var x=0;x>this.interests.length - 1;x++)
        {
            var result = this.interests[x] + ' , ' + this.interests[x+1]

        }
    }
    this.bio = function() {
        if(this.gender==='male'){
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        }
        else if(this.gender==='female') {
            alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. She likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');

        }    
      }; 
      this.greeting = function() {
       if(this.gender==='male'){
        alert('Hi! I\'m ' + this.name.first + '.'); }
      else if(this.gender==='female') {
        alert('She! I\'m ' + this.name.first + '.'); }

      }
    };
  
Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
  };

  var person1 = new Person('Costin', 'Calin', 22,'male',['JavaScript','AngularJs']);
  var person2 = new Person('Andreea', 'Calin', 22,'female',['JavaScript','AngularJs','ASAS']);