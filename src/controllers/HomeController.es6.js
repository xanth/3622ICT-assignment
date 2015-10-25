export default class HomeController {
    constructor(FacebookGraph, $state) {
        this.FacebookGraph  = FacebookGraph;
        this.$state         = $state;

        FacebookGraph.albums((err, albums) => {
          if(err){
            console.error(err, "error in facebook graph");
          } else{
            this.albums = albums;
          }
        });
    }
}

HomeController.$inject = ['FacebookGraph', '$state'];
