app.controller("partitionCtrl", function($scope, $rootScope) {
  $scope.partitionTumorDose = function() {
    return Math.round(tumorDose() * 10) / 10;
  };

  $scope.partitionLiverDose = function() {
    partitionLiverDose = Math.round(liverDose() * 10) / 10;
    if (partitionLiverDose >= 70) {
      partitionNormal();
      partitionRadSeg();
      bsaDim();
      if ($rootScope.targetDoseMird < 190) {
        mirdDim();
      }
    } else if ($rootScope.partitionLiverDose >= 70) {
      if ($rootScope.targetDoseMird < 190) {
        mirdNormal();
        bsaNormal();
        partitionNormal();
      } else {
        partitionDim();
      }
    }
    if ($rootScope.targetDoseMird != 190 || $rootScope.targetTumorDosePartition != 280) {
      $rootScope.radSeg = false;
      radSegButton(false);
    }

    $rootScope.partitionLiverDose = partitionLiverDose;
    return $rootScope.partitionLiverDose;
  };

  $scope.partitionLungDose = function() {
    return Math.round(lungDose() * 10) / 10;
  }

  $scope.partitionTumorActivity = function() {
    return Math.round(tumorActivity() * 10) / 10;
  }

  $scope.partitionLiverActivity = function() {
    return Math.round(liverActivity() * 10) / 10;
  }

  $scope.partitionLungActivity = function() {
    return Math.round(lungActivity() * 10) / 10;
  }

  $scope.partitionTotalActivity = function() {
    return Math.round(totalActivity() * 10) / 10;
  }

  function totalActivity() {
    totalTumorVolumeInTreatmentArea = $rootScope.totalTumorVolumeInTreatmentArea / 1000;
    totalTreatmentAreaVolume = $rootScope.totalTreatmentAreaVolume / 1000;
    targetTumorVolume = totalTumorVolumeInTreatmentArea
    targetLiverVolume = totalTreatmentAreaVolume - totalTumorVolumeInTreatmentArea;
    return ($rootScope.targetTumorDosePartition * (totalTumorVolumeInTreatmentArea * 1.03) * (totalTumorVolumeInTreatmentArea * $rootScope.tnRatio + targetLiverVolume) / (49.7 * targetTumorVolume * $rootScope.tnRatio *((100 - $rootScope.lungShuntPercent) / 100)));
  }

  function lungActivity() {
    return(totalActivity() * $rootScope.lungShuntPercent) / 100;
  }

  function liverVolumeInTreatedArea() {
    return $rootScope.totalTreatmentAreaVolume - $rootScope.totalTumorVolumeInTreatmentArea;
  }

  function liverActivity() {
    return(totalActivity() - lungActivity()) * (liverVolumeInTreatedArea() / ($rootScope.totalTumorVolumeInTreatmentArea * $rootScope.tnRatio + liverVolumeInTreatedArea()));
  }

  function liverActivity() {
    return(totalActivity() - lungActivity()) * (liverVolumeInTreatedArea() / ($rootScope.totalTumorVolumeInTreatmentArea * $rootScope.tnRatio + liverVolumeInTreatedArea()));
  }

  function tumorActivity() {
    return(totalActivity() - lungActivity()) - liverActivity();
  }

  function tumorDose() {
    return(tumorActivity() * 49.7 / ($rootScope.totalTumorVolumeInTreatmentArea * 1.03)) * 1000;
  }

  function liverDose() {
    return(liverActivity() * 49.7 / (liverVolumeInTreatedArea() * 1.03)) * 1000;
  }

  function lungDose() {
    return(lungActivity() * 49.7 / ($rootScope.lungVolume * 0.3)) * 1000;
  }

})
