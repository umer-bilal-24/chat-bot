function getQueryAnswer(){
    try{
        const inputRef=document.querySelector("#query")
        const query = inputRef.value
       const res = axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
            contents:[
                {
                    parts:[
                        {
                            text:`User Query:${query}`,
                        },
                    ],
                },
            ],
        },
        {
          headers:{
            "content-Type":"application/json",
            "x-goog-api-key":"AIzaSyA2xtZ9D0miW-18eyhBSYaqmcVUtKvsuvk",
            
          },
        }
            
        );
        res 
        .then((data)=>{
            // console.log(data)
            const answerRef=document.querySelector("#answer")
            answerRef.textContent=data.data.candidates[0].content.parts[0].text;

        })
        .catch((error)=>{
            console.log(error)
            ("error")
        });
      
    }catch(err){
        
        alert("something went wrong");
    }


   
}