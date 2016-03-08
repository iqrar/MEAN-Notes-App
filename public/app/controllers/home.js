angular.module('CtrlHome', [])
  .controller('Home', function($http, $scope, $location) {
      /* get all notes */
      var home = [];
       $http.get('/notes').success(function(data) {
           $scope.notes = data;
           $scope.home = [];
           $scope.office = [];
           $scope.other = [];
           $scope.notes.forEach(function(note){
              if(note.type === "Home"){
                 $scope.home.push(note);
              }else if(note.type === "Office") {
                 $scope.office.push(note);
              }else if(note.type === "Other") {
                 $scope.other.push(note);
              }
        
          });
             
        }).error(function() {
            console.log('error');
        });

       /* accordion animation */
        function toggleChevron(e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i")
                .toggleClass('rotate-icon');
            $('.panel-body.animated').toggleClass('zoomIn zoomOut');
        }

        $('#accordion').on('hide.bs.collapse', toggleChevron);
        $('#accordion').on('show.bs.collapse', toggleChevron);

        /* remove desire note */
        $scope.removeNote = function(id) {
                console.log(id);
             if (confirm('Are you sure to delete')) {
                $http.delete('/notes/' + id).success(function(data) {

                   $http.get('/notes').success(function(data) {
                           $scope.notes = data;
                           $scope.home = [];
                           $scope.office = [];
                           $scope.other = [];
                           $scope.notes.forEach(function(note){
                              if(note.type === "Home"){
                                 $scope.home.push(note);
                              }else if(note.type === "Office") {
                                 $scope.office.push(note);
                              }else if(note.type === "Other") {
                                 $scope.other.push(note);
                              }
                        
                          });
                    });
                }).error(function(data) {
                    console.log(data.error);
             });
          }
            
        };

        /* edit note */
        $scope.editNote = function(id) {
            console.log(id);
            $http.get('/notes/' + id).success(function(data) {
                $scope.note = data;
            }).error(function() {
                console.log('error');
            });

        };

        /* save after editing */
        $scope.saveEditNote = function(id, note) {
            console.log(id);
            $http.put('/notes/' + id, note).success(function(data) {
                $scope.note = data;
                $http.get('/notes').success(function(data) {
                           $scope.notes = data;
                           $scope.home = [];
                           $scope.office = [];
                           $scope.other = [];
                           $scope.notes.forEach(function(note){
                              if(note.type === "Home"){
                                 $scope.home.push(note);
                              }else if(note.type === "Office") {
                                 $scope.office.push(note);
                              }else if(note.type === "Other") {
                                 $scope.other.push(note);
                              }
                        
                           });
            });
              
            }).error(function() {
                console.log('error');
            });
        };

});



