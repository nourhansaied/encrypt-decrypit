jQuery(function($) {
	"use strict";
	// Author Code Here

	var owlPricing;
	var ratio = 2;

	// Window Load
	$(window).load(function() {
		// Preloader
		$('.intro-tables, .parallax, header').css('opacity', '0');
		$('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.preloader').hide();
			$('.parallax, header').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
			});
		});

		// Header Init
		if ($(window).height() > $(window).width()) {
			var ratio = $('.parallax').width() / $('.parallax').height();
			$('.parallax img').css('height', ($(window).height()) + 'px');
			$('.parallax img').css('width', $('.parallax').height() * ratio + 'px');
		}

		$('header').height($(window).height() + 80);
		$('section .cut').each(function() {
			if ($(this).hasClass('cut-top'))
				$(this).css('border-right-width', $(this).parent().width() + "px");
			else if ($(this).hasClass('cut-bottom'))
				$(this).css('border-left-width', $(this).parent().width() + "px");
		});

		// Sliders Init
		$('.owl-schedule').owlCarousel({
			singleItem: true,
			pagination: true
		});
		$('.owl-testimonials').owlCarousel({
			singleItem: true,
			pagination: true
		});
		$('.owl-twitter').owlCarousel({
			singleItem: true,
			pagination: true
		});

		// Navbar Init
		$('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position', 'fixed').css('top', '0').css('margin-top', '0').removeClass('original');
		$('.mobile-nav ul').html($('nav .navbar-nav').html());
		$('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data("active-url"));

		// Typing Intro Init
		$(".typed").typewriter({
			speed: 60
		});

		// Popup Form Init
		var i = 0;
		var interval = 0.15;
		$('.popup-form .dropdown-menu li').each(function() {
			$(this).css('animation-delay', i + "s");
			i += interval;
		});
		$('.popup-form .dropdown-menu li a').click(function(event) {
			event.preventDefault();
			$(this).parent().parent().prev('button').html($(this).html());
		});

		// Onepage Nav
		$('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 400,
			filter: ':not(.btn)'
		});
	});
	// Window Scroll
	function onScroll() {
		if ($(window).scrollTop() > 50) {
			$('nav.original').css('opacity', '0');
			$('nav.navbar-fixed-top').css('opacity', '1');
		} else {
			$('nav.original').css('opacity', '1');
			$('nav.navbar-fixed-top').css('opacity', '0');
		}
	}

	window.addEventListener('scroll', onScroll, false);

	// Window Resize
	$(window).resize(function() {
		$('header').height($(window).height());
	});

	// Pricing Box Click Event
	$('.pricing .box-main').click(function() {
		$('.pricing .box-main').removeClass('active');
		$('.pricing .box-second').removeClass('active');
		$(this).addClass('active');
		$(this).next($('.box-second')).addClass('active');
		$('#pricing').css("background-image", "url(" + $(this).data('img') + ")");
		$('#pricing').css("background-size", "cover");
	});

	// Mobile Nav
	$('body').on('click', 'nav .navbar-toggle', function() {
		event.stopPropagation();
		$('.mobile-nav').addClass('active');
	});

	$('body').on('click', '.mobile-nav a', function(event) {
		$('.mobile-nav').removeClass('active');
		if(!this.hash) return;
		event.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			event.stopPropagation();
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('body').on('click', '.mobile-nav a.close-link', function(event) {
		$('.mobile-nav').removeClass('active');
		event.preventDefault();
	});

	$('body').on('click', 'nav.original .navbar-nav a:not([data-toggle])', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			event.stopPropagation();
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	function centerModal() {
		$(this).css('display', 'block');
		var $dialog = $(this).find(".modal-dialog"),
			offset = ($(window).height() - $dialog.height()) / 2,
			bottomMargin = parseInt($dialog.css('marginBottom'), 10);

		// Make sure you don't hide the top part of the modal w/ a negative margin
		// if it's longer than the screen height, and keep the margin equal to 
		// the bottom margin of the modal
		if (offset < bottomMargin) offset = bottomMargin;
		$dialog.css("margin-top", offset);
	}

	$('.modal').on('show.bs.modal', centerModal);

	$('.modal-popup .close-link').click(function(event){
		event.preventDefault();
		$('#modal1').modal('hide');
	});

	$(window).on("resize", function() {
		$('.modal:visible').each(centerModal);
	});
	
});
/* 
 * Caesar cipher
 * 
 * Copyright (c) 2017 Project Nayuki
 * All rights reserved. Contact Nayuki for licensing.
 * https://www.nayuki.io/page/caesar-cipher-javascript
 */

"use strict";

const englishFreq={
    'a': 8.12,
    'b':1.49,
    'c':2.91,
    'd':4.32,
    'e':12.02,
    'f':2.3,
    'g':2.03,
    'h':5.92,
    'i':7.31,
    'j':0.1,
    'k':0.69,
    'l':3.98,
    'm':2.61,
    'n':6.95,
    'o':7.68,
    'p':1.82,
    'q':0.11,
    'r':6.02,
    's':6.28,
    't':9.10,
    'u':2.88,
    'v':1.11,
    'w':2.09,
    'x':0.17,
    'y':2.11,
    'z':0.07
}
/* 
 * Handles the HTML input/output for Caesar cipher encryption/decryption.
 * This is the one and only entry point function called from the HTML code.
 */
function doCrypt(isDecrypt) {
	var shiftText = document.getElementById("shift").value;
	if (!/^-?\d+$/.test(shiftText)) {
		alert("Shift is not an integer");
		return;
	}
	var shift = parseInt(shiftText, 10);
	if (shift < 0 ) {
		alert("Shift is out of range");
		return;
    }else if(shift > 26){
        shift = shift - 26;
    }
	if (isDecrypt)
        shift = (26 - shift) % 26;

    var textElem = document.getElementById("text");
    textElem.value=  textElem.value.replace(/[^A-Z0-9]/ig, "");

    textElem.value = caesarShift(textElem.value, shift);
}


/* 
 * Returns the result of having each alphabetic letter of the given text string shifted forward
 * by the given amount, with wraparound. Case is preserved, and non-letters are unchanged.
 * Examples:
 * - caesarShift("abz",  0) = "abz".
 * - caesarShift("abz",  1) = "bca".
 * - caesarShift("abz", 25) = "zay".
 * - caesarShift("THe 123 !@#$", 13) = "GUr 123 !@#$".
 */
function caesarShift(text, shift) {
	return newFunction();

    function newFunction() {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if (65 <= c && c <= 90)
                result += String.fromCharCode((c - 65 + shift) % 26 + 65); // Uppercase
            else if (97 <= c && c <= 122)
                result += String.fromCharCode((c - 97 + shift) % 26 + 97); // Lowercase
            else
                result += text.charAt(i); // Copy
        }
        return result;
    }
}

