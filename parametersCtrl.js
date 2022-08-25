app.controller("parametersCtrl", function($scope, $rootScope) {

  $scope.setHeightUnits = function(value) {
    $scope.heightUnits = value;
    if ($rootScope.heightUnits != "inches") {
      $rootScope.height = Math.round(($rootScope.height / 2.54) * 10) / 10;
    } else {
      $rootScope.height = Math.round(($rootScope.height * 2.54) * 10) / 10;
    }
    $rootScope.heightUnits = value;
    $scope.height = $rootScope.height;
    sliderHeight();
  }

  $scope.setWeightUnits = function(value) {
    $scope.weightUnits = value;
    if ($rootScope.weightUnits != "pounds") {
      $rootScope.weight = Math.round(($rootScope.weight / 0.453592) * 10) / 10;
    } else {
      $rootScope.weight = Math.round(($rootScope.weight * 0.453592) * 10) / 10;
    }
    $rootScope.weightUnits = value;
    $scope.weight = $rootScope.weight;
    sliderWeight();
  }

  $scope.radSeg = function() {
    if ($rootScope.radSeg == false) {
      $rootScope.radSeg = true;
      $rootScope.savedTargetDoseMird = $rootScope.targetDoseMird;
      $rootScope.savedTargetTumorDosePartition = $rootScope.targetTumorDosePartition;
      $rootScope.targetDoseMird = 190.0;
      $rootScope.targetTumorDosePartition = 280.0;
      $scope.targetDoseMird = 190.0;
      $scope.targetTumorDosePartitionButton = 280.0;
      bsaDim();
      mirdNormal();
      mirdRadSeg();
      partitionNormal();
      partitionRadSeg();
      radSegButton(true);
    } else {
      $rootScope.radSeg = false;
      $rootScope.targetDoseMird = $rootScope.savedTargetDoseMird;
      $rootScope.targetTumorDosePartition = $rootScope.savedTargetTumorDosePartition;
      $scope.targetDoseMird = $rootScope.savedTargetDoseMird;
      $scope.targetTumorDosePartition = $rootScope.savedTargetTumorDosePartition;
      if ($scope.targetDoseMird < 190.0 && $scope.targetTumorDosePartition < 280.0) {
        mirdNormal();
        bsaNormal();
        partitionNormal();
      } else {
        bsaDim();
        mirdDim();
        partition();
        if ($scope.targetDoseMird >= 190.0) {
          mirdNormal();
          mirdRadSeg();
        }
        if ($scope.targetTumorDosePartition >= 280.0) {
          partitionNormal();
          partitionRadSeg();
        }
      }
      radSegButton(false);
    }
  }

  $scope.reset = function() {
    window.location.reload();
  }

  $scope.onParameterSlideChange = function() {
    switch ($rootScope.currentParameter) {
      case 1:
        if ($rootScope.justStarted) {
          $scope.parameterSlider = $rootScope.parameterSlider;
          $scope.height = $scope.parameterSlider;
          sliderHeight();
          $rootScope.justStarted = false;
        }
        $rootScope.height = $scope.parameterSlider;
        $scope.height = $scope.parameterSlider;
        break;

      case 2:
        $rootScope.weight = $scope.parameterSlider;
        $scope.weight = $scope.parameterSlider;
        break;

      case 3:
        $rootScope.totalLiverVolume = $scope.parameterSlider;
        $scope.totalLiverVolume = $scope.parameterSlider;
        if ($scope.parameterSlider < $scope.totalTreatmentAreaVolume) {
          $rootScope.totalTreatmentAreaVolume = $scope.parameterSlider;
          $scope.totalTreatmentAreaVolume = $scope.parameterSlider;
        }
        if ($scope.parameterSlider < $scope.totalTumorVolumeInTreatmentArea) {
          $rootScope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
          $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        }
        break;

      case 4:
        if ($scope.parameterSlider > $scope.totalLiverVolume) {
          $scope.parameterSlider = $scope.totalLiverVolume;
        }
        $rootScope.totalTreatmentAreaVolume = $scope.parameterSlider;
        $scope.totalTreatmentAreaVolume = $scope.parameterSlider;
        if ($scope.parameterSlider < $scope.totalTumorVolumeInTreatmentArea) {
          $rootScope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
          $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        }
        break;

      case 5:
        if ($scope.parameterSlider > $scope.totalTreatmentAreaVolume) {
          $scope.parameterSlider = $scope.totalTreatmentAreaVolume;
        }
        if ($scope.parameterSlider > $scope.totalLiverVolume) {
          $scope.parameterSlider = $scope.totalLiverVolume;
        }
        $rootScope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        break;

      case 6:
        $rootScope.lungShuntPercent = $scope.parameterSlider;
        $scope.lungShuntPercent = $scope.parameterSlider;
        break;

      case 7:
        $rootScope.lungVolume = $scope.parameterSlider;
        $scope.lungVolume = $scope.parameterSlider;
        break;

      case 8:
        $rootScope.tnRatio = $scope.parameterSlider;
        $scope.tnRatio = $scope.parameterSlider;
        break;

      case 9:
        $rootScope.targetDoseMird = $scope.parameterSlider;
        $scope.targetDoseMird = $scope.parameterSlider;
        break;

      case 10:
        $rootScope.targetTumorDosePartition = $scope.parameterSlider;
        $scope.targetTumorDosePartition = $scope.parameterSlider;
        break;

      default:
        break;
    }
  }

  $scope.sliderPlus = function () {
    switch ($rootScope.currentParameter) {
      case 1:
        $scope.parameterSlider += 1.0;
        $rootScope.height = $scope.parameterSlider;
        $scope.height = $scope.parameterSlider;
        break;

      case 2:
        $scope.parameterSlider += 1.0;
        $rootScope.weight = $scope.parameterSlider;
        $scope.weight = $scope.parameterSlider;
        break;

      case 3:
        $scope.parameterSlider += 25.0;
        $rootScope.totalLiverVolume = $scope.parameterSlider;
        $scope.totalLiverVolume = $scope.parameterSlider;
        break;

      case 4:
        $scope.parameterSlider += 25.0;
        if ($scope.parameterSlider > $scope.totalLiverVolume) {
          $scope.parameterSlider = $scope.totalLiverVolume
        }
        $rootScope.totalTreatmentAreaVolume = $scope.parameterSlider;
        $scope.totalTreatmentAreaVolume = $scope.parameterSlider;
        break;

      case 5:
        $scope.parameterSlider += 25.0;
        if ($scope.parameterSlider > $scope.totalTreatmentAreaVolume) {
          $scope.parameterSlider = $scope.totalTreatmentAreaVolume
        }
        $rootScope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        break;

      case 6:
        $scope.parameterSlider += 0.5;
        $rootScope.lungShuntPercent = $scope.parameterSlider;
        $scope.lungShuntPercent = $scope.parameterSlider;
        break;

      case 7:
        $scope.parameterSlider += 25.0;
        $rootScope.lungVolume = $scope.parameterSlider;
        $scope.lungVolume = $scope.parameterSlider;
        break;

      case 8:
        $scope.parameterSlider += 0.1;
        $rootScope.tnRatio = $scope.parameterSlider;
        $scope.tnRatio = $scope.parameterSlider;
        break;

      case 9:
        $scope.parameterSlider += 1.0;
        $rootScope.targetDoseMird = $scope.parameterSlider;
        $scope.targetDoseMird = $scope.parameterSlider;
        break;

      case 10:
        $scope.parameterSlider += 1.0;
        $rootScope.targetTumorDosePartition = $scope.parameterSlider;
        $scope.targetTumorDosePartition = $scope.parameterSlider;
        break;

      default:

    }
  }

  $scope.sliderMinus - function() {
    switch ($rootScope.currentParameter) {
      case 1:
        $scope.parameterSlider -= 1.0;
        $rootScope.height = $scope.parameterSlider;
        $scope.height = $scope.parameterSlider;
        break;

      case 2:
        $scope.parameterSlider -= 1.0;
        $rootScope.weight = $scope.parameterSlider;
        $scope.weight = $scope.parameterSlider;
        break;

      case 3:
        $scope.parameterSlider -= 25.0;
        if ($scope.totalTreatmentAreaVolume > $scope.parameterSlider) {
          $scope.totalTreatmentAreaVolume = $scope.parameterSlider;
        }
        if ($scope.totalTumorVolumeInTreatmentArea > $scope.parameterSlider) {
          $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        }
        $rootScope.totalLiverVolume = $scope.parameterSlider;
        $scope.totalLiverVolume = $scope.parameterSlider;
        break;

      case 4:
        $scope.parameterSlider -= 25.0;
        if ($scope.totalTumorVolumeInTreatmentArea > $scope.parameterSlider) {
          $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        }
        $rootScope.totalTreatmentAreaVolume = $scope.parameterSlider;
        $scope.totalTreatmentAreaVolume = $scope.parameterSlider;
        break;

      case 5:
        $scope.parameterSlider -= 25.0;
        $rootScope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        $scope.totalTumorVolumeInTreatmentArea = $scope.parameterSlider;
        break;

      case 6:
        $scope.parameterSlider -= 0.5;
        $rootScope.lungShuntPercent = $scope.parameterSlider;
        $scope.lungShuntPercent = $scope.parameterSlider;
        break;

      case 7:
        $scope.parameterSlider -= 25.0;
        $rootScope.lungVolume = $scope.parameterSlider;
        $scope.lungVolume = $scope.parameterSlider;
        break;

      case 8:
        $scope.parameterSlider -= 0.1;
        $rootScope.tnRatio = $scope.parameterSlider;
        $scope.tnRatio = $scope.parameterSlider;
        break;

      case 9:
        $scope.parameterSlider -= 1.0;
        $rootScope.targetDoseMird = $scope.parameterSlider;
        $scope.targetDoseMird = $scope.parameterSlider;
        break;

      case 10:
        $scope.parameterSlider -= 1.0;
        $rootScope.targetTumorDosePartition = $scope.parameterSlider;
        $scope.targetTumorDosePartition = $scope.parameterSlider;
        break;

      default:
        break;
    }
  }

  function sliderHeight() {
    if ($rootScope.heightUnits == "centimeters") {
      sliderValues(100, 300, $scope.height);
    } else {
      sliderValues(36, 120, $scope.height);
    }
    $scope.parameterSlider = $scope.height;
  }

  function sliderWeight() {
    if ($rootScope.weightUnits == "kilograms") {
      sliderValues(20, 200, $scope.weight);
    } else {
      sliderValues(44, 440, $scope.weight);
    }
    $scope.parameterSlider = $scope.weight;
  }

  $scope.displayInputForm = function() {
    function loadParameter() {
      switch ($scope.parameter) {
        case "height":
          $scope.height = $scope.parameterValue;
          if ($scope.heightUnits == "centimeters") {
            if ($scope.height < 100) {
              $scope.height = 100.0;
            } else if ($scope.height > 300) {
              $scope.height = 300.0;
            }
          } else {
            if ($scope.height < 36) {
              $scope.height = 36.0;
            } else if ($scope.height > 120){
              $scope.height = 120.0;
            }
          }
          $rootScope.currentParameter = 1;
          sliderHeight();
          $rootScope.height = $scope.height;
          break;

        case "weight":
          $scope.weight = $scope.parameterValue;
          if ($scope.weightUnits == "kilograms") {
            if ($scope.weight < 20) {
              $scope.weight = 20.0;
            } else if ($scope.weight > 200) {
              $scope.weight = 200.0;
            }
          } else {
            if ($scope.weight < 44) {
              $scope.weight = 44.0;
            } else if ($scope.weight > 440){
              $scope.weight = 440.0;
            }
          }
          $rootScope.currentParameter = 2;
          sliderWeight();
          $rootScope.weight = $scope.weight;
          break;

        case "liverVolume":
          $scope.totalLiverVolume = $scope.parameterValue;
          if ($scope.totalLiverVolume < 50) {
            $scope.totalLiverVolume = 50.0
          } else if ($scope.totalLiverVolume > 5000) {
            $scope.totalLiverVolume = 5000.0
          }
          $rootScope.currentParameter = 3;
          sliderValues(50, 5000, $scope.totalLiverVolume);
          $scope.parameterSlider = $scope.totalLiverVolume;
          $rootScope.totalLiverVolume = $scope.totalLiverVolume;
          if ($scope.totalTreatmentAreaVolume > $scope.totalLiverVolume) {
            $scope.totalTreatmentAreaVolume = $scope.totalLiverVolume;
            $rootScope.totalTreatmentAreaVolume = $scope.totalLiverVolume;
          }
          if ($scope.totalTumorVolumeInTreatmentArea > $scope.totalTreatmentAreaVolume) {
            $scope.totalTumorVolumeInTreatmentArea = $scope.totalTreatmentAreaVolume;
            $rootScope.totalTumorVolumeInTreatmentArea = $scope.totalTreatmentAreaVolume;
          }
          break;

        case "treatmentAreaVolume":
          $scope.totalTreatmentAreaVolume = $scope.parameterValue;
          if ($scope.totalTreatmentAreaVolume < 25) {
            $scope.totalTreatmentAreaVolume = 25.0;
          } else if ($scope.totalTreatmentAreaVolume > $scope.totalLiverVolume) {
            $scope.totalTreatmentAreaVolume = $scope.totalLiverVolume;
          }
          $rootScope.currentParameter = 4;
          sliderValues(25, 5000, $scope.totalTreatmentAreaVolume);
          $scope.parameterSlider = $scope.totalTreatmentAreaVolume;
          $rootScope.totalTreatmentAreaVolume = $scope.totalTreatmentAreaVolume;
          if ($rootScope.totalTumorVolumeInTreatmentArea > $rootScope.totalTreatmentAreaVolume) {
            $scope.totalTumorVolumeInTreatmentArea = $rootScope.totalTreatmentAreaVolume
            $rootScope.totalTumorVolumeInTreatmentArea = $scope.totalTreatmentAreaVolume;
          }
          break;

        case "tumorVolumeInTreatmentArea":
          $scope.totalTumorVolumeInTreatmentArea = $scope.parameterValue;
          if ($scope.totalTumorVolumeInTreatmentArea < 25) {
            $scope.totalTumorVolumeInTreatmentArea = 25.0;
          } else if ($scope.totalTumorVolumeInTreatmentArea > $scope.totalTreatmentAreaVolume) {
            $scope.totalTumorVolumeInTreatmentArea = $scope.totalTreatmentAreaVolume;
          }
          $rootScope.currentParameter = 5;
          sliderValues(25, 5000, $scope.totalTumorVolumeInTreatmentArea);
          $scope.parameterSlider = $scope.totalTumorVolumeInTreatmentArea;
          $rootScope.totalTumorVolumeInTreatmentArea = $scope.totalTumorVolumeInTreatmentArea;
          break;

        case "lungShuntPercent":
          $scope.lungShuntPercent = $scope.parameterValue;
          if ($scope.lungShuntPercent < 1) {
            $scope.lungShuntPercent = 1.0;
          } else if ($scope.lungShuntPercent > 100){
            $scope.lungShuntPercent = 100.0;
          }
          $rootScope.currentParameter = 6;
          sliderValues(1, 100, $scope.lungShuntPercent);
          $scope.parameterSlider = $scope.lungShuntPercent;
          $rootScope.lungShuntPercent = $scope.lungShuntPercent;
          break;

        case "lungVolume":
          $scope.lungVolume = $scope.parameterValue;
          if ($scope.lungVolume < 1500) {
            $scope.lungVolume = 1500;
          } else if ($scope.lungVolume > 7500){
            $scope.lungVolume = 7500.0;
          }
          $rootScope.currentParameter = 7;
          sliderValues(1500, 7500, $scope.lungVolume);
          $scope.parameterSlider = $scope.lungVolume;
          $rootScope.lungVolume = $scope.lungVolume;
          break;

        case "tnRatio":
          $scope.tnRatio = $scope.parameterValue;
          if ($scope.tnRatio < 1) {
            $scope.tnRatio = 1.0;
          } else if ($scope.tnRatio > 15){
            $scope.tnRatio = 15.0;
          }
          $rootScope.currentParameter = 8;
          sliderValues(1, 15, $scope.tnRatio);
          $scope.parameterSlider = $scope.tnRatio;
          $rootScope.tnRatio = $scope.tnRatio;
          break;

        case "targetDoseMird":
          $scope.targetDoseMird = $scope.parameterValue;
          if ($scope.targetDoseMird < 25) {
            $scope.targetDoseMird = 25;
          } else if ($scope.targetDoseMird > 400){
            $scope.targetDoseMird = 400.0;
          }
          if ($scope.targetDoseMird > 190) {
            mirdNormal();
            mirdRadSeg();
            bsaDim();
            if ($rootScope.partitionLiverDose < 70) {
              partitionDim();
            }
          } else if ($rootScope.targetDoseMird >= 190) {
            if ($rootScope.partitionLiverDose < 70) {
              mirdNormal();
              bsaNormal();
              partitionNormal();
            } else {
              mirdDim();
            }
          }
          $rootScope.currentParameter = 9;
          sliderValues(25, 400, $scope.targetDoseMird);
          $scope.parameterSlider = $scope.targetDoseMird;
          $rootScope.targetDoseMird = $scope.targetDoseMird;
          $rootScope.radSeg = false;
          radSegButton(false);
          break;

        case "targetTumorDosePartition":
          $scope.targetTumorDosePartition = $scope.parameterValue;
          if ($scope.targetTumorDosePartition < 25) {
            $scope.targetTumorDosePartition = 25;
          } else if ($scope.targetTumorDosePartition > 1000){
            $scope.targetTumorDosePartition = 1000.0;
          }
          $rootScope.currentParameter = 10;
          sliderValues(25, 1000, $scope.targetTumorDosePartition);
          $scope.parameterSlider = $scope.targetTumorDosePartition;
          $rootScope.targetTumorDosePartition = $scope.targetTumorDosePartition;
          break;

        default:
          break;

      }
    }
    let text = "Please enter a valid number:";
    let number = prompt(text);
    let resposeInvalid = true;

    while (resposeInvalid) {
      if (number == null || number == "") {
        resposeInvalid = false;
      } else {
        value = parseFloat(number);
        if (Number.isNaN(value)) {
          text = "Number entered is invalid, please enter a valid number:";
          number = prompt(text, number);
        } else {
          responseInvalid = false;
          $scope.parameterValue = value;
          loadParameter();
        }
      }
    }
  }

  $scope.setSlider = function () {

    function highlightButton(button) {
      buttonId = document.getElementById(button);
      buttonId.style.color = "white";
      buttonId.style.backgroundColor = "#0086c3";
    }

    function resetLastButton() {
      switch ($rootScope.currentParameter) {
        case 1:
          buttonId = 'heightButton'
          break;

        case 2:
          buttonId = 'weightButton'
          break;

        case 3:
          buttonId = 'liverVolumeButton'
          break;

        case 4:
          buttonId = 'treatmentAreaVolumeButton'
          break;

        case 5:
          buttonId = 'tumorVolumeInTreatmentAreaButton'
          break;

        case 6:
          buttonId = 'lungShuntPercentButton'
          break;

        case 7:
          buttonId = 'lungVolumeButton'
          break;

        case 8:
          buttonId = 'tnRatioButton'
          break;

        case 9:
          buttonId = 'targetDoseMirdButton'
          break;

        case 10:
          buttonId = 'targetTumorDosePartitionButton'
          break;

        default:
          break;

      }
      button = document.getElementById(buttonId);
      button.style.color = "rgba(255, 255, 255, 0.481)";
      button.style.backgroundColor = "#404040";
    }

    switch ($scope.parameter) {
      case "height":
        button = "heightButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 1;
        sliderHeight();
        break;

      case "weight":
        button = "weightButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 2;
        sliderWeight();
        break;

      case "liverVolume":
        button = "liverVolumeButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 3;
        sliderValues(50, 5000, $scope.totalLiverVolume);
        $scope.parameterSlider = $scope.totalLiverVolume;
        break;

      case "treatmentAreaVolume":
        button = "treatmentAreaVolumeButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 4;
        sliderValues(25, 5000, $scope.totalTreatmentAreaVolume);
        $scope.parameterSlider = $scope.totalTreatmentAreaVolume;
        break;

      case "tumorVolumeInTreatmentArea":
        button = "tumorVolumeInTreatmentAreaButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 5;
        sliderValues(25, 5000, $scope.totalTumorVolumeInTreatmentArea);
        $scope.parameterSlider = $scope.totalTumorVolumeInTreatmentArea;
        break;

      case "lungShuntPercent":
        button = "lungShuntPercentButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 6;
        sliderValues(1, 100, $scope.lungShuntPercent);
        $scope.parameterSlider = $scope.lungShuntPercent;
        break;

      case "lungVolume":
        button = "lungVolumeButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 7;
        sliderValues(1500, 7500, $scope.lungVolume);
        $scope.parameterSlider = $scope.lungVolume;
        break;

      case "tnRatio":
        button = "tnRatioButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 8;
        sliderValues(1, 15, $scope.tnRatio);
        $scope.parameterSlider = $scope.tnRatio;
        break;

      case "targetDoseMird":
        button = "targetDoseMirdButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 9;
        sliderValues(25, 400, $scope.targetDoseMird);
        $scope.parameterSlider = $scope.targetDoseMird;
        break;

      case "targetTumorDosePartition":
        button = "targetTumorDosePartitionButton";
        highlightButton(button);
        resetLastButton();
        $rootScope.currentParameter = 10;
        sliderValues(25, 1000, $scope.targetTumorDosePartition);
        $scope.parameterSlider = $scope.targetTumorDosePartition;
        break;

      default:
        break;

    }
  }
});
