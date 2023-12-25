function ytcard(titel, cname, NoOfViwes, monthold, duration, thumbline) {
    let viewstr
    if (NoOfViwes < 1000) {
        viewstr = NoOfViwes;
    }
    else if (NoOfViwes > 1000000) {
        viewstr = NoOfViwes / 1000000 + "M";
    }
    else {
        viewstr = NoOfViwes / 1000 + "k";
    }
    let html = `<div class="card">
    <div class="img"> 
    <img src="${thumbline}"
        <div class="capusle">${duration}</div>
    </div>
    <div class="text">
        <h1>${titel} </h1>
        <p>${cname} • ${NoOfViwes} views • ${monthold}month ago</p>

    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

ytcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw")