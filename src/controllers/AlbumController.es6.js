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

    // Fetches the images for the album in the address 
    fetchImages(){
      this.FacebookGraph.images(this.$stateParams.album, 320, (err, images) => {
        if(err){
          console.error(err, "error in facebook graph");
        } else{
          this.images = images;
        }
      });
    }

    // Updats the scope object that represents each image
    hasLiked($index){
      this.FacebookGraph.hasLiked(this.images[$index].id, (err, response) => {
        if(err){
          console.error(err);
        } else {
          this.images[$index].hasLiked = response;
        }
      });
    }

    //This method opens the light box at the index supplied
    OpenLightboxModal(index) {
      this.Lightbox.openModal(this.images, index);
    };

    // Gets called from the view to update facebook on the userers opinion
    like(objectId, $index, liked) {
      if(liked){
        this.FacebookGraph.unLike(objectId, (err, success) => {
          if (success) {
            this.hasLiked($index);
          } else {
            console.error( err );
          }
        });
      } else {
        this.FacebookGraph.like(objectId, (err, success) => {
          if (success) {
            this.hasLiked($index);
          } else {
            console.error( err );
          }
        });
      }
    }
}

AlbumController.$inject = ['FacebookGraph', 'Lightbox', '$state', '$stateParams'];
