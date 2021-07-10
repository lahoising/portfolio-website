let container = document.getElementById("projects-section");

class Slideshow
{
    constructor()
    {
        this.slideIndex = 0;
        this.ShowSlide(this.slideIndex);
    }

    ShowSlide(index)
    {
        var i;
        var slides = document.getElementsByClassName("slide");
        
        if (index >= slides.length) {this.slideIndex = 0;}
        if (index < 0) {this.slideIndex = slides.length;}
    }
}

let slideshow = new Slideshow();