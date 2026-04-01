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
 shareIcon.addEventListener("click",()=>{
   profileBox.classList.toggle('hidden');
   if(profileBox.classList.contains('hidden')){
    profileImg.style.display="none";
    userName.style.display="none";
    footer.style.margin="0";
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
 })
 