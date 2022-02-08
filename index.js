let myleads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

const leadsfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
if(leadsfromlocalstorage)
{
    myleads=leadsfromlocalstorage
    render(myleads)
}

tabBtn.addEventListener("click",function(tabs){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    myleads.push(tabs[0].url)
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myleads=[]
    render(myleads)
})

inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)
})

function render(leads)
{
    let listitems=""
    for(let i=0;i<leads.length;i++)
    {
        listitems +=`<li>
                        <a target='_blank' href='${leads[i]}'>
                            ${leads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML=listitems
}

// const img=["https://images.unsplash.com/photo-1640622332381-1c4ddf3bdeb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
// "https://images.unsplash.com/photo-1644168933712-4867c592024e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
// "https://images.unsplash.com/photo-1644230048085-5ae4f6658632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
// ]

// function imagedisp(image) 
// {
//     let disp="";
//     for (let i = 0; i <image.length; i++) 
//     {
//         disp+=`<img src=${image[i]}></img>`
//     }
//     ulEl.innerHTML=disp
// }
// imagedisp(img)