// hartadd

let availableHart=0

const availableHarts =  document.getElementById("available-hart")
const hartAdd  =  document.querySelectorAll(".hart-add");

hartAdd.forEach((btn) => {
      btn.addEventListener("click", function (e) {
    e.preventDefault()
        availableHart ++                         
        availableHarts.innerText = availableHart  

        
      })
    }) 
let Copy=0

const availableCopy =  document.getElementById("copy")
const addCopy  =  document.querySelectorAll(".add-copy");

addCopy.forEach((btn) => {
      btn.addEventListener("click", function (e) {
    e.preventDefault()
        Copy ++                         
        availableCopy.innerText = Copy  

        
      })
    }) 
const callHistory =[]

// carts
    let coins = 100; 
const coinDisplay = document.getElementById("available-coin")
// cart-1
    

const callBtn1 = document.getElementById("call-btn-1")

callBtn1.addEventListener("click", function (e) {
    e.preventDefault()
   
    if (coins < 20) {
        alert("Not enough coins to make a call!")
        return; 
    }

    
    coins -= 20;
    coinDisplay.textContent = coins;

   
    alert('Calling National Emergency Service 999')

    const data = {
        name : 'জাতীয় জরুরি সেবা',
        Number : '999',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)
         const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click",  function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })




    }

   

   


   
   
});

// cart-2

const callBtn2 = document.getElementById("call-btn-2")

callBtn2.addEventListener("click", function (e) {
    e.preventDefault()
   
    if (coins < 20) {
        alert("Not enough coins to make a call!");
        return; 
    }

    
    coins -= 20;
    coinDisplay.textContent = coins;

   
    alert('Calling Police 999');


    const data = {
        name : 'পুলিশ',
        Number : '999',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)


        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click",  function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }

     

   
});



// cart-3

const callBtn3 = document.getElementById("call-btn-3")

callBtn3.addEventListener("click", function (e) {
    e.preventDefault()

if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Police 999');


const data = {
        name : 'ফায়ার সার্ভিস',
        Number : '999',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)

        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click", function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }





});

// cart-4

const callBtn4 = document.getElementById("call-btn-4")

callBtn4.addEventListener("click", function (e) {
    e.preventDefault()
if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Ambulance 199-999');

const data = {
        name : 'অ্যাম্বুলেন্স',
        Number : '199-999',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)

        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click", function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }


});


// cart-5

const callBtn5 = document.getElementById("call-btn-5")

callBtn5.addEventListener("click", function (e) {
    e.preventDefault()

if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Women and Child Support 109');


const data = {
        name : 'নারী ও শিশু সহায়তা',
        Number : '109',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)

        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click",  function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }


});
    


// cart-6

const callBtn6 = document.getElementById("call-btn-6")

callBtn6.addEventListener("click", function (e) {
    e.preventDefault()

if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Anti-Corruption Commission 106');

const data = {
        name : 'দুদক',
        Number : '106',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)

        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click",  function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }


});
    


// cart-7

const callBtn7 = document.getElementById("call-btn-7")

callBtn7.addEventListener("click", function (e) {
    e.preventDefault()
if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Electricity Outage 16216');

const data = {
        name : 'বিদ্যুৎ-বিভ্রাট',
        Number : '16216',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)
        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click", function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }


});
    


// cart-8

const callBtn8 = document.getElementById("call-btn-8")

callBtn8.addEventListener("click", function (e) {
    e.preventDefault()
if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Brac 16445');

const data = {
        name : 'ব্র্যাক',
        Number : '16445',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)
        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click",  function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }


});
    


// cart-9

const callBtn9 = document.getElementById("call-btn-9")

callBtn9.addEventListener("click", function (e) {
    e.preventDefault()
if (coins < 20) {
    alert("Not enough coins to make a call!");
    return; 
}


coins -= 20;
coinDisplay.textContent = coins;


alert('Calling Bangladesh Railway 163');

const data = {
        name : 'বাংলাদেশ রেলওয়ে',
        Number : '163',
        date :  new Date().toLocaleTimeString()
    }
    callHistory.push( data)
    console.log( callHistory)



    const callHistoryContainer = document.getElementById("call-history-container")

    
    callHistoryContainer.innerHTML = ""

    
    for (const data of callHistory) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-[#fafafa] shadow-lg rounded-lg p-3 mb-2 flex justify-between items-center ">
               <div>
               <h1 class="font-semibold">${data.name}</h1>
                <p class="text-gray-600 text-sm">${data.Number}</p>
                </div>
            <span class="text-gray-500 text-xl">${data.date}</span>
            
            </div>
            
        `
        callHistoryContainer.appendChild(div)
        const clearBtn = document.getElementById("clear-btn")
    
         clearBtn.addEventListener("click", function (e) {
    e.preventDefault()
    callHistoryContainer.innerHTML = ""  
    callHistory.length = 0; 
                   })
    }


});



    
// copy of cart-1
 const copyButton1 = document.getElementById("copy-btn-1")
const cardText1 = document.getElementById("card-text-1")

copyButton1.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText1.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-2
 const copyButton2 = document.getElementById("copy-btn-2")
const cardText2 = document.getElementById("card-text-2")

copyButton2.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText2.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-3
 const copyButton3 = document.getElementById("copy-btn-3")
const cardText3 = document.getElementById("card-text-3")

copyButton3.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText3.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-4
 const copyButton4 = document.getElementById("copy-btn-4")
const cardText4 = document.getElementById("card-text-4")

copyButton4.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText4.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-5
 const copyButton5 = document.getElementById("copy-btn-5")
const cardText5 = document.getElementById("card-text-5")

copyButton5.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText5.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-6
 const copyButton6 = document.getElementById("copy-btn-6")
const cardText6 = document.getElementById("card-text-6")

copyButton6.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText6.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-7
 const copyButton7 = document.getElementById("copy-btn-7")
const cardText7 = document.getElementById("card-text-7")

copyButton7.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText7.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-8
 const copyButton8 = document.getElementById("copy-btn-8")
const cardText8 = document.getElementById("card-text-8")

copyButton8.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText8.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})
// copy of cart-9
 const copyButton9 = document.getElementById("copy-btn-9")
const cardText9 = document.getElementById("card-text-9")

copyButton9.addEventListener("click", function (e) {
    e.preventDefault()
    
    const textToCopy = cardText9.textContent;

  
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            
            alert("টেক্সট কপি করা হয়েছে!");
        })
       
})

     

