var app = angular.module("davyrApp", []);

app.run(function($rootScope) {
  $rootScope.parameter = "height";
  $rootScope.parameterValue = 0.0;
  $rootScope.height = 175.0;
  $rootScope.heightUnits = "centimeters";
  $rootScope.weight = 75.0;
  $rootScope.weightUnits = "kilograms";
  $rootScope.totalLiverVolume = 1500.0;
  $rootScope.totalTreatmentAreaVolume = 1000.0;
  $rootScope.totalTumorVolumeInTreatmentArea = 250.0;
  $rootScope.lungShuntPercent = 2.5;
  $rootScope.lungVolume = 3000.0;
  $rootScope.tnRatio = 4.0;
  $rootScope.targetDoseMird = 120.0;
  $rootScope.targetTumorDosePartition = 110.0;
  $rootScope.radSeg = false;
  $rootScope.savedTargetDoseMird = 120.0;
  $rootScope.savedTargetTumorDosePartition = 110.0;
  $rootScope.partitionLiverDose =0.0;
  $rootScope.currentParameter = 1;
  $rootScope.parameterSlider = 175.0;
  $rootScope.justStarted = true;
});
