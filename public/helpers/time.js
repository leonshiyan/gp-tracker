function convertToLocal(transactionDate){
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let options = {
      timeZone: timeZone,
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      timeZoneName: 'short' 
  };
  let formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(transactionDate);
}

export {
  convertToLocal
}