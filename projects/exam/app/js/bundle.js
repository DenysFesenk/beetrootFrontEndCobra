(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(function () {
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    $('html, body').animate({
      scrollTop: dn
    }, 500);
  });
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9leGFtL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsQ0FBQyxZQUFVO0FBQ1IsRUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQVMsS0FBVCxFQUFnQjtBQUM1QyxJQUFBLEtBQUssQ0FBQyxjQUFOO0FBRUEsUUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxNQUFiLENBQVQ7QUFBQSxRQUNJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRCxDQUFELENBQU0sTUFBTixHQUFlLEdBRHhCO0FBRUE7Ozs7O0FBSUEsSUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLE9BQWhCLENBQXdCO0FBQUMsTUFBQSxTQUFTLEVBQUU7QUFBWixLQUF4QixFQUF5QyxHQUF6QztBQUNELEdBVkQ7QUFXRCxDQVpGLENBQUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKXtcbiAgICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgXG4gICAgICB2YXIgc2MgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxuICAgICAgICAgIGRuID0gJChzYykub2Zmc2V0KCkudG9wO1xuICAgICAgLypcbiAgICAgICogc2MgLSDQsiDQv9C10YDQtdC80LXQvdC90YPRjiDQt9Cw0L3QvtGB0LjQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDRgtC+0LwsINC6INC60LDQutC+0LzRgyDQsdC70L7QutGDINC90LDQtNC+INC/0LXRgNC10LnRgtC4XG4gICAgICAqIGRuIC0g0L7Qv9GA0LXQtNC10LvRj9C10Lwg0L/QvtC70L7QttC10L3QuNC1INCx0LvQvtC60LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICAqL1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogZG59LCA1MDApO1xuICAgIH0pO1xuICB9KTsiXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OWxlR0Z0TDNOeVl5OXFjeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3p0QlEwRkJMRU5CUVVNc1EwRkJReXhaUVVGVk8wRkJRMUlzUlVGQlFTeERRVUZETEVOQlFVTXNZMEZCUkN4RFFVRkVMRU5CUVd0Q0xFVkJRV3hDTEVOQlFYRkNMRTlCUVhKQ0xFVkJRVGhDTEZWQlFWTXNTMEZCVkN4RlFVRm5RanRCUVVNMVF5eEpRVUZCTEV0QlFVc3NRMEZCUXl4alFVRk9PMEZCUlVFc1VVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVUXNRMEZCUkN4RFFVRlJMRWxCUVZJc1EwRkJZU3hOUVVGaUxFTkJRVlE3UVVGQlFTeFJRVU5KTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSQ3hEUVVGRUxFTkJRVTBzVFVGQlRpeEhRVUZsTEVkQlJIaENPMEZCUlVFN096czdPMEZCU1VFc1NVRkJRU3hEUVVGRExFTkJRVU1zV1VGQlJDeERRVUZFTEVOQlFXZENMRTlCUVdoQ0xFTkJRWGRDTzBGQlFVTXNUVUZCUVN4VFFVRlRMRVZCUVVVN1FVRkJXaXhMUVVGNFFpeEZRVUY1UXl4SFFVRjZRenRCUVVORUxFZEJWa1E3UVVGWFJDeERRVnBHTEVOQlFVUWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlISW9aU3h1TEhRcGUyWjFibU4wYVc5dUlHOG9hU3htS1h0cFppZ2hibHRwWFNsN2FXWW9JV1ZiYVYwcGUzWmhjaUJqUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21VN2FXWW9JV1ltSm1NcGNtVjBkWEp1SUdNb2FTd2hNQ2s3YVdZb2RTbHlaWFIxY200Z2RTaHBMQ0V3S1R0MllYSWdZVDF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMmtyWENJblhDSXBPM1JvY205M0lHRXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeGhmWFpoY2lCd1BXNWJhVjA5ZTJWNGNHOXlkSE02ZTMxOU8yVmJhVjFiTUYwdVkyRnNiQ2h3TG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvY2lsN2RtRnlJRzQ5WlZ0cFhWc3hYVnR5WFR0eVpYUjFjbTRnYnlodWZIeHlLWDBzY0N4d0xtVjRjRzl5ZEhNc2NpeGxMRzRzZENsOWNtVjBkWEp1SUc1YmFWMHVaWGh3YjNKMGMzMW1iM0lvZG1GeUlIVTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaU3hwUFRBN2FUeDBMbXhsYm1kMGFEdHBLeXNwYnloMFcybGRLVHR5WlhSMWNtNGdiMzF5WlhSMWNtNGdjbjBwS0NraUxDSWtLR1oxYm1OMGFXOXVLQ2w3WEc0Z0lDQWdKQ2duWVZ0b2NtVm1YajFjSWlOY0lsMG5LUzV2YmlnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnWlhabGJuUXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNBZ0lGeHVJQ0FnSUNBZ2RtRnlJSE5qSUQwZ0pDaDBhR2x6S1M1aGRIUnlLRndpYUhKbFpsd2lLU3hjYmlBZ0lDQWdJQ0FnSUNCa2JpQTlJQ1FvYzJNcExtOW1abk5sZENncExuUnZjRHRjYmlBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FxSUhOaklDMGcwTElnMEwvUXRkR0EwTFhRdk5DMTBMM1F2ZEdEMFk0ZzBMZlFzTkM5MEw3UmdkQzQwTHdnMExqUXZkR0UwTDdSZ05DODBMRFJodEM0MFk0ZzBMNGcwWUxRdnRDOExDRFF1aURRdXRDdzBMclF2dEM4MFlNZzBMSFF1OUMrMExyUmd5RFF2ZEN3MExUUXZpRFF2OUMxMFlEUXRkQzUwWUxRdUZ4dUlDQWdJQ0FnS2lCa2JpQXRJTkMrMEwvUmdOQzEwTFRRdGRDNzBZL1F0ZEM4SU5DLzBMN1F1OUMrMExiUXRkQzkwTGpRdFNEUXNkQzcwTDdRdXRDd0lOQzkwTEFnMFlIUmd0R0EwTERRdmRDNDBZYlF0Vnh1SUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ1FvSjJoMGJXd3NJR0p2WkhrbktTNWhibWx0WVhSbEtIdHpZM0p2Ykd4VWIzQTZJR1J1ZlN3Z05UQXdLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZTazdJbDE5In0=
