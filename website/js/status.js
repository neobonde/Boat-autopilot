app.controller('statusCtrl', function($scope, $http, dataHolder, $interval, $sce) {

  getDataFromNav = function() {
      $http.get("../savedData/fromNav.json").then(function(response) {
          $scope.cachedData.status = response.data.status
          updateStatusDisplay();
      });
  }


  updateStatusDisplay = function(){
    var html = "";
      $scope.cachedData.status.forEach(function(currentValue){
      html += `
      <div class="panel panel-default">
      	<div class="panel-heading">
      		<h3 class="panel-title">` + currentValue.title + `</h3>
      		</div>
      		<div class="panel-body">`;

          currentValue.items.forEach(function (item){
            html +=  "<strong>"+item.title +"</strong> "+item.data+" " + item.unit+"<br />"
          });

            html +=`
      		</div>
      	</div>
      </div>`
      })
      $scope.statusPanels = $sce.trustAsHtml(html);

  };

  $scope.cachedData = dataHolder;

  getDataFromNav();
  //$interval(getDataFromNav, 1000);

});
