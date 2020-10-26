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

  OrderedHiddenList = [];
  for (i=1; i<=9; i++)
  {
    cell = document.getElementById('t'+i);
    cell.innerHTML = myList[i];
    cell.style.visibility = 'visible';
    cell.style.backgroundColor = 'lightblue';

    cell.addEventListener("mousemove", function(){
                                      this.style.visibility = 'hidden';
                                      OrderedHiddenList.push(this.innerHTML);
                                      if( OrderedHiddenList.length == 9){
                                        document.getElementById("result1").innerHTML= OrderedHiddenList+
                                        " ( After 6 sec click again ) ";
                                        setTimeout(function(){window.location.reload(1);}, 6000);

                                    }
                                  } );
  }//end for
}
