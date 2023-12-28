import React, { useEffect, useState } from 'react';


function Table() {
    if (!localStorage.kcal_list) {
      localStorage.kcal_list = "[]";
    }
  
    
  
    function updateRecordList() {
        
    let items = JSON.parse(localStorage.kcal_list);

    
      var recordList = document.getElementById("recordList");
      recordList.innerHTML = "";
  
      items.forEach(function (item) {
        var listItem = document.createElement("li");
  
        var nickText = document.createElement("span");
  
        listItem.appendChild(nickText);
  
        var recordText = document.createElement("span");
        recordText.textContent = item.kcal;
        listItem.appendChild(recordText);
  
        recordList.appendChild(listItem);
      });
    }
  
    useEffect(() => {
      updateRecordList();
      setInterval(updateRecordList, 1);
    }, []);
  
    return (
      <>
        <div id="leaderboard">
          <ul id="recordList"></ul>
        </div>
      </>
    );
  }
  
  export default Table;
  