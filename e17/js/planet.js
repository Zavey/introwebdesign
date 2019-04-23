var imagesArray = ["earth.jpg", "jupiter.jpg", "mars.jpg", "neptune.jpeg", "saturn.png"];


    function displayImage(){

    var num = Math.floor(Math.random() * 7); // 0...6
    document.canvas.src = imagesArray[num];
}
