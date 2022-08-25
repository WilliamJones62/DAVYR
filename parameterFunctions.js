function radSegButton(turnOn) {
  radSeg = document.getElementById('radSeg');
  if (turnOn) {
    radSeg.style.backgroundColor = "#2196f3";
    radSeg.style.color = "white";
  } else {
    radSeg.style.backgroundColor = "#404040";
    radSeg.style.color = "90a4ae";
  }
}

function mirdRadSeg() {
  mirdTotalActivity = document.getElementById('mirdTotalActivity');
  mirdTotalDose = document.getElementById('mirdTotalDose');
  mirdTotalActivity.style.backgroundColor = "red";
  mirdTotalActivity.style.color = "white";
  mirdTotalDose.style.backgroundColor = "red";
  mirdTotalDose.style.color = "white";
  mirdTotalDose.innerHTML = "MIRD >= 190";
}

function partitionRadSeg() {
  partitionTotalActivity = document.getElementById('partitionTotalActivity');
  partitionTotalDose = document.getElementById('partitionTotalDose');
  partitionTotalActivity.style.backgroundColor = "orange";
  partitionTotalActivity.style.color = "white";
  partitionTotalDose.style.backgroundColor = "orange";
  partitionTotalDose.style.color = "white";
  partitionTotalDose.innerHTML = "Liver >= 70.0";
}

function summaryNormal(summaryTable, summaryTableColor, summaryTh, summaryDose, summaryActivity) {
  summaryTableTds = summaryTable.getElementsByTagName("td");
  summaryTableThs = summaryTable.getElementsByTagName("th");
  summaryTable.style.color = summaryTableColor;
  for (var i = 0; i < summaryTableTds.length; i++) {
    summaryTableTds[i].style.color = "#90a4ae";
    summaryTableTds[i].style.backgroundColor = "#202020";
  }
  for (var i = 0; i < summaryTableThs.length; i++) {
    summaryTableThs[i].style.color = "#90a4ae";
    summaryTableThs[i].style.backgroundColor = "#202020";
  }
  summaryActivity.style.color = summaryTableColor;
  summaryActivity.style.backgroundColor = "#202020";
  summaryDose.style.backgroundColor = "black";
  summaryDose.style.color = "black";
  summaryTh.style.color = summaryTableColor;
}

function mirdNormal() {
  mirdTable = document.getElementById('mirdTable');
  mirdTable.style.color = "red";
  mirdActivity = document.getElementById('mirdTotalActivity');
  mirdDose = document.getElementById('mirdTotalDose');
  mirdTh = document.getElementById('mirdTh');
  summaryNormal(mirdTable, "red", mirdTh, mirdDose, mirdActivity);
}

function bsaNormal() {
  bsaTable = document.getElementById('bsaTable');
  bsaTable.style.color = "#00ff00";
  bsaActivity = document.getElementById('bsaTotalActivity');
  bsaDose = document.getElementById('bsaTotalDose');
  bsaTh = document.getElementById('bsaTh');
  summaryNormal(bsaTable, "#00ff00", bsaTh, bsaDose, bsaActivity);
}

function partitionNormal() {
  partitionTable = document.getElementById('partitionTable');
  partitionTable.style.color = "orange";
  partitionActivity = document.getElementById('partitionTotalActivity');
  partitionDose = document.getElementById('partitionTotalDose');
  partitionTh = document.getElementById('partitionTh');
  summaryNormal(partitionTable, "orange", partitionTh, partitionDose, partitionActivity);
}

function summaryDim(summaryTable) {
  summaryTableTds = summaryTable.getElementsByTagName("td");
  summaryTableThs = summaryTable.getElementsByTagName("th");
  summaryTable.style.color = "black";
  for (var i = 0; i < summaryTableTds.length; i++) {
    summaryTableTds[i].style.color = "black";
    summaryTableTds[i].style.backgroundColor = "black";
  }
  for (var i = 0; i < summaryTableThs.length; i++) {
    summaryTableThs[i].style.color = "black";
    summaryTableThs[i].style.backgroundColor = "black";
  }
}

function mirdDim() {
  mirdTable = document.getElementById("mirdTable");
  summaryDim(mirdTable);
}

function bsaDim() {
  mirdTable = document.getElementById("bsaTable");
  summaryDim(bsaTable);
}

function partitionDim() {
  partitionTable = document.getElementById("partitionTable");
  summaryDim(partitionTable);
}

function sliderValues(minimum, maximum, value) {
  parameterSlide = document.getElementById("parameterSlide");
  parameterSlide.max = maximum;
  parameterSlide.min = minimum;
  parameterSlide.value = value;
}
