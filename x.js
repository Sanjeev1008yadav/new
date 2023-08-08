var arr=[1,5,10,8,6,4];
for(var j=0;j<arr.length;j++)
{
    var max=arr[j];
    var index=j;
    for(var i=j+1;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
            index=i;
        }
    }
    var temp=arr[j];
    arr[j]=arr[index];
    arr[index]=temp;
}
console.log(arr);