(s1=document.getElementById('sound1'),s2=document.getElementById('sound2'),c=s1,n=()=>c=c===s1?s2:s1,s1.onended=n,s2.onended=n,s1.play())
