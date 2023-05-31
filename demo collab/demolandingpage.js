const searchBtn=document.querySelector(".search-btn")
const cancelBtn=document.querySelector(".cancel-btn")
const searchBox=document.querySelector(".search-box")

searchBtn.onclick=function(){
    searchBox.classList.add("active")
}
cancelBtn.onclick = function(){
    searchBox.classList.remove("active");
  }
