app.controller("bsaCtrl", function($scope, $rootScope) {
  $scope.bsaTumorDose = function() {
    return Math.round(tumorDose() * 10) / 10;
  };

  $scope.bsaLiverDose = function() {
    return Math.round(liverDose() * 10) / 10;
  };

  $scope.bsaLungDose = function() {
    return Math.round(lungDose() * 10) / 10;
  };

  $scope.bsaTumorActivity = function() {
    return Math.round(tumorActivity() * 10) / 10;
  };

  $scope.bsaLiverActivity = function() {
    return Math.round(liverActivity() * 10) / 10;
  };

  $scope.bsaLungActivity = function() {
    return Math.round(lungActivity() * 10) / 10;
  };

  $scope.bsaTotalActivity = function() {
    return Math.round(totalActivity() * 10) / 10;
  };

  function totalActivity() {
    if ($rootScope.heightUnits == "inches") {
      height = $rootScope.height * 2.54;
    } else {
      height = $rootScope.height;
    }

    if ($rootScope.weightUnits == "pounds") {
      weight = $rootScope.weight * 0.453592;
    } else {
      weight = $rootScope.weight;
    }

    bsa = 0.20247 * Math.pow((height/100), 0.725) * Math.pow(weight, 0.425);
    totalTumorVolumeInTreatmentArea = $rootScope.totalTumorVolumeInTreatmentArea / 1000;
    totalLiverVolume = $rootScope.totalLiverVolume / 1000;
    totalTreatmentAreaVolume = $rootScope.totalTreatmentAreaVolume / 1000;
    lungVolume = $rootScope.lungVolume / 1000;
    targetTumorVolume = $rootScope.totalTumorVolumeInTreatmentArea / 1000;
    targetLiverVolume = ($rootScope.totalTreatmentAreaVolume / 1000) - ($rootScope.totalTumorVolumeInTreatmentArea / 1000);
    return (bsa - 0.2) * ((targetLiverVolume + targetTumorVolume) / totalLiverVolume) + (targetTumorVolume / totalLiverVolume);
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
