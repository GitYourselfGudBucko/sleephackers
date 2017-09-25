// set up an array of comic images
var imgs = [
    'images/volumes/vol-01/issue-01/page-01.jpg',
    'images/volumes/vol-01/issue-01/page-02.jpg',
    'images/volumes/vol-01/issue-01/page-03.jpg',
    'images/volumes/vol-01/issue-01/page-04.jpg'
 ],
    // initialize current_page to 0
    current_image = 0,
    current_page = 0,
    current_issue = 0,
    current_volume = 0,
    volume_names = ["grounding"],
    issue_names = [
        ["enter the metropolis", "exit the metropolis"],
    ],
    comic_name = "Reality Hackers";


function countPagesInIssue(volume, issue) {
    var pages = 0;
    var volume_regex = new RegExp('vol-' + ("00" + volume).slice(-2));
    var issue_regex = new RegExp('issue-' + ("00" + issue).slice(-2));
    for (var i = 0; i < imgs.length; i ++) {
        if (imgs[i].match(volume_regex) && imgs[i].match(issue_regex)) {
            pages ++;
        }
    }
    return pages;
}


function parseImageURL(url) {
    var loc = new URI(window.location.href);
    var regex = /vol-(\d+)\/issue-(\d+)\/page-(\d+)/;

    url.replace(regex, function(match, p1, p2, p3) {
        current_volume = parseInt(p1) - 1;
        loc.setQuery("volume", p1);
        $("#volume_number").html("v." + p2 + " " + volume_names[current_volume].toUpperCase());

        current_issue = parseInt(p2) - 1;
        loc.setQuery("issue", p2);
        $("#issue_number").html("." + p2 + " " + issue_names[current_volume][current_issue]);

        current_page = parseInt(p3) - 1;
        $("#page_number").html("p." + p3);
        loc.setQuery("page", p3);

        window.history.pushState({path:loc}, comic_name + " vol " + p1 + 
            ", issue " + p2 + 
            ", p." + p3, loc);
    });
}

function loadQueryString(params) {

    current_volume = parseInt(params.volume);
    current_issue = parseInt(params.issue);
    current_page = parseInt(params.page);

    var image_regex = new RegExp(
        'vol-' + ("00" + current_volume).slice(-2) + "/" +
        'issue-' + ("00" + current_issue).slice(-2) + "/" +
        'page-' + ("00" + current_page).slice(-2));

    for (var i = 0; i < imgs.length; i ++) {
        if (imgs[i].match(image_regex)) {
            current_image = i;
            updateImage(current_image);
            break;
        }
    }
    
}

function setCookie() {
    var loc = new URI(window.location.href);
    Cookies.set("querystring", loc.query(), {"expires": 365});
}

function loadCookie() {
    var uri = new URI("?" + Cookies.get("querystring"));
    console.log(uri.query(true));
    loadQueryString(uri.query(true));
}

// define a function that returns the next item in the imgs array,
// or the first if we're already at the last one
function next() {
    current_image ++;
    if (current_image == imgs.length) current_image = 0;
    updateImage(current_image);
}

// define a function to do the opposite of next()
function prev() {
    current_image --;
    if (current_image < 0) current_image = imgs.length - 1;
    updateImage(current_image);
}

// my alpha and omega
function alpha() {
    current_image = 0;
    updateImage(current_image);
}

function omega() {
    current_image = imgs.length - 1;
    updateImage(current_image);
}

function updateImage(index) {
    if (current_image == 0) {
        $("#hide-prev").hide();
        $("#hide-alpha").hide();
        $("#hide-prev2").hide();
        $("#hide-alpha2").hide();

    } else {
        $("#hide-prev").show();
        $("#hide-alpha").show();
        $("#hide-prev2").show();
        $("#hide-alpha2").show();
    }

    if (current_image == imgs.length - 1) {
        $("#hide-next").hide();
        $("#hide-omega").hide();
        $("#hide-next2").hide();
        $("#hide-omega2").hide();


    } else {
        $("#hide-next").show();
        $("#hide-omega").show();
        $("#hide-next2").show();
        $("#hide-omega2").show();
    }
    var image = imgs[index];
    parseImageURL(image);
    setCookie();
    comic.attr('src', image);
    $(window).scrollTop(0);
}








