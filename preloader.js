var $ = jQuery;

class Preloader {

    constructor(
        config = {
            overlayElement: '<div class="prelaoder-overlay"><div class="prelaoder-img"></div></div>',
            appendTo: 'body',
            inAnimationTime: 600,
            outAnimation: 1000
        }
    ){
        this.config = config;
        this.overlayElement = $(config.overlayElement);
        this.overlayElement.hide();
        $(config.appendTo).append(this.overlayElement);
    }

    open(){
        this.overlayElement.fadeIn(this.config.inAnimationTime);
    }

    close(){
        this.overlayElement.fadeOut(this.config.outAnimationTime);
    }
}

export default Preloader;