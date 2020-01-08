window.addEventListener('load', setBreadcrumb);

setBreadcrumb = () => {

    let pageUrl = window.location.href,
        itemUrl = pageUrl,
        urlLength = pageUrl.split("/").length,
        // itemFirstUrl = pageUrl.split("/")[2],
        // itemFirstName = pageUrl.split("/")[3],
        // itemSecondUrl = pageUrl.split("/").pop().stringify(),
        // itemSecondName = pageUrl.split("/")[4]
        itemThirdUrl = pageUrl
    itemThirdName = pageUrl.split("/")[5]

    if (urlLength == 6) {
        let data = {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@id": "home",
                        "name": "https:/home/",
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@id": "news",
                        "name": "https://home/news/",
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@id": itemThirdUrl,
                        "name": itemThirdName,
                    }
                }
            ]
        }


        var script = document.createElement('script');
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(data);
        document.getElementsByTagName('head')[0].appendChild(script);

        console.log(data);

    }
}

