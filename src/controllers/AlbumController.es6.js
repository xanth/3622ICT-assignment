export default class AlbumController {
    constructor(FacebookGraph, $state, $stateParams) {
        this.FacebookGraph  = FacebookGraph;
        this.$state         = $state;
        this.$stateParams   = $stateParams;

        FacebookGraph.images($stateParams.album, 320, (err, images) => {
          if(err){
            console.error(err, "error in facebook graph");
          } else{
            this.images = images;
          }
        });
    }
}

AlbumController.$inject = ['FacebookGraph', '$state', '$stateParams'];
