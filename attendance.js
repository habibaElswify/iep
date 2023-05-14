(function() {
    if (!localStorage.attendance) {
      console.log('Creating attendance records...');
  
      function getRandom() {
        return Math.random() >= 0.5;
      }
  
      var nameColumns = $('.name-col'),
        attendance = {};
  
      nameColumns.each(function() {
        var name = $(this).text();
        attendance[name] = [];
  
        for (var i = 0; i <= 11; i++) {
          attendance[name].push(getRandom());
        }
      });
  
      localStorage.attendance = JSON.stringify(attendance);
    }
  })();
  
  $(function() {
    var attendance = JSON.parse(localStorage.attendance),
      $allMissed = $('.missed-col'),
      $allCheckboxes = $('input[type="checkbox"]');
  
    function countMissing() {
      $allMissed.each(function() {
        var studentRow = $(this).closest('tr'),
          dayChecks = studentRow.find('input[type="checkbox"]'),
          numMissed = dayChecks.filter(':not(:checked)').length;
  
        $(this).text(numMissed);
      });
    }
  
    function addNewAttendanceRow(studentName) {
      var newAttendanceRow = $('<tr class="student"></tr>');
      newAttendanceRow.append('<td class="name-col">' + studentName + '</td>');
  
      for (var i = 0; i < 7; i++) {
        newAttendanceRow.append('<td class="attend-col"><input type="checkbox"></td>');
      }
  
      newAttendanceRow.append('<td class="missed-col">0</td>');
  
      $('tbody').append(newAttendanceRow);
      $allMissed = $('.missed-col');
      $allCheckboxes = $('input[type="checkbox"]');
      $allCheckboxes.on('click', function() {
        countMissing();
        updateAttendance();
      });
    }
  
    $('#enroll-button').on('click', function() {
      var studentName = $('#new-student').val();
      if (studentName.trim() !== '') {
        addNewAttendanceRow(studentName);
        $('#new-student').val('');
      }
    });
  
    function updateAttendance() {
      var newAttendance = {};
  
      $('.student').each(function() {
        var name = $(this).find('.name-col').text(),
          dayChecks = $(this).find('.attend-col input[type="checkbox"]'),
          missedCol = $(this).find('.missed-col');
  
        newAttendance[name] = [];
  
        dayChecks.each(function() {
          newAttendance[name].push($(this).prop('checked'));
        });
  
        var numMissed = dayChecks.filter(':not(:checked)').length;
        missedCol.text(numMissed);
      });
  
      localStorage.attendance = JSON.stringify(newAttendance);
    }
  
    $.each(attendance, function(name, days) {
      var studentRow = $('tr:has(.name-col:contains("' + name + '"))'),
        dayChecks = studentRow.find('.attend-col input[type="checkbox"]');
  
      dayChecks.each(function(i) {
        $(this).prop('checked', days[i]);
      });
    });
  
    $allCheckboxes.on('click', function() {
      countMissing();
      updateAttendance();
    });
  
    countMissing();
  });