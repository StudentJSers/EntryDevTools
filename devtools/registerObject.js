console.log('Content-Script is working');
document.body.setAttribute('entrydevtools',JSON.stringify({"Variables":Entry.variableContainer.variables_,"Lists":Entry.variableContainer.lists_}));
