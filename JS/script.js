var arr = [];

/* array declaration to collect input*/
document.getElementById('add').onclick = function(){
    arr.push(document.getElementById('textbox').value);
    document.getElementById('textbox').value = '';
};
console.log(arr);
/* a switch case for selecting sort*/
function sort(button) {
    var type = button.id;
    /*console.log(type);*/
    switch (type) {
        case 'Bubble Sort':
            console.log('Bubble Sort');
            bubbleSort(arr);
            console.log(arr);
            break;
        case 'Selection Sort':
            console.log('Selection Sort');
            selectionSort(arr);
            console.log(arr);
            break;
        case 'Insertion Sort':
            console.log('Insertion Sort');
            insertionSort(arr);
            console.log(arr);
            break;
        case 'Merge Sort':
            console.log('Merge Sort');
            mergeSort(arr);
            console.log(arr);
            break;
        case 'Quick Sort':
            console.log('Quick Sort');
            quickSort(arr);
            console.log(arr);
            break;
        default:
            return false;
    }
}
/* BubbleSort logic*/
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) { //Number of passes
    for (var j = 0; j < (len - i - 1); j++) { //Notice that j < (length - i)
      //Compare the adjacent positions
      if(arr[j] > arr[j+1]) {
        //Swap the numbers
        var tmp = arr[j];  //Temporary variable to hold the current number
        arr[j] = arr[j+1]; //Replace current number with adjacent number
        arr[j+1] = tmp; //Replace adjacent number with current number
      }
    }        
  }
}
/*Selection Sort logic*/
function selectionSort(arr){
  var minIdx, temp, 
    len = arr.length;
  for(var i = 0; i < len; i++)
    {
    minIdx = i;
    for(var  j = i+1; j<len; j++)
        {
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
/* Insertion Sort logic*/
function insertionSort(arr) {
  var length = arr.length;
  for(var i = 1; i < length; i++) {
    var temp = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}
/* Merge Sort Logic*/
function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    
    var mid = Math.floor(arr.length /2);
    var subLeft = mergeSort(arr.slice(0,mid));
    var subRight = mergeSort(arr.slice(mid));
    
    return merge(subLeft, subRight);
}
function merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}