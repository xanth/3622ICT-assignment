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

        FacebookGraph.images($stateParams.album, 320, (err, images) => {
          if(err){
            console.error(err, "error in facebook graph");
          } else{
            this.images = images;
          }
        });
    }

  OpenLightboxModal(index) {
    this.Lightbox.openModal(this.images, index);
  };
}

AlbumController.$inject = ['FacebookGraph', 'Lightbox', '$state', '$stateParams'];
