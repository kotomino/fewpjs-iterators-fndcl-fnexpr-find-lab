function superbowlWin(record) {
  let winRecord = record.find( function(obj) { return obj.result === "W" });
  if(winRecord) {
    return winRecord.year;
  }
}
