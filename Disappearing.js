function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function runme()
{
  myList = [0];
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
    cell.style.visibility = "visible";
    cell.innerHTML = myList[i];
    cell.addEventListener( "mousemove", function (){
            this.style.visibility = 'hidden';
          }
    );

  }
}
