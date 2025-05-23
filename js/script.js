$( function() {
    $( "#Check-In" ).datepicker();
    $( "#Check-Out" ).datepicker();

    $('.level-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
} );

let checkBtn = $(".form-dv .form-group button");
console.log(checkBtn);

checkBtn.on("click", function(e) {
    e.preventDefault();
    alert("We are searching for your adventure... 🚀");
})