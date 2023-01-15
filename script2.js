let pigWord = prompt('Enter Word')
let vowels = ('AEIOUaeiou')
let consonent = ('BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz')

    if pigWord = ('', ' ',){
        document.write('input cannot be translated');
      
    } else if (vowels.includes(pigWord(0))) {
      document.write(pigWord ++ 'way');
      
    } else if (consonent.includes(pigWord(0))) {
      let halfWord = pigWord.slice(0);
      let halfWord2 = pigWord.slice(-1);
      document.write(halfWord + halfword2 ++ 'ay');
      
    } else if (consonent.includes(pigWord(0,1))) {
      let halfWord = pigWord.slice(0,1);
      let halfWord2 = pigWord.slice(-2);
      document.write(halfWord + halfword2 ++ 'ay');
    }
    
