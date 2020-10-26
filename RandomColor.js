function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function runme()
    {
      myList1 = [0];
      myList2 = [0];
      myColors = ['', 'Crimson', 'DarkSalmon', 'Khaki', 'DarkSeaGreen', 'lightblue', 'DodgerBlue', 'FloralWhite', 'DarkGrey', 'PaleVioletRed'];
      while(myList1.length < 10)
      {
        r1 = getRandomNum(1,10);
        if( !myList1.includes(r1) ){
          myList1.push(r1);
        }
      }
      while(myList2.length < 10)
      {
        r2 = getRandomNum(1,10);
        if( !myList2.includes(r2) ){
          myList2.push(r2);
        }
      }

      for ( i=1; i<=9; i++)
       {
        cell = document.getElementById('t'+i);
        r1=myList1[i];
        r2=myList2[i];
        cell.innerHTML = r1;
        cell.style.backgroundColor = myColors[r2];
      }
  }
