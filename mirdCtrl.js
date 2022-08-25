app.controller("mirdCtrl", function($scope, $rootScope) {
  $scope.mirdTumorDose = function() {
    return Math.round(tumorDose() * 10) / 10;
  };

  $scope.mirdLiverDose = function() {
    return Math.round(liverDose() * 10) / 10;
  };

  $scope.mirdLungDose = function() {
    return Math.round(lungDose() * 10) / 10;
  };

  $scope.mirdTumorActivity = function() {
    return Math.round(tumorActivity() * 10) / 10;
  };

  $scope.mirdLiverActivity = function() {
    return Math.round(liverActivity() * 10) / 10;
  };

  $scope.mirdLungActivity = function() {
    return Math.round(lungActivity() * 10) / 10;
  };

  $scope.mirdTotalActivity = function() {
    return Math.round(totalActivity() * 10) / 10;
  };

  function totalActivity() {
    return ($rootScope.targetDoseMird * ($rootScope.totalTreatmentAreaVolume * 1.03) / 49.7) / 1000;
  }

  function lungActivity() {
    return (totalActivity() * $rootScope.lungShuntPercent) / 100;
  }

  function liverVolumeInTreatedArea() {
    return $rootScope.totalTreatmentAreaVolume - $rootScope.totalTumorVolumeInTreatmentArea;
  }

  function liverActivity() {
    return (totalActivity() - lungActivity()) * (liverVolumeInTreatedArea() / ($rootScope.totalTumorVolumeInTreatmentArea * $rootScope.tnRatio + liverVolumeInTreatedArea()));
  }

  function tumorActivity() {
    return (totalActivity() - lungActivity()) - liverActivity();
  }

  function tumorDose() {
    return(tumorActivity() * 49.7 / ($rootScope.totalTumorVolumeInTreatmentArea * 1.03)) * 1000;
  }

  function liverDose() {
    return (liverActivity() * 49.7 / (liverVolumeInTreatedArea() * 1.03)) * 1000;
  }

  function lungDose() {
    return (lungActivity() * 49.7 / ($rootScope.lungVolume * 0.3)) * 1000;
  }

});