// calculate frequences 
function getFrequency(string, length) {
    var freq = {};
    for(var prop in englishFreq){
        if(!freq[prop] ){
            freq[prop] = 0;
        }
    }
   
    for (var i=0; i<string.length;i++) {
        var character = string.toLowerCase().charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
        freq[character] = freq[character] / length;
    }
   
    return freq;
};

// function that returns correlation coefficient. 
function correlationCoefficient(x, y,n) 
{ 
	var sum_X = 0, sum_Y = 0, sum_XY = 0; 
    var squareSum_X = 0, squareSum_Y = 0; 
    var xValues = Object.values(x);
    var yValues = Object.values(y)
	for (var i = 0; i < n; i++) 
	{ 

		// sum of elements of array X. 
        sum_X = sum_X + xValues[i]; 

		// sum of elements of array Y. 
        sum_Y = sum_Y + yValues[i]; 
       

	// sum of X[i] * Y[i]. 
		sum_XY = sum_XY + xValues[i] * yValues[i]; 
	// sum of square of array elements. 
		squareSum_X = squareSum_X + xValues[i] * xValues[i]; 
		squareSum_Y = squareSum_Y + yValues[i] * yValues[i]; 
	} 

	// // use formula for calculating correlation coefficient. 
	var corr = (n * sum_XY - sum_X * sum_Y) 
				/ Math.sqrt((n * squareSum_X - sum_X * sum_X) 
					* (n * squareSum_Y - sum_Y * sum_Y)); 
	return corr; 
}

function decrept(){
    var textElem = document.getElementById("textDecrept");
    textElem.value=  textElem.value.replace(/[^A-Z0-9]/ig, "");
    var freq={};
    var R_r_coll ={};
    for(var i =0; i<26; i++){
        var R_r ='';
       freq[i] = getFrequency(caesarShift( textElem.value.toLowerCase() , i), textElem.value.length);
       R_r = correlationCoefficient(englishFreq, freq[i],26);
       R_r_coll[i]= R_r
    }
    var arr = Object.values(R_r_coll);
    let max = Math.max(...arr);
    var indexOfEncrept;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === max) {
            indexOfEncrept = i;
            document.getElementById('decrept_key').innerHTML = 26- indexOfEncrept;
        }
    }
    textElem.value = caesarShift(textElem.value,indexOfEncrept);
}



