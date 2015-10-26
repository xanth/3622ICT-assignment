export default class AlbumController {
    constructor(FacebookGraph, Lightbox, $state, $stateParams) {
        this.FacebookGraph  = FacebookGraph;
        this.$state         = $state;
        this.$stateParams   = $stateParams;
        this.Lightbox       = Lightbox;

        Lightbox.getImageUrl = (image) => {
          return image.full.source;
        };

        Lightbox.getImageCaption = (image) => {
          return image.name;
        };

        this.fetchImages();
    }

    fetchImages(){
      this.FacebookGraph.images(this.$stateParams.album, 320, (err, images) => {
        if(err){
          console.error(err, "error in facebook graph");
        } else{
          debugger;
          this.images = images;
        }
      });
    }

  OpenLightboxModal(index) {
    this.Lightbox.openModal(this.images, index);
  };

  like(objectId, $index){
    this.FacebookGraph.like(objectId, (err, success) => {
      if (success) {
        this.fetchImages();
      } else {
        console.error( err );
      }
    });
  }
}

AlbumController.$inject = ['FacebookGraph', 'Lightbox', '$state', '$stateParams'];
