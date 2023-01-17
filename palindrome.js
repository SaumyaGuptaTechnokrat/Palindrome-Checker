function palindrome(){
            var data = document.getElementById('pal').value;
            var rev='';
            for(var i=0;i<data.length;i++){
                rev = data.charAt(i)+rev; 
            } 
            if(rev==data){
                    document.getElementById('head1').innerHTML='IT IS A PALINDROME';
            }
            else{
                document.getElementById('head1').innerHTML='IT IS NOT A PALINDROME';
            }    
        }
            var blink = document.getElementById('blink');
  
        setInterval(function () {
            blink.style.opacity = 
            (blink.style.opacity == 0 ? 1 : 0);
        }, 500);
