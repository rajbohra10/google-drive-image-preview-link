new ClipboardJS('#copy-button');
document.getElementById("get-url-button").addEventListener("click", getUrl);
function getUrl(){
        var str = document.getElementById("google-drive-url-input").value;
        var indices = [];
        for(var i=0; i<str.length;i++) {
                if (str[i] === "/") {
                        indices.push(i);

                }
        }
        
        var res = str.substring(indices[4]+1, indices[5]);
        var finalURL = "https://drive.google.com/uc?export=view&id=" + res;
        document.getElementById("google-drive-url-input").value = finalURL;
}



