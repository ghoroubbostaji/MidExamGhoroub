function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function runme()
    {
      myList = [0];
      myColors = ['', 'Red', 'Orange', 'Yellow', 'Green', 'lightblue', 'Blue', 'White', 'Gray', 'Pink'];
      while(myList.length < 10)
      {
        r = getRandomNum(1,10);

        if( !myList.includes(r) ){
          myList.push(r);
        }
      }

      for ( i=1; i<=9; i++)
       {
        cell = document.getElementById('t'+i);
        r=myList[i];
        cell.innerHTML = r;
        cell.style.backgroundColor = myColors[r];
      }
  }
