
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  if (matrix === undefined) {
    return arr=[]
  }
  for (i=0;i<matrix.length;i++){ 
     if (i==0){
      arr[0]=matrix[0]
    }
     else if(i%2==0){
      arr[i]=matrix[i]
    }
     else{
      arr[i]=matrix[i].reverse()
    }
  }
  return arr.flat(Infinity)
}

