let runned =0;
let data = getElementById("input")

        function move(){
            console.log("clicked");
            console.log(data)
            if(runned%2==0){
                document.getElementById("cigger").style.transform = "rotate(20deg)";
                runned=runned+1;
                console.log(runned+" - positive")
            }
            // it works now
            else{
                document.getElementById("cigger").style.transform = "rotate(-20deg)";
                runned=runned+1;
                console.log(runned+" - negative")
            }
        }