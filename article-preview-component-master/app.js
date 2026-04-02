 let footer=document.querySelector("footer");
 let shareIcon=document.querySelector("#share-icon");
 let profileImg=document.querySelector("#profile-img");
 let userName=document.querySelector("#name");
 let profileBox=document.querySelector("#profile");
 const share=document.createElement("h3");
 share.textContent="S H A R E";
 share.style.color="hsl(214, 17%, 51%)";
 const facebookIcon=document.createElement("div");
 facebookIcon.style.height="1.5em";
 facebookIcon.style.width="1.5em";
 facebookIcon.style.backgroundSize="cover";
 facebookIcon.style.backgroundImage="url('images/icon-facebook.svg')";
 const twitterIcon=document.createElement("div");
 twitterIcon.style.height="1.5em";
 twitterIcon.style.width="1.8em";
 twitterIcon.style.backgroundSize="cover";
 twitterIcon.style.backgroundImage="url('images/icon-twitter.svg')";
 const pinterestIcon=document.createElement("div");
 pinterestIcon.style.height="1.5em";
 pinterestIcon.style.width="1.5em";
 pinterestIcon.style.backgroundSize="cover";
 pinterestIcon.style.backgroundImage="url('images/icon-pinterest.svg')";
 const popUp=document.createElement("div");
 popUp.style.width="10em";
 popUp.style.height="2em";
 popUp.style.backgroundColor="hsl(217, 19%, 35%)";
 popUp.prepend(share,facebookIcon,twitterIcon,pinterestIcon);
 popUp.style.position="absolute";
 popUp.style.display="flex";
 popUp.style.right="0em";
 popUp.style.bottom="3em";
 const popArrow=document.createElement("div");
 popArrow.style.height="0.6em";
 popArrow.style.width="0.6em";
 popArrow.style.backgroundColor="hsl(217, 19%, 35%)";
 popArrow.style.transform="rotate(45deg)";
 popArrow.style.position="absolute";
 popArrow.style.top="1.7em";
 popArrow.style.right="3.7em";
 popUp.append(popArrow);
 shareIcon.addEventListener("click",()=>{
  if(window.innerWidth<768){
   profileBox.classList.toggle('hidden');
   if(profileBox.classList.contains('hidden')){
    profileImg.style.display="none";
    userName.style.display="none";
    footer.style.margin="0em";
    footer.style.height="4em";
    profileBox.prepend(share,facebookIcon,twitterIcon,pinterestIcon);
    footer.style.backgroundColor="hsl(217, 19%, 35%)";
    profileBox.style.margin="40px 10px 40px 40px";
    profileBox.style.paddingTop="20px";
   }else {
    // Share box HIDE hoga — sab wapas normal
    profileImg.style.display = "block";
    userName.style.display = "block";
    footer.style.margin = "";
    footer.style.height = "";
    footer.style.backgroundColor = "";
    profileBox.style.margin = "";
    profileBox.style.paddingTop = "";
    shareIcon.style.marginLeft="auto";
    shareIcon.style.marginRight="1em";
    share.remove();
    facebookIcon.remove();
    twitterIcon.remove();
    pinterestIcon.remove();
  }
  }else{
  popUp.classList.toggle("hidden");
  if(popUp.classList.contains("hidden")){
  share.style.transform="scale(.7)";
  facebookIcon.style.transform="scale(.6)";
  twitterIcon.style.transform="scale(.6)";
  pinterestIcon.style.transform="scale(.6)";
  popUp.style.paddingTop="5px";
  popUp.style.borderRadius="7px";
  shareIcon.before(popUp);
  }else{
  popUp.remove();
  }

}
 })
 