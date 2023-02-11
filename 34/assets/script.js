var playList = [
   {
     author: "LED ZEPPELIN",
     song: "STAIRWAY TO HEAVEN"
   },
   {
     author: "QUEEN",
     song: "BOHEMIAN RHAPSODY"
   },
   {
     author: "LYNYRD SKYNYRD",
     song: "FREE BIRD"
   },
   {
     author: "DEEP PURPLE",
     song: "SMOKE ON THE WATER"
   },
   {
     author: "JIMI HENDRIX",
     song: "ALL ALONG THE WATCHTOWER"
   },
   {
     author: "AC/DC",
     song: "BACK IN BLACK"
   },
   {
     author: "QUEEN",
     song: "WE WILL ROCK YOU"
   },
   {
     author: "METALLICA",
     song: "ENTER SANDMAN"
   }
 ];
 
 for (let i = 0; i < playList.length; i++) {
   console.log(playList[i])
}

 const ul = document.createElement("ul");
 const mainDiv = document.getElementById("content");
 mainDiv.append(ul);
 for (let i in playList) {
   const li = document.createElement("li");
   const pBtn = document.createElement("p");
   pBtn.append(playList[i].author);
   pBtn.append(" : ");
   pBtn.append(playList[i].song);
   li.append(pBtn);
   ul.append(li);
 }