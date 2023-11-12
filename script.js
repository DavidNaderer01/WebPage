function Sort(content) {
    let list = "";
    fetch("link.json")
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.links.length; i++) {
                let tags = data.links[i].tags;

                tags.forEach(function (tag) {
                    if(tag == content) {
                        let url = data.links[i].url;
                        list += `<li><a href=${url}>${data.links[i].name}</a></li>`
                    }
                })
            }
            document.getElementById('ul-output').innerHTML = list;
        });
}