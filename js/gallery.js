function activateGallery() {
    let thumbnails = document.querySelector("#gallery-thumbs")
                             .querySelectorAll("img");
    let mainImage = document.querySelector("#gallery-photo")
                            .querySelector("img");

    thumbnails.forEach( function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set clicked image as display image.
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newImageTitle = thumbnail.dataset.title;
            let newImageDesc = thumbnail.dataset.description;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newImageTitle);

            // Change which image is current.
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");

            // Update image info.
            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");
            title.innerHTML = newImageTitle;
            description.innerHTML = newImageDesc;
        });
    })
}